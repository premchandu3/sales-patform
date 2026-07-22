"use client";

import { useEffect, useState } from "react";

import { Permission } from "@/types/permission";
import { permissionService } from "@/services/permission.service";

import PermissionFilters from "@/modules/admin/permissions/components/PermissionFilters";
import PermissionTable from "@/modules/admin/permissions/components/PermissionTable";
import PermissionDetailsModal from "@/modules/admin/permissions/components/PermissionDetailsModal";
import AddPermissionModal from "@/modules/admin/permissions/components/AddPermissionModal";

export default function PermissionsPage() {
  const [permissions, setPermissions] =
    useState<Permission[]>([]);

  const [
    selectedPermission,
    setSelectedPermission,
  ] = useState<Permission | null>(
    null
  );

  const [
    editingPermission,
    setEditingPermission,
  ] = useState<Permission | null>(
    null
  );

  const [
    isDetailsOpen,
    setIsDetailsOpen,
  ] = useState(false);

  const [isAddOpen, setIsAddOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("");

  const fetchPermissions =
    async () => {
      try {
        const data =
          await permissionService.getPermissions();

        setPermissions(data);
      } catch (error) {
        console.error(error);
      }
    };

useEffect(() => {
  const loadPermissions =
    async () => {
      await fetchPermissions();
    };

  loadPermissions();
}, []);

  const filteredPermissions =
    permissions.filter(
      (permission) => {
        const matchesSearch =
          permission.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          !statusFilter ||
          permission.status ===
            statusFilter;

        const matchesRole =
          !roleFilter ||
          permission.roles.includes(
            roleFilter
          );

        return (
          matchesSearch &&
          matchesStatus &&
          matchesRole
        );
      }
    );

  return (
    <div
      className="
        w-full
        max-w-[1180px]
        ml-0
        space-y-6
      "
    >
      <h1
        className="
          text-[32px]
          font-semibold
          text-[#111827]
        "
      >
        Permissions
      </h1>

      <PermissionFilters
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
        onAddPermission={() => {
          setEditingPermission(
            null
          );
          setIsAddOpen(true);
        }}
      />

      <PermissionTable
        permissions={
          filteredPermissions
        }
        onViewDetails={(
          permission
        ) => {
          setSelectedPermission(
            permission
          );
          setIsDetailsOpen(true);
        }}
        onEditPermission={(
          permission
        ) => {
          setEditingPermission(
            permission
          );
          setIsAddOpen(true);
        }}
        onDeletePermission={async (
          permission
        ) => {
          const confirmed =
            window.confirm(
              `Delete ${permission.name}?`
            );

          if (!confirmed) return;

          try {
            await permissionService.deletePermission(
              permission._id
            );

            await fetchPermissions();
          } catch (error) {
            console.error(error);
          }
        }}
      />

<PermissionDetailsModal
  isOpen={isDetailsOpen}
  onClose={() =>
    setIsDetailsOpen(false)
  }
  permission={selectedPermission}
  onEdit={(permission) => {
    setIsDetailsOpen(false);
    setEditingPermission(permission);
    setIsAddOpen(true);
  }}
  onDelete={async (
    permission
  ) => {
    const confirmed =
      window.confirm(
        `Delete ${permission.name}?`
      );

    if (!confirmed) return;

    await permissionService.deletePermission(
      permission._id
    );

    await fetchPermissions();

    setIsDetailsOpen(false);
  }}
/>

      <AddPermissionModal
        isOpen={isAddOpen}
        onClose={() => {
          setEditingPermission(
            null
          );

          setIsAddOpen(false);
        }}
        editingPermission={
          editingPermission
        }
        onAddPermission={async (
          newPermission
        ) => {
          try {
            if (
              editingPermission
            ) {
              await permissionService.updatePermission(
                editingPermission._id,
                newPermission
              );
            } else {
              await permissionService.createPermission(
                newPermission
              );
            }

            await fetchPermissions();

            setEditingPermission(
              null
            );

            setIsAddOpen(false);
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </div>
  );
}


