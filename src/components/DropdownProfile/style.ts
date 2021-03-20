import styled from "styled-components";

import { Menu, Avatar, Typography, Row, Col, Divider } from "antd";

const { Text } = Typography;
const { Item } = Menu;

export const MenuContainer = styled(Menu)`
  width: 200px;
  border: 1px solid #dddfe0;
`;

export const StyledItem = styled(Item)``;

export const AvatarProfile = styled(Avatar)`
  background: #fafa;
  margin-right: 10px;
`;

export const AvatarName = styled(Text)`
  color: #001529;
`;

export const StyledRow = styled(Row)``;

export const StyledCol = styled(Col)``;

export const StyledDivider = styled(Divider)`
  margin: 0;
`;
