import styled, { css } from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const TableBase = css`
  padding: 8px;
  text-align: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.thead``;
export const Th = styled.th`
  ${TableBase}
  letter-spacing:1px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.textSecondary};
`;
export const Tr = styled.tr`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  &:hover {
    background-color: #ddd;
  }
`;
export const Td = styled.td`
  ${TableBase}
`;
export const Tbody = styled.tbody`
  color: ${({ theme }) => theme.color.textPrimary};
`;
export const Tfoot = styled.tfoot``;
