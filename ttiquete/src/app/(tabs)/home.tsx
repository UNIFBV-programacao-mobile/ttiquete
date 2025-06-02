import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { pecas } from "../../database/data";

// Dados com base no arquivo data.js no app/database

const Tela = Dimensions.get("window").width;
export default function Home() {
  const avatar = require("../../assets/images/Avatar.png");
  const [filtro, setFiltro] = useState("");
  const imagensCarrossel = [
    require("../../assets/images/Property1.png"),
    require("../../assets/images/Property2.png"),
    require("../../assets/images/Property3.png"),
  ];

  const getPecas = ({
    status,
    filter,
  }: {
    status?: string;
    filter?: boolean;
  }) => {
    let pecasFiltradas = pecas;
    if (filter && filtro) {
      pecasFiltradas = pecasFiltradas.filter((peca) =>
        peca.titulo.toLowerCase().includes(filtro.toLowerCase())
      );
    }
    if (status === "Em alta") {
      return pecasFiltradas.filter((peca) => peca.status === "Em alta");
    } else if (status === "Em breve") {
      return pecasFiltradas.filter((peca) => peca.status === "Em breve");
    } else return pecasFiltradas;
  };

  function handleDetails(peca: any) {
    router.push({
      pathname: "/(details)/details",
      params: { id_peca: peca.id.toString() },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#35306d", "transparent"]}
        style={styles.background}
      />

      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#888"
            value={filtro}
            onChangeText={setFiltro}
          />
          {filtro && (
            <View
              style={{
                position: "absolute",
                top: 40,
                left: 8,
                backgroundColor: "#2F2B64",
                zIndex: 3,
                width: "95%",
              }}
            >
              {getPecas({ filter: true }).length > 0 &&
                getPecas({ filter: true }).map((peca) => (
                  <TouchableOpacity
                    key={peca.id}
                    onPress={() => handleDetails(peca)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 8,
                    }}
                  >
                    <Image
                      source={peca.imagem}
                      style={{ width: 40, height: 60, marginRight: 8 }}
                    />
                    <Text style={styles.text}>
                      {peca.titulo} (
                      {peca.dias.reduce(
                        (acc, dia, index) =>
                          acc + (index === 0 ? "" : ", ") + dia,
                        ""
                      )}
                      )
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          )}
        </View>
        <TouchableOpacity>
          <Image source={avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.carroselContainer}>
        {imagensCarrossel.map((caminhoDaImagem, index) => (
          <TouchableOpacity key={index} style={styles.touchableOpacityStyle}>
            <Image source={caminhoDaImagem} style={styles.imagemCarrossel} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.secaoEmAlta}>
        <Text style={styles.tituloEmAlta}>Em Alta</Text>
        <ScrollView horizontal style={styles.conteinerEmalta}>
          {getPecas({ status: "Em alta" }).map((peca) => (
            <TouchableOpacity
              key={peca.id}
              style={styles.touchableOpacityStyle}
              onPress={() => handleDetails(peca)}
            >
              <Image source={peca.imagem} style={styles.Emaltacarrosel} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.secaoEmBreve}>
        <Text style={styles.tituloEmbreve}>Em Breve</Text>
        <ScrollView horizontal style={styles.conteinerEmBreve}>
          {getPecas({ status: "Em breve" }).map((peca) => (
            <TouchableOpacity
              key={peca.id}
              style={styles.touchableOpacityStyle}
              onPress={() => handleDetails(peca)}
            >
              <Image source={peca.imagem} style={styles.Embrevecarrosel} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  container: {
    backgroundColor: "#2F2B64",
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "100%",
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  carroselContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 150,
    marginBottom: 10,
    width: Tela,
  },
  touchableOpacityStyle: {},
  imagemCarrossel: {
    width: Tela,
    height: 150,
    borderRadius: 8,
  },
  secaoEmAlta: {
    marginTop: 0,
  },
  tituloEmAlta: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  conteinerEmalta: {
    marginTop: 10,
    height: 171,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  Emaltacarrosel: {
    width: 128,
    height: 171,
    marginRight: 10,
  },
  secaoEmBreve: {
    marginTop: 0,
  },
  tituloEmbreve: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginTop: 40,
  },
  Embrevecarrosel: {
    marginTop: 10,
    height: 171,
    width: 128,
    flexDirection: "row",
    paddingHorizontal: 12,
    marginHorizontal: 10,
  },
  conteinerEmBreve: {
    marginTop: 10,
    height: 171,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
});
