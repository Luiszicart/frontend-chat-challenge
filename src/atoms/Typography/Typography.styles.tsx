import styled, { css } from "styled-components";
import type { TypographyProps } from "./Typography.types";

const base = css`
  margin: 0;
  color: #111;
`;

const mapVariant = (v: NonNullable<TypographyProps["variant"]>) => {
  switch (v) {
    case "display":
      return css`
        font-size: 32px;
        line-height: 1.15;
      `;
    case "h1":
      return css`
        font-size: 24px;
        line-height: 1.2;
      `;
    case "h2":
      return css`
        font-size: 20px;
        line-height: 1.25;
      `;
    case "h3":
      return css`
        font-size: 16px;
        line-height: 1.3;
      `;
    case "caption":
      return css`
        font-size: 12px;
        line-height: 1.3;
        color: #555;
      `;
    default:
      return css`
        font-size: 14px;
        line-height: 1.45;
      `;
  }
};

const mapWeight = (w: NonNullable<TypographyProps["weight"]>) => {
  switch (w) {
    case "medium":
      return css`
        font-weight: 500;
      `;
    case "semibold":
      return css`
        font-weight: 600;
      `;
    case "bold":
      return css`
        font-weight: 700;
      `;
    default:
      return css`
        font-weight: 400;
      `;
  }
};

export const Text = styled.span<TypographyProps>`
  ${base}
  ${({ variant = "body" }) => mapVariant(variant)}
  ${({ weight = "regular" }) => mapWeight(weight)}
  ${({ truncate }) =>
    truncate &&
    css`
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: bottom;
    `}
`;
