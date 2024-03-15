import { useCreateContext } from "../../context";
import { ResponsiveContextType } from "../types/ResponsiveContextType";

export const useContextResponsive = () => {
  const { Context: ResponsiveContext, useContext: useResponsiveContext } =
    useCreateContext<ResponsiveContextType>({} as ResponsiveContextType);

  return { ResponsiveContext, useResponsiveContext };
};
