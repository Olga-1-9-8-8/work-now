import { Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/buttons/Button";

interface AppliedButtonProps {
  onClick: (isApplied: boolean) => void;
  disabled?: boolean;
}
export const AppliedButton = ({ disabled, onClick }: AppliedButtonProps) => {
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsApplied((prevIsApplied) => {
      onClick(!prevIsApplied);
      return !prevIsApplied;
    });
  };

  return (
    <Button
      className="w-full lg:w-auto"
      disabled={disabled}
      onClick={handleApplyClick}
      variant={isApplied ? "destructive" : "success"}
    >
      <Zap
        className={`mr-3 stroke-white group-hover:fill-destructive ${isApplied && "fill-destructive"}`}
      />
      {isApplied ? "Вы откликнулись" : "Откликнуться"}
    </Button>
  );
};
