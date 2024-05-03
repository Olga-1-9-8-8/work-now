import { Pencil } from "lucide-react";
import { Avatar } from "../../../../shared/components/avatar";
import { User } from "../../../../shared/components/user/types/User";
import { Button } from "../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import {
  RadioGroupItemWithLabel,
  RadioGroupWithLabel,
} from "../../../../shared/ui/radio/RadioGroupWithLabel";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { useUpdateLkDetail } from "../../hooks/useUpdateLkDetail";
import { LkDetailsCard } from "../card/LkDetailsCard";
import { LkDetailsForm } from "../form/LkDetailsForm";

interface LkDetailsPersonalDataCardProps {
  user: Partial<User>;
}

export const LkDetailsPersonalDataCard = ({ user }: LkDetailsPersonalDataCardProps) => {
  const { isUpdating, updateSetting } = useUpdateLkDetail();

  const handleUpdate = (value: string, field: string) => {
    updateSetting({ [field]: value });
  };

  return (
    <LkDetailsCard title="Личные данные">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20" user={user} />
          <TypographyH2 className="text-primary-extraDark">
            {user.fullName || "Аноним"}
          </TypographyH2>
          <DrawerDialogResponsive
            button={
              <Button size="icon" variant="ghost" className="hover:bg-transparent">
                <Pencil className="stroke-primary hover:fill-primary-extraDark hover:stroke-primary-extraDark" />
              </Button>
            }
            title="Изменить данные профиля"
          >
            <LkDetailsForm user={user} />
          </DrawerDialogResponsive>
        </div>

        <RadioGroupWithLabel
          label="Пол:"
          disabled={isUpdating}
          defaultValue={user.gender}
          onValueChange={(value) => handleUpdate(value, "gender")}
        >
          <div className="flex gap-6 p-4">
            <RadioGroupItemWithLabel label="Муж." value="male" />
            <RadioGroupItemWithLabel label="Жен." value="female" />
          </div>
        </RadioGroupWithLabel>

        <p className="font-medium text-muted-foreground">Телефон: {user.phone || "Не указан"}</p>
      </section>
    </LkDetailsCard>
  );
};
