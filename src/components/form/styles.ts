import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        gap: 15,
        height: "50%"
    },
    
    container_input: {
        gap:6
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
        fontSize: 16
    },

    inputWithTitle: {
        width: "100%",
        height: 52,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
        padding: 15,
        fontSize: 16,
        color: "white"
    },

    title:{
        fontSize: 14,
        color: "white"
    },

    tittleTheme: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        height:40
    },

    // Estilização do botão

    buttonLogin:{
        width: "100%",
        height: 52,
        backgroundColor: "#E15610",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
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
        backgroundColor: "#ccc" // Cor cinza quando o botão está desativado
    },    

    buttonResetPassword: {
        alignSelf: "flex-start",
        height:40
    },    

    buttonResetPasswordText: {
        fontSize: 14,
        color: "white",
        fontWeight: "regular"
    },    

    buttonContainer: {
        flexDirection: 'row', // Alinha os botões na horizontal
        justifyContent: "space-between", // Distribui os botões uniformemente
        marginTop: 20, // Adiciona espaçamento superior
        alignItems: "flex-end"
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
        gap: 5
    },

    line: {
        flex: 1, // As linhas ocupam todo o espaço disponível
        height: 1, // Define a altura da linha
        backgroundColor: "#ccc", // Cor da linha
    }
})