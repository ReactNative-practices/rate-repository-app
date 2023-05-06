import { ToastAndroid } from "react-native";

import * as yup from 'yup';

import { Formik } from "formik";
import SignInForm from "./SignInForm";

const initialValues = {
    username: "",
    password: ""
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be longer")
        .required('Username is required!'),
    password: yup
        .string()
        .min(3, "Password must be longer")
        .required('Password is required!')
});

const SignIn = () => {
    const onSubmit = async (values) => {
        console.log(values);
        ToastAndroid.show('Resquest sent successfully!', ToastAndroid.SHORT);
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

export default SignIn;