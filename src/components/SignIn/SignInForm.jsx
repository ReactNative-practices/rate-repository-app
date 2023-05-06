import { View, Pressable, StyleSheet } from "react-native";
import Text from "../Text";
import FormikTextInput from "../FormikTextInput";
import theme from "../Theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column"
    },
    textInput: {
        marginTop: 15,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "#b6b6b6"
    },
    signButton: {
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        paddingVertical: 9
    },
    textColor: {
        color: "white",
    },
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput
                style={styles.textInput}
                name="username"
                placeholder="Username"
            />
            <FormikTextInput
                style={styles.textInput}
                name="password"
                placeholder="Password"
                secureTextEntry={true}
            />
            <Pressable onPress={onSubmit} style={[styles.textInput, styles.signButton]}>
                <Text style={styles.textColor}>Sign in</Text>
            </Pressable>
        </View>
    )
}

export default SignInForm;