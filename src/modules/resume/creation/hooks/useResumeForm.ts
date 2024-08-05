import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UniversalJobType } from "../../../shared/types";
import { getDefaultUniversalJobFormValues, mapItemToApiType } from "../../../shared/utils";
import { ResumeCreationFormType } from "../types/ResumeCreationFormType";
import { resumeFormValidationSchema } from "../validation/resumeFormValidationSchema";
import { useCreateResume } from "./useCreateResume";
import { useEditResume } from "./useEditResume";

interface UseResumeFormProps {
  resume?: UniversalJobType;
  userId: string;
  onModalClose?: () => void;
}

export const useResumeForm = ({ resume, userId, onModalClose }: UseResumeFormProps) => {
  const navigate = useNavigate();
  const { createResume, isCreating } = useCreateResume();
  const { editResume, isEditing } = useEditResume();

  const form = useForm<ResumeCreationFormType>({
    resolver: zodResolver(resumeFormValidationSchema),
    defaultValues: getDefaultUniversalJobFormValues(resumeFormValidationSchema, resume),
  });

  const handleSubmit = useCallback(
    (values: ResumeCreationFormType) => {
      const isEdit = !!resume?.id;

      const formattedData = mapItemToApiType(
        { ...values, creationDate: resume?.creationDate ?? new Date() },
        userId,
        resume?.id,
      );

      const mutationFn = isEdit ? editResume : createResume;

      const mutationData = isEdit ? { ...formattedData, id: resume.id } : formattedData;

      mutationFn(mutationData, {
        onSuccess: () => {
          form.reset();
          onModalClose?.();
          navigate(`/lk/resumes`);
        },
      });
    },
    [form, resume, userId, createResume, editResume, onModalClose, navigate],
  );

  return { form, handleSubmit, isSubmitting: isCreating || isEditing };
};
