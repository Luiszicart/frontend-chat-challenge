import styled, { css } from "styled-components";

export const Bar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  align-items: center;
  gap: 4px;
  padding: 8px 8px calc(env(safe-area-inset-bottom) + 8px);
  border-top: 1px solid #eceef1;
  background: #ffffff;
`;

export const Item = styled.button<{ active?: boolean }>`
  height: 48px;
  padding: 0 8px;
  border: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  place-items: center;

  ${({ active }) =>
    active
      ? css`
          outline: 2px solid #111827;
        `
      : css`
          outline: 2px solid transparent;
        `}

  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 2px;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  line-height: 1;
  color: #111;
  margin-top: 2px;
`;
