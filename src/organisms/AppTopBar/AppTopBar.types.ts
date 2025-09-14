import type { HTMLAttributes, ReactNode } from "react";
import type { ChatMode } from "../../molecules";

export interface AppTopBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onChange"> {
  /** Heading at left*/
  heading: ReactNode;
  /** Centers a TalkTextSwitch when provided */
  showModeSwitch?: boolean;
  /** Current mode for the switch */
  mode?: ChatMode;
  /** Change handler for the switch */
  onModeChange?: (next: ChatMode) => void;
  /** Right-side custom action */
  rightAction?: ReactNode;
  /** A11y label for default */
  menuAriaLabel?: string;
  /** Click for default */
  onMenuClick?: () => void;
}
