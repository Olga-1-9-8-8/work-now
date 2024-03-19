import { WorkType } from "../types/WorkType";

export const getVariantBySchedule = (schedule?: string): WorkType => {
  switch (schedule) {
    case "Летняя стажировка": {
      return "summer";
    }
    case "Работа на лето": {
      return "summer";
    }
    case "Работа на курорте": {
      return "resort";
    }
    case "Работа для выпускников": {
      return "graduation";
    }
    case "Волонтерство": {
      return "volunteer";
    }
    case "Стажировка": {
      return "internship";
    }
    default: {
      return "default";
    }
  }
};
