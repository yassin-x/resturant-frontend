import { Pages } from "@/constants/enums";
import type { IFormFieldsVariables } from "@/types/app";
import { signInSchema, signUpSchema } from "@/validations/auth";
import { menuValidation } from "@/validations/menu";
import z from "zod";

const useFormValidation = (props: IFormFieldsVariables) => {
  const { slug } = props;

  const getValdationSchema = () => {
    switch (slug) {
      case Pages.SIGNIN:
        return signInSchema;
      case Pages.SIGNUP:
        return signUpSchema;
      case Pages.ADD_ITEM:
        return menuValidation;
      default:
        return z.object({});
    }
  };

  return { getValdationSchema };
};

export default useFormValidation;
