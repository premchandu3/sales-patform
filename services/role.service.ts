const API_URL = "/api/roles";

interface RoleData {
  name: string;
  description: string;
  status: "Active" | "Inactive";
}

export const roleService = {
  async getRoles() {
    const response =
      await fetch(API_URL);

    return response.json();
  },

  async createRole(
    data: RoleData
  ) {
    const response =
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      });

    return response.json();
  },

  async updateRole(
    id: string,
    data: RoleData
  ) {
    const response =
      await fetch(
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

  async deleteRole(
    id: string
  ) {
    const response =
      await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
        }
      );

    return response.json();
  },
};