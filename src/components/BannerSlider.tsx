import { Box, Button, Container } from '@mui/material';
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

function SampleNextArrow(props: ArrowProps) {
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

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick, isVisible } = props;
    return (
        <Button
            className={className}
            style={{ ...style, background: '#2F3438', display: isVisible ? 'block' : 'none', zIndex: 2 }}
            onClick={onClick}
        />
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
        nextArrow: <SampleNextArrow isVisible={isVisible} />,
        prevArrow: <SamplePrevArrow isVisible={isVisible} />,
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
                <Box>
                    {/* annie-spratt-UrRf8sxLGVo-unsplash */}
                    <Image src="/images/1.jpg" alt="1번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* lena-polishko-fZat_UWm3cI-unsplash */}
                    <Image src="/images/2.jpg" alt="2번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* thomas-de-luze-uFoKmskAUIE-unsplash */}
                    <Image src="/images/3.jpg" alt="3번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* annie-spratt-UrRf8sxLGVo-unsplash */}
                    <Image src="/images/1.jpg" alt="1번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* lena-polishko-fZat_UWm3cI-unsplash */}
                    <Image src="/images/2.jpg" alt="2번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* thomas-de-luze-uFoKmskAUIE-unsplash */}
                    <Image src="/images/3.jpg" alt="3번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* annie-spratt-UrRf8sxLGVo-unsplash */}
                    <Image src="/images/1.jpg" alt="1번 이미지" width={269} height={508} />
                </Box>
                <Box>
                    {/* lena-polishko-fZat_UWm3cI-unsplash */}
                    <Image src="/images/2.jpg" alt="2번 이미지" width={269} height={508} />
                </Box>
            </Slider>
        </Box>
    );
}

export default BannerSlider;
