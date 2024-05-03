import { getQuantityDiapasonString } from "../../../utils/helpers";

export const getDiapasonString = (value?: number, title?: string) => {
  if (!value && value !== 0) return "Нет данных";
  const diapason = getQuantityDiapasonString(value);
  if (!diapason) {
    return "Будьте первым";
  }

  return `${diapason} ${title}`;
};
