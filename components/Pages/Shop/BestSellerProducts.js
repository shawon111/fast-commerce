import { Box, Typography } from '@mui/material';
import React from 'react';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BasicProductItem from '../../Global/BasicProductItem';
import demoProductImage from '../../../public/images/productDemoImage.png';

const BestSellerProducts = ({products}) => {
    return (
        <Box sx={{
            marginBottom: {lg: '50px', sm:'42px', xs: '36px'}
        }}>
            <Typography
                sx={{
                    fontSize: { lg: '25px', sm: '21px', xs: '18px' },
                    color: '#103178',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    marginBottom: '20px'
                }}
                variant="h3">
                Bestsellers in Watch
            </Typography>
            <Box>
                <Box sx={{
                    border: '3px solid #FD8D27',
                    borderRadius: '4px'
                }}>
                    <Box className='shop_product_grid' sx={{
                    }}>
                        <Swiper
                            modules={[Navigation, A11y, Autoplay]}
                            spaceBetween={0}
                            speed={1000}
                            slidesPerView={5}
                            navigation={true}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                },
                                900: {
                                    slidesPerView: 3,
                                },
                                600: {
                                    slidesPerView: 3,
                                },
                                320: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            {
                                products.map((item, index) => <SwiperSlide key={index}>
                                    <BasicProductItem product={item} />
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BestSellerProducts;