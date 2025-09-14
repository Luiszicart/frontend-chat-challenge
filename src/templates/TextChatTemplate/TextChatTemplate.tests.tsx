import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme";
import { TextChatTemplate } from "./TextChatTemplate";
import { describe, it, expect } from "vitest";

describe("TextChatTemplate", () => {
  it("renders header, messages and composer when provided", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <TextChatTemplate
          header={<div>Header</div>}
          messages={<div>Hello world</div>}
          composer={<div>Composer</div>}
        />
      </ThemeProvider>
    );

    expect(getByTestId("text-chat-template")).toBeTruthy();
    expect(getByText("Header")).toBeTruthy();
    expect(getByText("Hello world")).toBeTruthy();
    expect(getByText("Composer")).toBeTruthy();
  });

  it("shows emptyState when messages are not provided", () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <TextChatTemplate emptyState={<div>No messages</div>} />
      </ThemeProvider>
    );

    expect(getByText("No messages")).toBeTruthy();
  });
});
