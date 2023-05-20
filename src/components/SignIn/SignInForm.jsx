import { View, Pressable, StyleSheet } from "react-native";
import Text from "../Text";
import FormikTextInput from "../FormikTextInput";
import theme from "../../Theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: 15
    },
    textInput: {
        marginTop: 15,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#b6b6b6"
    },
    signButton: {
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        paddingVertical: 10
    },
    textColor: {
        color: "white",
    },
    spacing: {
        marginBottom: 10
    }
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.spacing}>
                <FormikTextInput
                    style={styles.textInput}
                    name="username"
                    placeholder="Username"
                    testID='usernameField'
                />
            </View>
            <View style={styles.spacing}>
                <FormikTextInput
                    style={styles.textInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    testID='passwordField'
                />
            </View>
            <Pressable onPress={onSubmit} testID='submitButton' style={[styles.textInput, styles.signButton]}>
                <Text style={styles.textColor}>Sign in</Text>
            </Pressable>
        </View>
    )
}

export default SignInForm;