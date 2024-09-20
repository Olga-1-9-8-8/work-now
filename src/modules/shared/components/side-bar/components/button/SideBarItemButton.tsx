import { useCallback } from "react";

interface SideBarItemButtonResetProps {
  onClick: () => void;
}

export const SideBarItemButtonReset = ({ onClick }: SideBarItemButtonResetProps) => {
  const handleReset = useCallback(
    (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );

  return (
    <span
      role="button"
      className="p-0 text-sm text-muted-foreground underline decoration-muted-foreground decoration-dashed"
      onClick={handleReset}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleReset(e);
        }
      }}
    >
      Сбросить
    </span>
  );
};