import { useState } from "react";
import { Button } from "../buttons/Button";

interface TextExpanderProps {
  collapsedNumberWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  expanded?: boolean;
  children: string;
  className?: string;
}

export const TextExpander = ({
  collapsedNumberWords = 40,
  expandButtonText = "Показать больше",
  collapseButtonText = "Свернуть",
  expanded = false,
  className,
  children,
}: TextExpanderProps) => {
  const [isOpen, setIsOpen] = useState(expanded);

  const displayText = isOpen
    ? children
    : `${children.split(" ").slice(0, collapsedNumberWords).join(" ")}...`;

  return (
    <div className={className}>
      <span>{displayText}</span>
      <Button
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {isOpen ? collapseButtonText : expandButtonText}
      </Button>
    </div>
  );
};
