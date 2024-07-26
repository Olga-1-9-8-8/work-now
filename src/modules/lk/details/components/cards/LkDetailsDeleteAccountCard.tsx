import { TrashIcon } from "lucide-react";
import { DeleteConfirmation } from "../../../../shared/components/delete-cofirmation";
import { useDeleteAccount } from "../../../../shared/services/auth/hooks/useDeleteAccount";
import { Button } from "../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { TypographyH3 } from "../../../../shared/ui/typography/TypographyH3";
import { LkDetailsCard } from "../card/LkDetailsCard";

interface LkDetailsDeleteAccountCardProps {
  isLoading?: boolean;
}

export const LkDetailsDeleteAccountCard = ({ isLoading }: LkDetailsDeleteAccountCardProps) => {
  const { deleteAccount, isAccountDeleting } = useDeleteAccount();

  return (
    <LkDetailsCard title="Удаление аккаунта" isLoading={isLoading}>
      <section className="flex flex-col gap-4">
        <TypographyH3>Вы уверены что хотите удалить аккаунт?</TypographyH3>
        <p className="font-medium text-muted-foreground">Восстановить аккаунт будет невозможно</p>
        <div className="flex justify-end">
          <DrawerDialogResponsive
            button={
              <Button
                variant="link"
                size="lg"
                className="flex gap-2 text-base text-destructive"
                disabled={isAccountDeleting}
              >
                <TrashIcon className="h-2/4 w-2/4 stroke-destructive" />
                <span>Удалить</span>
              </Button>
            }
            title="Удаление аккаунта"
          >
            <DeleteConfirmation title="аккаунт" onDelete={deleteAccount} />
          </DrawerDialogResponsive>
        </div>
      </section>
    </LkDetailsCard>
  );
};
