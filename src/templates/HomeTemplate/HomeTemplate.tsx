import React from "react";
import { Link } from "react-router-dom";
import type { HomeTemplateProps } from "./HomeTemplate.types";
import {
  Wrapper,
  Card,
  Title,
  Sub,
  Row,
  NavButton,
} from "./HomeTemplate.styles";

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  className,
  style,
}) => {
  return (
    <Wrapper data-testid="home-template" className={className} style={style}>
      <Card>
        <Title>FE Code Challenge</Title>
        <Sub>Foundation ready. Next: Atoms (Button, Typography).</Sub>
        <Row>
          <NavButton as={Link} to="/voice">
            Go to Voice
          </NavButton>
          <NavButton as={Link} to="/text">
            Go to Text
          </NavButton>
        </Row>
      </Card>
    </Wrapper>
  );
};
