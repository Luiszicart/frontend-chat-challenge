import React from "react";

export type TextChatTemplateProps = {
  // Top app bar / actions
  header?: React.ReactNode;
  // Conversation
  messages?: React.ReactNode;
  // Input area
  composer?: React.ReactNode;
  // No msg
  emptyState?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
