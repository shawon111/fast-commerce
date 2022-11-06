import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import ShopBody from '../../components/Pages/Shop/ShopBody';
import ShopSidebar from '../../components/Pages/Shop/ShopSidebar';
import { Bars } from 'react-loader-spinner';

const Shop = ({ watch, Products, productLength }) => {
    const metaInfo = { title: "Shop | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, shop, fast commerce shop", metaDesc: "Contact with fast commerce to get the best deal" };

    const [pageProduct, setPageProduct] = useState(Products);
    const [productPage, setProductPage] = useState(1);
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        setShowPreloader(false)
    }, [Products])

    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    {
                        showPreloader ?
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: { lg: '50px', sm: '30px', xs: '20px' }
                            }}>
                                <Bars
                                    height="100"
                                    width="100"
                                    color="#103178"
                                    ariaLabel="bars-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </Box> :
                            <Box>
                                <Box sx={{
                                    marginBottom: { lg: '40px', sm: '35px', xs: '28px' }
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
                                        }}>({productLength})</sup>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Grid container spacing={3}>
                                        <Grid sx={{
                                            display: { lg: 'block', xs: 'none' }
                                        }} item lg={2}>
                                            <ShopSidebar />
                                        </Grid>
                                        <Grid item lg={10} xs={12}>
                                            <ShopBody setPageProduct={setPageProduct} setProductPage={setProductPage} Products={pageProduct} productLength={productLength} bestSeller={watch} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                    }
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Shop;

export async function getStaticProps() {

    const watchRes = await fetch(`https://fast-commerce-backend.onrender.com/products/category/watch`);
    const watch = await watchRes.json();

    const productsRes = await fetch(`https://fast-commerce-backend.onrender.com/products/page?index=1`)
    const Products = await productsRes.json();

    const productLengthRes = await fetch(`https://fast-commerce-backend.onrender.com/products/length`);
    const productLength = await productLengthRes.json();


    return {
        props: {
            watch,
            Products,
            productLength
        },
        revalidate: 86400,
    }
} 