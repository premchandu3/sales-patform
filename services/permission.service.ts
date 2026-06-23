const API_URL = "/api/permissions";

interface PermissionData {
  name: string;
  description: string;
  roles: string[];
  status: "Active" | "Inactive";
}

export const permissionService = {
  async getPermissions() {
    const response = await fetch(
      API_URL
    );

    return response.json();
  },

  async createPermission(
    data: PermissionData
  ) {
    const response = await fetch(
      API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return response.json();
  },

  async updatePermission(
    id: string,
    data: PermissionData
  ) {
    const response = await fetch(
      `${API_URL}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return response.json();
  },

  async deletePermission(
    id: string
  ) {
    const response = await fetch(
      `${API_URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    return response.json();
  },
};