import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & { title: string };

export function InputWithTitle({ title, ...rest }: Props) {
  return (
    <View style={styles.container_input}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.inputWithTitle} {...rest} />
    </View>
  );
}
    