import { Plus } from "lucide-react";
import { Button } from "../../../ui/buttons/Button";

interface CreateButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}
export const CreateButton = ({ title, disabled, onClick }: CreateButtonProps) => {
  return (
    <Button className="w-full md:w-auto" disabled={disabled} onClick={onClick} variant="success">
      <Plus className="} mr-3 stroke-white group-hover:fill-destructive" />
      Создать {title}
    </Button>
  );
};
