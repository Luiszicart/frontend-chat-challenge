import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme";
import { VoiceChatTemplate } from "./VoiceChatTemplate";
import { describe, it, expect } from "vitest";

describe("VoiceChatTemplate", () => {
  it("renders header, transcript and controls when provided", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <VoiceChatTemplate
          header={<div>Header</div>}
          transcript={<div>Transcript line</div>}
          controls={<button>Mic</button>}
        />
      </ThemeProvider>
    );

    expect(getByTestId("voice-chat-template")).toBeTruthy();
    expect(getByText("Header")).toBeTruthy();
    expect(getByText("Transcript line")).toBeTruthy();
    expect(getByText("Mic")).toBeTruthy();
  });

  it("shows emptyState when transcript is not provided", () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <VoiceChatTemplate emptyState={<div>No transcript</div>} />
      </ThemeProvider>
    );

    expect(getByText("No transcript")).toBeTruthy();
  });
});
