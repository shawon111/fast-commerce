import { Box, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import MyOrders from '../../components/Pages/UserAccount/MyOrders';
import ShippingDetails from '../../components/Pages/UserAccount/ShippingDetails';

const UserDashboard = () => {
    const metaInfo = { title: "Dashboard | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, shop, fast commerce shop", metaDesc: "Contact with fast commerce to get the best deal" };
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
                            Dashboard
                        </Typography>
                        <MyOrders />
                        <ShippingDetails />
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default UserDashboard;