import { Button, View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { StyleSheet } from "react-native"
import { router } from 'expo-router'


export function Menu() {
  function handleLogin() {
      router.push("/(auth)/login");
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opções</Text>
      <View style={styles.box}>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={handleLogin}>
          <Text style={styles.textBtn}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:0.5,
    gap: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 1,
    borderColor: "gray",
    paddingTop: 50,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#2f2b61"
  },

  box: {
    width: "100%",
    height: 52,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    padding: 15,
    fontSize: 16,
    color: "white"
  },

  title:{
    fontSize: 14,
    color: "white",
    fontWeight: "bold"
  },

  btn: {
  },

  textBtn: {
    fontSize: 14, 
    color: "white",

  }

})