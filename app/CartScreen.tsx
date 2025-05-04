import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" size={100} color={"white"} />
      <Text style={styles.eemptyText}>Seu carrinho está vazio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eemptyText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
});
