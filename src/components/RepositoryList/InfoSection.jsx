import { StyleSheet, View } from "react-native";
import theme from "../../Theme";
import Text from "../Text";

const  styles = StyleSheet.create({
    flexItem: {
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 20,
    },
    itemMargin: {
        marginBottom: 5,
    },
    tagItem: {
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    colors: {
        color: 'white'
    }
});

const InfoSection = ({ item }) => {
    return (
        <View style={styles.flexItem}>
            <Text fontWeight='bold' style={styles.itemMargin}>
                {item.fullName}
            </Text>
            <Text color='textSecondary' style={styles.itemMargin}>
                {item.description}
            </Text>
            <View style={[styles.tagItem]}>
                <Text style={styles.colors}>
                    {item.language}
                </Text>
            </View>
        </View>
    )
}

export default InfoSection;