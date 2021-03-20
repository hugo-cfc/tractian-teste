import styled from "styled-components";

import { Row, Col, Layout, Typography, Avatar } from "antd";

const { Header } = Layout;
const { Text } = Typography;

export const HeaderStyled = styled(Header)`
  background: #001529;
`;

export const HeaderRow = styled(Row)``;

export const HeaderCol = styled(Col)`
  flex: none;
`;

export const ImgLogo = styled.img`
  cursor: pointer;
`;

export const AvatarProfile = styled(Avatar)`
  background: #fafa;
  margin-right: 10px;
`;

export const AvatarName = styled(Text)`
  color: #fff;
  margin-left: 10px;
`;
