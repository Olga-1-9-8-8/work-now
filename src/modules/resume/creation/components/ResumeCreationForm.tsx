import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { searchOptionsConfig } from "../../../shared/configs";
import { Button } from "../../../shared/ui/buttons/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shared/ui/form/Form";
import { Input } from "../../../shared/ui/inputs/Input";
import { Slider } from "../../../shared/ui/slider/Slider";
import { TextareaWithLabel } from "../../../shared/ui/textarea/TextareaWithLabel";
import { createResume } from "../../list/api/apiResumes";
import { ResumeCreationFormValidationSchema } from "../validation/ResumeCreationFormValidationSchema";
import { ResumeCreationFormCheckboxItem } from "./item/ResumeCreationFormCheckboxItem";

export const ResumeCreationForm = () => {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof ResumeCreationFormValidationSchema>>({
    resolver: zodResolver(ResumeCreationFormValidationSchema),
    defaultValues: {
      fullName: "",
      position: "",
      city: "",
      employment: [],
      schedule: [],
      salary: [20_000, 70_000],
      about: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createResume,
    onSuccess: () => {
      toast.success("Новое резюме создано");
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
      form.reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(values: z.infer<typeof ResumeCreationFormValidationSchema>) {
    console.log(values);
    mutate(values);
  }

  const { employment, schedule } = searchOptionsConfig;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Имя" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Желаемая должность" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Укажите регион поиска работы" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ResumeCreationFormCheckboxItem
          disabled={isPending}
          name="employment"
          options={employment.options}
          title={employment.title}
        />
        <ResumeCreationFormCheckboxItem
          disabled={isPending}
          name="schedule"
          options={schedule.options}
          title={schedule.title}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field: { value, onChange } }) => {
            const [salaryMin, salaryMax] = value;
            return (
              <FormItem>
                <FormLabel className="text-lg">
                  Зарплата : {salaryMin} &#8381; &mdash;{salaryMax} &#8381;
                </FormLabel>
                <FormControl>
                  <Slider
                    disabled={isPending}
                    min={0}
                    max={500_000}
                    step={1000}
                    defaultValue={[salaryMin, salaryMax]}
                    onValueChange={onChange}
                  />
                </FormControl>
                <FormDescription>Выберите диапазон зарплат.</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextareaWithLabel
                  disabled={isPending}
                  label="Напиши о себе"
                  placeholder="Напиши про свои навыки"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Какой опыт вы приобрели благодаря получению образования.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} size="lg" type="submit">
          Опубликовать резюме
        </Button>
      </form>
    </Form>
  );
};
