import { VariantProps } from "class-variance-authority";
import { Globe } from "lucide-react";
import { memo } from "react";
import {
  InternationalizationConfig,
  LanguageType,
} from "../../../configs/internationalization/InternationalizationConfig";
import { useUrl } from "../../../hooks";
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
  const { clearAllParams } = useUrl();

  const { changeLanguage, language } = useLanguageSwitcher("shared");

  const handleChangeLanguage = (value: string) => {
    changeLanguage(value);
    clearAllParams();
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" {...props}>
            <Globe className="h-5 w-5 stroke-primary-light transition-colors hover:stroke-muted sm:h-6 sm:w-6 md:h-5 md:w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={6} align="end" className="min-h-32 min-w-48">
          <DropdownMenuRadioGroup value={language} onValueChange={handleChangeLanguage}>
            {InternationalizationConfig.map((item) => {
              const Icon = item.icon;

              return (
                <DropdownMenuRadioItem
                  className="text-sm font-medium text-primary-dark"
                  key={item.value}
                  value={item.value}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-6 w-6" />
                    {item.title[language as LanguageType]}
                  </div>
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});
