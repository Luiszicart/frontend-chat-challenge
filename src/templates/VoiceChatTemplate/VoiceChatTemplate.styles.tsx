import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: ${({ theme }) => theme.colors.bg};
`;

export const HeaderSlot = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Transcript = styled.section`
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(4)};
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Controls = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing(4)};
  display: grid;
  place-items: center;
`;
