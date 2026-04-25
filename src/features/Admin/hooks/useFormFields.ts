import { MenuCategory, Pages } from "@/constants/enums";
import type { IFormField, IFormFieldsVariables } from "@/types/app";

export const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const addItemFields = (): IFormField[] => [
    {
      label: "الصورة",
      name: "image",
      type: "file",
      placeholder: "اختر صورة للصنف",
    },
    {
      label: "اسم الصنف",
      name: "name",
      type: "text",
      placeholder: "أدخل اسم الصنف",
      autoFocus: true,
    },
    {
      label: "الوصف",
      name: "description",
      type: "text",
      placeholder: "ادخل وصف الصنف",
    },
    {
      label: "السعر",
      name: "price",
      type: "number",
      placeholder: "أدخل سعر الصنف",
    },
    {
      label: "الخصم",
      name: "discount",
      type: "number",
      placeholder: "أدخل نسبة الخصم (إن وجدت)",
    },
    {
      label: "الفئة",
      name: "category",
      type: "select",
      options: [
        { label: "بورجر", value: MenuCategory.BURGER },
        { label: "بيتزا", value: MenuCategory.PIZZA },
        { label: "مشروبات", value: MenuCategory.DRINKS },
      ],
    },
  ];
  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.ADD_ITEM:
        return addItemFields();
      default:
        return [];
    }
  };

  return { getFormFields };
};
