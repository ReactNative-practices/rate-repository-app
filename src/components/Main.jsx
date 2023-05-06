import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from "react-router-native";


import RepositoryList from './RepositoryList/RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from './Theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.mainBackground
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/signin" element={<SignIn />} exact />
                <Route path="*" element={<Navigate to="/" />} replace />
            </Routes>
        </View>
    )
}

export default Main;