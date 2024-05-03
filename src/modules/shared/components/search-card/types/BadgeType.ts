import { VariantProps } from "class-variance-authority";
import { ElementType } from "react";
import { badgeVariants } from "../../../ui/badge/Badge";

export interface BadgeItem<T> {
  title?: T;
}

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export interface BadgeType {
  badgeIcon?: ElementType;
  badgeVariant: BadgeVariant;
  badgeTitle?: string;
}
