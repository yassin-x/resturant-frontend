import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export interface ApiError {
  message: string;
  response?: {
    status: number;
    data?: {
      message?: string;
      data: unknown;
    };
  };
  config?: {
    url: string;
  };
}

export const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1",
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await api.get("/auth/refresh-token");
        return api(originalRequest);
      } catch (error) {
        console.error("Token refresh failed:", error);
        await api.delete("/auth/sign-out-all");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
