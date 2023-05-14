import { View, StyleSheet, Platform } from 'react-native';
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from './RepositoryList/RepositoryList';
import RepositoryView from './RepositoryList/RepositoryView';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../Theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'column',
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios: theme.fonts.ios,
            default: theme.fonts.main,
        }),
    },
    colors: {
        backgroundColor: theme.colors.mainBackground
    }
});

const Main = () => {
    return (
        <View style={[styles.container, styles.colors]}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/repo/:id"element={<RepositoryView />} exact />
                <Route path="/signin" element={<SignIn />} exact />
                <Route path="*" element={<Navigate to="/" />} replace />
            </Routes>
        </View>
    )
}

export default Main;