import React, { useId } from "react";
import type { TalkTextSwitchProps } from "./TalkTextSwitch.types";
import { Root, Option } from "./TalkTextSwitch.styles";

export const TalkTextSwitch: React.FC<TalkTextSwitchProps> = ({
  value,
  onChange,
  disabled,
  textLabel = "Text",
  voiceLabel = "Voice",
  className,
  style,
  ...rest
}) => {
  const groupId = useId();
  const isText = value === "text";
  const isVoice = value === "voice";

  return (
    <Root
      role="tablist"
      aria-label="Chat mode"
      data-testid="talk-text-switch"
      disabled={disabled}
      className={className}
      style={style}
      {...rest}
    >
      <Option
        role="tab"
        id={`${groupId}-text`}
        aria-selected={isText}
        tabIndex={isText ? 0 : -1}
        active={isText}
        onClick={() => onChange("text")}
        data-testid="talk-text-switch-text"
      >
        {textLabel}
      </Option>
      <Option
        role="tab"
        id={`${groupId}-voice`}
        aria-selected={isVoice}
        tabIndex={isVoice ? 0 : -1}
        active={isVoice}
        onClick={() => onChange("voice")}
        data-testid="talk-text-switch-voice"
      >
        {voiceLabel}
      </Option>
    </Root>
  );
};
