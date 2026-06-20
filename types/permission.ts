export interface Permission {
  id: string;
  name: string;
  description: string;
  usedInRoles: string[];
  status: "Active" | "Inactive";
}