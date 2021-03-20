import styled from "styled-components";

import { Row, Col, Avatar, } from "antd";

import CoverImg from "../../assets/tractianCover.png";

interface ColumnProps {
  justifyCenter?: boolean;
}

export const NameProfile = styled.h1``;

export const ContainerInside = styled(Row)`
`;

export const CoverContainer = styled(Row)`
  width: 100%;
  background-image: url(${CoverImg});
  background-position: center;
`;

export const ContainerAvatar = styled(Col)``;

export const StyledCol = styled(Col)`
  display: ${(props: ColumnProps) => (props.justifyCenter ? "flex" : "")};
  justify-content: ${(props: ColumnProps) => (props.justifyCenter ? "center" : "")};
  position: relative;
`;

export const AvatarProfile = styled(Avatar)`
  background: #ffc6ff;
  border: 5px solid #fafafa;
  & span {
    font-size: 80px;
  }
`;

export const Content = styled.main`
  width: 100%;
  margin: 10px;
  padding: 24px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #dddfe0;

`;

export const RowNameUser = styled(Row)`
  width: 100%;
`;

export const StyledRow = styled(Row)``;

export const SpanDetails = styled.span`
  font-size: 20px;
  margin-left: 10px;
`
