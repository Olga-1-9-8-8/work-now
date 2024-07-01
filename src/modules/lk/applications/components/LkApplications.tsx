import { Pagination } from "../../../shared/components/pagination";
import { AppliesType } from "../../../shared/features/applies";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { LkCard } from "../../shared/components";

interface LkAppliesProps {
  count: number;
  applies: AppliesType[];
}

export const LkApplications = ({ applies, count }: LkAppliesProps) => {
  return (
    <div className="pb-10">
      <div className="py-4">
        <TypographyH3>
          У Вас в Откликах{" "}
          <strong className="text-primary-extraDark">
            {getRightNounWordDeclension(count, "элемент", ["", "а", "ов"])}
          </strong>
        </TypographyH3>
        <div className="my-4 flex flex-col gap-4">
          {applies.map((data) => (
            <LkCard key={data.id} resumeId={data.resumeId} vacancyId={data.vacancyId} />
          ))}
        </div>
      </div>
      <Pagination totalCount={count} />
    </div>
  );
};
