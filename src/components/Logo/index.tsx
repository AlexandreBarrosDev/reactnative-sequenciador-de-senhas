import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./styles";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pass Generator</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/alx-logo.png")}
      />
    </View>
  );
}
