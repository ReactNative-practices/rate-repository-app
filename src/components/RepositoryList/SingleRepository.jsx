import { View, Dimensions, StyleSheet, FlatList } from "react-native";
import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";
import useReviews from "../../hooks/useReviews";
import Text from "../Text";
import theme from "../../Theme";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        flexDirection: "row",
        backgroundColor: theme.colors.secondary,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },
    leftColumn: {
        alignItems: "center",
        justifyContent: 'flex-start',
        flex: 1,
    },
    rightColumn: {
        flex: 4,
        paddingHorizontal: 5
    },
    ratingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.primary,
        borderColor: theme.colors.primary,
        borderRadius: 45 / 2,
        borderStyle: 'solid',
        borderWidth: 3,
        height: 45,
        width: 45,
    },
    ratingText: {
        color: theme.colors.primary
    },
    reviewTextContainer: {
        marginTop: 5
    }
});


const ReviewItem = ({ review }) => {
    // Single review item
    const formatDate = (date) => {
        return date.toLocaleDateString().split('/').join('.')
    }

    const date = formatDate(new Date(review.createdAt));

    return (
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <View style={styles.ratingContainer}>
                    <Text fontWeight='bold' fontSize='subheading' style={styles.rating}>
                        {review.rating}
                    </Text>
                </View>
            </View>
            <View style={styles.rightColumn}>
                <Text fontWeight='bold' fontSize='subheading'>
                    {review.user.username}
                </Text>
                <Text color='textSecondary'>
                    {date}
                </Text>
                <View style={styles.reviewTextContainer}>
                    <Text>
                        {review.text}
                    </Text>
                </View>
            </View>
        </View>
    )
};


const SingleRepository = () => {
    const { id } = useParams();
    const { repository } = useRepository(id);
    const { reviews } = useReviews({ repositoryId: id })

    if (!repository || !reviews) {
        return null;
    }
    const RepositoryInfo = () => <RepositoryItem repository={repository} showGithub={true} />;
    const ItemSeparator = () => <View style={styles.separator} />;
    const renderItem = ({ item }) => <ReviewItem review={item} />

    const { height } = Dimensions.get('window');

    return (
        <View style={{ height }}>
            <FlatList
                ItemSeparatorComponent={ItemSeparator}
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListHeaderComponent={RepositoryInfo}
            />
        </View>
    )
}

export default SingleRepository;