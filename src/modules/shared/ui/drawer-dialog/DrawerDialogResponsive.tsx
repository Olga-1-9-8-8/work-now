import { cloneElement, useState } from "react";
import { useMediaQuery } from "../../responsive";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog/Dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer/Drawer";

interface DrawerDialogResponsiveProps {
  title: string;
  description?: string;
  children: React.ReactElement;
  button: React.ReactNode;
}

export const DrawerDialogResponsive = ({
  title,
  description,
  button,
  children,
}: DrawerDialogResponsiveProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{button}</DialogTrigger>
        <DialogContent className="lg:max-w-screen-lg">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          {cloneElement(children, { onModalClose: () => setOpen(false) })}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {cloneElement(children, { onModalClose: () => setOpen(false) })}
      </DrawerContent>
    </Drawer>
  );
};
