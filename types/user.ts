export interface User {
  _id: string;

  name: string;

  email: string;

  contact?: string;

  role: string;

  status:
    | "Active"
    | "Inactive"
    | "Invited";

  permissions?: string[];

  createdAt?: string;

  updatedAt?: string;
}