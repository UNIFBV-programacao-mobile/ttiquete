import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Index() {
 return (
<View style={styles.container}>
<Text style={styles.text}>Home screen</Text>
<Link href="/CartScreen" style={styles.button}>
        Go to Cart screen
      </Link>
</View>

);
}

const styles = StyleSheet.create({

  container: {
flex: 1,
backgroundColor: '#483D8B',
alignItems: 'center',
justifyContent: 'center',
},

text: {
color: 'white'
},

button: {
fontSize: 20,
textDecorationLine: 'underline',
color: '#fff',
},
});