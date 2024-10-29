import { FileStack, GraduationCap, Mails } from "lucide-react";
import { useMemo } from "react";
import { LanguageType, currencyConfigs } from "../../../../../../shared/configs";
import { useLanguageSwitcher } from "../../../../../../shared/widgets/languages-switcher";
import { UniversalItemAnalyticsApiTypeInput } from "../../../../../types/UniversalItemAnalyticsApiTypeInput";
import { getApplicantsWithHighEducation } from "../../../../../utils/getApplicantsWithHighEducation";
import { getAverageApplicantsQuantity } from "../../../../../utils/getAverageApplicantsQuantity";
import { getAverageApplicantsSalary } from "../../../../../utils/getAverageApplicantsSalary";

export const useCartCardData = () => {
  const { t, language } = useLanguageSwitcher("home");
  return useMemo(
    () => [
      {
        title: t("home.charts.overview.lastResumes.title"),
        icon: FileStack,
        valueFn: (lastResumes?: UniversalItemAnalyticsApiTypeInput[]) =>
          lastResumes ? lastResumes.length : t("home.charts.nodata"),
      },
      {
        title: t("home.charts.overview.applicantsWithHighEducation.title"),
        icon: GraduationCap,
        valueFn: (lastResumes?: UniversalItemAnalyticsApiTypeInput[]) =>
          lastResumes && lastResumes.length > 0
            ? getApplicantsWithHighEducation(lastResumes)
            : t("home.charts.nodata"),
      },
      {
        title: t("home.charts.overview.averageApplicantsSalary.title"),
        icon: currencyConfigs[language as LanguageType].icon,
        valueFn: (lastResumes?: UniversalItemAnalyticsApiTypeInput[]) =>
          lastResumes && lastResumes.length > 0
            ? getAverageApplicantsSalary(lastResumes, language as LanguageType) ??
              t("home.charts.nodata")
            : t("home.charts.nodata"),
      },
      {
        title: t("home.charts.overview.averageApplicantsQuantity.title"),
        icon: Mails,
        valueFn: (lastResumes?: UniversalItemAnalyticsApiTypeInput[]) =>
          lastResumes && lastResumes.length > 0
            ? getAverageApplicantsQuantity(lastResumes)
            : t("home.charts.nodata"),
      },
    ],
    [language, t],
  );
};
