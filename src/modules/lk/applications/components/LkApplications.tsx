import { NotExist, NotFound } from "../../../shared/components/not-found";
import { Pagination } from "../../../shared/components/pagination";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { useProfileApplies } from "../../shared/hooks/useProfileApplies";
import { LkApplicationsItem } from "./item/LkApplicationsItem";

export const LkApplications = () => {
  const { profileApplies, totalProfileAppliesCount, isProfileAppliesLoading } = useProfileApplies();

  if (isProfileAppliesLoading) return <Spinner />;
  if (!profileApplies) return <NotFound title="Элементы в Откликах" />;
  return totalProfileAppliesCount ? (
    <div className="pb-10">
      <div className="py-4">
        <TypographyH3>
          У Вас в Откликах{" "}
          <strong className="text-primary-extraDark">
            {getRightNounWordDeclension(totalProfileAppliesCount, "элемент", ["", "а", "ов"])}
          </strong>
        </TypographyH3>
        <div className="my-4 flex flex-col gap-4">
          {profileApplies.map((item) => (
            <LkApplicationsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Pagination totalCount={totalProfileAppliesCount} />
    </div>
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Отклики" />
  );
};
