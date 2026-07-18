"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


import AddUserModal from "@/modules/admin/users/components/AddUserModal";
import AddRoleModal from "@/modules/admin/roles/components/AddRoleModal";

import { userService } from "@/services/user.service";
import { roleService } from "@/services/role.service";
import { permissionService } from "@/services/permission.service";

import Image from "next/image";

export default function DashboardPage() {
  const router = useRouter();

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRoles, setTotalRoles] = useState(0);
  const [totalPermissions, setTotalPermissions] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  const [selectedCard, setSelectedCard] = useState("");

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

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div
          onClick={() => {
            setSelectedCard("users");
            router.push("/admin/users");
          }}
          className={`bg-white border rounded-xl p-5 flex items-center gap-4 h-[120px] cursor-pointer transition-all ${selectedCard === "users"
            ? "border-[#071B3B]"
            : "border-[#E5E7EB]"
            }`}
        >
          <div className="w-[60px] h-[60px] rounded-xl bg-[#EEF3FB] flex items-center justify-center">
            <Image
              src="/icons/users.png"
              alt="Users"
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="text-[15px] text-[#6B7280]">
              Total Users
            </p>

            <h3 className="text-[32px] font-bold text-[#071B3B]">
              {String(totalUsers).padStart(2, "0")}
            </h3>

            <p className="text-[12px] text-[#9CA3AF]">
              All registered users
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            setSelectedCard("roles");
            router.push("/admin/roles");
          }}
          className={`bg-white border rounded-xl p-5 flex items-center gap-4 h-[120px] cursor-pointer transition-all ${selectedCard === "roles"
            ? "border-[#071B3B]"
            : "border-[#E5E7EB]"
            }`}
        >
          <div className="w-[60px] h-[60px] rounded-xl bg-[#EEF3FB] flex items-center justify-center">
            <Image
              src="/icons/briefcase.png"
              alt="Briefcase"
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="text-[15px] text-[#6B7280]">
              Total Roles
            </p>

            <h3 className="text-[32px] font-bold text-[#071B3B]">
              {String(totalRoles).padStart(2, "0")}
            </h3>

            <p className="text-[12px] text-[#9CA3AF]">
              System roles
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            setSelectedCard("permissions");
            router.push("/admin/permissions");
          }}
          className={`bg-white border rounded-xl p-5 flex items-center gap-4 h-[120px] cursor-pointer transition-all ${selectedCard === "permissions"
            ? "border-[#071B3B]"
            : "border-[#E5E7EB]"
            }`}
        >
          <div className="w-[60px] h-[60px] rounded-xl bg-[#EEF3FB] flex items-center justify-center">
            <Image
              src="/icons/user-plus.png"
              alt="Requests"
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="text-[15px] text-[#6B7280]">
              Permissions
            </p>

            <h3 className="text-[32px] font-bold text-[#071B3B]">
              {String(totalPermissions).padStart(2, "0")}
            </h3>

            <p className="text-[12px] text-[#9CA3AF]">
              All permissions
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            setSelectedCard("active");
            router.push("/admin/users");
          }}
          className={`bg-white border rounded-xl p-5 flex items-center gap-4 h-[120px] cursor-pointer transition-all ${selectedCard === "active"
            ? "border-[#071B3B]"
            : "border-[#E5E7EB]"
            }`}
        >
          <div className="w-[60px] h-[60px] rounded-xl bg-[#EEF3FB] flex items-center justify-center">
            <Image
              src="/icons/user-check.png"
              alt="Active"
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="text-[15px] text-[#6B7280]">
              Active Today
            </p>

            <h3 className="text-[32px] font-bold text-[#071B3B]">
              {String(activeUsers).padStart(2, "0")}
            </h3>

            <p className="text-[12px] text-[#9CA3AF]">
              Logged in users
            </p>
          </div>
        </div>

      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">

        <h2 className="text-xl font-semibold text-[#1E293B] mb-5">
          Quick Actions
        </h2>

        <div className="flex gap-3">

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
              w-[550px]
              hover:bg-[#F8FAFC]
              transition-all
            "
          >
            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/user-plus.png"
                  alt="Add Employee"
                  width={40}
                  height={40}
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

            <Image
              src="/icons/arrow.png"
              alt="Arrow"
              width={18}
              height={18}
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
              w-[550px]
              hover:bg-[#F8FAFC]
              transition-all
            "
          >
            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/briefcase.png"
                  alt="Role"
                  width={40}
                  height={40}
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

            <Image
              src="/icons/arrow.png"
              alt="Arrow"
              width={18}
              height={18}
            />
          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


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
            {Object.entries(roleDistribution).map(
              ([role, count]) => (
                <div
                  key={role}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/user.png"
                      alt="User"
                      width={18}
                      height={18}
                    />

                    <span className="text-sm font-medium">
                      {role}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-[120px] h-[6px] bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#071B3B]"
                        style={{
                          width: `${Math.min(
                            Number(count) * 25,
                            100
                          )}%`,
                        }}
                      />
                    </div>

                    <span className="text-sm text-[#64748B] min-w-[70px] text-right">
                      {String(count).padStart(2, "0")}{" "}
                      {count === 1
                        ? "User"
                        : "Users"}
                    </span>
                  </div>
                </div>
              )
            )}

          </div>

        </div>


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

            {permissionOverview.map((role) => (
              <div
                key={role.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/user.png"
                    alt="User"
                    width={18}
                    height={18}
                  />

                  <span>{role.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {role.count}{" "}
                    {role.count === 1
                      ? "Permission"
                      : "Permissions"}
                  </span>

                  <Image
                    src="/icons/chevron-right.png"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            ))}

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