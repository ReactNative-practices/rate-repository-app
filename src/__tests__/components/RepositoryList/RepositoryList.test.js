/* eslint-disable no-unused-vars */
import { render, within } from "@testing-library/react-native";

import { RepositoryListContainer } from "../../../components/RepositoryList/RepositoryList";

describe("RepositoryList", () => {
    describe("RepositoryListContainer", () => {
        it("renders repository information correctly", () => {
            const repositories = {
                pageInfo: {
                    totalCount: 8,
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            }
            // Test code here
            const screen = render(<RepositoryListContainer repositories={repositories}/>);

            const repositoryItems = screen.getAllByTestId('repositoryItem');
            expect(repositoryItems.length).toBe(2);

            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

            // Repository Name
            expect(within(firstRepositoryItem).queryByTestId('repositoryName')).toHaveTextContent('jaredpalmer/formik');
            expect(within(secondRepositoryItem).queryByTestId('repositoryName')).toHaveTextContent('async-library/react-async');

            // Repository Description
            expect(within(firstRepositoryItem).queryByTestId('repositoryDescription')).toHaveTextContent('Build forms in React, without the tears');
            expect(within(secondRepositoryItem).queryByTestId('repositoryDescription')).toHaveTextContent('Flexible promise-based React data loader');

            // Repository language
            expect(within(firstRepositoryItem).queryByTestId('repositoryLanguage')).toHaveTextContent('TypeScript');
            expect(within(secondRepositoryItem).queryByTestId('repositoryLanguage')).toHaveTextContent('JavaScript');

            // Repository Forks Count
            expect(within(firstRepositoryItem).queryByTestId('repositoryForksCount')).toHaveTextContent('1.6k');
            expect(within(secondRepositoryItem).queryByTestId('repositoryForksCount')).toHaveTextContent('69');

            // Repository Stargazers Count
            expect(within(firstRepositoryItem).queryByTestId('repositoryStarsCount')).toHaveTextContent('21.9k');
            expect(within(secondRepositoryItem).queryByTestId('repositoryStarsCount')).toHaveTextContent('1.8k');

            // Repository Rating Average
            expect(within(firstRepositoryItem).queryByTestId('repositoryRatingCount')).toHaveTextContent('88');
            expect(within(secondRepositoryItem).queryByTestId('repositoryRatingCount')).toHaveTextContent('72');

            // Repository Review Count
            expect(within(firstRepositoryItem).queryByTestId('repositoryReviewsCount')).toHaveTextContent('3');
            expect(within(secondRepositoryItem).queryByTestId('repositoryReviewsCount')).toHaveTextContent('3');

        })
    })
})