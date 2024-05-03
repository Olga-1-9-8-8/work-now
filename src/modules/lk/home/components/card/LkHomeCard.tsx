import { useNavigate } from "react-router-dom";
import { Avatar } from "../../../../shared/components/avatar";
import { LkNavItems } from "../../../../shared/configs/lkNavConfig";
import { useResponsiveContext } from "../../../../shared/responsive";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../../../../shared/ui/card/Card";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { cn } from "../../../../shared/utils/cn";

interface LkHomeCardProps {
  item: LkNavItems;
  className?: string;
  description?: string;
}

export const LkHomeCard = ({ item, description, className }: LkHomeCardProps) => {
  const navigate = useNavigate();

  const isMobile = useResponsiveContext();
  const LinkIcon = item.linkIcon;
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
        <TypographyH2 className="text-primary-extraDark">{item.title}</TypographyH2>
      </CardHeader>
      {description && (
        <CardContent className="flex font-medium text-muted-foreground">{description}</CardContent>
      )}
      <CardFooter className="flex sm:justify-end">
        <Button
          onClick={(e) => {
            if (item.linkHref) {
              e.stopPropagation();
              navigate(item.linkHref);
            }
          }}
          variant={isMobile ? "default" : "link"}
          size="lg"
          className="flex w-full gap-2 pr-0 text-base sm:w-auto sm:pr-6"
        >
          <span>{item.linkTitle}</span>
          {LinkIcon && <LinkIcon className="h-2/4 w-2/4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};
