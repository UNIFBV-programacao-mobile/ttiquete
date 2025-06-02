import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";


const CartScreen = () => {
  const router = useRouter();

  const params = useLocalSearchParams();
  const [titulo, setTitulo] = useState(params.titulo ?? null);
  const [horario, setHorario] = useState(params.horario ?? null);
  const [preco, setPreco] = useState(params.preco ? parseFloat(params.preco as string) : null);
  const [quantidade, setQuantidade] = useState(1);

  const aumentar = () => setQuantidade((prev) => prev + 1);
  const diminuir = () => setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

  const total = preco ? (preco * quantidade).toFixed(2) : "0.00";

  const carrinhoVazio = !titulo || !preco || !horario;

  const finalizarCompra = () => {
    Alert.alert("Compra realizada com sucesso");

    
    setTitulo(null);
    setPreco(null);
    setHorario(null);
    setQuantidade(1);
    router.back();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
              colors={["#35306d", "transparent"]}
              style={styles.background}
            />
      <Text style={styles.title}>Carrinho</Text>

      {carrinhoVazio ? (
        <>
          <Ionicons name="cart-outline" size={100} color="#ccc" style={styles.icon} />
          <Text style={styles.message}>Seu carrinho está vazio</Text>
        </>
      ) : (
        <View style={styles.carrinhoItem}>
          <Text style={styles.itemTitulo}>{titulo}</Text>
          <Text style={styles.itemDetalhe}>Horário: {horario}</Text>
          <Text style={styles.itemDetalhe}>Preço: R$ {preco?.toFixed(2)}</Text>

          <View style={styles.quantidadeContainer}>
            <Ionicons name="remove-circle" size={32} color="#fff" onPress={diminuir} />
            <Text style={styles.quantidadeTexto}>{quantidade}</Text>
            <Ionicons name="add-circle" size={32} color="#fff" onPress={aumentar} />
          </View>

          <Text style={styles.total}>Total: R$ {total}</Text>

          <TouchableOpacity style={styles.botaoComprar} onPress={finalizarCompra}>
            <Text style={styles.textoBotao}>Comprar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d56c2',
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
  },
  icon: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: '#fff',
  },
  carrinhoItem: {
    backgroundColor: '#403A7E',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  itemTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  itemDetalhe: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  quantidadeTexto: {
    fontSize: 20,
    marginHorizontal: 15,
    color: '#fff',
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ff99',
  },
  botaoComprar: {
    marginTop: 25,
    backgroundColor: '#00c851',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
