import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    button:{
        width: "100%",
        height: 52,
        backgroundColor: "#E15610",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonDisabled: { 
        backgroundColor: "#ccc" // Cor cinza quando o botão está desativado
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
})