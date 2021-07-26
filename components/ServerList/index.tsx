import React from "react";

import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton
        mentions={5}
        img={
          "https://cdn.pensador.com/img/imagens/im/ag/imagens_frases_inspiradoras_f_o.jpg"
        }
      />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;
