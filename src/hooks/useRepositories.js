// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    // const [repositories, setRepositories] = useState();
    // const [loading, setLoading] = useState(false);

    // const fetchRepositories = async () => {
    //     setLoading(true);

    //     const response = await fetch('http://192.168.1.118:5000/api/repositories');
    //     const json = await response.json();

    //     setLoading(false);
    //     setRepositories(json);
    // }

    // useEffect(() => {
    //     fetchRepositories();
    // }, [])

    const { data, loading, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network"
    })

    return { 
        repositories: data?.repositories, 
        loading,
        ...result
        // refetch: fetchRepositories 
    }
};

export default useRepositories;