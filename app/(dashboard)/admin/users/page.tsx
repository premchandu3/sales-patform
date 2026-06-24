"use client";

import { useEffect, useState } from "react";

import { User } from "@/types/user";
import { userService } from "@/services/user.service";

import UserStats from "@/modules/admin/users/components/UserStats";
import UserFilters from "@/modules/admin/users/components/UserFilters";
import UserTable from "@/modules/admin/users/components/UserTable";
import AddUserModal from "@/modules/admin/users/components/AddUserModal";
import UserDetailsModal from "@/modules/admin/users/components/UserDetailsModal";

export default function UsersPage() {
  const [users, setUsers] =
    useState<User[]>([]);

  const [isAddUserOpen, setIsAddUserOpen] =
    useState(false);

  const [
    isUserDetailsOpen,
    setIsUserDetailsOpen,
  ] = useState(false);

  const [selectedUser, setSelectedUser] =
    useState<User | null>(null);

  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("");

  const fetchUsers = async () => {
    try {
      const data =
        await userService.getUsers();

      console.log(
        "USERS API:",
        data
      );

      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error(
          "Invalid API response:",
          data
        );

        setUsers([]);
      }
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) => {
      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        user.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        !statusFilter ||
        user.status === statusFilter;

      const matchesRole =
        !roleFilter ||
        user.role === roleFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesRole
      );
    }
  );

  return (
    <div className="space-y-6">

      <h1 className="text-[42px] font-semibold text-[#111827]">
        Users
      </h1>

      <UserStats users={users} />

      <UserFilters
        search={search}
        status={statusFilter}
        role={roleFilter}
        onSearchChange={setSearch}
        onStatusChange={
          setStatusFilter
        }
        onRoleChange={
          setRoleFilter
        }
        onAddUser={() => {
          setEditingUser(null);
          setIsAddUserOpen(true);
        }}
      />

      <UserTable
        users={filteredUsers}
        onViewDetails={(user) => {
          setSelectedUser(user);
          setIsUserDetailsOpen(true);
        }}
        onEditUser={(user) => {
          setEditingUser(user);
          setIsAddUserOpen(true);
        }}
        onDeleteUser={async (
          user
        ) => {
          const confirmed =
            window.confirm(
              `Delete ${user.name}?`
            );

          if (!confirmed) return;

          try {
            await userService.deleteUser(
              user._id
            );

            await fetchUsers();
          } catch (error) {
            console.error(error);
          }
        }}
      />

      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => {
          setEditingUser(null);
          setIsAddUserOpen(false);
        }}
        editingUser={editingUser}
        onAddUser={async (
          newUser
        ) => {
          try {
            if (editingUser) {
              await userService.updateUser(
                editingUser._id,
                newUser
              );
            } else {
              await userService.createUser(
                newUser
              );
            }

            await fetchUsers();

            setEditingUser(null);
            setIsAddUserOpen(false);
          } catch (error) {
            console.error(error);
          }
        }}
      />

      <UserDetailsModal
        isOpen={isUserDetailsOpen}
        onClose={() =>
          setIsUserDetailsOpen(false)
        }
        user={selectedUser}
        onEdit={(user) => {
          setIsUserDetailsOpen(false);
          setEditingUser(user);
          setIsAddUserOpen(true);
        }}
        onDelete={async (user) => {
          const confirmed =
            window.confirm(
              `Delete ${user.name}?`
            );

          if (!confirmed) return;

          try {
            await userService.deleteUser(
              user._id
            );

            setIsUserDetailsOpen(false);
            setSelectedUser(null);

            await fetchUsers();
          } catch (error) {
            console.error(error);
          }
        }}
      />

    </div>
  );
}