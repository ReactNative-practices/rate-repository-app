import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                  id                      
                  fullName
                  description
                  language
                  ownerAvatarUrl
                  ratingAverage
                  reviewCount                  
                  stargazersCount
                  forksCount                  
                  url
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`;

export const ME = gql`
    query {
        me {
            id
            username
        }
    }
`