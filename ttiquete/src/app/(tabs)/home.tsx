import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Dimensions,
} from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useMemo } from "react";

import { pecas } from "../../database/data";

const avatar = require("../../assets/images/Avatar.png");
const Tela = Dimensions.get("window").width;
const imagensCarrossel = [
	require("../../assets/images/Property1.png"),
	require("../../assets/images/Property2.png"),
	require("../../assets/images/Property3.png"),
];

// Dados com base no arquivo data.js no app/database

const CarroselEmalta = pecas.filter((peca) => peca.status === "Em alta");
const CarroselEmbreve = pecas.filter((peca) => peca.status === "Em breve");

export default function Home() {
	const [searchText, setSearchText] = useState("");
	
	function handleDetails( peca:any ) {
		router.push({
			pathname: "/(details)/details",
			params: { id_peca: peca.id.toString() }
		})
	}

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={["#35306d", "transparent"]}
				style={styles.background}
			/>

			<View style={styles.header}>
				<TextInput
					style={styles.searchInput}
					placeholder='Pesquisar'
					placeholderTextColor='#888'
					value={searchText}
					onChangeText={setSearchText}
				/>
				<TouchableOpacity onPress={() => router.push('/(auth)/login')}>
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
					{CarroselEmalta.map((peca) => (
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
					{CarroselEmbreve.map((peca) => (
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
		position: 'relative',
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
		flex: 1,
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
		marginTop: 10,
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
		flex: 1,
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
	 overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.8)",
    zIndex: 10,
    paddingHorizontal: 12,
    paddingTop: 80,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  resultText: {
    fontSize: 16,
    color: "#000",
  },
  noResults: {
    marginTop: 20,
    textAlign: "center",
    color: "#888",
  },
});
