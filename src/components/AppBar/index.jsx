import { View, StyleSheet, ScrollView } from "react-native";
import Constants from 'expo-constants';

import AppBarTab from "./AppBarTab";
import theme from "../../Theme";
import useSignOut from "../../hooks/useSignOut";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBG,
        height: 80,
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft: 15,
        flexDirection: "row"
    },
    tabsContainer: {
        justifyContent: "space-around"
    }
});

const AppBar = () => {
    const { signOut, data, loading } = useSignOut();
    console.log("Appbar", data);
    const me = data?.me;
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <AppBarTab text="Repositories" to="/" />
                {!loading && me ? (
                    <>
                    <AppBarTab text="Create a review" to="/create"/>
                    <AppBarTab text="Sign out" to="/" onPress={signOut} />
                    </>
                ) : (
                    <AppBarTab text="Sign in" to="/signin" />
                )}
            </ScrollView>
        </View>
    )
};

export default AppBar;
