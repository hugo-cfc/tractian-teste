import styled from "styled-components";

import { Row, Col } from "antd";

interface ColumnProps {
  justifyCenter?: boolean;
}

export const Container = styled.main`
  height: 100vh;
  background: #f4f6fa;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ContainerInside = styled.main`
  margin: 24px;
  padding: 24px;
  background: #fff;
  border: 1px solid #dddfe0;
`;

export const StyledRow = styled(Row)``;

export const StyledColumn = styled(Col)`
  display: ${(props: ColumnProps) => (props.justifyCenter ? "flex" : "")};
  justify-content: ${(props: ColumnProps) => (props.justifyCenter ? "center" : "")};
`;

export const StyledImg = styled.img`
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

export const StyledTable = styled.table`
  border: 1px solid #dddfe0;
`;

export const StyledTr = styled.tr`
  &:nth-child(odd) {
    background: #b0bac3;
    color: #fff;
  }
  &:hover {
    background: #49759f;
    color: #fff;
  }
`;

export const StyledTh = styled.th`
  padding: 5px;
`;

export const StyledTd = styled.td`
  padding: 5px;
`;

export const Details = styled.h5``;
