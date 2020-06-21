import styled from "styled-components/native";
import V from "../../styles/variables";
import Text from "../../styles/typography";

export const Container = styled.View`
  background-color: ${V.colors.darkGrey2};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: auto;
  padding: 13px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: auto;
  background-color: transparent;
`;

export const WrapperCategory = styled.ScrollView``;

export const CategoryItem = styled.TouchableHighlight`
  padding: 5px 8px;
  align-items: center;
  height: 32px;
  background-color: transparent;
`;

export const CategoryName = styled(Text)`
  color: ${({ selected }) => (selected == true ? V.colors.primary : "#9a9a9a")};
  font-weight: ${({ selected }) => (selected == true ? "700" : "500")};
`;
export const Dot = styled.View`
  width: 5px;
  height: 5px;
  background-color: ${V.colors.primary};
  border-radius: 5px;
`;

export const Games = styled.FlatList``;

export const Game = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const GameCover = styled.Image`
  width: 100%;
  height: 300px;
`;
export const GameInfo = styled.View`  
  flex-direction: row;  
  padding: 16px;
  /* background-color: ${({ color }) => (color == true ? color : "#9a9a9a")}; */
  align-items: center;  
  margin: -50px 16px 0 16px;
  /* background-color: teal; */
  border-radius: 8px;
`;

export const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 5px;
  margin-right: 15px;
`;
export const GameTitle = styled.View``;
