import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import SectionTitle from '../../Global/SectionTitle';
import demoProductImage from '../../../public/images/productDemoImage.png';
import BasicProductItem from '../../Global/BasicProductItem';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const LatestProducts = ({products}) => {

    return (
        <Box sx={{
            padding: {lg: '60px 0px', sm: '30px 0px', xs: '20px 0px'}
        }}>
            <ResponsiveContainer>
                <Box>
                    <Box sx={{
                        marginBottom: '30px'
                    }}>
                        <SectionTitle>
                            Latest Products
                        </SectionTitle>
                    </Box>
                    <Box>
                        <Box>
                            <Box className='basic_product_grid' sx={{
                                borderLeft: '1px solid #f0f2f5'
                            }}>
                                <Swiper
                                    modules={[Navigation, A11y, Autoplay]}
                                    spaceBetween={0}
                                    speed={1000}
                                    slidesPerView={5}
                                    navigation={true}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 5,
                                        },
                                        900: {
                                            slidesPerView: 4,
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
                                            <BasicProductItem  product={item} />
                                        </SwiperSlide>)
                                    }
                                </Swiper>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default LatestProducts;