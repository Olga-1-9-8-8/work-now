import { filterConfig } from "../../../shared/configs";
import { UniversalItemType, UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import {
  DatePicker,
  FormCheckboxMultipleField,
  FormInputField,
  FormSelect,
  FormSliderField,
  FormTextareaField,
} from "../../../shared/ui/form-control";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shared/ui/form/Form";
import { getSalaryTitle } from "../../../shared/utils";
import { useResumeForm } from "../hooks/useResumeForm";
import { ResumeCreationFormType } from "../types/ResumeCreationFormType";

interface ResumeCreationFormProps {
  userId: string;
  resume?: UniversalJobType;
  onModalClose?: () => void;
}

export const ResumeCreationForm = ({ userId, resume, onModalClose }: ResumeCreationFormProps) => {
  const { form, handleSubmit, isSubmitting } = useResumeForm({
    resume,
    userId,
    onModalClose,
  });

  const { employment, schedule, education } = filterConfig;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormInputField<ResumeCreationFormType>
          label="Укажите должность"
          name="position"
          placeholder="Название вашего резюме"
          disabled={isSubmitting}
        />
        <FormInputField<ResumeCreationFormType>
          label="Укажите регион поиска работы"
          name="city"
          placeholder="Место где хотите найти работу"
          disabled={isSubmitting}
        />
        <FormSelect<ResumeCreationFormType>
          disabled={isSubmitting}
          label={education.title}
          title={education.title}
          name="education"
          options={education.items as Required<UniversalItemType<string>>[]}
        />
        <FormCheckboxMultipleField<ResumeCreationFormType>
          disabled={isSubmitting}
          name="employment"
          items={employment.items as Required<UniversalItemType<string>>[]}
          label={employment.title}
        />

        <FormCheckboxMultipleField<ResumeCreationFormType>
          disabled={isSubmitting}
          name="schedule"
          items={schedule.items as Required<UniversalItemType<string>>[]}
          label={schedule.title}
        />
        <FormSliderField<ResumeCreationFormType>
          name="salary"
          getLabel={(value) => `Зарплата: ${getSalaryTitle(value)} `}
          disabled={isSubmitting}
          description="Выберите диапазон зарплат"
        />

        <FormTextareaField<ResumeCreationFormType>
          disabled={isSubmitting}
          name="about"
          label="Напиши о себе"
          placeholder="Напиши про свои навыки"
          description="Какой опыт вы приобрели благодаря получению образования"
        />
        <FormField
          control={form.control}
          name="employmentStartDate"
          disabled={isSubmitting}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Дата начала работы</FormLabel>
              <DatePicker {...field} />
              <FormDescription>Дата предполагаемого выхода на работу</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} size="lg" type="submit">
          Опубликовать резюме
        </Button>
      </form>
    </Form>
  );
};
