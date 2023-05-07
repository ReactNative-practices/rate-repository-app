import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const newToken = await AsyncStorage.getItem(
            `${this.namespace}:token`,
        );

        return newToken ? newToken : "";
    }

    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:token`,
            accessToken,
        );
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`)
    }
}

export default AuthStorage;