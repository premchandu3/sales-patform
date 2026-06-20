"use client";

import { useState } from "react";

import {
  Permission,
  initialPermissions,
} from "@/mock/permissions";

import PermissionStats from "@/modules/admin/permissions/components/PermissionStats";
import PermissionFilters from "@/modules/admin/permissions/components/PermissionFilters";
import PermissionTable from "@/modules/admin/permissions/components/PermissionTable";
import PermissionDetailsModal from "@/modules/admin/permissions/components/PermissionDetailsModal";
import AddPermissionModal from "@/modules/admin/permissions/components/AddPermissionModal";

export default function PermissionsPage() {
  const [permissions, setPermissions] =
    useState<Permission[]>(
      initialPermissions
    );

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

        return (
          matchesSearch &&
          matchesStatus
        );
      }
    );

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">
        Permissions
      </h1>

      <PermissionStats
        permissions={permissions}
      />

      <div className="flex justify-between items-center">
        <PermissionFilters
          search={search}
          status={statusFilter}
          onSearchChange={setSearch}
          onStatusChange={
            setStatusFilter
          }
        />

        <button
          onClick={() => {
            setEditingPermission(
              null
            );
            setIsAddOpen(true);
          }}
          className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
        >
          Add Permission
        </button>
      </div>

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
        onDeletePermission={(
          permission
        ) => {
          const confirmed =
            window.confirm(
              `Delete ${permission.name}?`
            );

          if (!confirmed) return;

          setPermissions(
            (prev) =>
              prev.filter(
                (p) =>
                  p.id !==
                  permission.id
              )
          );
        }}
      />

      <PermissionDetailsModal
        isOpen={isDetailsOpen}
        onClose={() =>
          setIsDetailsOpen(false)
        }
        permission={
          selectedPermission
        }
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
        onAddPermission={(
          newPermission
        ) => {
          if (
            editingPermission
          ) {
            setPermissions(
              (prev) =>
                prev.map((p) =>
                  p.id ===
                  editingPermission.id
                    ? {
                        ...p,
                        ...newPermission,
                      }
                    : p
                )
            );
          } else {
            setPermissions(
              (prev) => [
                ...prev,
                {
                  id:
                    prev.length +
                    1,
                  ...newPermission,
                },
              ]
            );
          }

          setEditingPermission(
            null
          );
          setIsAddOpen(false);
        }}
      />
    </div>
  );
}