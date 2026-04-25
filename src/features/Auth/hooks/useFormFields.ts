import { Pages } from "@/constants/enums";
import type { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const signInFields = (): IFormField[] => [
    {
      label: "البريد الإلكتروني",
      name: "email",
      type: "email",
      placeholder: "example@ex.com",
      autoFocus: true,
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: "password",
      placeholder: "********",
    },
  ];

  const signUpFields = (): IFormField[] => [
    {
      label: "البريد الإلكتروني",
      name: "email",
      type: "email",
      placeholder: "example@ex.com",
      autoFocus: true,
    },
    {
      label: "الاسم كامل",
      name: "fullName",
      type: "text",
      placeholder: "أدخل اسمك الكامل",
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: "password",
      placeholder: "********",
    },
    {
      label: "تأكيد كلمة المرور",
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
    },
    {
      label: "رقم الهاتف",
      name: "phone",
      type: "phone",
      placeholder: "أدخل رقم هاتفك",
    },
    {
      label: "المدينة",
      name: "city",
      type: "text",
      placeholder: "أدخل مدينتك",
    },
    {
      label: "العنوان",
      name: "address1",
      type: "text",
      placeholder: "أدخل عنوانك",
    },
    {
      label: "العنوان التفصيلي (اختياري)",
      name: "address2",
      type: "text",
      placeholder: "أدخل عنوانك التفصيلي",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.SIGNIN:
        return signInFields();
      case Pages.SIGNUP:
        return signUpFields();
      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
