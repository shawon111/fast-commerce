import { Grid } from '@mui/material';
import React from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import BlogSidebar from '../../components/Pages/Blog/BlogSidebar';
import SingleBlogBody from '../../components/Pages/Blog/SingleBlogBody';

const SingleBlogPage = () => {
    const metaInfo = { title: "Single Blog | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };

    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Grid container spacing={3}>
                        <Grid item lg={10} xs={12}>
                            <SingleBlogBody />
                        </Grid>
                        <Grid item sx={{
                            display: { lg: 'block', xs: 'none' }
                        }} lg={2} xs={12}>
                            <BlogSidebar />
                        </Grid>
                    </Grid>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default SingleBlogPage;