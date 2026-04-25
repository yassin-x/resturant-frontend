import type { Role } from "@/constants/enums";

export type User = {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  password: string;
  phone: string;
  city: string;
  address1: string;
  address2: string;
  orders: unknown;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  success: boolean;
  status: string;
  message: string;
  data?: {
    user?: User;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};
export type RegisterRequest = {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phone: string;
  city: string;
  address1?: string;
  address2?: string;
};
