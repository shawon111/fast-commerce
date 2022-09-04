import { Box, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import demoProductImage from '../../../public/images/productDemoImage.png';
import BasicProductItem from '../../Global/BasicProductItem';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const CustomerAlsoBuy = ({peopleAlsoBuyData}) => {
    return (
        <Box sx={{
            padding: { lg: '30px', sm: '20px', xs: '15px' },
            backgroundColor: '#fff',
            marginTop: '40px'
        }}>
            <ResponsiveContainer>
                <Box sx={{
                    backgroundColor: '#F1F2F4',
                    padding: { lg: '40px', sm: '30px', xs: '20px' },
                    borderRadius: '4px'
                }}>
                    <Typography sx={{
                        color: '#103178',
                        fontSize: { lg: '30px', sm: '28px', xs: '24px' },
                        fontWeight: '600',
                        textAlign: 'center',
                        marginBottom: '30px'
                    }} variant='h3'>
                        Customers also buying
                    </Typography>
                    <Box>
                        <Box sx={{
                            borderLeft: '1px solid #f0f2f5'
                        }}>
                            <Box className='shop_product_grid' sx={{
                            }}>
                                <Swiper
                                    modules={[Navigation , A11y, Autoplay]}
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
                                            slidesPerView: 1,
                                        }
                                    }}
                                >
                                    {
                                        peopleAlsoBuyData.map((item, index) => <SwiperSlide key={index}>
                                            <BasicProductItem product={item} />
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

export default CustomerAlsoBuy;