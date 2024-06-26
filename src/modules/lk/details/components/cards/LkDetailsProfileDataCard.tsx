import { Building2, Pencil } from "lucide-react";
import { Avatar } from "../../../../shared/components/avatar";
import { GenderType, UserEntity } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import {
  RadioGroupItemWithLabel,
  RadioGroupWithLabel,
} from "../../../../shared/ui/radio/RadioGroupWithLabel";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { TypographyH5 } from "../../../../shared/ui/typography/TypographyH5";
import { formatPhoneNumber, maskPhoneNumber } from "../../../../shared/utils/helpers";
import { useLkDetailsContext } from "../../context";
import { LkDetailsCard } from "../card/LkDetailsCard";
import { LkDetailsForm } from "../form/LkDetailsForm";

export const LkDetailsProfileDataCard = () => {
  const { updateUser, isUpdatingUser, profile, isProfileLoading } = useLkDetailsContext();

  return (
    <LkDetailsCard title="Личные данные" isLoading={isProfileLoading}>
      {profile && !isProfileLoading ? (
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <Avatar
              src={profile.avatar}
              userName={profile.userName}
              icon={profile.role === UserEntity.Company ? Building2 : undefined}
              className="h-20 w-20"
            />

            <TypographyH2 className=" text-xl text-primary-extraDark lg:text-2xl">
              {profile.userName || "Аноним"}
            </TypographyH2>
            <DrawerDialogResponsive
              button={
                <Button size="icon" variant="ghost" className="hover:bg-transparent">
                  <Pencil className="stroke-primary hover:fill-primary-extraDark hover:stroke-primary-extraDark" />
                </Button>
              }
              title="Изменить данные профиля"
            >
              <LkDetailsForm
                userName={profile.userName}
                gender={profile.gender}
                age={profile.age}
                avatar={profile.avatar}
              />
            </DrawerDialogResponsive>
          </div>
          {profile.role === UserEntity.Person && (
            <RadioGroupWithLabel
              label="Пол:"
              disabled={isUpdatingUser}
              value={profile.gender}
              onValueChange={(value: GenderType) => updateUser({ gender: value })}
            >
              <div className="flex gap-6 p-4">
                <RadioGroupItemWithLabel label="Муж." value="male" />
                <RadioGroupItemWithLabel label="Жен." value="female" />
              </div>
            </RadioGroupWithLabel>
          )}
          <p className="font-medium text-muted-foreground">
            Телефон: {maskPhoneNumber(formatPhoneNumber(profile.phone))}
          </p>
          <p className="font-medium text-muted-foreground">Email: {profile.email}</p>
          <p className="font-medium text-muted-foreground">
            {profile.role === UserEntity.Company
              ? "Количество лет организация на рынке :"
              : "Возраст:"}{" "}
            {profile.age || "Не указано"}
          </p>
        </section>
      ) : (
        <TypographyH5>
          Попробуйте войти в свой аккаунт еще раз или обратитесь в техническую поддержку.
        </TypographyH5>
      )}
    </LkDetailsCard>
  );
};
