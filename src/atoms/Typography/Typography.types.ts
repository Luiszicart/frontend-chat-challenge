import type { HTMLAttributes, JSX, ReactNode } from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "caption";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  as?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  truncate?: boolean;
  children?: ReactNode;
}
