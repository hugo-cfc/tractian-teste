import React, { useContext } from "react";

import history from "../../history";

import { AuthCreateContext } from "../../Context/AuthContext";

import { Units } from "../../utils/interfaces";

import Header from "../../components/Header";
import CardUnit from "./components/CardUnit";

import { Container, ContainerInside, CompanyName, StyledCol, StyleDivider, StyledRow } from "./style";

export default function CompanyPage() {
  const { units, currentUser } = useContext(AuthCreateContext);

  function handleClickCard(id: number | undefined) {
    history.push(`/units/${id}`);
  }

  return (
    <>
      <Container>
        <Header />
        <ContainerInside>
          <StyledCol span={24}>
            <CompanyName>{currentUser?.companyName}</CompanyName>
          </StyledCol>
          <StyleDivider />
          <StyledRow justify="center">
            {units?.map((item: Units) => {
              return (
                <StyledCol span={5}>
                  <CardUnit titleMeta={item.name} onClick={() => handleClickCard(item.id)} />
                </StyledCol>
              );
            })}
          </StyledRow>
        </ContainerInside>
      </Container>
    </>
  );
}
