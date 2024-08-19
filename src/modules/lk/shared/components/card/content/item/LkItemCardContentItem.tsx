import { ElementType, ReactElement } from "react";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { Tooltip } from "../../../../../../shared/ui/tooltip/Tooltip";
import { getRightNounWordDeclension } from "../../../../../../shared/utils/helpers";

interface LkItemCardContentItemProps {
  icon: ElementType;
  title: string;
  count?: number;
  modalTitle: string;
  children: ReactElement;
}

export const LkItemCardContentItem = ({
  icon: Icon,
  title,
  count,
  modalTitle,
  children,
}: LkItemCardContentItemProps) => {
  return (
    <DrawerDialogResponsive
      button={
        <Button
          variant="link"
          className={`${!count && "pointer-events-none"} m-0 flex gap-2 p-0 text-sm font-semibold text-dark`}
        >
          <Icon size={20} className="stroke-primary-extraDark" />
          <Tooltip content="Нажми для просмотра списка">
            <span>
              {count
                ? `${getRightNounWordDeclension(count, title, ["", "а", "ов"])}`
                : `Нет ${title}ов`}
            </span>
          </Tooltip>
        </Button>
      }
      title={modalTitle}
    >
      {children}
    </DrawerDialogResponsive>
  );
};
