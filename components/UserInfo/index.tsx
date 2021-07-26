import React from "react";
import {
  Container,
  Profile,
  Avatar,
  UseData,
  Icons,
  MicIcon,
  HeadPhoneIcon,
  SettingsIcons,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UseData>
          <strong>Wellington Souza</strong>
          <span>#1937</span>
        </UseData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcons />
      </Icons>
    </Container>
  );
};

export default UserInfo;
