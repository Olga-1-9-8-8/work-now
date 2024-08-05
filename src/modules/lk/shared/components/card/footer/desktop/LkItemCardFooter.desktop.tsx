import { TrashIcon } from "lucide-react";
import { DeleteConfirmation } from "../../../../../../shared/components/delete-cofirmation";
import { useAuthContext } from "../../../../../../shared/services/auth";
import { UserEntity } from "../../../../../../shared/types";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { CardFooter } from "../../../../../../shared/ui/card/Card";
import { DrawerDialogResponsive } from "../../../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { formattedTimeString } from "../../../../../../shared/utils/helpers";

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

  return (
    <CardFooter className="flex justify-between p-0">
      <div className="flex gap-4">
        <DrawerDialogResponsive
          button={<Button>Редактировать</Button>}
          title={`Редактировать ${isCompany ? "вакансию" : "резюме"} ${position}`}
          description={`Дата создания: ${formattedTimeString(creationDate)}`}
        >
          {children}
        </DrawerDialogResponsive>

        <Button onClick={onDuplicateItem} disabled={isItemDuplicating}>
          Дублировать
        </Button>
      </div>
      <DrawerDialogResponsive
        button={
          <Button variant="destructive" size="icon">
            <TrashIcon />
          </Button>
        }
        title={`Удаление ${isCompany ? "вакансии" : "резюме"} ${position}`}
      >
        <DeleteConfirmation
          disabled={isItemDeleting}
          title={isCompany ? "вакансия" : "резюме"}
          onDelete={onDeleteItem}
        />
      </DrawerDialogResponsive>
    </CardFooter>
  );
};
