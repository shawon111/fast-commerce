import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import { BsX } from 'react-icons/bs';
import Link from 'next/link';

const HamburgerMenu = ({ showHamburger, setShowHamburger }) => {
    return (
        <Box sx={{
            display: {md: 'none', xs: 'block'}
        }}>
            <Box sx={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                left: `${showHamburger === true ? '0' : '-1100px'}`,
                top: '0',
                bottom: '0',
                zIndex: '100',
                backgroundColor: '#fff',
                transition: 'left .5s ease-in-out',
            }}>
                <ResponsiveContainer>
                    <Box sx={{
                        padding: '10px 20px',
                        position: 'relative',
                        height: '100%'
                    }}>
                        <Box>
                            <BsX onClick={() => setShowHamburger(false)} style={{
                                color: '#103178',
                                fontSize: '35px'
                            }} />
                        </Box>
                        <Stack pt="0px">
                            <Grid container spacing={0}>
                                <Grid item lg={8} md={6}>
                                    <Box>
                                        <ul style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <li onClick={()=> setShowHamburger(false)} style={{
                                                color: '#103178',
                                                fontSize: '18px',
                                                fontWeight: '500',
                                                marginTop: '20px'
                                            }}><Link href="/">Homepage</Link></li>
                                            <li onClick={()=> setShowHamburger(false)} style={{
                                                color: '#103178',
                                                fontSize: '18px',
                                                fontWeight: '500',
                                                marginTop: '20px'
                                            }}><Link href="/shop">Shop</Link></li>
                                            <li onClick={()=> setShowHamburger(false)} style={{
                                                color: '#103178',
                                                fontSize: '18px',
                                                fontWeight: '500',
                                                marginTop: '20px'
                                            }}><Link href="/blog">Blog</Link></li>
                                            <li onClick={()=> setShowHamburger(false)} style={{
                                                color: '#103178',
                                                fontSize: '18px',
                                                fontWeight: '500',
                                                marginTop: '20px'
                                            }}><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </ResponsiveContainer>
                <Box sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '0'
                }}>
                    <ResponsiveContainer>
                        <Typography color="#5b6c8f" fontWeight="500" fontSize="15px" variant='p'>
                            Need help? 0020 500 - FastCommerce - 000
                        </Typography>
                    </ResponsiveContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default HamburgerMenu;