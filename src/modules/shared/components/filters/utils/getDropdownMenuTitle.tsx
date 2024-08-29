import { UniversalItemType } from "../../../types";

export const getDropdownMenuTitle = (
  value: string,
  options: Required<UniversalItemType<string>>[],
) => options.find((item) => item.value === value)?.title ?? value;
