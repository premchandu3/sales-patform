"use client";

import { useEffect, useState } from "react";

import { Role } from "@/types/role";
import { roleService } from "@/services/role.service";

import RoleStats from "@/modules/admin/roles/components/RoleStats";
import RoleFilters from "@/modules/admin/roles/components/RoleFilters";
import RoleTable from "@/modules/admin/roles/components/RoleTable";
import RoleDetailsModal from "@/modules/admin/roles/components/RoleDetailsModal";
import AddRoleModal from "@/modules/admin/roles/components/AddRoleModal";

export default function RolesPage() {
  const [roles, setRoles] =
    useState<Role[]>([]);

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

  const fetchRoles = async () => {
    try {
      const data =
        await roleService.getRoles();

      setRoles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  const loadRoles = async () => {
    await fetchRoles();
  };

  loadRoles();
}, []);

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
  <div className="max-w-[1180px] mx-auto space-y-6">
  <h1 className="text-[32px] font-semibold text-[#111827]">
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
        onDeleteRole={async (
          role
        ) => {
          const confirmed =
            window.confirm(
              `Delete ${role.name}?`
            );

          if (!confirmed) return;

          await roleService.deleteRole(
            role._id
          );

          fetchRoles();
        }}
      />

      <AddRoleModal
        isOpen={isAddRoleOpen}
        onClose={() => {
          setEditingRole(null);
          setIsAddRoleOpen(false);
        }}
        editingRole={editingRole}
        onAddRole={async (
          newRole
        ) => {
          if (editingRole) {
            await roleService.updateRole(
              editingRole._id,
              newRole
            );
          } else {
            await roleService.createRole(
              newRole
            );
          }

          fetchRoles();

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
  onEdit={(role) => {
    setIsRoleDetailsOpen(false);
    setEditingRole(role);
    setIsAddRoleOpen(true);
  }}
  onDelete={async (role) => {
    const confirmed = window.confirm(
      `Delete ${role.name}?`
    );

    if (!confirmed) return;

    await roleService.deleteRole(
      role._id
    );

    fetchRoles();
    setIsRoleDetailsOpen(false);
  }}
/>
    </div>
  );
}