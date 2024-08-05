import { Copy, MoreVertical, Pencil, TrashIcon } from "lucide-react";
import { cloneElement, useState } from "react";
import { DeleteConfirmation } from "../../../../../../shared/components/delete-cofirmation";
import { useAuthContext } from "../../../../../../shared/services/auth";
import { UserEntity } from "../../../../../../shared/types";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../../../../shared/ui/drawer/Drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../../shared/ui/dropdown-menu/DropdownMenu";
import { TypographyH6 } from "../../../../../../shared/ui/typography/TypographyH6";
import { formattedTimeString } from "../../../../../../shared/utils/helpers";

interface LkItemCardFooterMobileProps {
  position: string;
  creationDate: Date;
  onDuplicateItem: () => void;
  isItemDuplicating: boolean;
  onDeleteItem: () => void;
  isItemDeleting: boolean;
  children: React.ReactElement;
}

export const LkItemCardFooterMobile = ({
  position,
  creationDate,
  onDuplicateItem,
  onDeleteItem,
  isItemDuplicating,
  isItemDeleting,
  children,
}: LkItemCardFooterMobileProps) => {
  const { role } = useAuthContext();
  const [open, setOpen] = useState(false);

  const isCompany = role === UserEntity.Company;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52">
        <DropdownMenuItem
          className="flex cursor-pointer gap-4 "
          onClick={onDuplicateItem}
          disabled={isItemDuplicating}
        >
          <Copy size={22} className="stroke-primary-extraDark" />
          <TypographyH6 className="text-primary-extraDark">Дублировать</TypographyH6>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="flex cursor-pointer gap-4"
            >
              <Pencil size={22} className="stroke-primary-extraDark" />
              <TypographyH6 className="text-primary-extraDark">Редактировать</TypographyH6>
            </DropdownMenuItem>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                Редактировать {isCompany ? "вакансию" : "резюме"} {position}
              </DrawerTitle>
              <DrawerDescription>
                Дата создания: {formattedTimeString(creationDate)}
              </DrawerDescription>
            </DrawerHeader>
            {cloneElement(children, { onModalClose: () => setOpen(false) })}
          </DrawerContent>
        </Drawer>

        <DropdownMenuSeparator />

        <Drawer>
          <DrawerTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="flex cursor-pointer gap-4"
            >
              <TrashIcon size={22} className="stroke-primary-extraDark" />
              <TypographyH6 className="text-primary-extraDark">Удалить</TypographyH6>
            </DropdownMenuItem>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                Удаление {isCompany ? "вакансии" : "резюме"} {position}
              </DrawerTitle>
            </DrawerHeader>
            <DeleteConfirmation
              disabled={isItemDeleting}
              title={isCompany ? "вакансия" : "резюме"}
              onDelete={onDeleteItem}
            />
          </DrawerContent>
        </Drawer>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
