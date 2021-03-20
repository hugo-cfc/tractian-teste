import styled from "styled-components";

import { Row, Col, Divider } from "antd";

export const Container = styled.main`
  height: 100vh;
  background: #f4f6fa;
`;

export const Saudation = styled.h1``;

export const ContainerInside = styled(Row)`
  margin: 24px;
  padding: 24px;
  background: #fff;
  border: 1px solid #dddfe0;
`;

export const BoxCards = styled(Col)`
  display: inline-block;
  margin-left: 10px;
`;

export const StyledBox = styled(Col)``;

export const StyledBoxGraphic = styled(Col)`
  display: flex;
  align-items: center;
`;

export const StyledDivider = styled(Divider)``;
