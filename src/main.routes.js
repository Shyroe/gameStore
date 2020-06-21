import React from "react";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// pages
import Home from "./pages/Home";
import Live from "./pages/Live";
import Profile from "./pages/Profile";
import Game from "./pages/Game";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 12,
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Live":
              iconName = "game-controller";
              break;
            case "Profile":
              iconName = "user";
              break;
            default:
              iconName = "home";
          }

          return (
            <TabBarContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#fff" />
            </TabBarContainer>
          );
        },
      })}
    >
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Live" component={Live} />
      <TabNav.Screen name="Profile" component={Profile} />
    </TabNav.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="Game" component={Game} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// Styles

export const TabBarContainer = styled.View`
  background-color: ${({ focused }) => (focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 32px;
`;
