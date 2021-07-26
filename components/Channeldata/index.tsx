import React, { useRef, useEffect, useState } from "react";

//import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import Counter from "../Counter";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Well Do Mel"
            date="01/09/2020"
            content="Salve cachorro"
            img="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/101542476_2935687363184298_4473885377169457152_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=eceWEQk0encAX-By7gO&_nc_ht=scontent.fcgh2-1.fna&oh=1cfe65e8df00f73b32b7e3c9b327ecec&oe=5F753BC7"
          />
        ))}
        {Array.from(Array(3).keys()).map((n) => (
          <ChannelMessage
            author="Thalao"
            date="01/09/2020"
            content="-play Menos é mais - oi sumida"
            img="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/117724013_311300913519943_5594043003476270815_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=_rCNnStdczMAX-58qO-&_nc_ht=scontent.fcgh2-1.fna&oh=505c04ecaed8fd099dfeb261c059ddda&oe=5F76CC0F"
          />
        ))}
        <ChannelMessage
          author="Groovy"
          date="01/09/2020"
          content={
            <>
              Menos é mais - oi sumida. <Mention>[@Thlao]</Mention>
            </>
          }
          hasMention
          isBot
          img="https://groovy.bot/img/logos/rounded.svg"
        />
      </Messages>

      <InputWrapper>
        <InputIcon />
        <Input
          type="text"
          placeholder="Conversarem #chat-livre"
          maxLength={80}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Counter max={80} count={message.length} />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
