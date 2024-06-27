import { Copy, MoreVertical, Pencil, TrashIcon } from "lucide-react";
import { ResumeCreationForm } from "../../../../resume/creation";
import { useCreateResume } from "../../../../resume/creation/hooks/useCreateResume";
import { ResumeItem } from "../../../../resume/shared/types";
import { DeleteConfirmation } from "../../../../shared/components/delete-cofirmation";
import { useResponsiveContext } from "../../../../shared/responsive";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardDescription, CardFooter, CardTitle } from "../../../../shared/ui/card/Card";
import { DrawerDialogResponsive } from "../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../../shared/ui/drawer/Drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../shared/ui/dropdown-menu/DropdownMenu";
import { TypographyH6 } from "../../../../shared/ui/typography/TypographyH6";
import { formattedTimeString } from "../../../../shared/utils/helpers";

interface LkResumesCardProps {
  resume: ResumeItem;
  isDeleting: boolean;
  onDelete: (id: number) => void;
}

export const LkResumesCard = ({ resume, isDeleting, onDelete }: LkResumesCardProps) => {
  const { createResume, isCreating } = useCreateResume();

  const isMobile = useResponsiveContext();

  const handleDuplicate = () => {
    createResume({
      user_id: resume.userId,
      updated_at: new Date().toISOString(),
      about: resume.about ?? null,
      applicants_quantity: resume.applicantsQuantity,
      city: resume.city ?? null,
      creation_date: resume.creationDate.toISOString(),
      education: resume.education ?? null,
      employment: resume.employment?.map((item) => item.toString()) ?? null,
      employment_start_date: resume.employmentStartDate?.toISOString() ?? null,
      week_hours: resume.weekHours ?? null,
      salary: resume.salary ?? null,
      schedule: resume.schedule ?? null,
      ...resume,
      position: `Копия - ${resume.position}`,
    });
  };

  return (
    <Card className="flex flex-col gap-8 p-5">
      <div className="flex items-start justify-between md:flex-col md:items-stretch md:gap-4">
        <div>
          <CardTitle className="text-primary-extraDark">
            {resume.position || "Должность не выбрана"}
          </CardTitle>
          <CardDescription>Обновлено {formattedTimeString(resume.creationDate)}</CardDescription>
        </div>

        {isMobile && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-52">
              <DropdownMenuItem className="flex cursor-pointer gap-4 " onClick={handleDuplicate}>
                <Copy size={22} className="stroke-primary-extraDark" />
                <TypographyH6 className="text-primary-extraDark">Дублировать</TypographyH6>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Drawer>
                <DrawerTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="flex cursor-pointer gap-4 "
                  >
                    <Pencil size={22} className="stroke-primary-extraDark" />
                    <TypographyH6 className="text-primary-extraDark">Редактировать</TypographyH6>
                  </DropdownMenuItem>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Редактировать резюме {resume.position}</DrawerTitle>
                    <DrawerDescription>
                      Последнее обновление {formattedTimeString(resume.creationDate)}
                    </DrawerDescription>
                  </DrawerHeader>
                  <ResumeCreationForm resume={resume} userId={resume.userId} />
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
                    <DrawerTitle>Удаление резюме</DrawerTitle>
                  </DrawerHeader>
                  <DeleteConfirmation
                    title="резюме"
                    onDelete={() => resume?.id && onDelete(resume.id)}
                  />
                </DrawerContent>
              </Drawer>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {!isMobile && (
          <CardFooter className="flex justify-between p-0">
            <div className="flex gap-4">
              <DrawerDialogResponsive
                button={<Button>Редактировать</Button>}
                title={`Редактировать резюме ${resume.position}`}
                description={`Последнее обновление ${formattedTimeString(resume.creationDate)}`}
              >
                <ResumeCreationForm resume={resume} userId={resume.userId} />
              </DrawerDialogResponsive>

              <Button onClick={handleDuplicate} disabled={isCreating}>
                Дублировать
              </Button>
            </div>
            <DrawerDialogResponsive
              button={
                <Button disabled={isDeleting} variant="destructive" size="icon">
                  <TrashIcon />
                </Button>
              }
              title="Удаление резюме"
            >
              <DeleteConfirmation
                title="резюме"
                onDelete={() => resume?.id && onDelete(resume.id)}
              />
            </DrawerDialogResponsive>
          </CardFooter>
        )}
      </div>
    </Card>
  );
};
