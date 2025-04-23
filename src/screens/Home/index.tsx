import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import styles from "./styles";
import Logo from "../../components/Logo";
import Input from "../../components/Input";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Input />
      <Text>Home works!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
