import { Eye } from "lucide-react";

interface DetailsCardHeaderTitleViewsProps {
  views?: number;
}

export const DetailsCardHeaderTitleViews = ({ views }: DetailsCardHeaderTitleViewsProps) => {
  if (!views) return null;
  return (
    <div className="flex items-center gap-1 font-medium">
      <Eye size={17} />
      <span>{views}</span>
    </div>
  );
};
