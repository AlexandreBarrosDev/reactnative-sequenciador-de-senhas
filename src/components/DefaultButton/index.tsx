import React from "react";
import { View, Button } from "react-native";

import styles from "./styles";

export default function DefaultButton() {
  return (
    <View>
      <Button
        onPress={() => alert("Button Pressed!")}
        accessibilityLabel="Clique para gerar senha"
        title="Gerar Senha"
        color={"#e7000b"}
      />
    </View>
  );
}
