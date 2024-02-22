'use client';

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, styled } from '@mui/material';
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

            <FlexRowBox className="sectionBanner">
                {/* victor-rosario-kmREfhcy5q0-unsplash */}
                <ImageBox id="main">
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
                    <Box className="bannerTitle">
                        <Typography variant="h4" sx={{ color: '#fff' }}>
                            변화를 좋아한다면 이렇게
                        </Typography>
                        <FlexRowCenterBox className="bannerTitleWriter">
                            <Avatar
                                sx={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                }}
                            />
                            <Typography sx={{ color: '#fff', ml: '10px' }}>꽁냥이</Typography>
                        </FlexRowCenterBox>
                    </Box>
                </ImageBox>
                <BannerSlider />
            </FlexRowBox>
            <FlexRowBetweenCenterBox className="sectionButtonMenu">
                <ButtonMenu />
            </FlexRowBetweenCenterBox>
            <Box
                sx={{
                    mt: '3rem',
                }}
            >
                <FlexRowBetweenCenterBox>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            이런 사진 찾고 있나요?
                        </Typography>
                        <Typography>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</Typography>
                    </Box>
                    <Button>
                        <Typography>더보기</Typography>
                    </Button>
                </FlexRowBetweenCenterBox>
                <FlexRowBetweenCenterBox className="mt-1">
                    {PhotoItem.map((e, idx) => {
                        return (
                            <ImageBox key={e.imageSrc}>
                                <Image src={e.imageSrc} alt={`${idx} 사진 이미지`} width={173} height={230} />
                            </ImageBox>
                        );
                    })}
                </FlexRowBetweenCenterBox>
            </Box>
        </Box>
    );
}

const FlexRowBox = styled(Box)`
    display: flex;
    flex-direction: row;

    &.sectionBanner {
        position: relative;

        .bannerTitle {
            bottom: 2rem;
            position: absolute;
            margin-left: 2rem;
        }
    }
`;

const FlexRowCenterBox = styled(FlexRowBox)`
    align-items: center;

    & .bannerTitleWriter {
        margin-top: 0.5rem;
    }
`;

const FlexRowBetweenCenterBox = styled(FlexRowBox)`
    justify-content: space-between;
    align-items: center;

    &.sectionButtonMenu {
        text-align: center;
        margin: 2rem 2rem 0 2rem;
    }

    &.mt-1 {
        margin-top: 1rem;
    }
`;

const ImageBox = styled(Box)`
    overflow: hidden;
    border-radius: 10px;

    & #main {
        max-width: 847px;
        max-height: 508px;
    }

    & #sub {
        max-width: 173px;
        max-height: 230px;
    }

    & img {
        -webkit-transition: all 0.8s ease;
        -moz-transition: all 0.8s ease;
        transition: all 0.8s ease;

        :hover {
            transform: scale(1.1);
        }
    }
`;
