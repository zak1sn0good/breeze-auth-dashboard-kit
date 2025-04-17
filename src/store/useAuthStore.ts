
import { create } from "zustand";

interface User {
  id: string;
  email: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  register: (email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  users: [{ id: "1", email: "demo@example.com" }],
  currentUser: null,
  register: (email, password) => {
    let success = false;
    set((state) => {
      const userExists = state.users.some((user) => user.email === email);
      if (!userExists) {
        const newUser = { id: String(state.users.length + 1), email };
        success = true;
        return {
          users: [...state.users, newUser],
          currentUser: newUser,
        };
      }
      return state;
    });
    return success;
  },
  login: (email, password) => {
    let success = false;
    set((state) => {
      const user = state.users.find((u) => u.email === email);
      if (user) {
        success = true;
        return { currentUser: user };
      }
      return state;
    });
    return success;
  },
  logout: () => set({ currentUser: null }),
}));
