import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UniversalJobType } from "../../../shared/types";
import { getDefaultUniversalJobFormValues, mapItemToApiType } from "../../../shared/utils";
import { VacancyCreationFormType } from "../types/VacancyCreationFormType";
import { vacancyFormValidationSchema } from "../validation/vacancyFormValidationSchema";
import { useCreateVacancy } from "./useCreateVacancy";
import { useEditVacancy } from "./useEditVacancy";

interface UseVacancyFormProps {
  vacancy?: UniversalJobType;
  userId: string;
  onModalClose?: () => void;
}

export const useVacancyForm = ({ vacancy, userId, onModalClose }: UseVacancyFormProps) => {
  const navigate = useNavigate();
  const { createVacancy, isCreatingVacancy } = useCreateVacancy();
  const { editVacancy, isEditing } = useEditVacancy();

  const form = useForm<VacancyCreationFormType>({
    resolver: zodResolver(vacancyFormValidationSchema),
    defaultValues: getDefaultUniversalJobFormValues(vacancyFormValidationSchema, vacancy),
  });

  const handleSubmit = useCallback(
    (values: VacancyCreationFormType) => {
      const { gender, ...valuesData } = values;
      const isEdit = !!vacancy?.id;

      const formattedData = mapItemToApiType(
        {
          ...valuesData,
          creationDate: vacancy?.creationDate ?? new Date(),
        },
        userId,
        vacancy?.id,
      );

      const mutationFn = isEdit ? editVacancy : createVacancy;

      const commonData = {
        ...formattedData,
        gender: gender === "_not_set" ? null : gender,
      };

      const mutationData = isEdit ? { ...commonData, id: vacancy.id } : commonData;

      mutationFn(mutationData, {
        onSuccess: () => {
          form.reset();
          onModalClose?.();
          navigate(`/lk/vacancies`);
        },
      });
    },
    [
      vacancy?.id,
      vacancy?.creationDate,
      userId,
      editVacancy,
      createVacancy,
      form,
      onModalClose,
      navigate,
    ],
  );

  return { form, handleSubmit, isSubmitting: isCreatingVacancy || isEditing };
};
