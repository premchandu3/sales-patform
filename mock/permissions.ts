export interface Permission {
  id: number;
  name: string;
  description: string;
  usedIn: string;
  status: "Active" | "Inactive";
}

export const initialPermissions: Permission[] = [
  {
    id: 1,
    name: "Create Lead",
    description: "Can create new leads",
    usedIn: "Lead Generator",
    status: "Active",
  },
  {
    id: 2,
    name: "Edit Lead",
    description: "Can edit existing leads",
    usedIn: "Sales Executive",
    status: "Active",
  },
  {
    id: 3,
    name: "Delete Lead",
    description: "Can delete leads",
    usedIn: "Sales Manager",
    status: "Active",
  },
  {
    id: 4,
    name: "View Reports",
    description: "Can view reports",
    usedIn: "Sales Manager",
    status: "Active",
  },
];