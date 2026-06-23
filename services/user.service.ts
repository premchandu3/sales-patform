const API_URL = "/api/users";

interface UserData {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Invited";
}

export const userService = {
  async getUsers() {
    const response = await fetch(API_URL);
    return response.json();
  },

  async createUser(data: UserData) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  async updateUser(
    id: string,
    data: UserData
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

  async deleteUser(id: string) {
    const response = await fetch(
      `${API_URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    return response.json();
  },
};