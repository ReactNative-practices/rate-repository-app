import { View, StyleSheet, Platform } from 'react-native';
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from './RepositoryList/RepositoryList';
import SingleRepository from './RepositoryList/SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../Theme';
import CreateReview from './Review/CreateReview';

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
                <Route path="/repo/:id"element={<SingleRepository />} exact />
                <Route path="/signin" element={<SignIn />} exact />
                <Route path="/create" element={<CreateReview />} exact />
                <Route path="*" element={<Navigate to="/" />} replace />
            </Routes>
        </View>
    )
}

export default Main;