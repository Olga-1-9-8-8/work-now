import { ResumeApiType } from "../../api";
import { UniversalJobType } from "../../types";

export const mapItemToApiType = (
  items: Omit<UniversalJobType, "id">,
  userId: string,
  id?: number,
): Omit<ResumeApiType, "id"> & { id?: number } => {
  const isEditing = !!id;

  const {
    about,
    city,
    employment,
    employmentStartDate,
    weekHours,
    applicantsQuantity,
    schedule,
    education,
    userId: userResumeId,
    creationDate,
    salary,
    views,
    updatedAt,
    ...itemData
  } = items;

  return {
    ...itemData,
    updated_at: isEditing ? new Date().toISOString() : null,
    user_id: userId,
    applicants_quantity: applicantsQuantity ?? 0,
    views: views ?? 0,
    creation_date: creationDate.toISOString(),
    about: about ?? null,
    city: city ?? null,
    employment_start_date: employmentStartDate ? employmentStartDate.toISOString() : null,
    week_hours: weekHours ?? [],
    education: education || null,
    employment: (employment as string[]) ?? null,
    salary: salary || null,
    schedule: schedule as string[] | null,
  };
};
