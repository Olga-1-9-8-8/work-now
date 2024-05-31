import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
import { UniversalItemType } from "../../../types";
import { ToggleGroup, ToggleGroupItem, toggleVariants } from "../../../ui/toggle/Toggle";

type TogglesProps = {
  options: Required<UniversalItemType<string>>[];
} & React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>;

export const Toggles = ({ options, ...props }: TogglesProps) => {
  return (
    <ToggleGroup {...props}>
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          aria-label={`Toggle ${option.title}`}
        >
          {option.title}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
