import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, styled } from '@mui/material';
import Link from 'next/link';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabMenu() {
    return (
        <Container maxWidth="lg">
            <TabBox>
                <LinkBox>
                    <Link href="/">홈</Link>
                </LinkBox>
                <LinkBox>
                    <Link href="/topics/recommend">추천</Link>
                </LinkBox>
                <LinkBox>
                    <Link href="/topics/hashtag-channel">채널</Link>
                </LinkBox>
            </TabBox>
        </Container>
    );
}

const TabBox = styled(Box)`
    border-bottom: 1rem;
    border-top: 1rem;
    border-color: divider;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
`;

const LinkBox = styled(Box)`
    margin: 1rem;

    & > a {
        font-size: 1.2rem;
        font-famiily: SokchoBadaDotum;
    }
`;
