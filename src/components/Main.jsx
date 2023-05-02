import { View } from 'react-native';

import theme from './Theme';

import RepositoryList from './RepositoryList/RepositoryList';
import AppBar from './AppBar';

const Main = () => {
    return (
        <View style={{ backgroundColor: theme.colors.bodyBG }}>
            <AppBar />
            <RepositoryList />
        </View>
    )
}

export default Main;