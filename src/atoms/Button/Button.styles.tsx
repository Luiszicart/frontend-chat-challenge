import styled, { css, keyframes } from "styled-components";
import type { ButtonProps } from "./Button.types";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const StyledButton = styled.button<
  Required<Pick<ButtonProps, "variant" | "size" | "iconOnly" | "block">> &
    Pick<ButtonProps, "loading">
>`
  --btn-radius: 10px;
  --btn-gap: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--btn-gap);
  border: none;
  border-radius: var(--btn-radius);
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.04s ease, opacity 0.2s ease,
    background-color 0.2s ease;
  text-decoration: none;
  user-select: none;
  width: ${({ block }) => (block ? "100%" : "auto")};

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          height: 32px;
          padding: 0 12px;
          font-size: 12px;
        `;
      case "lg":
        return css`
          height: 48px;
          padding: 0 20px;
          font-size: 16px;
        `;
      default:
        return css`
          height: 40px;
          padding: 0 16px;
          font-size: 14px;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return css`
          background: #f2f3f5;
          color: #111;
        `;
      case "ghost":
        return css`
          background: transparent;
          color: #111;
          outline: 1px solid #dadde1;
        `;
      case "danger":
        return css`
          background: #e63746;
          color: #fff;
        `;
      default:
        return css`
          background: #111827;
          color: #fff;
        `; // primary
    }
  }}

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(1px);
  }

  /* iconOnly: make square */
  ${({ iconOnly }) =>
    iconOnly &&
    css`
      width: 40px;
      padding: 0;
      aspect-ratio: 1 / 1;
      > .btn__label {
        display: none;
      }
    `}

  /* Loading overlay spinner */
  ${({ loading }) =>
    loading &&
    css`
      position: relative;
      pointer-events: none;
      &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid currentColor;
        border-right-color: transparent;
        animation: ${spin} 0.7s linear infinite;
      }
      > .btn__icon,
      > .btn__label {
        opacity: 0;
      }
    `}
`;

export const IconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

export const Label = styled.span.attrs({ className: "btn__label" })`
  overflow: hidden;
  text-overflow: ellipsis;
`;
