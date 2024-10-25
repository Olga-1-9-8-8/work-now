import { useNavigate } from "react-router-dom";
import { LanguageType } from "../../../../shared/configs";
import { LkNavItems } from "../../../../shared/configs/lkNavConfig";
import { Avatar } from "../../../../shared/features/avatar";
import { useResponsiveContext } from "../../../../shared/responsive";
import { useLogout } from "../../../../shared/services/auth";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../../../../shared/ui/card/Card";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { cn } from "../../../../shared/utils/cn";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";

interface LkHomeCardProps {
  item: LkNavItems;
  className?: string;
  description?: string;
}

export const LkHomeCard = ({ item, description, className }: LkHomeCardProps) => {
  const navigate = useNavigate();
  const { logout, isLogoutPending } = useLogout();
  const isMobile = useResponsiveContext();
  const { language } = useLanguageSwitcher("lk");

  const LinkIcon = item.linkIcon;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (item.isExit) {
      logout();
    } else {
      navigate(item.href);
    }
  };

  return (
    <Card
      variant="clickable"
      onClick={() => navigate(item.href)}
      className={cn(
        "mt-6 flex min-h-56 w-full flex-col justify-between p-8 pb-0 lg:w-2/5",
        className,
      )}
    >
      <CardHeader className="flex flex-col items-center gap-6 sm:flex-row">
        <Avatar className="h-20 w-20" icon={item.icon} />
        <TypographyH2 className="text-primary-extraDark">
          {item.title[language as LanguageType]}
        </TypographyH2>
      </CardHeader>
      {description && !item.isExit && (
        <CardContent className="flex font-medium text-success">{description}</CardContent>
      )}
      {item.linkTitle && (
        <CardFooter className="flex sm:justify-end">
          <Button
            onClick={handleClick}
            disabled={isLogoutPending}
            variant={isMobile ? "default" : "link"}
            size="lg"
            className="flex w-full gap-2 pr-0 text-base sm:w-auto sm:pr-6"
          >
            <span>{item.linkTitle[language as LanguageType]}</span>
            {LinkIcon && <LinkIcon className="h-2/4 w-2/4" />}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
