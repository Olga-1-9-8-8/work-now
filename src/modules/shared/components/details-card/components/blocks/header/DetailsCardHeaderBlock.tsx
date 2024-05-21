import { ReactNode } from "react";
import { CardHeader } from "../../../../../ui/card/Card";
import { DetailsCardHeaderOperations } from "./parts/operations/DetailsCardHeaderOperations";
import { DetailsCardHeaderTitle } from "./parts/title/DetailsCardHeaderTitle";

interface DetailsCardHeaderBlockProps {
  children: ReactNode;
}

export const DetailsCardHeaderBlock = ({ children }: DetailsCardHeaderBlockProps) => {
  return <CardHeader className="flex-col justify-between md:flex-row">{children}</CardHeader>;
};

DetailsCardHeaderBlock.DetailsCardHeaderTitle = DetailsCardHeaderTitle;
DetailsCardHeaderBlock.DetailsCardHeaderOperations = DetailsCardHeaderOperations;
