import { useApolloClient, useMutation } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage();
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