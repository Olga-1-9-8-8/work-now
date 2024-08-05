import { useResponsiveContext } from "../../../../../shared/responsive";
import { LkItemCardFooterDesktop } from "./desktop/LkItemCardFooter.desktop";
import { LkItemCardFooterMobile } from "./mobile/LkVacanciesCardFooter.mobile";

interface LkResumesCardFooterProps {
  position: string;
  creationDate: Date;
  onDuplicateItem: () => void;
  isItemDuplicating: boolean;
  onDeleteItem: () => void;
  isItemDeleting: boolean;
  children: React.ReactElement;
}

export const LkItemCardFooter = ({
  position,
  creationDate,
  onDuplicateItem,
  onDeleteItem,
  isItemDuplicating,
  isItemDeleting,
  children,
}: LkResumesCardFooterProps) => {
  const isMobile = useResponsiveContext();
  const Footer = isMobile ? LkItemCardFooterMobile : LkItemCardFooterDesktop;

  return (
    <Footer
      creationDate={creationDate}
      position={position}
      onDeleteItem={onDeleteItem}
      isItemDeleting={isItemDeleting}
      onDuplicateItem={onDuplicateItem}
      isItemDuplicating={isItemDuplicating}
    >
      {children}
    </Footer>
  );
};
