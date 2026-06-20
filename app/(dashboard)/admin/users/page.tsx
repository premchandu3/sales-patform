"use client";

import { useState } from "react";

import {
  User,
  initialUsers,
} from "@/mock/users";

import UserStats from "@/modules/admin/users/components/UserStats";
import UserFilters from "@/modules/admin/users/components/UserFilters";
import UserTable from "@/modules/admin/users/components/UserTable";
import AddUserModal from "@/modules/admin/users/components/AddUserModal";
import UserDetailsModal from "@/modules/admin/users/components/UserDetailsModal";

export default function UsersPage() {
  const [users, setUsers] =
    useState<User[]>(initialUsers);

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
      <h1 className="text-5xl font-bold">
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
        onDeleteUser={(user) => {
          const confirmed =
            window.confirm(
              `Delete ${user.name}?`
            );

          if (!confirmed) return;

          setUsers((prev) =>
            prev.filter(
              (u) => u.id !== user.id
            )
          );
        }}
      />

      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => {
          setEditingUser(null);
          setIsAddUserOpen(false);
        }}
        editingUser={editingUser}
        onAddUser={(newUser) => {
          if (editingUser) {
            setUsers((prev) =>
              prev.map((user) =>
                user.id === editingUser.id
                  ? {
                      ...user,
                      ...newUser,
                    }
                  : user
              )
            );
          } else {
            setUsers((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                ...newUser,
              },
            ]);
          }

          setEditingUser(null);
          setIsAddUserOpen(false);
        }}
      />

      <UserDetailsModal
        isOpen={isUserDetailsOpen}
        onClose={() =>
          setIsUserDetailsOpen(false)
        }
        user={selectedUser}
      />
    </div>
  );
}