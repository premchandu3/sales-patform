export interface Role {
  id: number;
  name: string;
  description: string;
  users: number;
  status: "Active" | "Inactive";
}

export const initialRoles: Role[] = [
  {
    id: 1,
    name: "Lead Generator",
    description:
      "Generate and manage leads",
    users: 9,
    status: "Active",
  },
  {
    id: 2,
    name: "Sales Executive",
    description:
      "Handle assigned leads",
    users: 4,
    status: "Active",
  },
  {
    id: 3,
    name: "Sales Manager",
    description:
      "Manage sales team",
    users: 2,
    status: "Active",
  },
];