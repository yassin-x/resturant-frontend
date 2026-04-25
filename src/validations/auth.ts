import z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const signInSchema = z.object({
  email: z.email({ message: "يرجى ادخال بريد الكتروني صالح" }),
  password: z
    .string()
    .min(6, { message: "يجب أن تكون كلمة المرور أكثر من 6 أحرف" }),
});

export const signUpSchema = z
  .object({
    email: z.email({ message: "يرجى ادخال بريد الكتروني صالح" }),
    fullName: z
      .string()
      .min(3, { message: "يجب أن يكون الاسم أكثر من 3 أحرف" }),
    password: z
      .string()
      .min(6, { message: "يجب أن تكون كلمة المرور أكثر من 6 أحرف" }),
    confirmPassword: z
      .string()
      .min(6, { message: "يجب أن تكون كلمة المرور أكثر من 6 أحرف" }),
    phone: z
      .string()
      .min(10, { message: "يجب ان يكون رقم الهاتف صالح" })
      .max(10, { message: "يجب ان يكون رقم الهاتف صالح" })
      .refine((phone) => isValidPhoneNumber(phone, "EG"), {
        message: "يجب ان يكون رقم الهاتف صالح",
      }),
    city: z.string().min(3, { message: "يجب ان يكون المدينة صالحة" }),
    address1: z.string().min(5, { message: "يجب ان يكون العنوان صالح" }),
    address2: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين",
  });
