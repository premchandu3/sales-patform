export interface Role {
  _id: string;
  name: string;
  description: string;

  users?: number;

  permissions: string[];

  status:
    | "Active"
    | "Inactive";

  createdAt?: string;
  updatedAt?: string;
}