import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../../components/Global/Layout';
import ResponsiveContainer from '../../../components/Global/ResponsiveContainer';
import OrderDetails from '../../../components/Pages/Orders/OrderDetails';
import OrderedProducts from '../../../components/Pages/Orders/OrderedProducts';
import PrivateCustomer from '../../../components/ProtectedCompontnts/PrivateCustomer';

const SingleOrder = () => {
    const metaInfo = { title: "Order | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };
    return (
        <>
            <Layout metaInfo={metaInfo}>
                <PrivateCustomer>
                    <ResponsiveContainer>
                        <Box sx={{
                            paddingTop: { lg: '50px', sm: '30px', xs: '20px' }
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Typography sx={{
                                    color: '#103178',
                                    fontWeight: '600',
                                    lineHeight: '1.3',
                                    fontSize: { lg: '25px', sm: '22px', xs: '19px' },
                                    marginBottom: '30px'
                                }} variant='h3'>
                                    Order ID: a5676324
                                </Typography>
                                <Typography sx={{
                                    color: '#103178',
                                    fontWeight: '600',
                                    lineHeight: '1.3',
                                    fontSize: { lg: '25px', sm: '22px', xs: '19px' },
                                    marginBottom: '30px'
                                }} variant='h3'>
                                    Total: $500
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container spacing={8}>
                                    <Grid item md={6} xs={12}>
                                        <OrderDetails />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <OrderedProducts />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Typography sx={{
                                    color: '#103178',
                                    fontWeight: '400',
                                    fontSize: { lg: '14px', sm: '13px', xs: '12px' },
                                }}>
                                    <cite> *Contact us for more information</cite>
                                </Typography>
                                <Button
                                    sx={{
                                        padding: '8px 40px',
                                        backgroundColor: '#FD8D27',
                                        color: '#fff',
                                        textTransform: 'capitalize',
                                        fontSize: { lg: '18px', sm: '16px', xs: '14px' },
                                        borderRadius: '30px',
                                        transition: 'all .3s',
                                        boxShadow: 'none',
                                        "&:hover": {
                                            boxShadow: 'none',
                                            backgroundColor: '#103178'
                                        }
                                    }}
                                    variant="contained">Cancel Order</Button>
                            </Box>
                        </Box>
                    </ResponsiveContainer>
                </PrivateCustomer>
            </Layout>
        </>
    );
};

export default SingleOrder;