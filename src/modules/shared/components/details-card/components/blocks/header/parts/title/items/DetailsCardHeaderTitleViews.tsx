import { EyeIcon } from "lucide-react";
import { useAddUserViews } from "../../../../../../../../features/views/hooks/useAddUserViews";
import { Tooltip } from "../../../../../../../../ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../../../../../../widgets/languages-switcher";

interface DetailsCardHeaderTitleViewsProps {
  id: number;
  views: number;
  isHiring: boolean;
}

export const DetailsCardHeaderTitleViews = ({
  views,
  isHiring,
  id,
}: DetailsCardHeaderTitleViewsProps) => {
  useAddUserViews(id, views, isHiring);
  const { t } = useLanguageSwitcher("shared");

  return (
    <div className="my-2 flex gap-2 text-sm font-semibold text-success">
      <EyeIcon size={20} className="stroke-success" />
      <Tooltip
        content={
          isHiring
            ? t("shared.details.card.views.candidates.tooltip")
            : t("shared.details.card.views.company.tooltip")
        }
      >
        <span>{t("shared.details.card.views.count", { count: views })}</span>
      </Tooltip>
    </div>
  );
};
