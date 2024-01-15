'use client';

import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Users = gql`
    query getUsers {
        users {
            id
            name
            email
            posts {
                title
                body
            }
        }
    }
`;

export default function Home() {
    const { data, loading, error } = useQuery(Users);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>error: {error.message}</p>;

    return (
        <>
            {data?.users.map((e) => {
                console.log(e);
                return <div key={e.id}>{e.name}</div>;
            })}
        </>
    );
}
