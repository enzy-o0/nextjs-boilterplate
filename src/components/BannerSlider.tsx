import { Box, Button } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface ArrowProps {
    className?: 'string';
    style?: {};
    onClick?: () => void;
    isVisible: boolean;
}

interface ItemProps {
    title: string;
    imgSrc: string;
}

const BannerItems = [
    {
        title: '1번',
        /* annie-spratt-UrRf8sxLGVo-unsplash */
        imgSrc: '/images/1.jpg',
    },
    {
        title: '2번',
        /* lena-polishko-fZat_UWm3cI-unsplash */
        imgSrc: '/images/2.jpg',
    },
    {
        title: '3번',
        /* thomas-de-luze-uFoKmskAUIE-unsplash */
        imgSrc: '/images/3.jpg',
    },
    {
        title: '4번',
        imgSrc: '/images/1.jpg',
    },
    {
        title: '5번',
        imgSrc: '/images/2.jpg',
    },
    {
        title: '6번',
        imgSrc: '/images/3.jpg',
    },
    {
        title: '7번',
        imgSrc: '/images/1.jpg',
    },
    {
        title: '8번',
        imgSrc: '/images/2.jpg',
    },
];

function BannerSliderButton(props: ArrowProps) {
    const { className, style, onClick, isVisible } = props;
    return (
        <Button
            className={className}
            style={{
                ...style,
                width: 20,
                height: 20,
                background: '#2F3438',
                display: isVisible ? 'block' : 'none',
                zIndex: 2,
            }}
            onClick={onClick}
        />
    );
}

function BannerItemBox(item: ItemProps) {
    const { imgSrc, title } = item;

    return (
        <Box>
            <Image src={imgSrc} alt={`${title} 이미지`} width={269} height={508} />
        </Box>
    );
}

function BannerSlider() {
    const [isVisible, setIsVisible] = React.useState(false);
    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        rows: 1,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <BannerSliderButton isVisible={isVisible} />,
        prevArrow: <BannerSliderButton isVisible={isVisible} />,
    };

    return (
        <Box
            className="slider-container"
            style={{ width: 270 }}
            onMouseOver={() => {
                setIsVisible(true);
            }}
            onMouseOut={() => {
                setIsVisible(false);
            }}
        >
            <Slider {...settings}>
                {BannerItems.map((item) => {
                    return <BannerItemBox key={item.title} {...item} />;
                })}
            </Slider>
        </Box>
    );
}

export default BannerSlider;
