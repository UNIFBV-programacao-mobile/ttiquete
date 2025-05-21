import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router'

import { pecas } from '../../database/data'

const Tela = Dimensions.get('window').width;

export default function Index() {

  // Pega o id_peça recebido pelo router, e filtra no json de peças.

  const { id_peca } = useLocalSearchParams()
  const peca = pecas.find((item) => item?.id === id_peca);
  
  if (!peca) {
    return <Text>Peça não encontrada</Text>
  }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#35306d", 'transparent']} style={styles.background} />

      <ScrollView>
        <Image source={peca.imagem} style={styles.imagemDestaque} />

        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{peca.titulo}</Text>
          <Text style={styles.descricao}>{peca.descricao}</Text>
          
          <View style={styles.infoExtra}>
            <Text style={styles.status}>{peca.status}</Text>
            <Text style={styles.categoria}>{peca.elenco}</Text>
          </View>

          <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d56c2",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  imagemDestaque: {
    width: Tela,
    height: 250,
    borderRadius: 8,
  },
  infoContainer: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  infoExtra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: '#ffa500',
  },
  categoria: {
    fontSize: 16,
    color: '#00ff99',
  },
  botao: {
    backgroundColor: "#ff4f4f",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
