import styled, { keyframes, css } from "styled-components";
import { Button as BaseButton } from "../../atoms/Button";

export const Wrapper = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #000000;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: transparent;
`;

export const Main = styled.section`
  display: grid;
  align-content: center;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(4)};
`;

export const Copy = styled.p`
  color: #9f9fa9;
  text-align: center;
  max-width: 309px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.35;
  position: absolute;
  top: 500px;
`;

export const Actions = styled.div`
  width: 361px;
  height: 56px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 720px;
`;

export const ActionButton = styled(BaseButton)`
  width: 172.5px;
  height: 56px;
  border-radius: 9999px;
  padding: 4px 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;

  background-color: #18181b;
  color: #47ecd5;

  &:hover {
    background-color: #202023;
  }

  &:focus-visible {
    outline: 2px solid #47ecd5;
    outline-offset: 2px;
  }
`;

export const Bottom = styled.footer`
  position: sticky;
  bottom: 0;
  background: #000000;
  height: 88px;
  border-top: 0.5px solid #009689;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    filter: blur(1px);
  }
  50% {
    transform: scale(1.12);
    filter: blur(6px);
  }
  100% {
    transform: scale(1);
    filter: blur(1px);
  }
`;

export const Orb = styled.button<{ $animating?: boolean }>`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  background: radial-gradient(
    closest-side,
    #ffe066,
    rgba(255, 224, 102, 0) 70%
  );
  position: absolute;
  top: 390px;
  left: calc(50% - 46px);
  cursor: pointer;

  transform: scale(1);
  filter: blur(1px);

  ${({ $animating }) =>
    $animating &&
    css`
      animation: ${pulse} 1200ms ease-in-out infinite;
    `}

  outline: none;

  &:focus-visible {
    outline: 2px solid #47ecd5;
    outline-offset: 2px;
  }
`;
