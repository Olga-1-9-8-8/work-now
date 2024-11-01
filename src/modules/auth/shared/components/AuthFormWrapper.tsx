import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { FieldValues, UseFormReset, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../shared/ui/buttons/Button";
import { Form } from "../../../shared/ui/form/Form";
import { getDefaultsValuesFromValidationSchema } from "../../../shared/validation";

interface AuthFormWrapperProps<T extends FieldValues> {
  title: string;
  onSubmit: (data: T, reset: UseFormReset<T>) => void;
  isLoading?: boolean;
  schema: z.AnyZodObject | z.ZodEffects<any>;
  children: ReactNode;
}

export const AuthFormWrapper = <T extends FieldValues>({
  title,
  schema,
  onSubmit,
  isLoading,
  children,
}: AuthFormWrapperProps<T>) => {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: getDefaultsValuesFromValidationSchema<typeof schema>(schema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data, form.reset))}
        className="w-full min-w-60 space-y-6"
      >
        {children}
        <Button className="w-full" type="submit" disabled={isLoading}>
          <span className="relative pr-6">
            {title}
            {isLoading && (
              <Loader2 className="absolute right-0 top-0 h-5 w-5 animate-spin text-primary-light" />
            )}
          </span>
        </Button>
      </form>
    </Form>
  );
};
