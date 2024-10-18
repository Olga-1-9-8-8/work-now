import { CheckIcon } from "lucide-react";

interface HomeDetailsCardItemProps {
  title: string;
}

export const HomeDetailsCardItem = ({ title }: HomeDetailsCardItemProps) => {
  return (
    <div className="mb-4 grid grid-cols-[26px_1fr] content-center gap-3 pb-4 last:mb-0 last:pb-0 sm:pb-2 lg:pb-3">
      <CheckIcon className="stroke-success" />
      <p className="text-left text-sm font-medium text-muted-foreground ">{title}</p>
    </div>
  );
};
