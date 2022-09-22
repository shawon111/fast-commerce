import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const OrderDetails = () => {
    return (
        <Box>
            <Box sx={{
                marginBottom: '30px'
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontWeight: '500',
                    lineHeight: '1.3',
                    fontSize: { lg: '22px', sm: '18px', xs: '16px' },
                    marginBottom: '30px'
                }} variant='h3'>
                    Shipping Address
                </Typography>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Full Name" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Phone Number" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Country" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Street Address 1" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Street Address 2" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="State/City" variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField sx={{
                                width: '100%',
                            }}
                                id="outlined-basic" label="Postal Code" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                marginBottom: '30px'
            }}>
            <Typography sx={{
                    color: '#103178',
                    fontWeight: '500',
                    lineHeight: '1.3',
                    fontSize: { lg: '22px', sm: '18px', xs: '16px' },
                }} variant='h3'>
                    Shipping status: <span style={{
                        color: '#12a05c',
                    }}>Pending</span>
                </Typography>
            </Box>
            <Box sx={{
                marginBottom: '30px'
            }}>
            <Typography sx={{
                    color: '#103178',
                    fontWeight: '500',
                    lineHeight: '1.3',
                    fontSize: { lg: '22px', sm: '18px', xs: '16px' },
                }} variant='h3'>
                    Payment Method: <span style={{
                        color: '#12a05c',
                    }}>Stripe</span>
                </Typography>
            </Box>
        </Box>
    );
};

export default OrderDetails;