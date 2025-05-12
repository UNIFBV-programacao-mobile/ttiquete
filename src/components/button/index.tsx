import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
}

export function ButtonComp({ title, disabled, ...rest }: Props ) {
    return (
        <TouchableOpacity 
            style={ [styles.button, disabled && styles.buttonDisabled] } 
            // onPress={onPress}
            disabled={disabled}
            { ...rest }>
            <Text style={ styles.title }>{title}</Text>
        </TouchableOpacity>
    )
}