import { ReactNode } from "react";
import { UniversalItemType } from "../../../types";
import { TabsBase, TabsContent, TabsList, TabsTrigger } from "../../../ui/tabs/TabsBase";
import { cn } from "../../../utils";

type Tab = Required<UniversalItemType<string>> & { content: ReactNode };

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
  isFullWidth?: boolean;
}

export const Tabs = ({ tabs, defaultValue, isFullWidth, className }: TabsProps) => {
  return (
    <TabsBase defaultValue={defaultValue} className={cn("space-y-4", className)}>
      <TabsList className={`${isFullWidth && "w-full"}`}>
        {tabs.map(({ title, value }) => (
          <TabsTrigger className={`${isFullWidth && "grow"} font-bold`} key={value} value={value}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </TabsBase>
  );
};
