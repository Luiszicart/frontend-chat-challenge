import styled from "styled-components";

export const Bar = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #eceef1;
  background: #ffffff;
`;

export const Left = styled.div`
  min-width: 0;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
