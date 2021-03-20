import React, { useContext } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import history from "../../history";

import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import TractianLogo from "../../assets/logoTractian.webp";

import { HeaderStyled, HeaderRow, HeaderCol, ImgLogo, AvatarProfile, } from "./style";

import DropdownProfile from "../DropdownProfile";

export default function Header() {
  const { currentUser, avatarName } = useContext(AuthCreateContext);

  return (
    <>
      <HeaderStyled>
        <HeaderRow justify="space-between">
          <HeaderCol span={7} onClick={(e:any) => {history.push('/home')}}>
            <ImgLogo src={TractianLogo} />
          </HeaderCol>
          <HeaderCol span={3}>
            <AvatarProfile>{avatarName}</AvatarProfile>
            <Dropdown overlayStyle={{ background: "#fff" }} overlay={<DropdownProfile />}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                {currentUser?.name} <DownOutlined />
              </a>
            </Dropdown>
          </HeaderCol>
        </HeaderRow>
      </HeaderStyled>
    </>
  );
}
