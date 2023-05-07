import { StyleSheet, View } from "react-native";
import theme from "../../Theme";
import Text from "../Text";

import { numToFixedStr } from "../../utils";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    statisticItem: {
        alignItems: "center"
    },
    colors: {
        backgroundColor: 'white'
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
        marginTop: 6,
    }
});

const StatisticSection = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.statisticItem}>
                <Text fontWeight='bold'>{numToFixedStr(item.stargazersCount)}</Text>
                <Text style={styles.colorTextSecondary}>Stars</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text fontWeight='bold'>{numToFixedStr(item.forksCount)}</Text>
                <Text style={styles.colorTextSecondary}>Forks</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text fontWeight='bold'>{numToFixedStr(item.reviewCount)}</Text>
                <Text style={styles.colorTextSecondary}>Reviews</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text fontWeight='bold'>{numToFixedStr(item.ratingAverage)}</Text>
                <Text style={styles.colorTextSecondary}>Rating</Text>
            </View>
        </View>
    )
};

export default StatisticSection;