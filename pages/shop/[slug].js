import { Box, Grid } from '@mui/material';
import React from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import CustomerAlsoBuy from '../../components/Pages/Shop/CustomerAlsoBuy';
import SingleProductBody from '../../components/Pages/Shop/SingleProductBody';
import SingleProductSidebar from '../../components/Pages/Shop/SingleProductSidebar';

const Product = ({product, peopleAlsoBuyData, relatedProducts}) => {
    const metaInfo = { title: `${product.metaTitle} | Fast Commerce`, keywords: product.metaTags, metaDesc: product.metaDescription };
    console.log("related", relatedProducts)


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
                                <SingleProductSidebar relatedProducts={relatedProducts} />
                            </Grid>
                        </Grid>
                    </Box>
                </ResponsiveContainer>
                <CustomerAlsoBuy peopleAlsoBuyData={peopleAlsoBuyData} />
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

    const relatedRes =await fetch(`https://fast-commerce-backend.onrender.com/products/related/${data.category}`);
    const relatedProducts = await relatedRes.json();

    const peopleBuyRes = await fetch("https://fast-commerce-backend.onrender.com/products/latest");
    const peopleAlsoBuyData = await peopleBuyRes.json();
    return {
        props: {
            product: data,
            peopleAlsoBuyData,
            relatedProducts
        }
    }
}