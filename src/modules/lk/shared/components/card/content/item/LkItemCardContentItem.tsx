import { ElementType } from "react";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { Tooltip } from "../../../../../../shared/ui/tooltip/Tooltip";
import { getRightNounWordDeclension } from "../../../../../../shared/utils/helpers";

interface LkItemCardContentItemProps {
  icon: ElementType;
  title: string;
  count?: number;
  onClick?: () => void;
}

export const LkItemCardContentItem = ({
  icon: Icon,
  title,
  count,
  onClick,
}: LkItemCardContentItemProps) => {
  return (
    <Button
      onClick={onClick}
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
  );
};
