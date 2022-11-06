import { Box, Grid } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import CustomerAlsoBuy from '../../components/Pages/Shop/CustomerAlsoBuy';
import SingleProductBody from '../../components/Pages/Shop/SingleProductBody';
import SingleProductSidebar from '../../components/Pages/Shop/SingleProductSidebar';
import { Bars } from 'react-loader-spinner';

const Product = ({ product, peopleAlsoBuyData, relatedProducts }) => {
    const metaInfo = { title: `${product.metaTitle} | Fast Commerce`, keywords: product.metaTags, metaDesc: product.metaDescription };
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        setShowPreloader(false)
    }, [product])
    return (
        <Box>
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
                            <Box sx={{
                                marginTop: '50px'
                            }}>
                                <Grid container spacing={3}>
                                    <Grid lg={10} xs={12} item>
                                        <SingleProductBody product={product} />
                                    </Grid>
                                    <Grid sx={{
                                        display: { lg: 'block', xs: 'none' }
                                    }} lg={2} xs={12} item>
                                        <SingleProductSidebar relatedProducts={relatedProducts} />
                                    </Grid>
                                </Grid>
                            </Box>
                    }
                </ResponsiveContainer>
                <CustomerAlsoBuy peopleAlsoBuyData={peopleAlsoBuyData} />
            </Layout>
        </Box>
    );
};

export default Product;

export const getStaticPaths = async () => {
    const res = await fetch(`https://fast-commerce-backend.onrender.com/products`);
    const data = await res.json();
    const paths = data.map((product) => ({
        params: { slug: product._id },
      }))
      return {
        paths,
        fallback: 'blocking'
      }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const res = await fetch(`https://fast-commerce-backend.onrender.com/products/${slug}`);
    const data = await res.json();

    const relatedRes = await fetch(`https://fast-commerce-backend.onrender.com/products/related/${data.category}`);
    const relatedProducts = await relatedRes.json();

    const peopleBuyRes = await fetch("https://fast-commerce-backend.onrender.com/products/latest");
    const peopleAlsoBuyData = await peopleBuyRes.json();
    return {
        props: {
            product: data,
            peopleAlsoBuyData,
            relatedProducts
        },
        revalidate: 86400,
    }
}