import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { lightTheme } from "../../theme";
import { HomeTemplate } from "./HomeTemplate";
import { describe, it, expect } from "vitest";

describe("HomeTemplate", () => {
  it("renders title and nav buttons", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <MemoryRouter>
          <HomeTemplate />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(getByTestId("home-template")).toBeTruthy();
    expect(getByText(/FE Code Challenge/i)).toBeTruthy();
    expect(getByText("Go to Voice")).toBeTruthy();
    expect(getByText("Go to Text")).toBeTruthy();
  });
});
