import { TextInput, View } from "react-native";
import styles from "./styles";

export default function Input() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="pass" />
    </View>
  );
}
