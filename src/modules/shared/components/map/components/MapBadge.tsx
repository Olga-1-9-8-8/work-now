import { MapPin } from "lucide-react";
import { CardItemInsight } from "../../card";

interface MapBadgeProps {
  city: string;
}

export const MapBadge = ({ city }: MapBadgeProps) => {
  return <CardItemInsight className="items-center gap-1" icon={MapPin} title={city} />;
};
