import { MapPin } from "lucide-react";
import { Button } from "../../../ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../ui/drawer-dialog/DrawerDialogResponsive";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { CardItemInsight } from "../../card";
import { Map } from "./Map";

interface MapBadgeProps {
  city: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}

export const MapBadge = ({ city, coordinates }: MapBadgeProps) => {
  const { t } = useLanguageSwitcher("shared");

  if (!coordinates)
    return <CardItemInsight className="items-center gap-1" icon={MapPin} title={city} />;

  return (
    <DrawerDialogResponsive
      button={
        <Button
          variant="link"
          onClick={(e) => e.stopPropagation()}
          className={`${coordinates ? "hover:underline" : "hover:no-underline"} p-0 text-primary-extraDark`}
        >
          <Tooltip content={t("shared.map.tooltip")}>
            <div>
              <CardItemInsight className="gap-1" icon={MapPin} title={city} />
            </div>
          </Tooltip>
        </Button>
      }
      title={t("shared.map.title")}
    >
      <Map position={[Number(coordinates.lat), Number(coordinates.lng)]} />
    </DrawerDialogResponsive>
  );
};
