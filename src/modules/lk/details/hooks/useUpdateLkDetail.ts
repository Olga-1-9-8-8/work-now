import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateSettings as updateSettingsApi } from "../api/apiLkDetails";

export const useUpdateLkDetail = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("Личные данные успешно отредактированы");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSetting, isUpdating };
};
