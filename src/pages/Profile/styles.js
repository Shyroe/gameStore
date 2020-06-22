import styled from "styled-components/native";
import V from "../../styles/variables";

export const Container = styled.View`
  flex: 1;
  background-color: #343434;
`;

export const AvatarContainer = styled.View`
  margin: 64px 0 16px 0;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`;

export const Badge = styled.View`
  background-color: ${V.colors.primary};
  align-self: center;
  padding: 4px 12px;
  border-radius: 8px;
`;
export const Stats = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin: 32px 0;
`;
export const Stat = styled.View`
  margin: 0 16px;
`;

export const Games = styled.FlatList`
  margin: 32px 16px 0 16px;
`;
export const Game = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
export const GameImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 12px;
`;
export const Info = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const Account = styled.View`
  margin: 32px 16px;
  flex-direction: row;
`;
export const Settings = styled.TouchableOpacity`
  background-color: ${V.colors.primary};
  padding: 12px;
  border-radius: 8px;
`;
export const Logout = styled.TouchableOpacity`
  flex: 1;
  background-color: #404040;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
