import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import ShopBody from '../../components/Pages/Shop/ShopBody';
import ShopSidebar from '../../components/Pages/Shop/ShopSidebar';

const Shop = ({watch, allProducts}) => {
    const metaInfo = { title: "Shop | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, shop, fast commerce shop", metaDesc: "Contact with fast commerce to get the best deal" };

    console.log("all product", allProducts)
    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Box sx={{
                        marginBottom: {lg: '40px', sm: '35px', xs: '28px'}
                    }}>
                        <Typography sx={{
                            textAlign: 'start',
                            fontSize: { lg: '42px', sm: '37px', xs: '33px' },
                            color: '#103178',
                            fontWeight: '700',
                            marginTop: { lg: '40px', sm: '20px', xs: '20px' }
                        }} variant="h1">
                            Shop <sup style={{
                                fontSize: '.5em',
                                fontWeight: '300'
                            }}>(03)</sup>
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid sx={{
                                display: {lg: 'block', xs: 'none'}
                            }} item lg={2}>
                                <ShopSidebar />
                            </Grid>
                            <Grid item lg={10} xs={12}>
                                <ShopBody allProducts={allProducts} bestSeller={watch} />
                            </Grid>
                        </Grid>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Shop;

export async function getStaticProps(){

    const watchRes = await fetch(`https://fast-commerce-backend.onrender.com/products/category/watch`);
    const watch = await watchRes.json();

    const allproductsRes = await fetch(`https://fast-commerce-backend.onrender.com/products`)
    const allProducts = await allproductsRes.json();

    return {
        props: {
            watch,
            allProducts
        }
    }
} 