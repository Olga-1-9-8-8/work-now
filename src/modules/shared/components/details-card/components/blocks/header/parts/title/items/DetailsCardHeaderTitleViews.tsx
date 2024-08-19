import { EyeIcon } from "lucide-react";
import { Tooltip } from "../../../../../../../../ui/tooltip/Tooltip";
import { getRightNounWordDeclension } from "../../../../../../../../utils/helpers";

interface DetailsCardHeaderTitleViewsProps {
  views: number;
  isHiring?: boolean;
}

export const DetailsCardHeaderTitleViews = ({
  views,
  isHiring,
}: DetailsCardHeaderTitleViewsProps) => {
  return (
    <div className="my-2 flex gap-2 text-sm font-semibold text-success">
      <EyeIcon size={20} className="stroke-success" />
      <Tooltip
        content={`Просмотрено ${isHiring ? "кандидатами" : "компаниями"}, зарегистрированными на сайте`}
      >
        <span>Просмотрено {getRightNounWordDeclension(views, "раз", ["", "а", ""])}</span>
      </Tooltip>
    </div>
  );
};
