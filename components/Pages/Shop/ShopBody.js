import { Box } from '@mui/material';
import React from 'react';
import AllProductGrid from './AllProductGrid';
import BestSellerProducts from './BestSellerProducts';
import SecureDeliveryBanner from './SecureDeliveryBanner';

const ShopBody = () => {
    return (
        <Box sx={{
            marginTop: '10px'
        }}>
            <BestSellerProducts />
            <AllProductGrid />
            <SecureDeliveryBanner />
        </Box>
    );
};

export default ShopBody;