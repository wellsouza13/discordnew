import React from "react";
import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>fale-o-que-quiser</Title>
      <Separator />
      <Description>Só não desrespeita os membros</Description>
    </Container>
  );
};

export default ChannelInfo;
