import { AuthUpdatePasswordForm } from "../../../../shared/services/auth";
import { LkDetailsCard } from "../card/LkDetailsCard";

export const LkDetailsUpdatePasswordCard = () => {
  return (
    <LkDetailsCard title="Сброс пароля">
      <section className="flex flex-col gap-4">
        <AuthUpdatePasswordForm />
      </section>
    </LkDetailsCard>
  );
};
