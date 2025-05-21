import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { router } from "expo-router";

import { InputWithTitle } from "../../components/input/index";

export default function Index() {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const isDisabled = email.trim() === "" || senha.trim() === "";

	function handleLogin() {
		if (isDisabled) {
			Alert.alert("Erro", "Preencha todos os campos!");
			return;
		}

		Alert.alert("Sucesso", "Login realizado!");
		// router.replace("/(tabs)/home"); // Redireciona para a tela inicial e retira opção de voltar para login
		router.push("/(tabs)/home"); // Redireciona para a tela inicial
	}

    function handleRegister() {
        router.push("/(auth)/register")
    }

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={["#35306d", "transparent"]}
				style={styles.background}
			/>
			<Image
				source={require("../../assets/images/logo_ttiquete.png")}
				style={styles.image}
			/>

			<InputWithTitle
				title='Email'
				placeholder='Email'
				placeholderTextColor='gray'
				keyboardType='email-address'
				value={email}
				onChangeText={setEmail}
			/>

			<InputWithTitle
				title='Senha'
				placeholder='Senha'
				placeholderTextColor='gray'
				secureTextEntry={true}
				value={senha}
				onChangeText={setSenha}
			/>

			<TouchableOpacity style={styles.buttonResetPassword}>
				<Text style={styles.buttonResetPasswordText}>Esqueceu a senha?</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.buttonLogin, isDisabled && styles.buttonLoginDisabled]}
				onPress={handleLogin}
				disabled={isDisabled}
			>
				<Text style={styles.title}>Entrar</Text>
			</TouchableOpacity>

			<View style={styles.container_separador}>
				<View style={styles.line} />
				<Text style={styles.title}>Ou</Text>
				<View style={styles.line} />
			</View>

			<View style={styles.container_separador}>
				<Text style={styles.title}>Ainda não tem uma conta? </Text>
				<TouchableOpacity
					onPress={handleRegister }
				>
					<Text style={styles.buttonRegisterText}>Cadastre-se</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		padding: 25,
		backgroundColor: "#5d56c2",
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	image: {
		alignSelf: "center",
		width: "50%",
		height: "30%",
		resizeMode: "contain",
	},

	container_input: {
		gap: 6,
	},

	containerPages: {
		justifyContent: "center",
		gap: 6,
	},

	input: {
		width: "100%",
		height: 52,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "white",
		backgroundColor: "white",
		padding: 15,
		fontSize: 16,
	},

	inputWithTitle: {
		width: "100%",
		height: 52,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "white",
		padding: 15,
		fontSize: 16,
		color: "white",
	},

	title: {
		fontSize: 14,
		color: "white",
	},

	tittleTheme: {
		fontSize: 18,
		color: "white",
		fontWeight: "bold",
		height: 40,
	},

	// Estilização do botão

	buttonLogin: {
		width: "100%",
		height: 52,
		backgroundColor: "#E15610",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},

	buttonRegister: {
		color: "white",
	},

	buttonRegisterText: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},

	buttonLoginDisabled: {
		backgroundColor: "#ccc", // Cor cinza quando o botão está desativado
	},

	buttonResetPassword: {
		alignSelf: "flex-start",
		height: 40,
	},

	buttonResetPasswordText: {
		fontSize: 14,
		color: "white",
		fontWeight: "regular",
	},

	buttonContainer: {
		flexDirection: "row", // Alinha os botões na horizontal
		justifyContent: "space-between", // Distribui os botões uniformemente
		marginTop: 20, // Adiciona espaçamento superior
		alignItems: "flex-end",
	},

	buttonPages: {
		width: "45%",
		height: 40,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	// Separador

	container_separador: {
		flexDirection: "row", // Alinha os elementos na horizontal
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		marginVertical: 10,
		gap: 5,
	},

	line: {
		flex: 1, // As linhas ocupam todo o espaço disponível
		height: 1, // Define a altura da linha
		backgroundColor: "#ccc", // Cor da linha
	},
});
