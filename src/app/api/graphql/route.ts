import { createSchema, createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { typeDefs } from '../schemas';
import { resolvers } from '../resolvers';

const { handleRequest } = createYoga<{
    req: NextApiRequest;
    res: NextApiResponse;
}>({
    schema: createSchema({
        typeDefs,
        resolvers,
    }),
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {
        Response,
    },
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };
