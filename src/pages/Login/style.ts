import styled, { keyframes } from "styled-components";

import { Row, Col, Layout, Typography, Form, Input, Button } from "antd";

import BackgroundImg from "../../assets/backgroundLogin.jpg";

const { Header, Content } = Layout;
const { Title } = Typography;

export const Container = styled.main`
  background-image: url(${BackgroundImg});
  height: 100vh;
`;

export const HeaderStyled = styled(Header)`
  background: #001529;
`;

export const HeaderCol = styled(Col)``;

export const ImgLogo = styled.img``;

export const ContainerInside = styled(Row)``;

export const MainCols = styled(Col)``;

const slideIn = keyframes`
  0% {
    transform: translateX(-900px);
  }
  80% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const TypographySaudation = styled(Title)`
  margin-top: 30vh;
  color: #fff !important;
  animation: ${slideIn} 2s forwards;
`;

export const ContentLogin = styled(Content)`
  background: #fff;
  opacity: 0.8;
  height: 93vh;
  border: 1px solid #d8dade;
  padding: 54px;
  padding-bottom: 0;
`;

export const FormStyled = styled(Form)`
  margin-top: 30vh;
`;

export const InputStyled = styled(Input)`
  border: none;
  border-bottom: 1px solid #0562b4;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  background: #0562b4;
  color: #fff;
  opacity: 0.8;
  &:hover {
    background: #0562b4;
    color: #fff;
    opacity: 1;
  }
  &:active {
    background: #0562b4;
    color: #fff;
  }
  &:focus {
    background: #0562b4;
    color: #fff;
  }
`;
