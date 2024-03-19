import { CalendarDays, Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/buttons/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../ui/card/Card";
import { Separator } from "../../../ui/separator/Separator";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { Avatar } from "../../avatar";
import { WorkListItem } from "../types/WorkList";
import { SearchCardDetailsBlock } from "./block/SearchCardDetailsBlock";
import { SearchCardItemInsight } from "./item/SearchCardItemInsight";

interface SearchCardProps {
  data: WorkListItem;
  image?: string;
  onClick: (id: number) => void;
}

export const SearchCard = ({ data, image, onClick }: SearchCardProps) => {
  const [isApply, setIsApply] = useState(false);

  const { position, fullName, salary, employment, city, schedule, id, employmentStartDate } = data;

  return (
    <Card variant="clickable" onClick={() => onClick(id)}>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16" user={{ image, name: fullName }} />
              <div>
                <CardTitle>{position}</CardTitle>
                <TypographyH5 className="font-medium text-primary-extraDark">
                  {fullName}
                </TypographyH5>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <SearchCardItemInsight className="gap-1" icon={MapPin} title={city} />
              <Button size="icon" variant="ghost" className="hover:bg-transparent">
                <Heart className="stroke-destructive hover:fill-destructive" />
              </Button>
            </div>
          </div>

          <SearchCardItemInsight
            icon={CalendarDays}
            title="Дата выхода :"
            badges={[{ title: employmentStartDate ?? "Немедленно" }]}
          />
        </div>

        <Separator />
      </CardHeader>
      <CardContent>
        <SearchCardDetailsBlock salary={salary} employment={employment} schedule={schedule} />
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsApply((previous) => !previous);
            onClick(id);
          }}
          variant={isApply ? "success" : "default"}
        >
          {isApply ? "Вы откликнулись" : "Откликнуться"}
        </Button>
      </CardFooter>
    </Card>
  );
};
