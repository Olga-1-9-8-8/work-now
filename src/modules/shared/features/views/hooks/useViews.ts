import { useQuery } from "@tanstack/react-query";
import { mapUniversalEngagement } from "../../../utils";
import { getAllViews } from "../api/apiViews";

export const useViews = (id: number, isHiring: boolean) => {
  const {
    isLoading: isViewsLoading,
    error,
    data: views,
  } = useQuery({
    queryKey: ["views", id],
    queryFn: () => getAllViews({ id, isHiring }),
  });

  return {
    isViewsLoading,
    viewsError: error,
    viewsData:
      views && views.length > 0 ? views.map((view) => mapUniversalEngagement(view)) : undefined,
  };
};
