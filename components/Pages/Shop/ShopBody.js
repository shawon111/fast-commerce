import { Box } from '@mui/material';
import React from 'react';
import AllProductGrid from './AllProductGrid';
import BestSellerProducts from './BestSellerProducts';
import SecureDeliveryBanner from './SecureDeliveryBanner';

const ShopBody = ({ bestSeller, Products, setPageProduct, setProductPage, productLength }) => {
    return (
        <Box sx={{
            marginTop: '10px'
        }}>
            <BestSellerProducts products={bestSeller} />
            <AllProductGrid setPageProduct={setPageProduct} productLength={productLength} setProductPage={setProductPage} products={Products} />
            <Box sx={{
                marginTop: '60px'
            }}>
                <SecureDeliveryBanner />
            </Box>
        </Box>
    );
};

export default ShopBody;