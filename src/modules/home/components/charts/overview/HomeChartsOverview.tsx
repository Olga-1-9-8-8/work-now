import { BadgeRussianRuble, FileStack, GraduationCap, Mails } from "lucide-react";
import { useLastResumes } from "../../../../resume/list";
import { Spinner } from "../../../../shared/ui/spinner/Spinner";
import { formatCurrency } from "../../../../shared/utils/helpers";
import { AgeBarChart } from "../chart/AgeBarChart";
import { GenderChart } from "../chart/GenderChart";
import { SalaryLineChart } from "../chart/SalaryLineChart";
import { HomeChartsOverviewCard } from "./card/HomeChartsOverviewCard";
import { HomeChartsOverviewToggles } from "./toggles/HomeChartsOverviewToggles";

export const HomeChartsOverview = () => {
  const {
    lastResumes,
    isLoading,
    lastResumesWithHigherEducation,
    averageApplicantsQuantity,
    averageResumeSalary,
    numDays,
  } = useLastResumes();

  if (isLoading) return <Spinner />;

  const chartCards = [
    {
      value: lastResumes ? lastResumes.length : "0",
      icon: FileStack,
      title: "Всего резюме за этот период",
    },
    {
      value: lastResumesWithHigherEducation ? lastResumesWithHigherEducation.length : "0",
      icon: GraduationCap,
      title: "Количество резюме соискателей с высшим образованием",
    },
    {
      value: averageResumeSalary ? formatCurrency(averageResumeSalary) : "Нет данных",
      icon: BadgeRussianRuble,
      title: "Средняя зп, которую хотят получать соискатели",
    },
    {
      value: averageApplicantsQuantity?.toFixed(0) ?? "Нет данных",
      icon: Mails,
      title: "Среднее количество откликов на 1го кандидата",
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-4">
      <HomeChartsOverviewToggles />

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
      {lastResumes && (
        <div className="flex flex-col gap-4">
          <SalaryLineChart lastResumes={lastResumes} numDays={numDays} />
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <GenderChart lastResumes={lastResumes} numDays={numDays} />
            <AgeBarChart lastResumes={lastResumes} numDays={numDays} />
          </div>
        </div>
      )}
    </div>
  );
};
