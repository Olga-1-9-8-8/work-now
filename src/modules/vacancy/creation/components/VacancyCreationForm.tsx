import { LanguageType, filterConfig, searchConfig } from "../../../shared/configs";
import {
  UniversalItemType,
  UniversalJobType,
  genderTypes,
  getGenderTitle,
} from "../../../shared/types";
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
  const { t, language } = useLanguageSwitcher("vacancy");
  const { form, handleSubmit, isSubmitting } = useVacancyForm({
    vacancy,
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
        <FormInputField<VacancyCreationFormType>
          label={t("vacancy.creation.form.position.label")}
          name="position"
          placeholder={t("vacancy.creation.form.position.placeholder")}
          disabled={isSubmitting}
        />

        <FormMultiSelect<VacancyCreationFormType>
          label={t("vacancy.creation.form.cities.label")}
          name="cities"
          title={cities.title}
          disabled={isSubmitting}
          options={cities.items as Required<UniversalItemType<string>>[]}
          language={language as LanguageType}
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

        <FormCheckboxMultipleField<VacancyCreationFormType>
          disabled={isSubmitting}
          name="weekHours"
          items={weekHours.items as Required<UniversalItemType<string>>[]}
          label={weekHours.title}
        />

        <FormSliderField<VacancyCreationFormType>
          name="salary"
          getLabel={(value) =>
            `${t("vacancy.creation.form.salary.label")} ${getSalaryTitle(language as LanguageType, value)} `
          }
          disabled={isSubmitting}
          description={t("vacancy.creation.form.salary.description")}
        />

        <FormTextareaField<VacancyCreationFormType>
          disabled={isSubmitting}
          name="about"
          label={t("vacancy.creation.form.about.label")}
          placeholder={t("vacancy.creation.form.about.placeholder")}
          description={t("vacancy.creation.form.about.description")}
        />

        <FormField
          control={form.control}
          name="employmentStartDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{t("vacancy.creation.form.employmentStartDate.label")}</FormLabel>
              <DatePicker language={language as LanguageType} {...field} />
              <FormDescription>
                {t("vacancy.creation.form.employmentStartDate.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormRadioGroup<VacancyCreationFormType>
          label={t("vacancy.creation.form.gender.label")}
          name="gender"
          disabled={isSubmitting}
          options={genderTypes.map((gender) => ({
            value: gender,
            title: getGenderTitle(language as LanguageType, gender),
          }))}
        />

        <Button disabled={isSubmitting} size="lg" type="submit">
          {t("vacancy.creation.form.submit")}
        </Button>
      </form>
    </Form>
  );
};
