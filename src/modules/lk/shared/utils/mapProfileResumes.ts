import { ResumeApiType } from "../../../shared/api";
import { mapUniversalItem } from "../../../shared/utils";

export const mapProfileResumes = (resumes: ResumeApiType[]) => {
  return resumes.map((resume) => mapUniversalItem(resume));
};
