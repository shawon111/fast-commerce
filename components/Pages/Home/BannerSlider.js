import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import Link from 'next/link';
import Image from 'next/image';

const BannerSlider = ({ bannerSlider }) => {
    return (
        <Box className='banner_1' sx={{
            padding: '80px 0px',
            backgroundColor: `${bannerSlider.bgColor}`,
            backgroundImage: `url(${bannerSlider.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: { lg: 'right center', xs: 'bottom' },
            minHeight: '85vh'
        }}>
            <ResponsiveContainer>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Typography sx={{
                            color: '#103178',
                            fontSize: { lg: '70px', sm: '44px', xs: '35px' },
                            lineHeight: '1.3',
                            textTransform: 'capitalize',
                            fontWeight: '700'
                        }} variant='h2'>
                            {bannerSlider.title}
                        </Typography>
                        <Typography sx={{
                            color: '#103178',
                            fontSize: { lg: '24px', sm: '20px', xs: '18px' },
                            lineHeight: '1.3',
                            fontWeight: '500',
                            marginBottom: '20px',
                            marginTop: '10px'
                        }} variant='h4'>
                            {bannerSlider.subtitle}
                        </Typography>
                        <Typography sx={{
                            color: '#FD8D27',
                            fontSize: { lg: '70px', sm: '44px', xs: '35px' },
                            lineHeight: '1.3',
                            textTransform: 'capitalize',
                            fontWeight: '700'
                        }} variant='h2'>
                            ${bannerSlider.price}
                        </Typography>
                        <Link href={`${bannerSlider.ctaURL}`}>
                            <Button className="brandBtn" sx={{
                                marginTop: '15px'
                            }} variant="contained">Shop Now</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <Box sx={{
                                width: {lg: '150px', sm: '120px', xs: '100px'},
                                height: {lg: '150px', sm: '120px', xs: '100px'},
                                backgroundColor: `${bannerSlider.notificationBg}`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box sx={{
                                    color: `${bannerSlider.notificationTextColor}`,
                                    fontSize: {lg: '43px', sm: '35px', xs: '32px'},
                                    fontWeight: '700',
                                    display: 'inline'
                                }}>
                                    {bannerSlider.notificationText}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </ResponsiveContainer>
        </Box>
    );
};

export default BannerSlider;