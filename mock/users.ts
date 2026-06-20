export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Invited";
}

export const initialUsers: User[] = [
  {
    id: 1,
    name: "Varshini",
    email: "varshini@gmail.com",
    role: "Lead Generator",
    status: "Active",
  },
  {
    id: 2,
    name: "Sujay",
    email: "sujay@gmail.com",
    role: "Sales Executive",
    status: "Active",
  },
  {
    id: 3,
    name: "Ayash",
    email: "ayash@gmail.com",
    role: "Lead Generator",
    status: "Inactive",
  },
];
