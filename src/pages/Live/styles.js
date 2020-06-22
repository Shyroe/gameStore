import styled from "styled-components/native";
import V from "../../styles/variables";
import Text from "../../styles/typography";

export const Container = styled.View`
  background-color: ${V.colors.darkGrey2};
  flex: 1;
`;

export const Header = styled.View`
  margin: 32px 16px 0 16px;
`;

export const SearchContainer = styled.View`
  position: relative;
  margin: 32px 8px;
  background-color: #404040;
  border-radius: 100px;
  justify-content: center;
`;
export const Search = styled.TextInput`
  padding: 8px 64px 8px 32px;
  color: #c6c6c6;
`;
export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const SectionContainer = styled.View`
  margin: 0 16px;
`;
export const PopularGames = styled.ScrollView`
  margin: 16px 0 16px -16px;
`;
export const PopularGameContainer = styled.View`
  width: 80px;
  margin: 0 16px;
`;
export const PopularGame = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const LiveGamesTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LiveGames = styled.FlatList`
  flex: 1;
  margin: 16px 16px 0 16px;
`;

export const LiveGameContainer = styled.View`
  position: relative;
`;
export const LiveGame = styled.Image`
  width: 100%;
  height: 275px;
  margin-bottom: 16px;
  border-radius: 12px;
`;
export const LiveGameOver = styled.View`
  position: absolute;
  top: 8px;
  right: 16px;
  flex-direction: row;
  align-items: center;
`;
export const LiveGameTitle = styled.View`
  background-color: #819ee5;
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 4px;
`;
export const LiveGameBadge = styled.View`
  background-color: #e54949;
  border-radius: 4px;
  padding: 2px 8px;
`;
