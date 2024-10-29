import { NotExist, NotFound } from "../../../shared/components/not-found";
import { useApplies } from "../../../shared/features/applies/hooks/useApplies";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkApplicationsList } from "./LkApplicationsList";

export const LkApplications = () => {
  const { applies, totalAppliesCount, isAppliesLoading } = useApplies();
  const { t } = useLanguageSwitcher("lk");

  if (isAppliesLoading) return <Spinner />;
  if (!applies) return <NotFound title={t("lk.applications.list.notFoundTitle")} />;

  return totalAppliesCount ? (
    <LkApplicationsList count={totalAppliesCount} applies={applies} />
  ) : (
    <NotExist title={t("lk.applications.list.notExistTitle")} />
  );
};
