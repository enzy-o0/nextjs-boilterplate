import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

const ButtonMenuItems = [
    {
        title: '빅세일',
        icon: '/icons/1.svg',
    },
    {
        title: '오늘의 딜',
        icon: '/icons/2.svg',
    },
    {
        title: '수납꿀팁',
        icon: '/icons/3.svg',
    },
    {
        title: '행운출첵',
        icon: '/icons/4.svg',
    },
    {
        title: '집들이',
        icon: '/icons/5.svg',
    },
    {
        title: '빅세일1',
        icon: '/icons/1.svg',
    },
    {
        title: '오늘의 딜2',
        icon: '/icons/2.svg',
    },
    {
        title: '수납꿀팁3',
        icon: '/icons/3.svg',
    },
    {
        title: '행운출첵4',
        icon: '/icons/4.svg',
    },
    {
        title: '집들이5',
        icon: '/icons/5.svg',
    },
];
const ButtonMenu = () => {
    return (
        <>
            {ButtonMenuItems.map((e) => {
                return (
                    <Box key={e.title}>
                        <Box
                            sx={{
                                borderRadius: '1rem',
                                backgroundColor: '#f5f5f5',
                                width: 60,
                                height: 60,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: '0.5rem',
                            }}
                        >
                            <Image src={e.icon} width={48} height={48} alt={`${e.title} 아이콘`} />
                        </Box>
                        <Typography>{e.title}</Typography>
                    </Box>
                );
            })}
        </>
    );
};

export default ButtonMenu;
