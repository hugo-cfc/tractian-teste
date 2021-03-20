import styled from "styled-components";

import { Row, Col, Divider } from "antd";

export const TitleUnit = styled.h1`
  text-align: center;
`;

export const StyledRow = styled(Row)`
  width: 100%;
`;

export const StyledCol = styled(Col)``;

export const ContainerInside = styled(Row)`
  margin: 24px;
  padding: 24px;
  background: #fff;
  border: 1px solid #dddfe0;
`;

export const StyledDivider = styled(Divider)``;

export const StyledTable = styled.table`
  width: 100%;
`;

export const StyledTHead = styled.thead``;

export const StyledTbody = styled.tbody``;

export const StyledTr = styled.tr`
  padding: 10px;
  &:nth-child(odd) {
    background: #B0BAC3;
    color: #fff;
  }
  &:hover {
    background: #49759F;
    color: #fff;
  }
`;

export const StyledTh = styled.th`
  padding: 10px;
  border: 1px solid #dddfe0;
`;

export const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #dddfe0;
`;

export const ContainerCards = styled(Row)`
  width: 100%;
  margin: 24px;
  padding: 24px;
  border: 1px solid #dddfe0;
  justify-content: center;
  background: #fff;
`;

export const BoxCards = styled(Col)``;
