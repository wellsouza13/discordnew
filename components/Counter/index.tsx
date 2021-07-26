import React from "react";
import { Container } from "./styles";

interface Props {
  max: number;
  count: number;
}

const Counter: React.FC<Props> = ({ max, count }) => {
  // const danger = max - 40;
  return (
    <Container limitMax={max === count} minCount={count >= max - 40}>
      <span id="count">{count}</span>/<span id="max">{max}</span>
    </Container>
  );
};

export default Counter;
