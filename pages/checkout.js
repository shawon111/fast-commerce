import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';
import BillingAddress from '../components/Pages/Checkout/BillingAddress';
import CheckoutOverview from '../components/Pages/Checkout/CheckoutOverview';

const checkout = () => {
    const metaInfo = { title: "Checkout | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };
    return (
        <Layout metaInfo={metaInfo}>
            <ResponsiveContainer>
                <Box sx={{
                    padding: { lg: '60px 0px 0px 0px', sm: '30px 0px 0px 0px', xs: '20px 0px 0px 0px' }
                }}>
                    <Typography sx={{
                        color: '#103178',
                        fontWeight: '600',
                        lineHeight: '1.3',
                        fontSize: { lg: '40px', sm: '30px', xs: '25px' },
                        marginBottom: '30px'
                    }} variant='h3'>
                        Checkout
                    </Typography>
                    <Box>
                        <Grid container spacing={4} >
                            <Grid item md={8} sm={7} xs={12}>
                                <Box sx={{
                                    border: '1px solid #f0f2f5',
                                    borderRadius: '5px',
                                    padding: '2rem'
                                }}>
                                    <BillingAddress />
                                </Box>
                            </Grid>
                            <Grid item md={4} sm={5} xs={12}>
                                <CheckoutOverview />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </ResponsiveContainer>
        </Layout>
    );
};

export default checkout;