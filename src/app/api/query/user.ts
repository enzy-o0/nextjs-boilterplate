import { gql } from 'apollo-server';

export const GET_USERS = gql`
    type User {
        name: String
    }
`;
