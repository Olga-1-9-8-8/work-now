import { MapPin } from "lucide-react";
import { Button } from "../../../ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../ui/drawer-dialog/DrawerDialogResponsive";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
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
          <Tooltip content="Посмотреть на карте">
            <div>
              <CardItemInsight className="gap-1" icon={MapPin} title={city} />
            </div>
          </Tooltip>
        </Button>
      }
      title="Карта"
    >
      <Map position={[Number(coordinates.lat), Number(coordinates.lng)]} />
    </DrawerDialogResponsive>
  );
};
