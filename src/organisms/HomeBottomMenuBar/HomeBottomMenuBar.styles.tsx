import styled from "styled-components";

export const Bar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-content: center;
  align-items: center;
  width: 361px;
  height: 56px;
  gap: 30px;
  margin: 0 16px;
  padding-top: 20px;
  background: #000000;
`;

export const Item = styled.button<{ active?: boolean }>`
  width: 62px;
  height: 42px;
  opacity: 1;
  gap: 2px;
  border: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 2px;
  }
`;

export const Label = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #52525c;
`;
