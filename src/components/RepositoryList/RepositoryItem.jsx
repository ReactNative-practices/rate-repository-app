
import { View, StyleSheet, Linking } from 'react-native'

import theme from '../../Theme';

import Avatar from '../Avatar';
import InfoSection from './InfoSection';
import StatisticSection from './StatisticSection';
import Button from '../Button';

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.repoItemBG,
        padding: 20,
        margin: 10,
        borderRadius: 15
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    githubButtonContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }

});

const RepositoryItem = ({ repository, showGithub = false }) => {
    
    const openGithub = () => {
        Linking.openURL(repository.url)
    }

    return (
        <View testID="repositoryItem" style={styles.card}>
            <View style={styles.container}>
                <Avatar avatarUrl={repository.ownerAvatarUrl}/>
                <InfoSection item={repository}/>
            </View>
            <StatisticSection item={repository} />
            {showGithub && (
                <View style={styles.githubButtonContainer}>
                    <Button text="Open in Github" onPress={openGithub}/>
                </View>
            )}
        </View>
    )
}

export default RepositoryItem;