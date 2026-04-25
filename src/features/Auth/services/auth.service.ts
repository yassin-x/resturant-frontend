import { api } from "@/lib/axios";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/types/user";

export const authService = {
  getUserFromLocalStorage(): User | null {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  },

  async profile(): Promise<AuthResponse> {
    const response = await api.get("/auth/profile");

    return response.data;
  },

  async signUp(data: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/sign-up", data);
    return response.data;
  },

  async signIn(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/sign-in", credentials);
    return response.data;
  },

  async signOut(): Promise<AuthResponse> {
    const response = await api.delete("/auth/sign-out");
    return response.data;
  },

  async signOutAll(): Promise<AuthResponse> {
    const response = await api.delete("/auth/sign-out-all");
    return response.data;
  },
};
