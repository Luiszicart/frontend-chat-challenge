import styled from "styled-components";

export const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eceef1;
  background: #ffffff;
`;

export const Left = styled.div`
  min-width: 0;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
