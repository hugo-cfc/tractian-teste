import React, { useContext } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import { BankOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";

import Header from "../../components/Header";

import { NameProfile, ContainerInside, ContainerAvatar, StyledCol, AvatarProfile, CoverContainer, StyledRow, Content, RowNameUser, SpanDetails } from "./style";
import { Divider } from "antd";

export default function Profile() {
  const { currentUser, avatarName } = useContext(AuthCreateContext);
  return (
    <>
      <Header />
      <ContainerInside>
        <CoverContainer align="middle" justify="center">
          <ContainerAvatar>
            <AvatarProfile size={244}>{avatarName}</AvatarProfile>
          </ContainerAvatar>
        </CoverContainer>
        <Content>
          <RowNameUser justify="center">
            <NameProfile>{currentUser?.name}</NameProfile>
          </RowNameUser>
          <Divider dashed />
          <StyledRow justify="center">
            <StyledCol span={5}>
              <NameProfile>
                <BankOutlined />
                <SpanDetails>{currentUser?.companyName}</SpanDetails>
              </NameProfile>
            </StyledCol>
            <StyledCol span={5}>
              <NameProfile>
                <DeploymentUnitOutlined />
                <SpanDetails>{currentUser?.unitName}</SpanDetails>
              </NameProfile>
            </StyledCol>
            <StyledCol span={5}>
              <NameProfile>
                <AiOutlineMail />
                <SpanDetails>{currentUser?.email}</SpanDetails>
              </NameProfile>
            </StyledCol>
          </StyledRow>
        </Content>
      </ContainerInside>
    </>
  );
}
