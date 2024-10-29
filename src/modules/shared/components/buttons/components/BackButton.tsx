import { ArrowLeft } from "lucide-react";
import { useMoveBack } from "../../../hooks";
import { Button, ButtonProps } from "../../../ui/buttons/Button";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";

interface BackButtonProps extends ButtonProps {
  to?: string;
  title?: string;
}

export const BackButton = ({ to, title, ...props }: BackButtonProps) => {
  const { moveBack, titleFromState } = useMoveBack(to);

  const { t } = useLanguageSwitcher("shared");

  return (
    <Button variant="link" onClick={moveBack} className="mt-4 p-0 font-bold" {...props}>
      <ArrowLeft size={20} className="mr-1 stroke-primary-extraDark" />
      {titleFromState ?? title ?? t("shared.buttons.back")}
    </Button>
  );
};
