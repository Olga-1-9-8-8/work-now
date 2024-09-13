import { LkItemCardContentApplicants } from "./item/LkItemCardContentApplicants";
import { LkItemCardContentViews } from "./item/LkItemCardContentViews";

interface LkItemCardContentProps {
  id: number;
  isHiring: boolean;
  views?: number;
  applicantsQuantity?: number;
}

export const LkItemCardContent = ({
  id,
  views,
  applicantsQuantity,
  isHiring,
}: LkItemCardContentProps) => (
  <div className="flex gap-4">
    <LkItemCardContentViews id={id} views={views} isHiring={isHiring} />
    <LkItemCardContentApplicants
      id={id}
      applicantsQuantity={applicantsQuantity}
      isHiring={isHiring}
    />
  </div>
);
