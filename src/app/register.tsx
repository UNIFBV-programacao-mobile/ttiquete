import { useState } from "react"
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
import { router } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"


import { FormRegister } from "@/components/form"

export default function Index(){

    // function navLogin(){
    //     router.navigate("/index")
    // }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#35306d", 'transparent']}
                style={styles.background}
            />
            <Image 
                source={require('@/assets/images/logo_ttiquete.png')}
                style={styles.image}
            />
            <FormRegister 
                // navLogin={navLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 25,
        // gap: 12,
        backgroundColor: "#5d56c2"
    },

    background:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },

    image: { 
        alignSelf: "center",
        // top: 30,
        width: "50%", 
        height: "15%",
        resizeMode: "contain"
    }
})