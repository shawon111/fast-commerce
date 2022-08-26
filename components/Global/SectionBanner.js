import { Box, Button, Grid, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const SectionBanner = ({ data }) => {
    const { title, price, discount, badgeBgColor, priceColor, link, bgImage, badgeColor, buttonColor, textColor } = data;
    return (
        <Box sx={{
            padding: '60px 0px'
        }}>
            <ResponsiveContainer>
                <Box sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '60px 50px'
                }}>
                    <Grid container spacing={1}>
                        <Grid lg={3} md={4} sm={8} xs={12}>
                            <Typography
                                sx={{
                                    fontWeight: '700',
                                    fontSize: { lg: '40px', sm: '37px', xs: '34px' },
                                    lineHeight: '1.3',
                                    color: `${textColor}`,
                                    textTransform: 'capitalize',
                                    marginBottom: '20px'
                                }}
                                variant="h3">
                                {title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    fontSize: { lg: '50px', sm: '43px', xs: '37px' },
                                    lineHeight: '1.3',
                                    color: `${priceColor}`,
                                    textTransform: 'capitalize',
                                    marginBottom: '20px'
                                }}
                                variant="h3">
                                ${price}
                            </Typography>
                            <Button
                                sx={{
                                    padding: '8px 40px',
                                    backgroundColor: `${buttonColor}`,
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    fontSize: { lg: '18px', sm: '16px', xs: '14px' },
                                    borderRadius: '30px'
                                }}
                                className="basicBtn"
                                variant="contained">Add to cart</Button>
                        </Grid>
                        <Grid lg={6} md={5} sm={0} xs={0}>

                        </Grid>
                        <Grid lg={3} md={3} sm={4} xs={12}>
                            <Box sx={{
                                display: 'flex',
                                alignItems:'baseline',
                                justifyContent:'center',
                                height: '100%'
                            }}>
                                <Box sx={{
                                    width: { lg: '150px', sm: '120px', xs: '100px' },
                                    height: { lg: '150px', sm: '120px', xs: '100px' },
                                    backgroundColor: `${badgeBgColor}`,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Box sx={{
                                        color: `${badgeColor}`,
                                        fontSize: { lg: '43px', sm: '35px', xs: '32px' },
                                        fontWeight: '700',
                                        display: 'inline'
                                    }}>
                                        {discount}%
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default SectionBanner;