import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  userName: string | null;
  setAuth: (userName: string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn:
    typeof window !== "undefined" ? !!localStorage.getItem("token") : false,
  userName:
    typeof window !== "undefined" ? localStorage.getItem("firstName") : null,
  setAuth: (userName) => set({ isLoggedIn: true, userName }),
  clearAuth: () => set({ isLoggedIn: false, userName: null }),
}));
