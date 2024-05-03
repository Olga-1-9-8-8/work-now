import { MapPin } from "lucide-react";
import { Button } from "../../../../../../ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../../../ui/drawer-dialog/DrawerDialogResponsive";
import { Tooltip } from "../../../../../../ui/tooltip/Tooltip";
import { Map } from "../../../../../map";
import { SearchCardItemInsight } from "../../../item/SearchCardItemInsight";

interface SearchCardHeaderDetailsLocationProps {
  city: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}

export const SearchCardHeaderDetailsLocation = ({
  city,
  coordinates,
}: SearchCardHeaderDetailsLocationProps) => {
  if (!coordinates) return <SearchCardItemInsight className="gap-1" icon={MapPin} title={city} />;

  return (
    <DrawerDialogResponsive
      button={
        <Button
          variant="link"
          className={`${coordinates ? "hover:underline" : "hover:no-underline"} p-0 text-primary-extraDark`}
        >
          <Tooltip content="Посмотреть на карте">
            <div>
              <SearchCardItemInsight className="gap-1" icon={MapPin} title={city} />
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
