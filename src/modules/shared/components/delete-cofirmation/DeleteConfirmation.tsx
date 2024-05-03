import { Button } from "../../ui/buttons/Button";
import { TypographyH5 } from "../../ui/typography/TypographyH5";

interface DeleteConfirmationProps {
  title: string;
  onDelete: () => void;
}

export const DeleteConfirmation = ({ title, onDelete }: DeleteConfirmationProps) => {
  return (
    <div className="flex flex-col gap-6">
      <TypographyH5 className="text-destructive">
        Вы уверены что хотите удалить навсегда {title}?
      </TypographyH5>
      <p className="text-muted-foreground"> Восстановить {title} будет невозможно!</p>
      <Button onClick={onDelete} variant="destructive">
        Удалить
      </Button>
    </div>
  );
};
