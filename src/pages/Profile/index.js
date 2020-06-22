import React from "react";
import Text from "../../styles/typography";
import V from "../../styles/variables";
import avatar from "../../../assets/avatar.png";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { gameData } from "../../data";
import * as S from "./styles";

export default () => {
  return (
    <S.Container>
      <S.AvatarContainer>
        <S.Avatar source={require("../../../assets/avatar.png")} />
        <Text large bold>
          RocketDigital
        </Text>
      </S.AvatarContainer>
      <S.Badge>
        <Text small heavy>
          Pro Player
        </Text>
      </S.Badge>

      <S.Stats>
        <S.Stat>
          <Text large heavy>
            250 <Text color="#9a9a9a">Games</Text>{" "}
          </Text>
        </S.Stat>
        <S.Stat>
          <Text large heavy>
            3 <Text color="#9a9a9a">Purchases</Text>{" "}
          </Text>
        </S.Stat>
      </S.Stats>

      <Text center large>
        Purchased Games
      </Text>
      <S.Games
        data={gameData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <S.Game>
            <S.GameImage source={item.cover} />
            <S.Info>
              <Text bold> {item.title} </Text>
              <Text small color="#9a9a9a">
                {" "}
                {Math.floor(Math.random() * 1000) + 1} Sales
              </Text>
            </S.Info>
            <Text heavy color="#819ee5">
              {" "}
              ${Math.floor(Math.random() * 50) + 1}
            </Text>
          </S.Game>
        )}
      />

      <S.Account>
        <S.Settings>
          <Entypo name="cog" size={24} color="#fff" />
        </S.Settings>
        <S.Logout>
          <Text heavy>Logout</Text>
        </S.Logout>
      </S.Account>
    </S.Container>
  );
};
