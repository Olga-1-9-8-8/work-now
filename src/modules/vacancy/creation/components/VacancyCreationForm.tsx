import { filterConfig } from "../../../shared/configs";
import { UniversalItemType, UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import {
  DatePicker,
  FormCheckboxMultipleField,
  FormInputField,
  FormRadioGroup,
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
import { useVacancyForm } from "../hooks/useVacancyForm";
import { VacancyCreationFormType } from "../types/VacancyCreationFormType";

interface VacancyCreationFormProps {
  userId: string;
  vacancy?: UniversalJobType;
  onModalClose?: () => void;
}

export const VacancyCreationForm = ({
  userId,
  vacancy,
  onModalClose,
}: VacancyCreationFormProps) => {
  const { form, handleSubmit, isSubmitting } = useVacancyForm({
    vacancy,
    userId,
    onModalClose,
  });

  const { employment, schedule, education } = filterConfig;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormInputField<VacancyCreationFormType>
          label="Укажите должность"
          name="position"
          placeholder="Название вашей вакансии"
          disabled={isSubmitting}
        />

        <FormInputField<VacancyCreationFormType>
          label="Укажите регион поиска сотрудника"
          name="city"
          placeholder="Место где хотите найти сотрудника"
          disabled={isSubmitting}
        />

        <FormSelect<VacancyCreationFormType>
          disabled={isSubmitting}
          label={education.title}
          title={education.title}
          name="education"
          options={education.items as Required<UniversalItemType<string>>[]}
        />

        <FormCheckboxMultipleField<VacancyCreationFormType>
          disabled={isSubmitting}
          name="employment"
          items={employment.items as Required<UniversalItemType<string>>[]}
          label={employment.title}
        />

        <FormCheckboxMultipleField<VacancyCreationFormType>
          disabled={isSubmitting}
          name="schedule"
          items={schedule.items as Required<UniversalItemType<string>>[]}
          label={schedule.title}
        />

        <FormSliderField<VacancyCreationFormType>
          name="salary"
          getLabel={(value) => `Зарплата: ${getSalaryTitle(value)} `}
          disabled={isSubmitting}
          description="Выберите диапазон зарплат"
        />
        <FormTextareaField<VacancyCreationFormType>
          disabled={isSubmitting}
          name="about"
          label="Напиши о вакансии"
          placeholder="Напиши про требования к кандидату"
          description="Какой опыт и знания вам нужны для данной вакансии"
        />
        <FormField
          control={form.control}
          name="employmentStartDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Дата начала работы</FormLabel>
              <DatePicker {...field} />
              <FormDescription>Дата предполагаемого выхода на работу</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormRadioGroup<VacancyCreationFormType>
          label="Укажите требуемый пол"
          name="gender"
          disabled={isSubmitting}
          options={[
            { value: "_not_set", title: "Не задан" },
            { value: "male", title: "Муж." },
            { value: "female", title: "Жен." },
          ]}
        />
        <Button disabled={isSubmitting} size="lg" type="submit">
          Опубликовать вакансию
        </Button>
      </form>
    </Form>
  );
};
