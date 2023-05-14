import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../Theme";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: theme.colors.primary
    },
    button: {
        color: theme.colors.secondary,
        textAlign: "center"
    }

})

const Button = ({ style, text, onPress }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <Text fontWeight={theme.fontWeights.bold} style={[styles.button, style]}>
                {text}
            </Text>
        </Pressable>
    )
}

export default Button;