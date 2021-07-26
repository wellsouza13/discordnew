import React from "react";

import Logo from "../../assets/logo.svg";

import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  img?: string;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  img,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
      img={img}
    >
      {isHome && <img src={Logo} alt="Rockeatseat" />}
    </Button>
  );
};

export default ServerButton;
