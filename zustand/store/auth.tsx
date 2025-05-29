// stores/auth.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setCookie, deleteCookie } from "cookies-next";

interface User {
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (email, password) => {
        const res = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include", // Untuk mengirim cookie
        });

        if (!res.ok) return false;
        const data = await res.json();
        console.log(data.data.token,'token setelah login')
        // Simpan token di cookie (untuk middleware)
        setCookie("token", data.data.token);

        // Simpan user di client-side state
        set({ user: { email, token: data.data.token } });
        return true;
      },
      logout: () => {
        deleteCookie("token");
        set({ user: null });
      },
    }),
    { name: "auth-store" }
  )
);
