import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { TbShieldCheck } from 'react-icons/tb';

const SecureDeliveryBanner = () => {
    return (
        <Box sx={{
            padding: {lg: '40px', sm: '30px', xs: '20px'},
            backgroundImage: 'url(/images/sheild-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: {lg: '200px', sm: '120px', xs: '90px'},
            backgroundPositionX: '75%',
            backgroundPositionY: '50%',
            backgroundColor: '#F6F7E5',
            borderRadius: '6px'
        }}>
            <Grid container>
                <Grid item md={10} xs={12}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            marginRight: '10px'
                        }}>
                            <TbShieldCheck style={{
                                color: '#12a05c',
                                fontSize: '24px'
                            }} />
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{
                                color: '#12a05c',
                                fontSize: {lg: '24px', sm: '21px', xs: '18px'},
                                lineHeight: '1.2',
                                fontWeight: '500'
                            }}>
                                <strong>100% Secure delivery</strong> without contacting the courier
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    justifyContent: {md: 'flex-end', xs: 'flex-start'},
                    marginTop: {md: '0px', xs: '20px'}
                }} item md={2} xs={12}>
                            <Button style={{
                                backgroundColor: '#12A05C',
                                color: '#fff',
                                padding: '10px 30px',
                                lineHeight: '1',
                                borderRadius: '18px',
                                textTransform: 'capitalize',
                                fontSize: '16px',
                                fontWeight: '500',
                                display: 'inline-block',
                            }} variant='contained'>More</Button>          
                </Grid>
            </Grid>
        </Box>
    );
};

export default SecureDeliveryBanner;