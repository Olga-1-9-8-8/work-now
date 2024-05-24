import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { filterConfig } from "../../../shared/configs";
import { UniversalItemType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import { DatePicker, Select } from "../../../shared/ui/form-control";

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
import { formatDateToStringUtc } from "../../../shared/utils/helpers";
import { ResumeItem } from "../../shared/types";
import { useCreateResume } from "../hooks/useCreateResume";
import { useEditResume } from "../hooks/useEditResume";
import { ResumeCreationFormType } from "../types/ResumeCreationFormType";
import { resumeFormValidationSchema } from "../validation/resumeFormValidationSchema";
import { ResumeCreationFormCheckboxItem } from "./item/ResumeCreationFormCheckboxItem";

interface ResumeCreationFormProps {
  userId: string;
  resume?: ResumeItem;
}

export const ResumeCreationForm = ({ userId, resume }: ResumeCreationFormProps) => {
  console.log(resume, userId);
  const form = useForm<ResumeCreationFormType>({
    resolver: zodResolver(resumeFormValidationSchema),
    defaultValues: {
      userId,
      position: resume?.position ?? "",
      city: resume?.city ?? "",
      employment: resume?.employment ?? [],
      schedule: resume?.schedule ?? [],
      salary: resume?.salary ?? [0, 0],
      education: resume?.education ?? undefined,
      about: resume?.about ?? "",
      employmentStartDate: resume?.employmentStartDate ?? undefined,
      views: resume?.views ?? 0,
      applicantsQuantity: resume?.applicantsQuantity ?? 0,
      weekHours: resume?.weekHours ?? [],
    },
  });

  const { createResume, isCreating } = useCreateResume();
  const { editResume, isEditing } = useEditResume();

  function onSubmit(values: z.infer<typeof resumeFormValidationSchema>) {
    if (resume?.id) {
      editResume(
        { ...values, id: resume.id, creationDate: formatDateToStringUtc(new Date()) },
        {
          onSuccess: () => form.reset(),
        },
      );
    } else {
      createResume(values, {
        onSuccess: () => form.reset(),
      });
    }
  }

  const { employment, schedule, education } = filterConfig;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Укажите должность"
                  disabled={isCreating || isEditing}
                  {...field}
                />
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
                <Input
                  placeholder="Укажите регион поиска работы"
                  disabled={isCreating || isEditing}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <Select
                options={education.items as Required<UniversalItemType<string>>[]}
                title={education.title}
                defaultValue={field.value}
                onValueChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <ResumeCreationFormCheckboxItem
          disabled={isCreating || isEditing}
          name="employment"
          items={employment.items}
          title={employment.title}
        />
        <ResumeCreationFormCheckboxItem
          disabled={isCreating || isEditing}
          name="schedule"
          items={schedule.items}
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
                    disabled={isCreating || isEditing}
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
                  disabled={isCreating || isEditing}
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
        <FormField
          control={form.control}
          name="employmentStartDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Дата начала работы</FormLabel>
              <DatePicker {...field} />
              <FormDescription>Дата предполагаемого выхода на работу.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isCreating || isEditing} size="lg" type="submit">
          Опубликовать резюме
        </Button>
      </form>
    </Form>
  );
};
