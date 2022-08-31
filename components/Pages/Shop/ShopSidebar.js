import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link'

const ShopSidebar = () => {
    const allCategories = [
        "Fashion",
        "Womens",
        "Mens",
        "Clothes",
        "Shoes",
        "Pants",
        "Watches",
        "Bags"
    ];
    return (
        <Box>
            <Box sx={{
                borderBottom: '1px solid #f0f2f5',
                paddingBottom: '30px'
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontSize: { lg: '20px', sm: '16px', xs: '14px' },
                    fontWeight: '600',
                    transition: 'all .3s',
                    padding: '10px',
                }} variant='h5'>
                    Categories
                </Typography>
                {
                    allCategories.map((item, index) => <Link key={index} href="/">
                        <Typography sx={{
                            color: '#103178',
                            fontSize: { lg: '18px', sm: '16px', xs: '14px' },
                            fontWeight: '500',
                            transition: 'all .3s',
                            cursor: "pointer",
                            padding: '10px',
                            "&:hover": {
                                color: '#FD8D27'
                            }
                        }} variant='h5'>
                            {item}
                        </Typography>
                    </Link>)
                }
            </Box>
            <Box sx={{
                marginTop: '30px',
                borderBottom: '1px solid #f0f2f5',
                paddingBottom: '30px'
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontSize: { lg: '20px', sm: '16px', xs: '14px' },
                    fontWeight: '600',
                    transition: 'all .3s',
                    padding: '10px',
                    marginBottom: '15px'
                }} variant='h5'>
                    Price
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <input style={{
                                border: '1px solid #f0f2f5',
                                outline: 'none',
                                height: '35px',
                                background: '#F0F2F5',
                                padding: '10px 10px',
                                fontSize: '14px',
                                fontWeight: '400',

                            }}
                                type="number"
                                required
                                className='contact_input'
                                placeholder='From: $0'
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <input style={{
                                border: '1px solid #f0f2f5',
                                outline: 'none',
                                height: '35px',
                                background: '#F0F2F5',
                                padding: '10px 10px',
                                fontSize: '14px',
                                fontWeight: '400',

                            }}
                                type="number"
                                required
                                className='contact_input'
                                placeholder='To: $900'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                marginTop: '30px',
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontSize: { lg: '20px', sm: '16px', xs: '14px' },
                    fontWeight: '600',
                    transition: 'all .3s',
                    padding: '10px',
                    marginBottom: '15px'
                }} variant='h5'>
                    Sizes
                </Typography>
                <Box>
                    <Grid container spacing={0}>
                        <Grid item lg={4}>
                            <Button sx={{
                                padding: '2px 8px',
                                textTransform: 'capitalize',
                                fontSize: '12px',
                                fontWeight: '500',
                                marginRight: "10px",
                                borderRadius: '20px',
                                boxShadow: 'none',
                                backgroundColor: '#103178',
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: '#103178'
                                }
                            }} variant='contained'>small</Button>
                        </Grid>
                        <Grid item lg={4}>
                            <Button sx={{
                                padding: '2px 8px',
                                textTransform: 'capitalize',
                                fontSize: '12px',
                                fontWeight: '500',
                                marginRight: "10px",
                                borderRadius: '20px',
                                boxShadow: 'none',
                                backgroundColor: '#103178',
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: '#103178'
                                }
                            }} variant='contained'>medium</Button>
                        </Grid>
                        <Grid item lg={4}>
                            <Button sx={{
                                padding: '2px 8px',
                                textTransform: 'capitalize',
                                fontSize: '12px',
                                fontWeight: '500',
                                marginRight: "10px",
                                borderRadius: '20px',
                                boxShadow: 'none',
                                backgroundColor: '#103178',
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: '#103178'
                                }
                            }} variant='contained'>large</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ShopSidebar;