import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import BasicProductItem from '../../components/Global/BasicProductItem';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router';

const Category = ({ products }) => {
    const metaInfo = { title: "Shop | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, shop, fast commerce shop", metaDesc: "Contact with fast commerce to get the best deal" };
    const router = useRouter();
    const { slug } = router.query;

    // breadcrumb
    const breadcrumbs = [
        <Box key="1" color="#103178" fontWeight="600" sx={{
            fontSize: { lg: '40px', sm: '30px', xs: '24px' }
        }}>
            Categories
        </Box>,
        <Typography key="3" sx={{
            textTransform: "capitalize",
            color: "#103178",
            fontWeight: '600',
            fontSize: { lg: '40px', sm: '30px', xs: '24px' }
        }}>
            {slug}
        </Typography>,
    ];
    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    {products.length && products === "No documents found!" ?
                        <Box>
                            <Typography variant='h3' sx={{
                                color: '#103178',
                                fontSize: { lg: '50px', sm: '40px', xs: '30px' },
                                fontWeight: '600',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                                marginTop: { lg: '60px', sm: '30px', xs: '20px' },
                                opacity: '.6'
                            }}>
                                No product found in this caegory!
                            </Typography>
                        </Box> :
                        <Box>
                            <Box>
                                <Box sx={{
                                    padding: {lg: '40px 0px 30px 0px', sm: "30px 0px 25px 0px", xs: '25px 0px 20px 0px'}
                                }}>
                                    <Breadcrumbs
                                        separator={<IoIosArrowForward style={{
                                            fontSize: '28px',
                                            color: '#103178'
                                        }} />}
                                        aria-label="breadcrumb"
                                    >
                                        {breadcrumbs}
                                    </Breadcrumbs>
                                </Box>
                                <Grid sx={{
                                    borderLeft: '1px solid #f0f2f5'
                                }} container spacing={0}>
                                    {
                                        products.length > 0 &&  products.map((item, index) => <Grid item lg={3} md={3} sm={4} xs={6} key={index}>
                                            <BasicProductItem product={item} />
                                        </Grid>)
                                    }
                                </Grid>
                            </Box>
                        </Box>
                    }
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Category;

export const getStaticPaths = async () => {
    const allCategories = "fashion,women,men,clothes,shoes,pants,watch,bags";
    const Categories = allCategories.split(",")
    const paths = Categories.map((category) => {
        return {
            params: {
                slug: category
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const productsRes = await fetch(`http://localhost:5000/products/category/${slug}`);
    const products = await productsRes.json();

    return {
        props: {
            products
        }
    }
}