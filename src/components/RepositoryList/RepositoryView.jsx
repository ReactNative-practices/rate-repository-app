import { View, Dimensions } from "react-native";
import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";

const RepositoryView = () => {
    const { id } = useParams();
    const { repository } = useRepository(id);

    if (!repository) {
        return null;
    }

    const { height } = Dimensions.get('window');

    return (
        <View style={{ height }}>
            <RepositoryItem repository={repository} showGithub={true} />
        </View>
    )
}

export default RepositoryView;