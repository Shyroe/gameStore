import React from "react";
import Text from "../../styles/typography";
import V from "../../styles/variables";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import * as S from "./styles";

export default function index({ route, navigation }) {
  // Extrair obj game passado como parâmetro pela rota Home
  const { game } = route.params;

  const renderStars = () => {
    let stars = [];
    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
          key={s}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= s ? "#819ee5" : "#434958"}
        />
      );
    }

    return <S.Stars>{stars}</S.Stars>;
  };
  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.GameArtContainer>
        <S.GameArt source={game.cover} />
        <S.BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-close" size={48} color="#fff" />
        </S.BackButton>
      </S.GameArtContainer>

      <S.GameInfoContainer>
        <S.GameThumbContainer>
          <S.GameThumb source={game.cover} />
        </S.GameThumbContainer>
        <S.GameInfo>
          <Text heavy medium>
            {game.title}
          </Text>
          <Text color="#9a9a9a">{game.teaser}</Text>
        </S.GameInfo>
        <S.Download>
          <Ionicons name="md-cloud-download" size={24} color="#fff" />
        </S.Download>
      </S.GameInfoContainer>

      <S.GameStatsContainer>
        {renderStars()}
        <Text heavy color="#9a9a9a">
          {game.rating}
        </Text>
        <Text bold color="#9a9a9a">
          {game.category[0]}
        </Text>
        <Text bold color="#9a9a9a">
          {game.age}
        </Text>
        <Text bold color="#9a9a9a">
          Game of the day
        </Text>
      </S.GameStatsContainer>
    </S.Container>
  );
}
