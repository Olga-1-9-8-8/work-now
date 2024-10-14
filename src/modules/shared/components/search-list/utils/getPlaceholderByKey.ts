export const getPlaceholderByKey = (key: string, isHiring: boolean, t: (key: string) => string) => {
  switch (key) {
    case "position": {
      return t("shared.search.placeholder.position");
    }
    case "cities": {
      return t("shared.search.placeholder.cities");
    }
    case "username": {
      return isHiring
        ? t("shared.search.placeholder.company")
        : t("shared.search.placeholder.candidate");
    }
    default: {
      return "";
    }
  }
};
