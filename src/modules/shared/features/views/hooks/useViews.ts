import { useQuery } from "@tanstack/react-query";
import { getAllViews } from "../api/apiViews";
import { mapViewsItem } from "../utils/mapViewsItem";

export const useViews = (id: number, isHiring: boolean) => {
  const {
    isLoading: isViewsLoading,
    error,
    data: views,
  } = useQuery({
    queryKey: ["views"],
    queryFn: () => getAllViews({ id, isHiring }),
  });

  return {
    isViewsLoading,
    viewsError: error,
    views: views && views.length > 0 ? views.map((view) => mapViewsItem(view)) : undefined,
  };
};
