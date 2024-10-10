import { LanguageType, filterConfig, searchConfig } from "../../../shared/configs";
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
import { FormMultiSelect } from "../../../shared/ui/form-control/select/FormMultiSelect";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shared/ui/form/Form";
import { getSalaryTitle } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useResumeForm } from "../hooks/useResumeForm";
import { ResumeCreationFormType } from "../types/ResumeCreationFormType";

interface ResumeCreationFormProps {
  userId: string;
  resume?: UniversalJobType;
  onModalClose?: () => void;
}

export const ResumeCreationForm = ({ userId, resume, onModalClose }: ResumeCreationFormProps) => {
  const { t, language } = useLanguageSwitcher("resume");
  const { form, handleSubmit, isSubmitting } = useResumeForm({
    resume,
    userId,
    onModalClose,
  });

  const {
    employment,
    schedule,
    education,
    week_hours: weekHours,
  } = filterConfig[language as LanguageType];
  const { cities } = searchConfig[language as LanguageType];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 px-1">
        <FormInputField<ResumeCreationFormType>
          label={t("resume.creation.form.position.label")}
          name="position"
          placeholder={t("resume.creation.form.position.placeholder")}
          disabled={isSubmitting}
        />
        <FormMultiSelect<ResumeCreationFormType>
          label={t("resume.creation.form.cities.label")}
          name="cities"
          title={cities.title}
          disabled={isSubmitting}
          options={cities.items as Required<UniversalItemType<string>>[]}
          language={language as LanguageType}
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
        <FormCheckboxMultipleField<ResumeCreationFormType>
          disabled={isSubmitting}
          name="weekHours"
          items={weekHours.items as Required<UniversalItemType<string>>[]}
          label={weekHours.title}
        />
        <FormSliderField<ResumeCreationFormType>
          name="salary"
          getLabel={(value) =>
            `${t("resume.creation.form.salary.label")} ${getSalaryTitle(language as LanguageType, value)} `
          }
          disabled={isSubmitting}
          description={t("resume.creation.form.salary.description")}
        />

        <FormTextareaField<ResumeCreationFormType>
          disabled={isSubmitting}
          name="about"
          label={t("resume.creation.form.about.label")}
          placeholder={t("resume.creation.form.about.placeholder")}
        />
        <FormField
          control={form.control}
          name="employmentStartDate"
          disabled={isSubmitting}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{t("resume.creation.form.employmentStartDate.label")}</FormLabel>
              <DatePicker language={language as LanguageType} {...field} />
              <FormDescription>
                {t("resume.creation.form.employmentStartDate.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} size="lg" type="submit">
          {t("resume.creation.form.submit")}
        </Button>
      </form>
    </Form>
  );
};
