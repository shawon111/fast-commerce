import { Box, Grid } from '@mui/material';
import React from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import CustomerAlsoBuy from '../../components/Pages/Shop/CustomerAlsoBuy';
import SingleProductBody from '../../components/Pages/Shop/SingleProductBody';
import SingleProductSidebar from '../../components/Pages/Shop/SingleProductSidebar';

const Product = ({product}) => {
    const metaInfo = { title: "Shop | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, shop, fast commerce shop", metaDesc: "Contact with fast commerce to get the best deal" };

    console.log("product_101", product)
    return (
        <Box>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Box sx={{
                        marginTop: '50px'
                    }}>
                        <Grid container spacing={3}>
                            <Grid lg={10} xs={12} item>
                                <SingleProductBody product={product} />
                            </Grid>
                            <Grid sx={{
                                display: {lg: 'block', xs: 'none'}
                            }} lg={2} xs={12} item>
                                <SingleProductSidebar />
                            </Grid>
                        </Grid>
                    </Box>
                </ResponsiveContainer>
                <CustomerAlsoBuy />
            </Layout>
        </Box>
    );
};

export default Product;

export const getStaticPaths = async () =>{
    const res = await fetch(`https://fast-commerce-backend.onrender.com/products`)
    const data = await res.json();

    const paths = data.map(product=> {
        return {
            params: {
                slug: `${product._id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) =>{
    const { slug } = params;
    const res = await fetch(`https://fast-commerce-backend.onrender.com/products/${slug}`);
    const data = await res.json();
    return {
        props: {
            product: data
        }
    }
}