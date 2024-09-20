export const getPlaceholderByKey = (key: string, isHiring: boolean) => {
  switch (key) {
    case "position": {
      return "должность";
    }
    case "cities": {
      return "город";
    }
    case "username": {
      return `${isHiring ? "название компании" : "фамилию кандидата"}`;
    }
    default: {
      return "";
    }
  }
};
