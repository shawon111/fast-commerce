import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import { RiWalletLine, RiTruckLine } from 'react-icons/ri';
import { BiShoppingBag } from 'react-icons/bi';

const ShippingFeatures = () => {
    return (
        <Box sx={{
            padding: {lg: '60px 0px 0px 0px', sm: '30px 0px 0px 0px', xs: '20px 0px 0px 0px'}
        }}>
            <Box sx={{
                borderTop: '1px solid #f0f2f5'
            }}>
                <ResponsiveContainer>
                    <Box>
                        <Grid container spacing={0}>
                            <Grid sx={{ 
                                borderRight: {sm: '1px solid #f0f2f5'},
                            }} sm={4} xs={12} item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '15px 0px',
                                    justifyContent: 'center'
                                }}>
                                    <RiWalletLine style={{
                                        fontSize: '18px',
                                        color: '#103178',
                                        marginRight: '10px'
                                    }} />
                                    <Typography sx={{
                                        fontSize: '16px',
                                        color: '#103178',
                                        fontWeight: '600'
                                    }} variant="h4">
                                        100% Money back
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid sx={{
                                borderRight: {sm: '1px solid #f0f2f5'},
                            }} sm={4} xs={12} item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '15px 0px',
                                    justifyContent: 'center'
                                }}>
                                    <BiShoppingBag style={{
                                        fontSize: '18px',
                                        color: '#103178',
                                        marginRight: '10px'
                                    }} />
                                    <Typography sx={{
                                        fontSize: '16px',
                                        color: '#103178',
                                        fontWeight: '600'
                                    }} variant="h4">
                                        Non-contact shipping
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid sm={4} xs={12} item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '15px 0px',
                                    justifyContent: 'center',
                                    marginLeft: {md: '0px', sm:'10px', xs: '0px'}
                                }}>
                                    <RiTruckLine style={{
                                        fontSize: '18px',
                                        color: '#103178',
                                        marginRight: '10px'
                                    }} />
                                    <Typography sx={{
                                        fontSize: '16px',
                                        color: '#103178',
                                        fontWeight: '600',
                                    }} variant="h4">
                                        Free delivery for order over $200
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default ShippingFeatures;