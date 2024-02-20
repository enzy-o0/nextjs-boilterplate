'use client';

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button } from '@mui/material';
import BannerSlider from '@/components/BannerSlider';
import Image from 'next/image';
import ButtonMenu from '@/components/ButtonMenu';

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

const PhotoItem = [
    {
        //michael-oxendine-GHCVUtBECuY-unsplash
        imageSrc: '/images/photo-1.jpg',
    },
    {
        //roberto-nickson-rEJxpBskj3Q-unsplash
        imageSrc: '/images/photo-2.jpg',
    },
    {
        //spacejoy-IH7wPsjwomc-unsplash
        imageSrc: '/images/photo-3.jpg',
    },
    {
        //michael-oxendine-GHCVUtBECuY-unsplash
        imageSrc: '/images/photo-1.jpg',
    },
    {
        //roberto-nickson-rEJxpBskj3Q-unsplash
        imageSrc: '/images/photo-2.jpg',
    },
    {
        //spacejoy-IH7wPsjwomc-unsplash
        imageSrc: '/images/photo-3.jpg',
    },
];

export default function Home() {
    // const { data, loading, error } = useQuery(Users);
    const data = {
        users: [],
    };

    // if (loading) return <CircularProgress />;
    // if (error) return <p>error: {error.message}</p>;

    return (
        <Box>
            {/* <Typography sx={{ fontSize: 32, textAlign: 'center' }} color="text.secondary" gutterBottom>
                연습하기
            </Typography> */}
            <Box>
                {data?.users?.map((e: UserType) => {
                    console.log(e);
                    if (!e.name) return false;
                    return (
                        <Card key={e.id} sx={{ minWidth: 275, marginTop: '1rem' }}>
                            <CardContent>
                                {e.posts.map((post) => (
                                    <div key={post.title}>
                                        {/* <ButtonContainer>{post.title}</ButtonContainer> */}
                                        <button style={{ fontSize: '20px' }}>{post.body}</button>
                                        {/* <ButtonContainer>{post.title}</ButtonContainer>
                                    <ButtonContainer2>{post.body}</ButtonContainer2> */}
                                        {/* <Button color="primary">{post.body}</Button> */}
                                    </div>
                                ))}
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {e.name}
                                </Typography>
                            </CardContent>
                            <CardActions>{/* <Button size="small">더보기</Button> */}</CardActions>
                        </Card>
                    );
                })}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                }}
            >
                {/* victor-rosario-kmREfhcy5q0-unsplash */}
                <Box>
                    <Image
                        src="/images/main.jpg"
                        alt="메인 배너 이미지"
                        width={847}
                        height={508}
                        style={{
                            marginRight: '1rem',
                            borderRadius: '5px',
                        }}
                    />
                    <Box sx={{ bottom: '2rem', position: 'absolute', ml: '2rem' }}>
                        <Typography variant="h4" sx={{ color: '#fff' }}>
                            변화를 좋아한다면 이렇게
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                mt: '0.5rem',
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                }}
                            />
                            <Typography sx={{ color: '#fff', ml: '10px' }}>꽁냥이</Typography>
                        </Box>
                    </Box>
                </Box>
                <BannerSlider />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    m: '2rem 2rem 0 2rem',
                }}
            >
                <ButtonMenu />
            </Box>
            <Box
                sx={{
                    mt: '3rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            이런 사진 찾고 있나요?
                        </Typography>
                        <Typography>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</Typography>
                    </Box>
                    <Button>
                        <Typography>더보기</Typography>
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: '1rem',
                    }}
                >
                    {PhotoItem.map((e, idx) => {
                        return (
                            <Box key={e.imageSrc}>
                                <Image
                                    src={e.imageSrc}
                                    alt={`${idx} 사진 이미지`}
                                    width={173}
                                    height={230}
                                    style={{ borderRadius: '10px' }}
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}
