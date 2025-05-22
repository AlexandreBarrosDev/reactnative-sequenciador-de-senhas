import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/favicon-32x32.png")}
        style={styles.image}
      />
      <Text style={styles.text}>PASS GENERATOR</Text>
    </View>
  );
}
