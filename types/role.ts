export interface Role {
  id: string;
  name: string;
  description: string;
  users: number;
  status: "Active" | "Inactive";
  permissions: string[];
}