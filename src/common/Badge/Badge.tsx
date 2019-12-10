import React from "react";
import { Badge } from "./Badge.styled";

interface IProps {
  children: React.ReactChild;
}

const BadgeComponent = (props: IProps) => {
  const { children } = props;

  return <Badge>{children}</Badge>;
};

export default BadgeComponent;
