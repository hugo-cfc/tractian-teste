import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { AuthCreateContext } from "../../Context/AuthContext";

import api from "../../services/api";

import { Assets } from "../../utils/interfaces";

import { AiTwotoneAlert, AiOutlinePoweroff } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";

import Header from "../../components/Header";

import { Container, ContainerInside, Title, StyledColumn, StyledRow, StyledImg, StyledTable, StyledTr, StyledTh, StyledTd } from "./style";

interface ParamTypes {
  id: string;
}

function AssetDetails() {
  const { currentUser } = useContext(AuthCreateContext);
  const { id } = useParams<ParamTypes>();
  const [currentAsset, setCurrentAsset] = useState<Assets>({ sensors: [] });

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`assets/${id}`);

      console.log({data})
      setCurrentAsset({ ...data, unitName: currentUser?.unitName, companyName: currentUser?.companyName });

    })();
  }, [id]);

  function iconSelector(status: string | undefined) {
    switch (status) {
      case "inOperation":
        return (
          <>
            <BsLightningFill style={{ color: "green" }} /> Em Operação
          </>
        );
      case "inDowntime":
        return (
          <>
            <AiOutlinePoweroff style={{ color: "red" }} /> Em Parada
          </>
        );
      case "inAlert":
        return (
          <>
            <AiTwotoneAlert style={{ color: "orange" }} /> Em alerta
          </>
        );
      default:
        return "Desconhecido";
    }
  }

  const regexData = /(^(\d{4})-(\d{2})-(\d{2}))T(\d{2}:\d{2}:\d{2})(.[\da-zA-Z]*)/gm;

  return (
    <>
      <Container>
        <Header />
        <ContainerInside>
          <StyledRow>
            <StyledColumn span={24}>
              <Title>{currentAsset?.name}</Title>
            </StyledColumn>
          </StyledRow>
          <StyledRow>
            <StyledColumn>
              <StyledImg src={currentAsset?.image} alt={currentAsset?.name} />
            </StyledColumn>
            <StyledColumn offset={1} span={4}>
              <Title>Detalhes</Title>
              <StyledTable>
                <StyledTr>
                  <StyledTh>Empresa:</StyledTh>
                  <StyledTd>{currentAsset?.companyName}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Unidade:</StyledTh>
                  <StyledTd>{currentAsset?.unitName}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Sensor:</StyledTh>
                  {currentAsset.sensors.map((sensor: string) => {
                    return <StyledTd>{sensor}</StyledTd>;
                  })}
                </StyledTr>
                <StyledTr>
                  <StyledTh>Modelo:</StyledTh>
                  <StyledTd>{currentAsset?.model}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Status:</StyledTh>
                  <StyledTd>{iconSelector(currentAsset?.status)}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Saúde:</StyledTh>
                  <StyledTd>{currentAsset?.healthscore}%</StyledTd>
                </StyledTr>
              </StyledTable>
            </StyledColumn>
            <StyledColumn offset={1} span={4}>
              <Title>Especificações</Title>
              <StyledTable>
                <StyledTr>
                  <StyledTh>Temperatura Máxima:</StyledTh>
                  <StyledTd>{currentAsset?.specifications?.maxTemp} ºC</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Potência:</StyledTh>
                  <StyledTd>{currentAsset?.specifications?.power} kWh</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>RPM:</StyledTh>
                  <StyledTd>{currentAsset?.specifications?.rpm}</StyledTd>
                </StyledTr>
              </StyledTable>
            </StyledColumn>
            <StyledColumn offset={1} span={4}>
              <Title>Métricas</Title>
              <StyledTable>
                <StyledTr>
                  <StyledTh>Total de coletas:</StyledTh>
                  <StyledTd>{currentAsset?.metrics?.totalCollectsUptime}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Total de horas de coletas:</StyledTh>
                  <StyledTd>{currentAsset?.metrics?.totalUptime}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>Última coleta:</StyledTh>
                  <StyledTd>{currentAsset?.metrics?.lastUptimeAt?.replace(regexData, "$4/$3/$2")}</StyledTd>
                </StyledTr>
              </StyledTable>
            </StyledColumn>
          </StyledRow>
        </ContainerInside>
      </Container>
    </>
  );
}

export default AssetDetails;
