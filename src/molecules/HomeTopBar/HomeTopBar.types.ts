import type { HTMLAttributes, ReactNode } from "react";

export interface HomeTopBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Main title */
  title: ReactNode;
  /** Optional right action */
  rightAction?: ReactNode;
  /** Accessible label for the default kebab menu button */
  menuAriaLabel?: string;
  /** Callback */
  onMenuClick?: () => void;
}
