import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../api/apiLkDetails";

export const useLkDetails = () => {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
};
