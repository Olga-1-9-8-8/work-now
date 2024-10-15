import { TrashIcon } from "lucide-react";
import { DeleteConfirmation } from "../../../../shared/components/delete-cofirmation";
import { useDeleteAccount } from "../../../../shared/services/auth/hooks/useDeleteAccount";
import { Button } from "../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { TypographyH3 } from "../../../../shared/ui/typography/TypographyH3";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkDetailsCard } from "../card/LkDetailsCard";

interface LkDetailsDeleteAccountCardProps {
  isLoading?: boolean;
}

export const LkDetailsDeleteAccountCard = ({ isLoading }: LkDetailsDeleteAccountCardProps) => {
  const { deleteAccount, isAccountDeleting } = useDeleteAccount();
  const { t } = useLanguageSwitcher("lk");

  return (
    <LkDetailsCard title={t("lk.details.deleteAccountCard.title")} isLoading={isLoading}>
      <section className="flex flex-col gap-4">
        <TypographyH3>{t("lk.details.deleteAccountCard.description")}</TypographyH3>
        <p className="font-medium text-muted-foreground">
          {t("lk.details.deleteAccountCard.text")}
        </p>
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
                <span>{t("lk.delete")}</span>
              </Button>
            }
            title={t("lk.details.deleteAccountCard.title")}
          >
            <DeleteConfirmation title={t("lk.account")} onDelete={deleteAccount} />
          </DrawerDialogResponsive>
        </div>
      </section>
    </LkDetailsCard>
  );
};
