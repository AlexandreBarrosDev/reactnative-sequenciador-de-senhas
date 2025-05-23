import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import Logo from "../../components/Logo";
import DefaultTextInput from "../../components/DefaultTextInput";
import DefaultButton from "../../components/DefaultButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <DefaultTextInput />
      <DefaultButton />
      <Text style={styles.text}>Home works!!</Text>
    </View>
  );
}
