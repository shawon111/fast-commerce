import { Box, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../../components/Global/Layout';
import ResponsiveContainer from '../../../components/Global/ResponsiveContainer';
import OrderDetails from '../../../components/Pages/Orders/OrderDetails';
import OrderedProducts from '../../../components/Pages/Orders/OrderedProducts';

const SingleOrder = () => {
    const metaInfo = { title: "Order | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };
    return (
        <>
            <Layout metaInfo={metaInfo}>
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
                            <OrderDetails />
                            <OrderedProducts />
                        </Box>
                        <Box>
                            {/* cancel order functionality here */}
                        </Box>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default SingleOrder;