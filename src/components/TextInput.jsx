import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    invalidInput: {
        borderColor: "#d73a4a"
    },
    validInput: {
        borderColor: "green"
    }
});

const TextInput = ({ style, error, valid, ...props }) => {
    const textInputStyle = [style];
    if (error) {
        textInputStyle.push(styles.invalidInput)
    }
    if (valid) {
        textInputStyle.push(styles.validInput)
    }
    return <NativeTextInput style={textInputStyle} {...props}/>
}

export default TextInput;