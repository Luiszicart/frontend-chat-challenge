import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** When true, only renders the icon (children is ignored visually) */
  iconOnly?: boolean;
  /** Accessible label is REQUIRED when iconOnly is true */
  ariaLabel?: string;
  /** Optional leading icon node */
  icon?: ReactNode;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size */
  size?: ButtonSize;
  /** Full width */
  block?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Disabled state (overrides native disabled for visual) */
  disabled?: boolean;
  /** Button content (ignored visually if iconOnly=true but kept for a11y) */
  children?: ReactNode;
}
