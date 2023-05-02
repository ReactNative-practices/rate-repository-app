import { Pressable } from "react-native";
import Text from "./Text";
import theme from "./Theme";

const AppBarTab = ({ tab }) => {
    return (
        <Pressable>
            <Text color='primary' style={{ backgroundColor: theme.colors.appBarBG, padding: 20 }}>{tab}</Text>
        </Pressable>
    )
}

export default AppBarTab;