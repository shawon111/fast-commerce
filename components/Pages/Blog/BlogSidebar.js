import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import demoProductImage from '../../../public/images/productDemoImage.png';
import BasicProductItem from '../../Global/BasicProductItem';

const BlogSidebar = () => {
    const allCategories = [
        "Fashion",
        "Womens",
        "Mens",
        "Clothes",
        "Shoes",
        "Pants",
        "Watches",
        "Bags"
    ];

    const relatedProducts = [
        {
            name: "Lorem imsum dolor",
            price: "30",
            rating_star: "5",
            image: demoProductImage
        },
        {
            name: "Lorem imsum dolor",
            price: "50",
            rating_star: "5",
            image: demoProductImage
        },
    ]
    return (
        <Box sx={{
            padding: { lg: '60px 0px 0px 0px', sm: '30px 0px 0px 0px', xs: '20px 0px 0px 0px' }
        }}>
            <Box>
                <Typography sx={{
                    color: '#103178',
                    fontSize: { lg: '24px', sm: '21px', xs: '18px' },
                    fontWeight: '600',
                    marginBottom: '20px'
                }} variant='h4'>
                    Categories
                </Typography>
            </Box>
            <Box sx={{
                marginTop: '10px'
            }}>
                {
                    allCategories.map((item, index) => <Link key={index} href="/">
                        <Typography sx={{
                            color: '#103178',
                            fontSize: { lg: '18px', sm: '16px', xs: '14px' },
                            fontWeight: '600',
                            transition: 'all .3s',
                            cursor: "pointer",
                            padding: '10px',
                            "&:hover": {
                                color: '#FD8D27'
                            }
                        }} variant='h5'>
                            {item}
                        </Typography>
                    </Link>)
                }
            </Box>
            <Box sx={{
                marginTop: { lg: '60px', sm: '40px', xs: '30px' }
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontSize: { lg: '24px', sm: '21px', xs: '18px' },
                    fontWeight: '600',
                    marginBottom: '20px'
                }} variant='h4'>
                    Related products
                </Typography>
                <Box sx={{
                    marginTop: '10px'
                }}>
                    <Grid conrainer>
                        {
                            relatedProducts.map((item, index) => <Grid sx={{
                                borderLeft: '1px solid #f0f2f5'
                            }} item lg={12} md={12} sm={12} xs={12} key={index}>
                            <BasicProductItem product={item} />
                        </Grid>)
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogSidebar;