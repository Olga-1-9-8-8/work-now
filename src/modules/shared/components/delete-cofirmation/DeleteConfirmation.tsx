import { Button } from "../../ui/buttons/Button";
import { TypographyH5 } from "../../ui/typography/TypographyH5";
import { useLanguageSwitcher } from "../../widgets/languages-switcher/hooks/useLanguageSwitcher";

interface DeleteConfirmationProps {
  title: string;
  onDelete: () => void;
  disabled?: boolean;
}

export const DeleteConfirmation = ({ title, onDelete, disabled }: DeleteConfirmationProps) => {
  const { t } = useLanguageSwitcher("shared");
  return (
    <div className="flex flex-col gap-6">
      <TypographyH5 className="text-destructive">
        {t("shared.deleteConfirmation.title")} {title}?
      </TypographyH5>
      <p className="text-muted-foreground">
        {t("shared.deleteConfirmation.restore")} {title} {t("shared.deleteConfirmation.text")}
      </p>
      <Button onClick={onDelete} variant="destructive" disabled={disabled}>
        {t("shared.delete")}
      </Button>
    </div>
  );
};
