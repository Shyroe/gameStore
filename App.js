import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./src/main.routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <Routes />
    </>
  );
}
