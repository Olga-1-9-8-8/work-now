import { Pencil } from "lucide-react";
import { Avatar } from "../../../../shared/components/avatar";
import { User } from "../../../../shared/components/user/types/User";
import { Button } from "../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { LkDetailsForm } from "../form/LkDetailsForm";
import { LkDetailsCard } from "./LkDetailsCard";

interface LkDetailsPersonalDataCardContentProps {
  user: Partial<User>;
}

export const LkDetailsPersonalDataCardContent = ({
  user,
}: LkDetailsPersonalDataCardContentProps) => {
  return (
    <LkDetailsCard title="Личные данные">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20" user={user} />
          <TypographyH2 className="text-primary-extraDark">{user.name || "Аноним"}</TypographyH2>
          <DrawerDialogResponsive
            button={
              <Button size="icon" variant="ghost" className="hover:bg-transparent">
                <Pencil className="stroke-primary hover:fill-primary-extraDark hover:stroke-primary-extraDark" />
              </Button>
            }
            title="Изменить данные профиля"
          >
            <LkDetailsForm />
          </DrawerDialogResponsive>
        </div>
        <p className="font-medium text-muted-foreground">Пол: {user.gender || "Не указан"} </p>
        <p className="font-medium text-muted-foreground">Телефон: {user.phone || "Не указан"}</p>
      </section>
    </LkDetailsCard>
  );
};
