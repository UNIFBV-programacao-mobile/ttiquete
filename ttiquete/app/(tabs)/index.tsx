import { Text, View,  StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const PlaceholderImage = require("..\..\assets\images\image-1.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.Image}/>
      
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2B64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  Image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

});
