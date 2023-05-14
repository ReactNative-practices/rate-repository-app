
import { View, StyleSheet } from 'react-native'

import theme from '../../Theme';

import Avatar from '../Avatar';
import InfoSection from './InfoSection';
import StatisticSection from './StatisticSection';

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.repoItemBG,
        padding: 20,
        margin: 10,
        borderRadius: 15
    },
    container:{
        display: 'flex',
        flexDirection: 'row'
    },

});

const RepositoryItem = ({ repository }) => {
    return (
        <View testID="repositoryItem" style={styles.card}>
            <View style={styles.container}>
                <Avatar avatarUrl={repository.ownerAvatarUrl}/>
                <InfoSection item={repository}/>
            </View>
            <StatisticSection item={repository} />
        </View>
    )
}

export default RepositoryItem;