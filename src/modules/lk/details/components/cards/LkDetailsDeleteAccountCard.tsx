import { TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/ui/buttons/Button";
import { TypographyH3 } from "../../../../shared/ui/typography/TypographyH3";
import { LkDetailsCard } from "../card/LkDetailsCard";

export const LkDetailsDeleteAccountCard = () => {
  const navigate = useNavigate();
  return (
    <LkDetailsCard title="Удаление аккаунта">
      <section className="flex flex-col gap-4">
        <TypographyH3>Вы уверены что хотите удалить аккаунт?</TypographyH3>
        <p className="font-medium text-muted-foreground">Восстановить аккаунт будет невозможно</p>
        <div className="flex justify-end">
          {/* // TODO : Реализовать удаление аккаунта */}
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="link"
            size="lg"
            className="flex gap-2 text-base text-destructive "
          >
            <TrashIcon className="h-2/4 w-2/4 stroke-destructive" />
            <span>Удалить</span>
          </Button>
        </div>
      </section>
    </LkDetailsCard>
  );
};
