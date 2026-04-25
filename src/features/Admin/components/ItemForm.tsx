import { Pages } from "@/constants/enums";
import { useFormFields } from "../hooks/useFormFields";
import FormFields from "@/components/shared/FormFields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useFormValidation from "@/hooks/useFormValidation";
import { Button } from "@/components/ui/button";
import {
  useAddMenuItem,
  useGetMenuById,
  useUpdateMenuItem,
} from "../hooks/useMenuQueries";
import { appendFormData } from "@/lib/form-data";
import {  LoadingButton } from "@/components/shared/Loader";
import { useCallback, useLayoutEffect } from "react";
import type { IFormFieldsVariables } from "@/types/app";
import { useLocation } from "react-router-dom";

export default function ItemForm({ slug }: IFormFieldsVariables) {
  const { getFormFields } = useFormFields({ slug: Pages.ADD_ITEM });
  const { getValdationSchema } = useFormValidation({ slug: Pages.ADD_ITEM });
  const { isPending, mutateAsync } = useAddMenuItem();
  const { isPending: isUpdatePending, mutateAsync: updateMutateAsync } =
    useUpdateMenuItem();
  const id = useLocation().pathname.split("/").pop();
  const { data } = useGetMenuById(id as string);

  // if (slug === Pages.UPDATE_ITEM && isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-full w-full">
  //       <Loader />
  //     </div>
  //   );
  // }

  const DEFAULT_VALUES: Record<string, string> = {};
  for (const field of getFormFields()) {
    DEFAULT_VALUES[field.name] = "";
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Record<string, string>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(getValdationSchema()) as any,
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  useLayoutEffect(() => {
    if (!data?.data?.menu) return;

    const values: Record<string, string> = {};

    for (const field of getFormFields()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      values[field.name] = (data.data.menu as any)[field.name] ?? "";
    }

    reset(values);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, reset]);

  const onSubmit = useCallback(
    async (
      data: Record<
        string,
        string | number | boolean | File | File[] | FileList | null | undefined
      >,
    ) => {
      const formData = new FormData();
      appendFormData(formData, data);
      if (slug === Pages.ADD_ITEM) {
        try {
          await mutateAsync(formData);
        } catch (e) {
          console.error(e);
        }
      } else if (slug === Pages.UPDATE_ITEM && id) {
        try {
          await updateMutateAsync({ id, data: formData });
        } catch (e) {
          console.error(e);
        }
      }
    },
    [mutateAsync, updateMutateAsync, slug, id],
  );

  return (
    <Card className="w-full max-w-lg container">
      <CardHeader>
        {slug === Pages.ADD_ITEM ? (
          <h2 className="text-2xl font-bold">إضافة صنف جديد</h2>
        ) : (
          <h2 className="text-2xl font-bold">تحديث بيانات الصنف</h2>
        )}
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {getFormFields().map((field) => {
            return (
              <div key={field.name}>
                <FormFields {...field} errors={errors} control={control} />
              </div>
            );
          })}

          <Button
            type="submit"
            disabled={isPending || isUpdatePending}
            className="w-full"
          >
            <LoadingButton
              loading={isUpdatePending || isPending}
              loadingText="جار التحميل..."
              loaderSize="sm"
            >
              حفظ
            </LoadingButton>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
