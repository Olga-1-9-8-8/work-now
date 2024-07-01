import { NotExist } from "../../../shared/components/not-found";
import { useApplies } from "../../../shared/features/applies/hooks/useApplies";
import { NotFound } from "../../../shared/ui/icons";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { LkApplications } from "../components/LkApplications";

export const LkApplicationsPage = () => {
  const { applies, totalAppliesCount, isAppliesLoading } = useApplies();

  if (isAppliesLoading) return <Spinner />;
  if (!applies) return <NotFound title="Элементы в Откликах" />;

  return totalAppliesCount ? (
    <LkApplications count={totalAppliesCount} applies={applies} />
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Отклики" />
  );
};
