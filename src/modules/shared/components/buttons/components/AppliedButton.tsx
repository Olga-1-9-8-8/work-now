import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../../ui/buttons/Button";

interface AppliedButtonProps {
  isInApply?: boolean;
  onClick: (isApplied: boolean) => void;
  disabled?: boolean;
}
export const AppliedButton = ({ disabled, onClick, isInApply }: AppliedButtonProps) => {
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    if (isInApply) setIsApplied(isInApply);
  }, [isInApply]);

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
