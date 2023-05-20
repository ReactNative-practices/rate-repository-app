import { View, Pressable, StyleSheet, ToastAndroid } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-native";

import useCreateReview from "../../hooks/useCreateReview";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
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
    submitButton: {
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

const initialValues = {
    ownerName: '',
    name: '',
    rating: '',
    review: '',
}

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required("Repository owner's name is required!"),
    name: yup
        .string()
        .required("Repository's name is required!"),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .required("Rating is a required number between 0 and 100!"),
})

const CreateReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.spacing}>
                <FormikTextInput
                    style={styles.textInput}
                    name="ownerName"
                    placeholder="Repository owner name"
                    testID='ownerNameField'
                    spellCheck={false}
                />
            </View>
            <View style={styles.spacing}>
                <FormikTextInput
                    style={styles.textInput}
                    name="name"
                    placeholder="Repository name"
                    testID='nameField'
                    spellCheck={false}
                />
            </View>
            <View style={styles.spacing}>
                <FormikTextInput
                    style={styles.textInput}
                    name="rating"
                    placeholder="Rating between 0 and 100"
                    testID='ratingField'
                    spellCheck={false}
                />
            </View>
            <View style={styles.spacing}>
                <FormikTextInput
                    style={styles.textInput}
                    name="review"
                    placeholder="Review"
                    testID='reviewField'
                    multiline
                    spellCheck={false}
                />
            </View>
            <Pressable onPress={onSubmit} testID='submitButton' style={[styles.textInput, styles.submitButton]}>
                <Text style={styles.textColor}>Create</Text>
            </Pressable>
        </View>
    )
}

const CreateReview = () => {
    const navigate = useNavigate();
    const [createReview] = useCreateReview();

    const onSubmit = async ({ ownerName, name, rating, review }) => {
        try {
            const result = await createReview({
                ownerName,
                repositoryName: name,
                rating: Number(rating),
                text: review
            });

            const repositoryId = result.data.createReview.repositoryId;
            navigate(`/repo/${repositoryId}`);

        } catch (e) {
            console.log("ERROR:", e);
            ToastAndroid.show('Invalid inputs!', ToastAndroid.SHORT);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

export default CreateReview;