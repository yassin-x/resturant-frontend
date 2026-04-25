import type { MenuCategory } from "@/constants/enums";

export type Menu = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;

  category: MenuCategory;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type MenuResponse = {
  success: boolean;
  status: string;
  message: string;
  data?: {
    menu ?: Menu;
    menus ?: Menu[];
  };
};

export type MenuRequest = {
  image: File;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: MenuCategory;
  isAvailable: boolean;
};
