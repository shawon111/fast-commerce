import { Box, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';
import { AiFillWarning } from 'react-icons/ai';

const cart = () => {
    const metaInfo = { title: "Cart | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };
    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Box sx={{
                        paddingTop: { lg: '50px', sm: '30px', xs: '20px' }
                    }}>
                        <Typography sx={{
                            color: '#103178',
                            fontWeight: '600',
                            lineHeight: '1.3',
                            fontSize: { lg: '40px', sm: '30px', xs: '25px' },
                            marginBottom: '30px'
                        }} variant='h3'>
                            Shopping Cart
                        </Typography>
                        <Box sx={{
                            padding: '40px 0px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Box>
                                <AiFillWarning style={{
                                    color: '#FAAD14',
                                    fontSize: '70px',
                                    display: 'block',
                                    margin: 'auto',
                                    marginBottom: '15px'
                                }} />
                                <Typography sx={{
                                    color: '#000000d9',
                                    fontWeight: '500',
                                    lineHeight: '1.3',
                                    fontSize: { lg: '20px', sm: '18px', xs: '16px' },
                                }} variant='h3'>
                                    No product in cart.
                                </Typography>
                            </Box>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default cart;