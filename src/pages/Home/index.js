import React, { useState, useEffect, useRef } from "react";
import Text from "../../styles/typography";
import V from "../../styles/variables";
import avatar from "../../../assets/avatar.png";
import * as S from "./styles";
import { categoryList, gameData } from "../../data";

export default ({ navigation }) => {
  const gamesRef = useRef();
  const [selectedTag, setSelectedTag] = useState("All");

  const changeTag = (item) => {
    gamesRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedTag(item);
  };

  const gameItem = (item) => {
    return (
      <S.Game onPress={() => navigation.navigate("Game", { game: item })}>
        <>
          <S.GameCover source={item.cover} />
          <S.GameInfo backgroundColor={item.backgroundColor}>
            <S.GameImage source={item.cover} />
            <S.GameTitle>
              <Text medium bold>
                {item.title}
              </Text>
              <Text small>{item.teaser}</Text>
            </S.GameTitle>
          </S.GameInfo>
        </>
      </S.Game>
    );
  };
  return (
    <S.Container>
      <S.Header>
        <Text large>
          Hello{" "}
          <Text large bold>
            Tom,
          </Text>
          {"\n"}
          <Text large bold>
            Best games for today
          </Text>
        </Text>
        <S.Avatar source={avatar} />
      </S.Header>
      <S.WrapperCategory
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {categoryList.map((item) => (
          <S.CategoryItem onPress={() => changeTag(item)} key={String(item)}>
            <>
              <S.CategoryName selected={selectedTag == item ? true : false}>
                {item}
              </S.CategoryName>
              {selectedTag == item && <S.Dot />}
            </>
          </S.CategoryItem>
        ))}
      </S.WrapperCategory>
      <S.Games
        keyExtractor={(item) => String(item.id)}
        data={gameData.filter((game) => {
          return game.category.includes(selectedTag) || selectedTag == "All";
        })}
        renderItem={({ item }) => gameItem(item)}
        ref={gamesRef}
      />
    </S.Container>
  );
};
