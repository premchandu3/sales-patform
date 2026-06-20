import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import { User } from "@/mock/users";

interface UserTableProps {
  users: User[];
  onViewDetails: (user: User) => void;
  onEditUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
}

export default function UserTable({
  users,
  onViewDetails,
  onEditUser,
  onDeleteUser,
}: UserTableProps) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Role
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="p-8 text-center text-gray-500"
              >
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b"
              >
                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.role}
                </td>

                <td className="p-4">
                  <StatusBadge
                    status={user.status}
                  />
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        onViewDetails(
                          user
                        )
                      }
                    >
                      View Details
                    </Button>

                    <Button
                      className="bg-yellow-500"
                      onClick={() =>
                        onEditUser(user)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="bg-red-600"
                      onClick={() =>
                        onDeleteUser(user)
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}