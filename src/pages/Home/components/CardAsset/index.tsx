import React from "react";

import { CardProps } from "antd";

import { StyledCard, StyledMeta } from "./style";

interface OnlyProps extends CardProps {
  titleMeta?: string | undefined;
}

export default function CardAsset({ titleMeta, ...props }: OnlyProps) {
  return (
    <>
      <StyledCard {...props} hoverable>
        <StyledMeta title={titleMeta} />
        {props.children}
      </StyledCard>
    </>
  );
}
