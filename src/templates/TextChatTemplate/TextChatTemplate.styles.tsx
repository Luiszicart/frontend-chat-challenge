import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg};
`;

export const HeaderSlot = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.section`
  flex: 1;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(4)};
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const ComposerSlot = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing(3)};
`;
