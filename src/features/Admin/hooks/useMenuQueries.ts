import { menuQueryKeys } from "@/lib/query-keys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { menuServices } from "../services/menu.services";
import { toast } from "sonner";
import type { ApiError } from "@/lib/axios";

export const useGetMenuItems = () => {
  return useQuery({
    queryKey: menuQueryKeys.lists(),
    queryFn: () => menuServices.getMenuItems(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
export const useGetMenuById = (id: string) => {
  return useQuery({
    queryKey: menuQueryKeys.list(id),
    queryFn: () => menuServices.getMenuById(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useAddMenuItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => {
      const res = await menuServices.addMenuItem(data);
      return res;
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.lists() });

      toast.success(response.message || "تم الاضافة بنجاح");
    },
    onError: (error: ApiError) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "حدث خطأ أثناء إنشاء العنصر";
      toast.error(errorMessage);
      console.error("Error creating menu item:", error);
    },
  });
};

export const useUpdateMenuItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: { id: string; data: FormData }) => {
      const res = await menuServices.updateMenuItem(params.id, params.data);
      return res;
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.lists() });

      toast.success(response.message || "تم التحديث بنجاح");
    },
    onError: (error: ApiError) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "حدث خطأ أثناء تحديث العنصر";
      toast.error(errorMessage);
      console.error("Error updating menu item:", error);
    },
  });
};

export const useUpdateMenuItemAvailability = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await menuServices.updateAvailability(id);
      return res;
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.lists() });

      toast.success(response.message || "تم تحديث الحالة بنجاح");
    },
    onError: (error: ApiError) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "حدث خطأ أثناء تحديث الحالة";
      toast.error(errorMessage);
      console.error("Error updating menu item availability:", error);
    },
  });
};
