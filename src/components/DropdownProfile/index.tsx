import React, { useContext } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import history from "../../history";

import { MenuContainer, AvatarProfile, AvatarName, StyledRow, StyledCol, StyledDivider } from "./style";

import { BankOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Props {
  nameAvatar?: string;
  nameUser?: string;
  companyName?: string;
  unityName?: string;
}

export default function DropdownProfile(props: Props) {
  const { handleLogout, currentUser, avatarName } = useContext(AuthCreateContext);

  return (
    <>
      <MenuContainer>
        <MenuContainer.Item style={{ width: "100%", height: "100%" }} onClick={(e: any) => history.push("/profile")}>
          <StyledRow justify="center">
            <AvatarProfile>{avatarName}</AvatarProfile>
            <AvatarName>{currentUser?.name}</AvatarName>
          </StyledRow>
          <StyledDivider />
        </MenuContainer.Item>
        <MenuContainer.Item style={{ width: "100%", height: "100%" }} onClick={(e: any) => history.push("/companies")}>
          <StyledRow>
            <StyledCol>
              <BankOutlined />
              {currentUser?.companyName}
            </StyledCol>
          </StyledRow>
        </MenuContainer.Item>
        <MenuContainer.Item style={{ width: "100%", height: "100%" }} onClick={(e: any) => history.push(`/units/${currentUser?.unitId}`)}>
          <StyledRow>
            <StyledCol>
              <DeploymentUnitOutlined />
              {currentUser?.unitName}
            </StyledCol>
          </StyledRow>
        </MenuContainer.Item>
        <MenuContainer.Item style={{ width: "100%", height: "100%" }}>
          <StyledRow justify="center">
            <StyledCol>
              <Button type="primary" onClick={handleLogout}>
                Sair
              </Button>
            </StyledCol>
          </StyledRow>
        </MenuContainer.Item>
      </MenuContainer>
    </>
  );
}
