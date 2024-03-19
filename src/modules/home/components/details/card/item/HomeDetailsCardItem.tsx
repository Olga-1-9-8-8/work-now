import { CheckIcon } from "lucide-react";

interface HomeDetailsCardItemProps {
  title: string;
}

export const HomeDetailsCardItem = ({ title }: HomeDetailsCardItemProps) => {
  return (
    <div className="mb-4 grid grid-cols-[26px_1fr] content-center gap-3 pb-4 last:mb-0 last:pb-0">
      <CheckIcon className="stroke-success" />
      <div className="items-start">
        <p className="text-sm font-medium leading-none text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};
