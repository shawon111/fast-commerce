import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ResponsiveContainer from './ResponsiveContainer';
import Link from 'next/link';
import { RiHeart2Fill } from 'react-icons/ri';
import {FaFacebookF, FaPinterestP, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai';
import Tooltip from '@mui/material/Tooltip';

const Footer = () => {
    return (
        <footer style={{
            padding: '30px 0px',
            backgroundColor: '#F0F2F5'
        }}>
            <ResponsiveContainer>
                <Stack>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} lg={2} sx={{
                                marginTop: {lg: '0px', xs: '30px'}
                            }}>
                                <Box>
                                    <Typography variant='h5' sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: '#103178',
                                        lineHeight: '26px',
                                        marginBottom: '20px'
                                    }}>
                                        Information
                                    </Typography>
                                    <Box className='footer-links'>
                                        <ul>
                                            <li>
                                                <Link href="/">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Sales</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Terms & Conditions</Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={2} sx={{
                                marginTop: {lg: '0px', xs: '30px'}
                            }}>
                                <Box>
                                    <Typography variant='h5' sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: '#103178',
                                        lineHeight: '26px',
                                        marginBottom: '20px'
                                    }}>
                                        Account
                                    </Typography>
                                    <Box className='footer-links'>
                                        <ul>
                                            <li>
                                                <Link href="/">My account</Link>
                                            </li>
                                            <li>
                                                <Link href="/">My orders</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Shipping</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Wishlist</Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} lg={2} sx={{
                                marginTop: {lg: '0px', xs: '30px'}
                            }}>
                                <Box>
                                    <Typography variant='h5' sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: '#103178',
                                        lineHeight: '26px',
                                        marginBottom: '20px'
                                    }}>
                                        Store
                                    </Typography>
                                    <Box className='footer-links'>
                                        <ul>
                                            <li>
                                                <Link href="/">BestSellers</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Discount</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Latest products</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Sale</Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={7} lg={4} sx={{
                                marginTop: {lg: '0px', xs: '30px'}
                            }}>
                                <Box>
                                    <Typography variant='h5' sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: '#103178',
                                        lineHeight: '26px',
                                        marginBottom: '20px'
                                    }}>
                                        Need Help
                                    </Typography>
                                    <Box>
                                        <Typography variant='h6' sx={{
                                            color: '#103178',
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            marginBottom: "5px"
                                        }}>
                                            0020 500 - FastCommerce - 000
                                        </Typography>
                                        <Typography variant='p' sx={{
                                            color: '#5b6c8f',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            marginBottom: "28px"
                                        }}>
                                            Monday - Friday: 9:00-20:00
                                            <br />
                                            Saturday: 11:00 - 15:00
                                        </Typography>
                                        <Box>
                                            <a style={{
                                                color: '#103178',
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                backgroundColor: '#ffffff',
                                                padding: '6px 25px',
                                                border: '1px solid #f0f2f5',
                                                borderRadius: '25px',
                                                display: 'inline-block',
                                                marginTop: '20px'
                                            }} href="mailto:example@fastcommerce">example@fastcommerce</a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={5} lg={2} sx={{
                                marginTop: {lg: '0px', xs: '30px'}
                            }}>
                                <Box>
                                    <Link href="/">
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: 'fit-content',
                                            cursor: 'pointer'
                                        }}>
                                            <RiHeart2Fill style={{
                                                fontSize: '40px',
                                                color: '#103178'
                                            }} />
                                            <Typography className='primary-logo' fontWeight="700" variant="h4" w="fit-content">
                                                FastComm.
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Typography variant='h5' sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: '#103178',
                                        lineHeight: '26px',
                                        marginTop: '20px',
                                        marginBottom: '20px'
                                    }}>
                                        Our store
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        color: '#5b6c8f',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '26px'
                                    }}>
                                        1743 Flinderation Road
                                        <br />
                                        Wood Dale, USA
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '26px',
                                        display: 'block',
                                    }}>
                                        <Link href="/"><span style={{
                                            color: '#5b6c8f',
                                            textDecoration: 'underline',
                                            cursor: 'pointer'
                                        }}>Show on map</span></Link>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box p="50px 0px 0px 0px">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" sx={{
                                    color: '#103178',
                                    fontSize: '16px',
                                    fontWeight: '600',

                                }}>
                                    Copyright © 2021 FastCommerce. All Rights Reserved
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    display:'flex',
                                    justifyContent: {lg: 'end', xs: 'flex-start'},
                                    alignItems: 'center'
                                }}>
                                       <Tooltip title="Facebook" placement="top" arrow>
                                <a style={{
                                    color: "#5b6c8f",
                                    fontSize: '20px',
                                    margin: '5px 9px'
                                }} href="https://facebook.com">
                                    <FaFacebookF />
                                </a>
                            </Tooltip>
                            <Tooltip title="Instagram" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://instagram.com">
                                <AiOutlineInstagram />
                            </a>
                            </Tooltip>
                            <Tooltip title="Youtube" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://youtube.com">
                                <AiFillYoutube />
                            </a>
                            </Tooltip>
                            <Tooltip title="Pinterest" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://pinterest.com">
                                <FaPinterestP />
                            </a>
                            </Tooltip>
                            <Tooltip title="Linkedin" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://linkedin.com">
                                <FaLinkedinIn />
                            </a>
                            </Tooltip>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </ResponsiveContainer>
        </footer>
    );
};

export default Footer;