import Text from "./Text";
import theme from "./Theme";

const AppBarTab = ({ tab }) => {
    return (
        <Text fontWeight="bold" color="primary" style={{ backgroundColor: theme.colors.appBarBG, padding: 20 }}>
            {tab}
        </Text>
    )
}

export default AppBarTab;