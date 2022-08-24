import { Box } from '@mui/material';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import BannerSlider from './BannerSlider';

const HomeHeroSection = () => {
    const bannerSlideData = [
        {
            title: "Amazing smart Shoes",
            subtitle: "Only in this week. Don't misss!",
            price: "199.99",
            backgroundImage: "/images/slider1.webp",
            bgColor: "#DAECFA",
            ctaURL: "/",
            notificationText: "Sale!",
            notificationBg: "#FD8D27",
            notificationTextColor: '#103178'
        },
        {
            title: "Brand New Smart Watch",
            subtitle: "Be smart and save your time!",
            price: "229.99",
            backgroundImage: "/images/slider2.png",
            bgColor: "#F0F2F5",
            ctaURL: "/",
            notificationText: "-25%",
            notificationBg: "#103178",
            notificationTextColor: '#fff'
        },
        {
            title: "Amazing Sports Shoe",
            subtitle: "Let's buy your new sports keds of this season!",
            price: "89.99",
            backgroundImage: "/images/slider3.webp",
            bgColor: "#c7f4faa3",
            ctaURL: "/",
            notificationText: "-40%",
            notificationBg: "#FFC800",
            notificationTextColor: '#103178'
        },
    ]

    return (
        <Box className='home_hero_banners'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
                slidesPerView={1}
                navigation
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                {
                    bannerSlideData.map((item, index) => <SwiperSlide key={index}>
                        <BannerSlider bannerSlider={item} />
                    </SwiperSlide>)
                }
            </Swiper>
        </Box>
    );
};

export default HomeHeroSection;