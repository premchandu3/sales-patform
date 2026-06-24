"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import StatCard from "@/components/ui/StatCard";

import AddUserModal from "@/modules/admin/users/components/AddUserModal";
import AddRoleModal from "@/modules/admin/roles/components/AddRoleModal";

import { userService } from "@/services/user.service";
import { roleService } from "@/services/role.service";
import { permissionService } from "@/services/permission.service";

import {
  ArrowRight,
  Users,
  Briefcase,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRoles, setTotalRoles] = useState(0);
  const [totalPermissions, setTotalPermissions] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  const [roleDistribution, setRoleDistribution] =
    useState<Record<string, number>>({});

  const [permissionOverview, setPermissionOverview] =
    useState<
      {
        name: string;
        count: number;
      }[]
    >([]);

  const [isAddUserOpen, setIsAddUserOpen] =
    useState(false);

  const [isAddRoleOpen, setIsAddRoleOpen] =
    useState(false);

  async function loadDashboard() {
    try {
      const users =
        await userService.getUsers();

      const roles =
        await roleService.getRoles();

      const permissions =
        await permissionService.getPermissions();

      setTotalUsers(users.length);

      setTotalRoles(roles.length);

      setTotalPermissions(
        permissions.length
      );

      const activeUsersCount =
        users.filter(
          (user: {
            status: string;
          }) =>
            user.status === "Active"
        ).length;

      setActiveUsers(
        activeUsersCount
      );

      // User Role Distribution

      const roleCounts =
        users.reduce(
          (
            acc: Record<
              string,
              number
            >,
            user: any
          ) => {
            if (user.role) {
              acc[user.role] =
                (acc[user.role] || 0) +
                1;
            }

            return acc;
          },
          {}
        );

      setRoleDistribution(
        roleCounts
      );

      // Permission Overview

      const permissionData =
        roles.map(
          (role: any) => ({
            name: role.name,
            count:
              role.permissions
                ?.length || 0,
          })
        );

      setPermissionOverview(
        permissionData
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    void loadDashboard();
  }, []);

  return (
    <div className="space-y-6 max-w-[1100px]">

      <h1 className="text-[32px] font-bold text-[#071B3B]">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-3">

        <StatCard
          title="Total Users"
          value={totalUsers}
          subtitle="All active users"
          icon={
            <Users
              size={22}
              className="text-[#071B3B]"
            />
          }
          onClick={() =>
            router.push(
              "/admin/users"
            )
          }
        />

        <StatCard
          title="Total Roles"
          value={totalRoles}
          subtitle="System roles"
          icon={
            <Briefcase
              size={22}
              className="text-[#071B3B]"
            />
          }
          onClick={() =>
            router.push(
              "/admin/roles"
            )
          }
        />

        <StatCard
          title="Permissions"
          value={
            totalPermissions
          }
          subtitle="All permissions"
          icon={
            <ShieldCheck
              size={22}
              className="text-[#071B3B]"
            />
          }
          onClick={() =>
            router.push(
              "/admin/permissions"
            )
          }
        />

        <StatCard
          title="Active Today"
          value={activeUsers}
          subtitle="Logged in users"
          icon={
            <UserCheck
              size={22}
              className="text-[#071B3B]"
            />
          }
          onClick={() =>
            router.push(
              "/admin/users"
            )
          }
        />

      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">

        <h2 className="text-xl font-semibold text-[#1E293B] mb-5">
          Quick Actions
        </h2>

        <div className="flex gap-4">

          <button
            onClick={() =>
              setIsAddUserOpen(
                true
              )
            }
            className="
              flex
              items-center
              justify-between
              border
              border-[#E2E8F0]
              rounded-lg
              px-5
              py-4
              w-[320px]
              hover:bg-[#F8FAFC]
              transition-all
            "
          >
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-[#EEF3FB] flex items-center justify-center">
                <Users
                  size={18}
                  className="text-[#071B3B]"
                />
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-[#1E293B]">
                  Add Employee
                </h3>

                <p className="text-xs text-[#64748B]">
                  Add & invite
                  employee
                </p>
              </div>

            </div>

            <ArrowRight
              size={18}
              className="text-[#64748B]"
            />
          </button>

          <button
            onClick={() =>
              setIsAddRoleOpen(
                true
              )
            }
            className="
              flex
              items-center
              justify-between
              border
              border-[#E2E8F0]
              rounded-lg
              px-5
              py-4
              w-[320px]
              hover:bg-[#F8FAFC]
              transition-all
            "
          >
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-[#EEF3FB] flex items-center justify-center">
                <Briefcase
                  size={18}
                  className="text-[#071B3B]"
                />
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-[#1E293B]">
                  Create Role
                </h3>

                <p className="text-xs text-[#64748B]">
                  Create new role
                </p>
              </div>

            </div>

            <ArrowRight
              size={18}
              className="text-[#64748B]"
            />
          </button>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* User Role Distribution */}

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

          <h3 className="text-xl font-semibold mb-1">
            User Role Distribution
          </h3>

          <p className="text-sm text-slate-500 mb-5">
            Overview of users
            across different
            roles
          </p>

          <div className="space-y-5">

            {Object.entries(
              roleDistribution
            ).map(
              ([
                role,
                count,
              ]) => (
                <div
                  key={role}
                  className="flex justify-between"
                >
                  <span>
                    {role}
                  </span>

                  <span>
                    {count}{" "}
                    {count === 1
                      ? "User"
                      : "Users"}
                  </span>
                </div>
              )
            )}

          </div>

        </div>

        {/* Permission Overview */}

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

          <h3 className="text-xl font-semibold mb-1">
            Permission Overview
          </h3>

          <p className="text-sm text-slate-500 mb-5">
            Summary of
            permissions
            assigned to each
            role
          </p>

          <div className="space-y-5">

            {permissionOverview.map(
              (
                role
              ) => (
                <div
                  key={
                    role.name
                  }
                  className="flex justify-between"
                >
                  <span>
                    {
                      role.name
                    }
                  </span>

                  <span>
                    {
                      role.count
                    }{" "}
                    {role.count ===
                    1
                      ? "Permission"
                      : "Permissions"}
                  </span>
                </div>
              )
            )}

          </div>

        </div>

      </div>

      <AddUserModal
        isOpen={
          isAddUserOpen
        }
        onClose={() =>
          setIsAddUserOpen(
            false
          )
        }
        onAddUser={async (
          data
        ) => {
          await userService.createUser(
            {
              name:
                data.name,
              email:
                data.email,
              role:
                data.role,
              status:
                data.status,
            }
          );

          setIsAddUserOpen(
            false
          );

          await loadDashboard();
        }}
      />

      <AddRoleModal
        isOpen={
          isAddRoleOpen
        }
        onClose={() =>
          setIsAddRoleOpen(
            false
          )
        }
        onAddRole={async (
          data
        ) => {
          await roleService.createRole(
            {
              name:
                data.name,
              description:
                data.description,
              status:
                data.status,
            }
          );

          setIsAddRoleOpen(
            false
          );

          await loadDashboard();
        }}
      />

    </div>
  );
}