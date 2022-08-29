import { Box, Grid, Typography } from '@mui/material';
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
                        <Box>
                            <Typography sx={{
                                textAlign: 'start',
                                fontSize: { lg: '50px', sm: '42px', xs: '36px' },
                                color: '#103178',
                                fontWeight: '700',
                                marginTop: { lg: '40px', sm: '20px', xs: '20px' }
                            }} variant="h1">
                                Fast Commerce Blog <sup style={{
                                    fontSize: '.5em',
                                    fontWeight: '300'
                                }}>(03)</sup>
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item lg={10} xs={12}>
                                <Blogs />
                            </Grid>
                            <Grid item sx={{
                                display: {lg: 'block', xs: 'none'}
                            }} lg={2} xs={12}>
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