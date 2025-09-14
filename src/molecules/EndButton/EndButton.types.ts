import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface EndButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Custom label */
  label?: ReactNode;
  /** Optional leading icon */
  icon?: ReactNode;
  /** Loading state */
  loading?: boolean;
}
