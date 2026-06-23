export interface Permission {
  _id: string;
  name: string;
  description: string;
  roles: string[];
  status: "Active" | "Inactive";
  createdAt?: string;
  updatedAt?: string;
}