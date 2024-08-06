import { BadgeRussianRuble, FileStack, GraduationCap, Mails } from "lucide-react";
import { NotFound } from "../../../../../shared/components/not-found";
import { useLastResumesAnalytics } from "../../../../hooks/useLastResumesAnalytics";
import { getApplicantsWithHighEducation } from "../../../../utils/getApplicantsWithHighEducation";
import { getAverageApplicantsQuantity } from "../../../../utils/getAverageApplicantsQuantity";
import { getAverageApplicantsSalary } from "../../../../utils/getAverageApplicantsSalary";
import { HomeChartsOverviewCard } from "./card/HomeChartsOverviewCard";

export const HomeChartsOverviewCards = () => {
  const { lastResumes, isLoading } = useLastResumesAnalytics();

  if (!lastResumes && !isLoading)
    return <NotFound title="Графики аналитики" description="Попробуйте вернуться позже" />;

  const chartCards = [
    {
      value: lastResumes?.length ?? 0,
      icon: FileStack,
      title: "Всего резюме за этот период",
    },
    {
      value: getApplicantsWithHighEducation(lastResumes),
      icon: GraduationCap,
      title: "Количество резюме соискателей с высшим образованием",
    },
    {
      value: getAverageApplicantsSalary(lastResumes),
      icon: BadgeRussianRuble,
      title: "Средняя зп, которую хотят получать соискатели",
    },
    {
      value: getAverageApplicantsQuantity(lastResumes),
      icon: Mails,
      title: "Среднее количество откликов на 1го кандидата",
    },
  ];

  return (
    <ul className="grid min-h-full gap-6 py-4 sm:grid-cols-2 lg:grid-cols-4">
      {chartCards.map((card, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <HomeChartsOverviewCard
            value={card.value}
            icon={card.icon}
            title={card.title}
            isLoading={isLoading}
          />
        </li>
      ))}
    </ul>
  );
};
