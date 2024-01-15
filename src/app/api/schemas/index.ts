const { gql } = require('apollo-server');

export const typeDefs = gql`
    type Post {
        id: String!
        title: String!
        body: String
        slug: String
        userId(id: String!): User
        comments: [Comments]
    }

    type Comments {
        id: String!
        postId(id: String!): Post
        comment: String
    }

    type User {
        id: String!
        name: String
        email: String
        posts: [Post]
    }

    type Query {
        users: [User]
    }
`;
