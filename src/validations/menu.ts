import { MenuCategory } from "@/constants/enums";
import z from "zod";

export const menuValidation = z.object({
  name: z.string().min(3, { message: "يجب أن يكون اسم الصنف أكثر من 3 أحرف" }),
  description: z
    .string()
    .min(10, { message: "يجب أن يكون وصف الصنف أكثر من 10 أحرف" }),
  price: z
    .number({ message: "يجب أن يكون سعر الصنف صالح" })
    .min(0, { message: "يجب أن يكون سعر الصنف أكبر من أو يساوي 0" }),
  discount: z
    .number({ message: "يجب أن يكون الخصم صالح" })
    .min(0, { message: "يجب أن يكون الخصم أكبر من أو يساوي 0" })
    .max(100, { message: "يجب أن يكون الخصم أقل من أو يساوي 100" }),
  category: z.enum(MenuCategory, { message: "يجب أن يكون التصنيف صالح" }),
  image: z
    .file({ message: "يجب اختيار صورة صالحة" })
    .refine((file) => file instanceof File, {
      message: "يجب أن يكون الملف صورة صالحة",
    }),
});
