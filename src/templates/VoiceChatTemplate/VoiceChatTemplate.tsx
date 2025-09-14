import React from "react";
import type { VoiceChatTemplateProps } from "./VoiceChatTemplate.types";
import {
  Wrapper,
  HeaderSlot,
  Transcript,
  Controls,
} from "./VoiceChatTemplate.styles";

export const VoiceChatTemplate: React.FC<VoiceChatTemplateProps> = ({
  header,
  transcript,
  controls,
  emptyState,
  className,
  style,
}) => {
  const hasTranscript = Boolean(transcript);

  return (
    <Wrapper
      data-testid="voice-chat-template"
      className={className}
      style={style}
    >
      {header ? (
        <HeaderSlot data-testid="voice-chat-header">{header}</HeaderSlot>
      ) : null}
      <Transcript data-testid="voice-chat-transcript">
        {hasTranscript ? transcript : emptyState}
      </Transcript>
      {controls ? (
        <Controls data-testid="voice-chat-controls">{controls}</Controls>
      ) : null}
    </Wrapper>
  );
};
