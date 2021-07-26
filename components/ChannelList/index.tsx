import React from "react";

import ChanelButton from "../ChanelButton";

import { Container, Category, AddCategoryIcon, OtherIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <>
        <Category>
          <OtherIcon />
          <span>Bate Virilha</span>

          <AddCategoryIcon />
        </Category>

        <ChanelButton channelName="fodis" />
        <ChanelButton channelName="fale-o-que-quiser" />
        <ChanelButton channelName="codzin" />
        <ChanelButton channelName="fall-guys" />
        <ChanelButton channelName="valorant" />
      </>
    </Container>
  );
};

export default ChannelList;
