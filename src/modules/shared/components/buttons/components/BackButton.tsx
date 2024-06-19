import { ArrowLeft } from "lucide-react";
import { useMoveBack } from "../../../hooks";
import { Button, ButtonProps } from "../../../ui/buttons/Button";

interface BackButtonProps extends ButtonProps {
  to?: string;
}

export const BackButton = ({ to, ...props }: BackButtonProps) => {
  const moveBack = useMoveBack(to);

  return (
    <Button variant="link" onClick={moveBack} className="mt-4 p-0 font-bold" {...props}>
      <ArrowLeft size={20} className="mr-1 stroke-primary-extraDark" /> Назад
    </Button>
  );
};
