import { api } from "@/lib/axios";
import type { MenuResponse } from "@/types/menu";

export const menuServices = {
  async getMenuItems(): Promise<MenuResponse> {
    const res = await api.get("/menu");

    return res.data;
  },

  async getMenuById(id: string): Promise<MenuResponse> {
    const res = await api.get(`/menu/${id}`);

    return res.data;
  },

  async addMenuItem(data: FormData) {
    const res = await api.post("/menu", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },

  async updateMenuItem(id: string, data: FormData) {
    const res = await api.put(`/menu/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },

  async updateAvailability(id: string) {
    const res = await api.patch(`/menu/${id}`);
    return res.data;
  },
};
