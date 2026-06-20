import { initialUsers } from "@/mock/users";

export const userService = {
  getUsers: () => {
    return initialUsers;
  },

  getUserById: (id: number) => {
    return initialUsers.find(
      (user) => user.id === id
    );
  },
};