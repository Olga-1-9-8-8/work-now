import { Zap } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { Button } from "../../../ui/buttons/Button";
import { useAddApply } from "../hooks/useAddApply";
import { useDeleteApply } from "../hooks/useDeleteApply.";

interface AppliedButtonProps {
  id: number | string;
  isInApplies?: boolean;
}
export const AppliedButton = ({ id, isInApplies }: AppliedButtonProps) => {
  const [isApplied, setIsApplied] = useState(false);
  const { deleteApply, isApplyDeleting } = useDeleteApply();
  const { addApply, isApplyAdding } = useAddApply();

  useLayoutEffect(() => {
    if (isInApplies) setIsApplied(isInApplies);
  }, [isInApplies]);

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsApplied((prevIsApplied) => {
      if (prevIsApplied) {
        deleteApply(id);
      } else {
        addApply(id);
      }

      return !prevIsApplied;
    });
  };

  return (
    <Button
      className="w-full lg:w-auto"
      disabled={isApplyDeleting || isApplyAdding}
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
