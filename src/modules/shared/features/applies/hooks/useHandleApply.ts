import { useCallback } from "react";
import { useAddApply } from "./useAddApply";
import { useDeleteApply } from "./useDeleteApply.";

export const useHandleApply = (id: number, isInApplies?: boolean) => {
  const { deleteApply, isApplyDeleting } = useDeleteApply();
  const { addApply, isApplyAdding } = useAddApply();

  const handleApplyClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (isInApplies) {
        deleteApply(id);
      } else {
        addApply(id);
      }
    },
    [addApply, deleteApply, id, isInApplies],
  );

  return { handleApplyClick, isApplyDeleting, isApplyAdding };
};
