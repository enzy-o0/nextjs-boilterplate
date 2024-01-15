'use client';

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

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

type PostType = {
    title: string;
    body: string;
};

type UserType = {
    id: string;
    name?: string;
    posts: PostType[];
};

export default function Home() {
    const { data, loading, error } = useQuery(Users);

    if (loading) return <CircularProgress />;
    if (error) return <p>error: {error.message}</p>;

    return (
        <div>
            <Typography sx={{ fontSize: 32, textAlign: 'center' }} color="text.secondary" gutterBottom>
                연습하기
            </Typography>
            {data?.users.map((e: UserType) => {
                console.log(e);
                if (!e.name) return false;
                return (
                    <Card key={e.id} sx={{ minWidth: 275,  marginTop: '1rem' }}>
                        <CardContent>
                            {e.posts.map((post) => (
                                <>
                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                        {post.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {post.body}
                                    </Typography>
                                </>
                            ))}
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {e.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">더보기</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
}
