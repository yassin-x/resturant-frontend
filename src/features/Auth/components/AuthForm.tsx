import type { IFormField, IFormFieldsVariables } from "@/types/app";
import { useForm } from "react-hook-form";
import useFormFields from "../hooks/useFormFields";
import FormFields from "@/components/shared/FormFields";
import { Pages, Routes } from "@/constants/enums";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/shared/Loader";
import { toast } from "sonner";
import useFormValidation from "../../../hooks/useFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useAuth } from "../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ slug }: IFormFieldsVariables) {
  const navigate = useNavigate();
  const { getFormFields } = useFormFields({ slug });
  const { getValdationSchema } = useFormValidation({ slug });
  const { signIn, signUp } = useAuth();
  const DEFAULT_VALUES: Record<string, string> = {};
  for (const field of getFormFields()) {
    DEFAULT_VALUES[field.name] = "";
  }

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Record<string, string>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(getValdationSchema()) as any,
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = useCallback(
    async (data: Record<string, unknown>) => {
      try {
        if (slug === Pages.SIGNIN) {
          const { message } = await signIn({
            email: data.email as string,
            password: data.password as string,
          });
          toast.success(message);
          navigate(`/${Routes.USER}/${Pages.PROFILE}`, {
            replace: true,
          });
        } else if (slug === Pages.SIGNUP) {
          const { message, status } = await signUp({
            email: data.email as string,
            phone: data.phoneNumber as string,
            fullName: data.fname as string,
            password: data.password as string,
            confirmPassword: data.confirmPassword as string,
            city: data.city as string,
            address1: data.address as string,
            address2: data.detailedAddress as string,
          });
          if (status === "success") {
            toast.success(message);
            navigate(`/${Routes.AUTH}/${Pages.SIGNIN}`, {
              replace: true,
            });
          } else {
            toast.error(message);
          }
        }
      } catch (error) {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "حدث خطأ ما";
        toast.error(errorMessage);
      }
    },
    [navigate, signIn, signUp, slug],
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {getFormFields().map((field: IFormField) => (
          <div className="mb-4" key={field.name}>
            <FormFields {...field} control={control} errors={errors} />
          </div>
        ))}

        <SubmitButton
          slug={slug}
          disabled={isSubmitting}
          loading={isSubmitting}
        />

        {/* <NavigationLink slug={slug} /> */}
      </form>
    </>
  );
}

function SubmitButton({
  slug,
  loading,
  ...rest
}: {
  slug: string;
  loading?: boolean;
} & React.ComponentProps<typeof Button>) {
  const renderButtonText = () => {
    switch (slug) {
      case Pages.SIGNIN:
        return "تسجيل الدخول";
      case Pages.SIGNUP:
        return "إنشاء حساب";
      default:
        return "تسجيل الدخول";
    }
  };

  return (
    <Button type="submit" className="w-full h-10" {...rest}>
      <LoadingButton
        loading={loading}
        loadingText="جار التحميل..."
        loaderSize="sm"
      >
        {renderButtonText()}
      </LoadingButton>
    </Button>
  );
}
