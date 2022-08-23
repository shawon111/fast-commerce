import { Box } from '@mui/material';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const HomeHeroSection = () => {
    return (
        <Box p="20px 0px">
           <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           slidesPerView={1}
           navigation
           >
           </Swiper>
        </Box>
    );
};

export default HomeHeroSection;