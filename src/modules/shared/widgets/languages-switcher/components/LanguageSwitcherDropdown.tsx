import { VariantProps } from "class-variance-authority";
import { Globe } from "lucide-react";
import { memo } from "react";
import { InternationalizationConfig } from "../../../configs/internationalization/InternationalizationConfig";
import { Button, buttonVariants } from "../../../ui/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu/DropdownMenu";
import { useLanguageSwitcher } from "../hooks/useLanguageSwitcher";

interface LanguagesSwitcherButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const LanguageSwitcherDropdown = memo(({ ...props }: LanguagesSwitcherButtonProps) => {
  const { t, changeLanguage, language } = useLanguageSwitcher("header");

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" {...props}>
            <Globe className="h-6 w-6 stroke-primary-light transition-colors hover:stroke-muted md:h-5 md:w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-48">
          <DropdownMenuRadioGroup value={language} onValueChange={changeLanguage}>
            {InternationalizationConfig.map((item) => (
              <DropdownMenuRadioItem
                className="text-sm font-medium text-primary-dark"
                key={item.value}
                value={item.value}
              >
                {t(item.title)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});