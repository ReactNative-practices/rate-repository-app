import { StyleSheet } from "react-native";
import { Link } from 'react-router-native'

import Text from "../Text";

const styles = StyleSheet.create({
    tab: {
        margin: 5,
        borderRadius: 10
    },
    tabTextColor: {
        color: "white",
        marginHorizontal: 10,
        paddingVertical: 10,
    }
})

const AppBarTab = ({ text, to, ...props }) => {
    return (
        <>
            <Link to={to} style={styles.tab}>
                <Text fontWeight="bold" style={styles.tabTextColor} {...props}>
                    {text}
                </Text>
            </Link>
        </>
    )
}

export default AppBarTab;