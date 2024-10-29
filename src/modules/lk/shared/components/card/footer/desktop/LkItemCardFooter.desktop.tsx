import { TrashIcon } from "lucide-react";
import { DeleteConfirmation } from "../../../../../../shared/components/delete-cofirmation";
import { LanguageType } from "../../../../../../shared/configs";
import { useAuthContext } from "../../../../../../shared/services/auth";
import { UserEntity } from "../../../../../../shared/types";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { CardFooter } from "../../../../../../shared/ui/card/Card";
import { DrawerDialogResponsive } from "../../../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { formattedTimeString } from "../../../../../../shared/utils/helpers";
import { useLanguageSwitcher } from "../../../../../../shared/widgets/languages-switcher";

interface LkItemCardFooterDesktopProps {
  position: string;
  creationDate: Date;
  onDuplicateItem: () => void;
  isItemDuplicating: boolean;
  onDeleteItem: () => void;
  isItemDeleting: boolean;
  children: React.ReactElement;
}

export const LkItemCardFooterDesktop = ({
  position,
  creationDate,
  onDuplicateItem,
  onDeleteItem,
  isItemDuplicating,
  isItemDeleting,
  children,
}: LkItemCardFooterDesktopProps) => {
  const { role } = useAuthContext();

  const isCompany = role === UserEntity.Company;
  const { t, language } = useLanguageSwitcher("lk");

  return (
    <CardFooter className="flex justify-between p-0">
      <div className="flex gap-4">
        <DrawerDialogResponsive
          button={<Button>{t("lk.card.editButton")}</Button>}
          title={`${t("lk.card.editButton")} ${isCompany ? t("lk.card.titleVacancy") : t("lk.card.linkTitleResume")} ${position}`}
          description={`${t("lk.card.editButtonDescription")} ${formattedTimeString(creationDate, language as LanguageType)}`}
        >
          {children}
        </DrawerDialogResponsive>

        <Button onClick={onDuplicateItem} disabled={isItemDuplicating}>
          {t("lk.card.duplicateButton")}
        </Button>
      </div>
      <DrawerDialogResponsive
        button={
          <Button variant="destructive" size="icon">
            <TrashIcon />
          </Button>
        }
        title={`${t("lk.card.deleteButton")} ${isCompany ? t("lk.card.linkTitleVacancy") : t("lk.card.linkTitleResume")} ${position}`}
      >
        <DeleteConfirmation
          disabled={isItemDeleting}
          title={isCompany ? t("lk.card.titleVacancy") : t("lk.card.linkTitleResume")}
          onDelete={onDeleteItem}
        />
      </DrawerDialogResponsive>
    </CardFooter>
  );
};
