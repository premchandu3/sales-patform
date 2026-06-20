"use client";

import { useState } from "react";

import {
  Role,
  initialRoles,
} from "@/mock/roles";

import RoleStats from "@/modules/admin/roles/components/RoleStats";
import RoleFilters from "@/modules/admin/roles/components/RoleFilters";
import RoleTable from "@/modules/admin/roles/components/RoleTable";
import RoleDetailsModal from "@/modules/admin/roles/components/RoleDetailsModal";
import AddRoleModal from "@/modules/admin/roles/components/AddRoleModal";

export default function RolesPage() {
  const [roles, setRoles] =
    useState<Role[]>(initialRoles);

  const [selectedRole, setSelectedRole] =
    useState<Role | null>(null);

  const [editingRole, setEditingRole] =
    useState<Role | null>(null);

  const [
    isRoleDetailsOpen,
    setIsRoleDetailsOpen,
  ] = useState(false);

  const [isAddRoleOpen, setIsAddRoleOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("");

  const filteredRoles = roles.filter(
    (role) => {
      const matchesSearch =
        role.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        !statusFilter ||
        role.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">
        Roles
      </h1>

      <RoleStats roles={roles} />

      <RoleFilters
        search={search}
        status={statusFilter}
        onSearchChange={setSearch}
        onStatusChange={
          setStatusFilter
        }
        onAddRole={() => {
          setEditingRole(null);
          setIsAddRoleOpen(true);
        }}
      />

      <RoleTable
        roles={filteredRoles}
        onViewDetails={(role) => {
          setSelectedRole(role);
          setIsRoleDetailsOpen(true);
        }}
        onEditRole={(role) => {
          setEditingRole(role);
          setIsAddRoleOpen(true);
        }}
        onDeleteRole={(role) => {
          const confirmed =
            window.confirm(
              `Delete ${role.name}?`
            );

          if (!confirmed) return;

          setRoles((prev) =>
            prev.filter(
              (r) => r.id !== role.id
            )
          );
        }}
      />

      <AddRoleModal
        isOpen={isAddRoleOpen}
        onClose={() => {
          setEditingRole(null);
          setIsAddRoleOpen(false);
        }}
        editingRole={editingRole}
        onAddRole={(newRole) => {
          if (editingRole) {
            setRoles((prev) =>
              prev.map((role) =>
                role.id === editingRole.id
                  ? {
                      ...role,
                      ...newRole,
                    }
                  : role
              )
            );
          } else {
            setRoles((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                ...newRole,
              },
            ]);
          }

          setEditingRole(null);
          setIsAddRoleOpen(false);
        }}
      />

      <RoleDetailsModal
        isOpen={isRoleDetailsOpen}
        onClose={() =>
          setIsRoleDetailsOpen(false)
        }
        role={selectedRole}
      />
    </div>
  );
}