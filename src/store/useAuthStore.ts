
import { create } from "zustand";

interface User {
  id: string;
  email: string;
  password: string;
}

export interface AuthState {
  users: User[];
  currentUser: Omit<User, "password"> | null;
  register: (email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  users: [{ id: "1", email: "demo@example.com", password: "demo123" }],
  currentUser: null,
  register: (email, password) => {
    let success = false;
    set((state) => {
      const userExists = state.users.some((user) => user.email === email);
      if (!userExists) {
        const newUser = { id: String(state.users.length + 1), email, password };
        success = true;
        return {
          users: [...state.users, newUser],
          currentUser: { id: newUser.id, email: newUser.email },
        };
      }
      return state;
    });
    return success;
  },
  login: (email, password) => {
    let success = false;
    set((state) => {
      const user = state.users.find((u) => u.email === email && u.password === password);
      if (user) {
        success = true;
        return { currentUser: { id: user.id, email: user.email } };
      }
      return state;
    });
    return success;
  },
  logout: () => set({ currentUser: null }),
}));
