import { cn } from "../../utils";
import { SpinnerIcon } from "../icons";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <SpinnerIcon className={cn("h-12 w-12 animate-spin text-primary-extraDark/60", className)} />
    </div>
  );
};
