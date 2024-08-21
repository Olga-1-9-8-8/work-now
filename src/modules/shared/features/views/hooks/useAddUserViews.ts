import { useEffectOnce } from "../../../hooks";
import { useAddViews } from "./useAddViews";

export const useAddUserViews = (id: number, count: number, isHiring: boolean) => {
  const { addViews } = useAddViews(id, count, isHiring);

  useEffectOnce(() => {
    if (addViews) addViews();
  });
};
