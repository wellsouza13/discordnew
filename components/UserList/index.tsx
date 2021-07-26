import React from "react";
import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
  img?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, img }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} img={img} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Mestre - 1</Role>
      <UserRow
        nickname="Wel do Mel"
        img="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/101542476_2935687363184298_4473885377169457152_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=eceWEQk0encAX-By7gO&_nc_ht=scontent.fcgh2-1.fna&oh=1cfe65e8df00f73b32b7e3c9b327ecec&oe=5F753BC7"
      />

      <Role>Online - 2</Role>
      <UserRow
        nickname="Groovy"
        isBot
        img="https://groovy.bot/img/logos/rounded.svg"
      />
      <UserRow
        nickname="Vini"
        img="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/19030215_10207774691759432_8257538742246086369_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=6Yfzr8fYd3sAX9_TgA9&_nc_ht=scontent.fcgh2-1.fna&oh=303d53649192396c9319fb7bc497a635&oe=5F775AC5"
      />
      <UserRow
        nickname="Thalao"
        img="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/117724013_311300913519943_5594043003476270815_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=_rCNnStdczMAX-58qO-&_nc_ht=scontent.fcgh2-1.fna&oh=505c04ecaed8fd099dfeb261c059ddda&oe=5F76CC0F"
      />

      <Role>Offline- 15</Role>
      <UserRow nickname="biel" />
      <UserRow
        nickname="cebolinha"
        img="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/50465261_2020293318053098_3531881336987975680_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=WIZRNdWK_mIAX8AtGvx&_nc_ht=scontent.fcgh2-1.fna&oh=9bbd8c0f14efdd9311dbd2155d1c2841&oe=5F756478"
      />
      <UserRow nickname="csOliveira08" />
      <UserRow nickname="Diego" />
      <UserRow nickname="Duduzin Beiramar" />
      <UserRow nickname="eduardodiaszp" />
      <UserRow nickname="Leivasss" />
      <UserRow nickname="Lucas" />
      <UserRow nickname="Lucas Silva e Silva" />
      <UserRow nickname="monttero" />
      <UserRow nickname="pedrolimaflu" />
      <UserRow nickname="PriscilaSouza" />
      <UserRow nickname="Vinter" />
      <UserRow nickname="yuriflu" />
      <UserRow nickname="ninext" />
    </Container>
  );
};

export default UserList;
