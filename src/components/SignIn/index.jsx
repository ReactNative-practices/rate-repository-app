import { Formik } from "formik";
import SignInForm from "./SignInForm";

const initialValues = {
    username: "",
    password: ""
}

const SignIn = () => {
    const onSubmit = async (values) => {
        console.log(values);
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

export default SignIn;