import { Box, Grid } from '@mui/material';
import React from 'react';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import Blogs from '../../components/Pages/Blog/Blogs';
import BlogSidebar from '../../components/Pages/Blog/BlogSidebar';

const Blog = () => {
    const metaInfo = { title: "Blogs | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };
    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Box>
                        <Grid container>
                            <Grid item lg={10} xs={12}>
                                <Blogs />
                            </Grid>
                            <Grid item lg={2} xs={12}>
                                <BlogSidebar />
                            </Grid>
                        </Grid>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Blog;