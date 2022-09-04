import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BannerSmall = ({ bannerData }) => {
    const { title, salePercentage, badge, bgImage, link, bgColor } = bannerData;
    return (
        <Box
            className='banner_small'
            sx={{
                margin: '0px 5px',
                padding: '50px 0px 50px 30px',
                height: '300px',
                backgroundColor: `${bgColor}`,
                borderRadius: '5px'
            }}>
            <Grid container>
                <Grid sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }} item xs={5}>
                    <Box>
                        {
                            badge.length ? <span style={{
                                backgroundColor: '#12A05C',
                                color: '#fff',
                                padding: '5px 14px',
                                lineHeight: '1',
                                borderRadius: '18px',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                fontWeight: '500',
                                display: 'inline-block',
                                marginBottom: '5px'
                            }} variant='contained'>{badge}</span> : ""
                        }
                        <Typography sx={{
                            fontSize: { sm: '25px', xs: '21px' },
                            color: '#103178',
                            fontWeight: '600',
                            textTransform: 'capitalize',
                            marginBottom: '15px'
                        }} variant='h5'>
                            {title}
                        </Typography>
                        {
                            salePercentage.length ? <Typography sx={{
                                fontSize: { sm: '45px', xs: '38px' },
                                color: '#FD8D27',
                                fontWeight: '600',
                                textTransform: 'capitalize',
                                marginBottom: '15px'
                            }} variant='h4'>
                                -{salePercentage}%
                            </Typography> : ""
                        }
                        <Link href={link}>
                            <Button sx={{
                                fontSize: {lg: '16px', sm: '14px', xs: '13px'},
                                padding: {sm: '1px 30px', xs: '3px 10px'}
                            }} className='darkBtn' variant='contained'>Shop now</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <Image
                            src={bgImage}
                            alt="small-banner-image"
                            width={180}
                            height={180}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerSmall;