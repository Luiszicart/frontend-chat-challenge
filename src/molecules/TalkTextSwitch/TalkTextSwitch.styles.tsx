import styled, { css } from "styled-components";

export const Root = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  border: 1px solid #dadde1;
  border-radius: 999px;
  padding: 4px;
  gap: 4px;
  background: #fff;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;

export const Option = styled.button<{ active?: boolean }>`
  min-width: 88px;
  height: 36px;
  padding: 0 12px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#111827" : "transparent")};
  color: ${({ active }) => (active ? "#FFF" : "#111")};
  transition: background-color 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 2px;
  }
`;
