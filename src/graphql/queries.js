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

export const GET_REPOSITORY = gql`
query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
        id
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
        url
    }
  }
`

export const GET_REPOSITORY_REVIEWS = gql`
query Query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            createdAt
            rating
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`