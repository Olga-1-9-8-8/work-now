import { UniversalItemApiTypeInput } from "../../../../shared/api";
import { LanguageType } from "../../../../shared/configs";
import { UniversalJobType } from "../../../../shared/types";
import { Card } from "../../../../shared/ui/card/Card";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher";
import { createJobDuplicateToApi } from "../../utils/createJobDuplicateToApi";
import { LkItemCardContent } from "./content/LkItemCardContent";
import { LkItemCardFooter } from "./footer/LkItemCardFooter";
import { LkItemCardHeader } from "./header/LkItemCardHeader";

interface LkItemCardProps {
  isHiring?: boolean;
  item: UniversalJobType;
  onCreateItem: (item: Omit<UniversalItemApiTypeInput, "id"> & { id?: number }) => void;
  isItemDuplicating: boolean;
  onDeleteItem: () => void;
  isItemDeleting: boolean;
  children: React.ReactElement;
}

export const LkItemCard = ({
  item,
  onCreateItem,
  onDeleteItem,
  isItemDuplicating,
  isItemDeleting,
  isHiring = false,
  children,
}: LkItemCardProps) => {
  const { t, language } = useLanguageSwitcher("lk");
  return (
    <Card className="start relative flex flex-row items-stretch justify-between gap-4 p-5 md:flex-col">
      <div className="flex flex-col gap-2">
        <LkItemCardHeader
          position={item.position}
          salary={item.salary}
          creationDate={item.creationDate}
          updatedDate={item.updatedAt}
          id={item.id}
        />
        <LkItemCardContent
          id={item.id}
          views={item.views}
          applicantsQuantity={item.applicantsQuantity}
          isHiring={isHiring}
        />
      </div>

      <LkItemCardFooter
        creationDate={item.creationDate}
        position={item.position}
        onDeleteItem={onDeleteItem}
        isItemDeleting={isItemDeleting}
        onDuplicateItem={() =>
          onCreateItem(createJobDuplicateToApi(item, isHiring, t, language as LanguageType))
        }
        isItemDuplicating={isItemDuplicating}
      >
        {children}
      </LkItemCardFooter>
    </Card>
  );
};
