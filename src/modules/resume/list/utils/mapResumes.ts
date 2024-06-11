import { ResumeWithProfileApiTypeInput } from "../../shared/types";
import { mapResume } from "../../shared/utils";
import { ResumesListType } from "../types/ResumesListType";

export const mapResumes = (resumes: ResumeWithProfileApiTypeInput[]): ResumesListType => {
  return resumes.map((resume) => mapResume(resume));
};
