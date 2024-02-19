import { Box, Container } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}

function Responsive() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <Container className="slider-container" style={{ width: 400 }}>
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
        </Container>
    );
}

export default Responsive;
