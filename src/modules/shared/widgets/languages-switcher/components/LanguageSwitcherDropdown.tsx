import { VariantProps } from "class-variance-authority";
import { Globe } from "lucide-react";
import { memo } from "react";
import {
  InternationalizationConfig,
  LanguageType,
} from "../../../configs/internationalization/InternationalizationConfig";
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
  const { changeLanguage, language } = useLanguageSwitcher("shared");

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" {...props}>
            <Globe className="h-5 w-5 stroke-primary-light transition-colors hover:stroke-muted sm:h-6 sm:w-6 md:h-5 md:w-5" />
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
                {item.title[language as LanguageType]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});
