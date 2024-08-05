import { Eye, Mail } from "lucide-react";
import { CardItemInsight } from "../../../../../shared/components/card";
import { getRightNounWordDeclension } from "../../../../../shared/utils/helpers";

interface LkItemCardContentProps {
  views?: number;
  applicantsQuantity?: number;
}

export const LkItemCardContent = ({ views, applicantsQuantity }: LkItemCardContentProps) => {
  return (
    <div className="flex gap-4">
      <CardItemInsight
        icon={Eye}
        title={
          views ? getRightNounWordDeclension(views, "просмотр", ["", "а", "ов"]) : "Нет просмотров"
        }
      />
      <CardItemInsight
        icon={Mail}
        title={
          applicantsQuantity
            ? getRightNounWordDeclension(applicantsQuantity, "отклик", ["", "а", "ов"])
            : "Нет откликов"
        }
      />
    </div>
  );
};
