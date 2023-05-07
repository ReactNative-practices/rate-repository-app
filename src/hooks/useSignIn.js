import { useApolloClient, useMutation } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";
import AuthStorage from "../utils/authStorage";

const authStorage = new AuthStorage();

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const response = await mutate({
            variables: {
                credentials: {
                    password,
                    username,
                }
            }
        });
        console.log("useSignIn: ", response);

        if (response) {
            await authStorage.setAccessToken(response.data?.authenticate?.accessToken);
            
            console.log("Token is saved: ", await authStorage.getAccessToken())

            apolloClient.resetStore();
            console.log("Resetting apollo store"); 
        }
        return response;
    }
    return [signIn, result];
}

export default useSignIn;