import { CheckIcon } from "lucide-react";

interface HomeChartsPricingItemProps {
  title: string;
}

export const HomeChartsPricingItem = ({ title }: HomeChartsPricingItemProps) => {
  return (
    <li className="flex items-center">
      <CheckIcon className="mr-2 h-4 w-4 stroke-success" />
      <span className="text-left">{title}</span>
    </li>
  );
};
