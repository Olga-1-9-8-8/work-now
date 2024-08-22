import { ElementType, ReactElement } from "react";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { Tooltip } from "../../../../../../shared/ui/tooltip/Tooltip";
import { getRightNounWordDeclension } from "../../../../../../shared/utils/helpers";

interface LkItemCardContentItemProps {
  icon: ElementType;
  title: string;
  titleModal: string;
  count?: number;
  children: ReactElement;
}

export const LkItemCardContentItem = ({
  icon: Icon,
  title,
  titleModal,
  count,
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
      title={titleModal}
    >
      {children}
    </DrawerDialogResponsive>
  );
};
