import { AuthUpdatePasswordForm } from "../../../../shared/services/auth";
import { LkDetailsCard } from "../card/LkDetailsCard";

interface LkDetailsUpdatePasswordCardProps {
  isLoading?: boolean;
}

export const LkDetailsUpdatePasswordCard = ({ isLoading }: LkDetailsUpdatePasswordCardProps) => {
  return (
    <LkDetailsCard title="Сброс пароля" isLoading={isLoading}>
      <section className="flex flex-col gap-4">
        <AuthUpdatePasswordForm />
      </section>
    </LkDetailsCard>
  );
};
