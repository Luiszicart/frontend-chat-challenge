import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.bg};
`;

export const Card = styled.section`
  width: 100%;
  max-width: 640px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing(6)};
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Sub = styled.p`
  color: ${({ theme }) => theme.colors.muted};
`;

export const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
`;

export const NavButton = styled.a`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;
