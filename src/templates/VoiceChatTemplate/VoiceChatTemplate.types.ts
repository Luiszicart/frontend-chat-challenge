import React from "react";

export type VoiceChatTemplateProps = {
  // Top app bar / actions
  header?: React.ReactNode;
  // Current msg/transcript
  transcript?: React.ReactNode;
  // Mic controls/button
  controls?: React.ReactNode;
  // No msg
  emptyState?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
