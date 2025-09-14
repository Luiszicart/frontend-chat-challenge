import type { HTMLAttributes } from "react";

export type ChatMode = "text" | "voice";

export interface TalkTextSwitchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current value */
  value: ChatMode;
  /** Change handler */
  onChange: (next: ChatMode) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Accessible labels */
  textLabel?: string;
  voiceLabel?: string;
}
