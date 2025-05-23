import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

export default function DefaultTextInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Password" />
    </View>
  );
}
