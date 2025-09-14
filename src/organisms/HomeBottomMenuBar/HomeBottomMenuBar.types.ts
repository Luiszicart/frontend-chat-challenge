import type { HTMLAttributes, ReactNode } from "react";

export interface MenuItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface HomeBottomMenuBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onSelect"> {
  items: MenuItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
}
