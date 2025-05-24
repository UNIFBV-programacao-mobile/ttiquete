import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import { InputWithTitle } from "../../components/input/index";


const schema = yup.object({
	useremail: yup.string().required("Email inválido"),
	senha: yup.string().required("Senha inválida")
})

export default function Index() {
	const { control, watch,  handleSubmit, formState: { errors }} = useForm({
		resolver: yupResolver(schema)
	})

	const isDisabled = !watch("useremail") || !watch("senha")

	function handleSignIn(data: any) {
		console.log(data);
		router.push("/(tabs)/home"); // Redireciona para a tela inicial
	}

	function handleRegister() {
		router.push("/(auth)/register");
	}

	return (
		<KeyboardAvoidingView
		style={{ flex: 1 }}
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container}>
				<LinearGradient
					colors={["#35306d", "transparent"]}
					style={styles.background}
				/>
				<Image
					source={require("../../assets/images/logo_ttiquete.png")}
					style={styles.image}
				/>

				<Controller
					control={control}
					name="useremail"
					render={ ({ field: { onChange, onBlur, value }}) => (
						<InputWithTitle
							title='Email'
							placeholder='Informe seu email'
							placeholderTextColor='gray'
							keyboardType='email-address'
							value={value}
							onBlur={onBlur}
							onChangeText={onChange}
						/>
					)}
				/>
				{errors.useremail && <Text style={ styles.textError }>{ errors.useremail.message }</Text>}

				<Controller
					control={control}
					name="senha"
					render={ ({ field: { onChange, onBlur, value }}) => (
						<InputWithTitle
						title='Senha'
						placeholder='Digite sua senha'
						placeholderTextColor='gray'
						secureTextEntry={true}
						value={value}
						onBlur={onBlur}
						onChangeText={onChange}
						/>
					)}
					/>
				{errors.senha && <Text style={ styles.textError }>{ errors.senha.message }</Text>}

				<TouchableOpacity style={styles.buttonResetPassword}>
					<Text style={styles.buttonResetPasswordText}>Esqueceu a senha?</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.buttonLogin, isDisabled && styles.buttonLoginDisabled]}
					// onPress={handleLogin}
					onPress={ handleSubmit(handleSignIn) }
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
					<TouchableOpacity onPress={handleRegister}>
						<Text style={styles.buttonRegisterText}>Cadastre-se</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: "center",
		alignItems: "center",
		padding: 25,
		backgroundColor: "#5d56c2"
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
	title: {
		fontSize: 14,
		color: "white",
	},
	buttonLogin: {
		width: "100%",
		height: 52,
		backgroundColor: "#E15610",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonLoginDisabled: {
		backgroundColor: "#ccc",
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
	buttonRegisterText: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container_separador: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		marginVertical: 10,
		gap: 5,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: "#ccc",
	},
	textError: {
		alignSelf: "flex-start",
		color: "#fd6945",
		fontSize: 12
	}
});
