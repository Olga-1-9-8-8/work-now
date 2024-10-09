import { Pencil } from "lucide-react";
import { LanguageType } from "../../../../shared/configs";
import { ProfileType, useUpdateUser } from "../../../../shared/services/auth";
import { GenderType, UserEntity, getGenderTitle } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import {
  RadioGroupItemWithLabel,
  RadioGroupWithLabel,
} from "../../../../shared/ui/radio/RadioGroupWithLabel";
import { TypographyH2 } from "../../../../shared/ui/typography/TypographyH2";
import { formatPhoneNumber, maskPhoneNumber } from "../../../../shared/utils/helpers";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkDetailsFormAvatar } from "../avatar/LkDetailsFormAvatar";
import { LkDetailsCard } from "../card/LkDetailsCard";
import { LkDetailsForm } from "../form/LkDetailsForm";

interface LkDetailsProfileDataCardProps {
  profile?: ProfileType;
  isLoading: boolean;
}

export const LkDetailsProfileDataCard = ({ profile, isLoading }: LkDetailsProfileDataCardProps) => {
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const { t, language } = useLanguageSwitcher("lk");

  return (
    <LkDetailsCard title={t("lk.details.profileDataCard.title")} isLoading={isLoading}>
      {profile && (
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <LkDetailsFormAvatar
              key={profile.avatar}
              avatarSrc={profile.avatar}
              role={profile.role}
            />

            <TypographyH2 className=" text-xl text-primary-extraDark lg:text-2xl">
              {profile.userName || t("lk.details.profileDataCard.noName")}
            </TypographyH2>
            <DrawerDialogResponsive
              button={
                <Button size="icon" variant="ghost" className="hover:bg-transparent">
                  <Pencil className="stroke-primary hover:fill-primary-extraDark hover:stroke-primary-extraDark" />
                </Button>
              }
              title={t("lk.details.profileDataCard.editProfileTitle")}
            >
              <LkDetailsForm profile={profile} />
            </DrawerDialogResponsive>
          </div>
          {profile.role === UserEntity.Person && (
            <RadioGroupWithLabel
              label={t("lk.details.profileDataCard.gender")}
              disabled={isUpdatingUser}
              value={profile.gender}
              onValueChange={(value: GenderType) => updateUser({ gender: value })}
            >
              <div className="flex gap-6 p-2">
                <RadioGroupItemWithLabel
                  label={`${getGenderTitle("male", language as LanguageType).slice(0, 3)}.`}
                  value="male"
                />
                <RadioGroupItemWithLabel
                  label={`${getGenderTitle("female", language as LanguageType).slice(0, 3)}.`}
                  value="female"
                />
              </div>
            </RadioGroupWithLabel>
          )}
          <p className="font-medium text-muted-foreground">
            {t("lk.details.profileDataCard.phone")}{" "}
            {maskPhoneNumber(formatPhoneNumber(profile.phone))}
          </p>
          <p className="font-medium text-muted-foreground">Email: {profile.email}</p>
          <p className="font-medium text-muted-foreground">
            {profile.role === UserEntity.Company
              ? t("lk.details.profileDataCard.companyAge")
              : t("lk.details.profileDataCard.personAge")}{" "}
            {profile.age || t("lk.noSpecified")}
          </p>
        </section>
      )}
    </LkDetailsCard>
  );
};
