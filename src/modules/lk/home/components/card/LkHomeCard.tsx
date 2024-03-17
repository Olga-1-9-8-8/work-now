import { useNavigate } from "react-router-dom";
import { Avatar } from "../../../../shared/components/avatar";
import { LkItem } from "../../../../shared/configs";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../../../../shared/ui/card/Card";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { cn } from "../../../../shared/utils/cn";

interface LkHomeCardProps {
  item: LkItem;
  className?: string;
}

export const LkHomeCard = ({ item, className }: LkHomeCardProps) => {
  const navigate = useNavigate();
  const LinkIcon = item.linkIcon;
  return (
    <Card
      variant="clickable"
      onClick={() => navigate(item.href)}
      className={cn("mt-6 flex min-h-56 w-2/5 flex-col justify-between p-8 pb-0", className)}
    >
      <CardHeader className="flex flex-row items-center gap-6">
        <Avatar className="h-20 w-20" icon={item.icon} />
        <TypographyH2 className="text-primary-extraDark">{item.title}</TypographyH2>
      </CardHeader>
      {item.count && (
        <CardContent className="flex font-medium text-muted-foreground">
          Всего: {item.count}
        </CardContent>
      )}
      <CardFooter className="flex justify-end pr-0">
        <Button
          onClick={(e) => {
            if (item.linkHref) {
              e.stopPropagation();
              navigate(item.linkHref);
            }
          }}
          variant="link"
          size="lg"
          className="flex gap-2 text-base"
        >
          <span>{item.linkTitle}</span>
          <LinkIcon className="h-2/4 w-2/4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
