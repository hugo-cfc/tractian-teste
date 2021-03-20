import React from "react";

import { CardProps, Divider, Row } from "antd";

import { StyledCard, StyledMeta } from "./style";
import { DeploymentUnitOutlined } from "@ant-design/icons";

interface OnlyProps extends CardProps {
  titleMeta?: string | undefined;
}

export default function CardUnit({ titleMeta, ...props }: OnlyProps) {
  return (
    <>
      <StyledCard {...props} hoverable>
        <Row justify="center">
          <DeploymentUnitOutlined style={{ fontSize: "200px" }} />
        </Row>
        <Divider />
        <StyledMeta title={titleMeta} />
      </StyledCard>
    </>
  );
}
