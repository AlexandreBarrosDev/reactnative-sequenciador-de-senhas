import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import Logo from "../../components/Logo";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Home works!!</Text>
    </View>
  );
}
