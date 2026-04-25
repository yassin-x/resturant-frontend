import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/types/user";
import { create } from "zustand";
import { authService } from "./services/auth.service";
import { Role } from "@/constants/enums";

interface AuthState {
  // state
  user: User | null;
  loading: boolean;
  isAuth: boolean;

  // actions
  profile: () => void;
  login: (credentials: LoginRequest) => Promise<AuthResponse>;
  register: (data: RegisterRequest) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
  signOutAll: () => Promise<void>;
  isUser: () => boolean;
  isClient: () => boolean;
  isStaff: () => boolean;
  isOwner: () => boolean;
}

const initializeAuthState = () => {
  const user = authService.getUserFromLocalStorage();
  return {
    user: null,
    loading: false,
    isAuth: Boolean(user),
  };
};

export const useAuthStore = create<AuthState>()((set, get) => ({
  ...initializeAuthState(),

  profile: async () => {
    set({ loading: true });
    try {
      const res = await authService.profile();
      console.log("Profile response:", res);
      localStorage.setItem("user", JSON.stringify(res.data?.user));
      set({ user: res.data?.user, isAuth: true, loading: false });
      return res;
    } catch (err) {
      localStorage.removeItem("user");
      set({ user: null, isAuth: false, loading: false });
      throw err;
    }
  },

  login: async (credentials) => {
    set({ loading: true });
    try {
      const res = await authService.signIn(credentials);
      console.log("Login response:", res);
      localStorage.setItem("user", JSON.stringify(res.data?.user));
      set({ user: res.data?.user, isAuth: true, loading: false });
      return res;
    } catch (err) {
      localStorage.removeItem("user");
      set({ user: null, isAuth: false, loading: false });
      throw err;
    }
  },

  register: async (data) => {
    set({ loading: true });
    try {
      const res = await authService.signUp(data);
      set({ user: res.data?.user, isAuth: true, loading: false });
      return res;
    } catch (err) {
      set({ user: null, isAuth: false, loading: false });
      throw err;
    }
  },

  signOut: async () => {
    set({ loading: true });
    try {
      await authService.signOut();
      localStorage.removeItem("user");
      set({ user: null, isAuth: false, loading: false });
    } catch (err) {
      set({ loading: false });
      throw err;
    }
  },

  signOutAll: async () => {
    set({ loading: true });
    try {
      await authService.signOutAll();
      localStorage.removeItem("user");
      set({ user: null, isAuth: false, loading: false });
    } catch (err) {
      set({ loading: false });
      throw err;
    }
  },

  isUser: () => {
    const { user } = get();
    return user?.role === Role.USER;
  },

  isClient: () => {
    const { user } = get();
    return user?.role === Role.CLIENT;
  },

  isStaff: () => {
    const { user } = get();
    return user?.role === Role.STAFF || user?.role === Role.OWNER;
  },

  isOwner: () => {
    const { user } = get();
    return user?.role === Role.OWNER;
  },
}));

export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuth = () => useAuthStore((state) => state.isAuth);
export const useLoading = () => useAuthStore((state) => state.loading);
export const useSignin = () => useAuthStore((state) => state.login);
export const useSignup = () => useAuthStore((state) => state.register);
export const useSignOut = () => useAuthStore((state) => state.signOut);
export const useSignOutAll = () => useAuthStore((state) => state.signOutAll);
export const useIsUser = () => useAuthStore((state) => state.isUser());
export const useIsClient = () => useAuthStore((state) => state.isClient());
export const useIsStaff = () => useAuthStore((state) => state.isStaff());
export const useIsOwner = () => useAuthStore((state) => state.isOwner());
export const useLoadUser = () => useAuthStore((state) => state.profile);
