import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import history from "../../history";

import { AuthCreateContext } from "../../Context/AuthContext";

import { DataUsers, Assets } from "../../utils/interfaces";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import api from "../../services/api";

import { DeploymentUnitOutlined } from "@ant-design/icons";
import { AiTwotoneAlert, AiOutlinePoweroff } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";

import Header from "../../components/Header";
import CardAsset from "../Home/components/CardAsset";

import {
  TitleUnit,
  StyledRow,
  StyledCol,
  StyledTable,
  StyledTHead,
  StyledTbody,
  StyledTr,
  StyledTd,
  StyledTh,
  ContainerInside,
  StyledDivider,
  ContainerCards,
  BoxCards,
} from "./style";

interface ParamTypes {
  id: string;
}

export default function UnityPage() {
  const { assetsUnit1, assetsUnit2, usersUnit1, usersUnit2 } = useContext(AuthCreateContext);
  const { id } = useParams<ParamTypes>();
  const assetsUnitCurrent = Number(id) === 1 ? assetsUnit1 : assetsUnit2;
  const usersUnitCurrent = Number(id) === 1 ? usersUnit1 : usersUnit2;
  const [currentUnitName, setCurrentUnitName] = useState("");
  const dataGraphicColumn = [] as any;
  const [inOperation, setInOperation] = useState<number>(0);
  const [inAlert, setInAlert] = useState<number>(0);
  const [inDowntime, setInDowntime] = useState<number>(0);
  const [unknown, setUnknown] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`units/${id}`);

      setCurrentUnitName(data.name);
    })();
  });

  useEffect(() => {
    assetsUnitCurrent.map((item: Assets) => {
      dataGraphicColumn.push({
        name: item.name,
        y: item.healthscore,
      });
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

  function handleClickCard(idAsset: number | undefined) {
    history.push(`/asset/${idAsset}`);
  }

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

  const configPizza = {
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

  const configColumn = {
    chart: {
      type: "column",
    },
    title: {
      text: "Nível de saúde dos ativos",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Percentual de saúde",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },
    series: [
      {
        name: "Nível de saúde do ativo",
        colorByPoint: true,
        data: assetsUnitCurrent.map((item: Assets) => {
          return {
            name: item.name,
            y: item.healthscore,
          };
        }),
      },
    ],
  };

  console.log(dataGraphicColumn);

  return (
    <>
      <Header />
      <ContainerInside>
        <StyledRow>
          <StyledCol span={24}>
            <TitleUnit>
              <DeploymentUnitOutlined style={{ marginRight: "10px" }} />
              {currentUnitName}
            </TitleUnit>
          </StyledCol>
        </StyledRow>
        <StyledDivider orientation="left">
          <DeploymentUnitOutlined style={{ marginRight: "10px" }} />
          Usuários
        </StyledDivider>
        <StyledRow justify="center">
          <StyledCol span={7}>
            <StyledTable>
              <StyledTHead>
                <StyledTh>Name</StyledTh>
                <StyledTh>Email</StyledTh>
              </StyledTHead>
              <StyledTbody>
                {usersUnitCurrent.map((item: DataUsers) => {
                  return (
                    <>
                      <StyledTr>
                        <StyledTd>{item.name}</StyledTd>
                        <StyledTd>{item.email}</StyledTd>
                      </StyledTr>
                    </>
                  );
                })}
              </StyledTbody>
            </StyledTable>
          </StyledCol>
        </StyledRow>
        <StyledDivider orientation="left">
          <DeploymentUnitOutlined style={{ marginRight: "10px" }} />
          Ativos
        </StyledDivider>
        <StyledRow>
          <ContainerCards>
            {assetsUnitCurrent.map((item: Assets) => {
              return (
                <>
                  <BoxCards key={item.id} span={5} onClick={() => handleClickCard(item.id)}>
                    <CardAsset titleMeta={item.name} cover={<img alt={item.name} src={item.image} style={{ height: "230px" }} />}>
                      Status: {iconSelector(item.status)}
                    </CardAsset>
                  </BoxCards>
                </>
              );
            })}
          </ContainerCards>
        </StyledRow>
        <StyledDivider orientation="left">
          <DeploymentUnitOutlined style={{ marginRight: "10px" }} />
          Insights
        </StyledDivider>
        <StyledRow>
          <StyledCol span={12}>
            <HighchartsReact highcharts={Highcharts} options={configPizza}></HighchartsReact>
          </StyledCol>
          <StyledCol span={12}>
            <HighchartsReact highcharts={Highcharts} options={configColumn}></HighchartsReact>
          </StyledCol>
        </StyledRow>
      </ContainerInside>
    </>
  );
}
