import { VariantProps } from "class-variance-authority";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { InternationalizationConfig } from "../../../configs/internationalization/InternationalizationConfig";
import { Button, buttonVariants } from "../../../ui/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu/DropdownMenu";

interface LanguagesSwitcherButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const LanguagesSwitcherButton = ({ ...props }: LanguagesSwitcherButtonProps) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation("header");

  const handleChange = (value: string) => {
    changeLanguage(value);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" {...props}>
            <Globe className="size-6 stroke-primary-light hover:stroke-muted lg:size-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={language} onValueChange={handleChange}>
            {InternationalizationConfig.map((item) => (
              <DropdownMenuRadioItem className="text-base" key={item.value} value={item.value}>
                {t(item.title)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
