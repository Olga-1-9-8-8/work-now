import { SeoMetadata } from "../navigation";
import { NotFound } from "../ui/icons";
import { TypographyH5 } from "../ui/typography/TypographyH5";

export const PageNotFound = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / 404"
        description="К сожалению, запрашиваемая вами страница не найдена."
      />
      <div className="flex flex-col items-center gap-6 p-6">
        <NotFound className="h-80 w-80" />
        <TypographyH5 className="text-center">Страница не найдена</TypographyH5>
      </div>
    </>
  );
};
