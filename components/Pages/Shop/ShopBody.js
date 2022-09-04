import { Box } from '@mui/material';
import React from 'react';
import AllProductGrid from './AllProductGrid';
import BestSellerProducts from './BestSellerProducts';
import SecureDeliveryBanner from './SecureDeliveryBanner';

const ShopBody = ({bestSeller, allProducts}) => {
    return (
        <Box sx={{
            marginTop: '10px'
        }}>
            <BestSellerProducts products={bestSeller} />
            <AllProductGrid products={allProducts} />
            <SecureDeliveryBanner />
        </Box>
    );
};

export default ShopBody;