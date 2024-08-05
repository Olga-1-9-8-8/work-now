import { UniversalItemApiTypeInput } from "../../../../shared/api";
import { UniversalJobType } from "../../../../shared/types";
import { Card } from "../../../../shared/ui/card/Card";
import { mapItemToApiType } from "../../../../shared/utils";
import { LkItemCardContent } from "./content/LkItemCardContent";
import { LkItemCardFooter } from "./footer/LkItemCardFooter";
import { LkItemCardHeader } from "./header/LkItemCardHeader";

interface LkItemCardProps {
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
  children,
}: LkItemCardProps) => {
  const handleDuplicateItem = () => {
    const { id, isInApplies, isInFavorites, ...itemData } = item;
    const newItemData = {
      ...itemData,
      position: `Копия - ${itemData.position}`,
      creationDate: new Date(),
    };
    const newItem = mapItemToApiType(newItemData, itemData.userId);
    onCreateItem(newItem);
  };

  return (
    <Card className="start flex flex-row items-stretch justify-between gap-4 p-5 md:flex-col ">
      <div className="flex flex-col gap-2">
        <LkItemCardHeader
          position={item.position}
          salary={item.salary}
          creationDate={item.creationDate}
          updatedDate={item.updatedAt}
          id={item.id}
        />
        <LkItemCardContent views={item.views} applicantsQuantity={item.applicantsQuantity} />
      </div>

      <LkItemCardFooter
        creationDate={item.creationDate}
        position={item.position}
        onDeleteItem={onDeleteItem}
        isItemDeleting={isItemDeleting}
        onDuplicateItem={handleDuplicateItem}
        isItemDuplicating={isItemDuplicating}
      >
        {children}
      </LkItemCardFooter>
    </Card>
  );
};
