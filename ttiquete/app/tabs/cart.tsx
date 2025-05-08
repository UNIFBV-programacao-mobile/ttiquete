import React from "react"; 
import { View, Text, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'; 

const CartScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Carrinho</Text>
        <Ionicons name="cart-outline" size={100} color="#ccc" style={styles.icon} />
        <Text style={styles.message}>Seu carrinho está vazio</Text>
    </View>
);
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F2B64',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 40,
    },
    icon: {
        marginBottom: 20,
    },
    message: {
        fontSize: 14,
        color: '#fff',
    },
});