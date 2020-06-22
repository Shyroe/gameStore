import React from "react";
import Text from "../../styles/typography";
import V from "../../styles/variables";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { gameData } from "../../data";
import * as S from "./styles";

export default function index() {
  return (
    <S.Container>
      <S.Header>
        <Text large bold>
          Streaming
        </Text>
        <S.SearchContainer>
          <S.Search
            placeholder="Search live streams or games..."
            placeholderTextColor="#838383"
          />
          <S.SearchIcon>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </S.SearchIcon>
        </S.SearchContainer>
      </S.Header>

      <S.SectionContainer>
        <Text medium bold>
          Popular Games
        </Text>
        <S.PopularGames
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {gameData.map((game, index) => {
            return (
              <S.PopularGameContainer key={index}>
                <S.PopularGame source={game.cover} />
              </S.PopularGameContainer>
            );
          })}
        </S.PopularGames>
      </S.SectionContainer>
      <S.SectionContainer>
        <S.LiveGamesTitle>
          <Text medium bold>
            Live now
          </Text>
          <Text bold color={V.colors.primary}>
            View all
          </Text>
        </S.LiveGamesTitle>
      </S.SectionContainer>

      <S.LiveGames
        keyExtractor={(item) => String(item.id)}
        data={gameData}
        renderItem={({ item }) => (
          <S.LiveGameContainer>
            <S.LiveGame source={item.cover} />
            <S.LiveGameOver>
              <S.LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </S.LiveGameTitle>
              <S.LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </S.LiveGameBadge>
            </S.LiveGameOver>
          </S.LiveGameContainer>
        )}
      />
    </S.Container>
  );
}
