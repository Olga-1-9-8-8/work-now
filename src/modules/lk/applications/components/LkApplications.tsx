import { NotExist, NotFound } from "../../../shared/components/not-found";
import { useApplies } from "../../../shared/features/applies/hooks/useApplies";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { LkApplicationsList } from "./LkApplicationsList";

export const LkApplications = () => {
  const { applies, totalAppliesCount, isAppliesLoading } = useApplies();

  if (isAppliesLoading) return <Spinner />;
  if (!applies) return <NotFound title="Элементы в Откликах" />;

  return totalAppliesCount ? (
    <LkApplicationsList count={totalAppliesCount} applies={applies} />
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Отклики" />
  );
};
