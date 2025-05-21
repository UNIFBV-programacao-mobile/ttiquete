import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router';

import { pecas } from '../../database/data';

const Tela = Dimensions.get('window').width;


export default function Index() {
  
  const { id_peca } = useLocalSearchParams();
  const peca = pecas.find((item) => item?.id === id_peca);

  if (!peca) {
    return <Text>Peça não encontrada</Text>;
  }

  const isDisponivel = peca.status.toLowerCase() !== "em breve";

  const [botaoSelecionado, setBotaoSelecionado] = useState<string | null>(null);

  const handleBotaoClick = (nomeBotao: string) => {
    setBotaoSelecionado(nomeBotao);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#35306d', 'transparent']} style={styles.background} />

      <ScrollView>
        <Image source={peca.imagem} style={styles.imagemDestaque} />

        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{peca.titulo}</Text>
          <Text style={styles.descricao}>{peca.descricao}</Text>

          <View style={styles.infoExtra}>
            <Text style={styles.status}>{peca.status}</Text>
            <Text style={styles.categoria}>{peca.elenco}</Text>
          </View>

          
          {!isDisponivel && (
          <Text style={{ color: '#ffcc00', marginTop: 20 }}>
            Esta peça estará disponível em breve.
          </Text>
          )}

          {isDisponivel &&(
            <>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={[
                styles.Botaoh,
                botaoSelecionado === 'opcao1' && styles.botaoSelecionado,
              ]}
              onPress={() => handleBotaoClick('opcao1')}
            >
              <Text style={styles.textoBotao}>08:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.Botaoh,
                botaoSelecionado === 'opcao2' && styles.botaoSelecionado,
              ]}
              onPress={() => handleBotaoClick('opcao2')}
            >
              <Text style={styles.textoBotao}>14:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.Botaoh,
                botaoSelecionado === 'opcao3' && styles.botaoSelecionado,
              ]}
              onPress={() => handleBotaoClick('opcao3')}
            >
              <Text style={styles.textoBotao}>20:00</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
          style={[
            styles.botaoComprar,
            !botaoSelecionado && {opacity: 0.5},
          ]}
          disabled={!botaoSelecionado}
          onPress={() =>
            router.push({
              pathname: "/(tabs)/cart",
              params: {
                titulo: peca.titulo,
                preco: peca.preco,
                horario: botaoSelecionado === "opcao1"
                ? "08:00"
                : botaoSelecionado === "opcao2"
                ? "14:00"
                : "20:00",
              },
            })
          }
          >
            <Text style={styles.textoBotao}>Comprar</Text>
          </TouchableOpacity>
          </>
          )}
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d56c2',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
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
  botaoVoltar: {
    backgroundColor: '#ff4f4f',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoVoltar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  Botaoh: {
    backgroundColor: '#0d0c1a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  botaoSelecionado: {
    backgroundColor: '#252161',
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoComprar: {
    backgroundColor: '#00c851',
  padding: 15,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 30,
  }
});