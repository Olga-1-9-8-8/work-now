import { AuthUpdatePasswordForm } from "../../../../shared/services/auth";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkDetailsCard } from "../card/LkDetailsCard";

interface LkDetailsUpdatePasswordCardProps {
  isLoading?: boolean;
}

export const LkDetailsUpdatePasswordCard = ({ isLoading }: LkDetailsUpdatePasswordCardProps) => {
  const { t } = useLanguageSwitcher("lk");
  return (
    <LkDetailsCard title={t("lk.details.updatePasswordCard.title")} isLoading={isLoading}>
      <section className="flex flex-col gap-4">
        <AuthUpdatePasswordForm />
      </section>
    </LkDetailsCard>
  );
};
