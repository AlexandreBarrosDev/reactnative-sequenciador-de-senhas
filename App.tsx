import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Home from "./src/screens/Home";

import styles from "./Global.styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
