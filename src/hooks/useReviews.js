import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_REVIEWS } from "../graphql/queries";

const useReviews = ({ repositoryId, first }) => {

    const variables = {
        repositoryId,
        first
    };

    const { data, loading, ...result } = useQuery(GET_REPOSITORY_REVIEWS, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const reviews = data?.repository.reviews.edges.map((e) => e.node);
    return { reviews, loading, ...result };
}

export default useReviews;