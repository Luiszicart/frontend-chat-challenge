import React from "react";
import type { TextChatTemplateProps } from "./TextChatTemplate.types";
import {
  Wrapper,
  HeaderSlot,
  Content,
  ComposerSlot,
} from "./TextChatTemplate.styles";

export const TextChatTemplate: React.FC<TextChatTemplateProps> = ({
  header,
  messages,
  composer,
  emptyState,
  className,
  style,
}) => {
  const hasMessages = Boolean(messages);

  return (
    <Wrapper
      data-testid="text-chat-template"
      className={className}
      style={style}
    >
      {header ? (
        <HeaderSlot data-testid="text-chat-header">{header}</HeaderSlot>
      ) : null}
      <Content data-testid="text-chat-content">
        {hasMessages ? messages : emptyState}
      </Content>
      {composer ? (
        <ComposerSlot data-testid="text-chat-composer">{composer}</ComposerSlot>
      ) : null}
    </Wrapper>
  );
};
