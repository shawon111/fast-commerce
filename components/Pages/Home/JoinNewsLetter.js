import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import SectionTitle from '../../Global/SectionTitle';

const JoinNewsLetter = () => {
    return (
        <Box sx={{
            padding: '60px 0px',
            backgroundImage: `url(/images/home-newsletter-bg.png)`,
            backgroundSize: 'contain',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
        }}>
            <ResponsiveContainer>
                <Box>
                    <Typography sx={{
                        color: '#103178',
                        marginBottom: '30px',
                        fontSize: { lg: '37px', sm: '34px', xs: '28px' },
                        fontWeight: '600',
                        textAlign: 'center',
                        padding: { lg: '0px 25%', md: '0px 20%', sm: '0px 15%', xs: '0px 0px' }
                    }} variant="h3">
                        Join our newsletter and get $20 discount in your first order!
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: { lg: '0px 27%', md: '0px 22%', sm: '0px 17%', xs: '0px 0px' },
                            textAlign: 'center'
                        }}
                    >
                        <form className='newsletter_home' style={{
                            width: '100%'
                        }}>
                            <Grid container spacing={1} sx={{
                                padding: { sm: '0px 10%', xs: '0px 0px' },
                                alignItems: 'center'
                            }}>
                                <Grid item lg={8} sm={8} xs={12} >
                                    <input
                                        style={{
                                            border: '1px solid #ddd',
                                            outline: 'none',
                                            display: 'inline-block',
                                            width: '100%',
                                            padding: '13px 25px',
                                            borderRadius: '30px',
                                            backgroundColor: '#F0F2F5',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#103178',
                                            fontFamily: 'Jost'
                                        }}
                                        type="email" placeholder='Enter your email address' name="" id="" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={12} >
                                    <input
                                        className='basicBtn'
                                        style={{
                                            width: '100%',
                                            padding: '13px 25px',
                                            border: '1px solid #FD8D27',
                                            borderRadius: '30px',
                                            backgroundColor: '#FD8D27',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#fff',
                                            fontFamily: 'Jost'
                                        }} type="submit" value="Subscribe" />
                                </Grid>
                            </Grid>


                        </form>
                    </Box>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default JoinNewsLetter;