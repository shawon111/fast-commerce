import { Badge, Box, Button, Divider, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Link from 'next/link';
import { FaSearch, FaRegUser } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { RiShoppingCart2Line, RiHeart2Fill } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
    return (
        <Box p="30px 0px 20px 0px">
            <Stack spacing={0} pb="30px">
                <ResponsiveContainer>
                    <Grid sx={{ alignItems: 'center' }} container spacing={2}>
                        <Grid item xs={6} lg={3}>

                            <Box>
                                <Link href="/">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: 'fit-content'
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
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={5} sx={{ alignItems: 'center' }}>
                            <Box sx={{
                                background: '#F0F2F5',
                                width: 'fit-content',
                                padding: '5px 0px',
                                borderRadius: '30px'
                            }}>
                                <input style={{
                                    border: 'none',
                                    outline: 'none',
                                    height: '35px',
                                    background: 'transparent',
                                    padding: '0px 20px',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                }}
                                    type="search"
                                    className='search-input'
                                    placeholder='Search for products'
                                /><Button
                                    variant="text"
                                    height="35px"
                                    fontSize="40px"
                                ><FaSearch className='darkText' style={{ fontSize: '20px' }} /></Button>
                            </Box>
                        </Grid>
                        <Grid xs={0} lg={4} sx={{
                            display: 'flex',
                            justifyContent: 'end',
                        }} item>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Box>
                                    <select style={{
                                        fontSize: '11px',
                                        padding: '10px',
                                        border: 'none',
                                        outline: 'none',
                                        fontWeight: '600',
                                        color: '#103178'
                                    }}>
                                        <option selected value="1">USD</option>
                                        <option value="2">EURO</option>
                                    </select>
                                </Box>
                                <Box>
                                    <Box sx={{ gap: '25px', flexDirection: 'row', display: 'flex' }}>
                                        <Box>
                                            <Badge>
                                                <FaRegUser style={{
                                                    fontSize: '23px',
                                                    color: '#ff9923',
                                                    fontWeight: '200'
                                                }}></FaRegUser>
                                            </Badge>
                                        </Box>
                                        <Box>
                                            <Badge badgeContent={0} showZero
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        color: "#fff",
                                                        backgroundColor: "#103178"
                                                    }
                                                }}>
                                                <FiHeart style={{
                                                    fontSize: '23px',
                                                    color: '#ff9923',
                                                    fontWeight: '200'
                                                }}></FiHeart>
                                            </Badge>
                                        </Box>
                                        <Box>
                                            <Badge badgeContent={0} showZero
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        color: "#fff",
                                                        backgroundColor: "#103178"
                                                    }
                                                }}
                                            >
                                                <RiShoppingCart2Line style={{
                                                    fontSize: '23px',
                                                    color: '#ff9923',
                                                    fontWeight: '200'
                                                }}></RiShoppingCart2Line>
                                            </Badge>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </ResponsiveContainer>
            </Stack>
            <Stack pt="20px" borderTop="1px solid #f0f2f5">
                <ResponsiveContainer>
                    <Grid container spacing={2}>
                        <Grid item lg={8}>
                            <Box>
                                <ul className='nav-menu' style={{
                                    display: 'flex',
                                }}>
                                    <li style={{ cursor: 'pointer' }}><span style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}><HiMenu style={{ marginRight: '5px', fontSize: '20px', fontWeight: '700' }} />Products</span></li>
                                    <li><Link href="/">Homepage</Link></li>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item sx={{textAlign: 'end'}} lg={4}>
                            <Typography color="#5b6c8f" fontWeight="500" fontSize="15px" variant='p'>
                                Need help? 0020 500 - FastCommerce - 000
                            </Typography>
                        </Grid>
                    </Grid>
                </ResponsiveContainer>
            </Stack>
        </Box>
    );
};

export default Header;