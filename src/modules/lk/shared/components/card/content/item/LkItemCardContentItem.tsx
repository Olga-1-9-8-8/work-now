import { ElementType, ReactElement } from "react";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { Tooltip } from "../../../../../../shared/ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getModalTitle } from "../../../../utils/getModalTitle";

interface LkItemCardContentItemProps {
  icon: ElementType;
  variant: "view" | "apply";
  isHiring: boolean;
  count?: number;
  children: ReactElement;
}

export const LkItemCardContentItem = ({
  icon: Icon,
  variant,
  count,
  isHiring,
  children,
}: LkItemCardContentItemProps) => {
  const { t } = useLanguageSwitcher("lk");
  return (
    <DrawerDialogResponsive
      button={
        <Button
          variant="link"
          className={`${!count && "pointer-events-none"} m-0 flex gap-2 p-0 text-sm font-semibold text-dark`}
        >
          <Icon size={20} className="stroke-primary-extraDark" />
          <Tooltip content={t("lk.card.content.tooltip")}>
            <span>
              {count
                ? variant === "view"
                  ? t("lk.card.views.description", { count })
                  : t("lk.card.applies.description", { count })
                : variant === "view"
                  ? t("lk.noViews")
                  : t("lk.noApplies")}
            </span>
          </Tooltip>
        </Button>
      }
      title={getModalTitle(
        variant === "view" ? t("lk.card.content.views.title") : t("lk.card.content.applies.title"),
        isHiring,
        t,
      )}
    >
      {children}
    </DrawerDialogResponsive>
  );
};
