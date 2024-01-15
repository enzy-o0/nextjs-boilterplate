import prisma from '../prisma';

export const resolvers = {
    Query: {
        users: () =>
            prisma.user.findMany({
                include: {
                    posts: true,
                },
            }),
        // users: (_: any, { seq }: any) => getSelectUsers(seq),
    },
    // Mutation: {
    // updateUser: async (_: any, { seq, user }: updateUserProps) => {
    //   return setUpdateUser(seq, user);
    // },
    // },
};
