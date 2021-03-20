import React, { useContext, useEffect, useState } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import history from "../../history";

import { Assets } from "../../utils/interfaces";

import HighchartsReact from "highcharts-react-official";

import { AiTwotoneAlert, AiOutlinePoweroff } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";
import { DeploymentUnitOutlined } from "@ant-design/icons";

import Header from "../../components/Header";
import CardAsset from "./components/CardAsset";

import { Container, ContainerInside, BoxCards, Saudation, StyledDivider, StyledBox, StyledBoxGraphic } from "./style";

function Home() {
  const { assetsUnit1, assetsUnit2, currentUser } = useContext(AuthCreateContext);
  const assetsUnitCurrent = currentUser?.unitId === 1 ? assetsUnit1 : assetsUnit2;
  const [inOperation, setInOperation] = useState<number>(0);
  const [inAlert, setInAlert] = useState<number>(0);
  const [inDowntime, setInDowntime] = useState<number>(0);
  const [unknown, setUnknown] = useState<number>(0);

  useEffect(() => {
    assetsUnitCurrent.map((item: Assets) => {
      if (item.status === "inAlert") {
        return setInAlert((prevState) => prevState + 1);
      } else if (item.status === "inOperation") {
        return setInOperation((prevState) => prevState + 1);
      } else if (item.status === "inDowntime") {
        return setInDowntime((prevState) => prevState + 1);
      } else {
        return setUnknown((prevState) => prevState + 1);
      }
    });
  }, [assetsUnitCurrent]);

  const config = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Status Geral",
    },
    series: [
      {
        name: "Máquinas",
        colorByPoint: true,
        data: [
          {
            name: "Em operação",
            y: inOperation,
            sliced: true,
            selected: true,
            color: "green",
          },

          {
            name: "Em Alerta",
            y: inAlert,
            sliced: true,
            color: "orange",
          },

          {
            name: "Em Parada",
            y: inDowntime,
            sliced: true,
            color: "red",
          },

          {
            name: "Desconhecido",
            y: unknown,
            sliced: true,
            color: "black",
          },
        ],
      },
    ],
  };

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

  function handleClickCard(idAsset: number | undefined) {
    history.push(`/asset/${idAsset}`);
  }

  return (
    <Container>
      <Header />
      <ContainerInside>
        <Saudation>Olá, {currentUser?.name}! Escolha um ativo de sua unidade abaixo: </Saudation>
        <StyledDivider orientation="left">
          <DeploymentUnitOutlined style={{ marginRight: "10px" }} />
          Ativos
        </StyledDivider>
        <StyledBox span={16}>
          {assetsUnitCurrent.map((item: Assets) => {
            return (
              <>
                <BoxCards key={item.id} span={10} onClick={() => handleClickCard(item.id)}>
                  <CardAsset titleMeta={item.name} cover={<img alt={item.name} src={item.image} style={{ height: "230px" }} />}>
                    Status: {iconSelector(item.status)}
                  </CardAsset>
                </BoxCards>
              </>
            );
          })}
        </StyledBox>
        <StyledBoxGraphic span={7}>
          <HighchartsReact options={config}></HighchartsReact>
        </StyledBoxGraphic>
      </ContainerInside>
    </Container>
  );
}

export default Home;
