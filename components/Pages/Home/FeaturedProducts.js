import { Box, Grid } from '@mui/material';
import React from 'react';
import BasicProductItem from '../../Global/BasicProductItem';
import SectionTitle from '../../Global/SectionTitle';
import demoProductImage from '../../../public/images/productDemoImage.png';
import ResponsiveContainer from '../../Global/ResponsiveContainer';

const FeaturedProducts = () => {
    const products = [
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
        {
            name: "Lorem imsum dolor",
            price: "40",
            rating_star: "5",
            image: demoProductImage
        },
        {
            name: "Lorem imsum dolor",
            price: "60",
            rating_star: "5",
            image: demoProductImage
        },
        {
            name: "Lorem imsum dolor",
            price: "20",
            rating_star: "5",
            image: demoProductImage
        },
        {
            name: "Lorem imsum dolor",
            price: "30",
            rating_star: "5",
            image: demoProductImage
        },
        {
            name: "Lorem imsum dolor",
            price: "30",
            rating_star: "5",
            image: demoProductImage
        },
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
        {
            name: "Lorem imsum dolor",
            price: "40",
            rating_star: "5",
            image: demoProductImage
        },
    ]
    return (
        <Box sx={{
            padding: {lg: '60px 0px', sm: '30px 0px', xs:'20px 0px'}
        }}>
            <ResponsiveContainer>
                <Box>
                    <Box sx={{
                        marginBottom: '30px'
                    }}>
                        <SectionTitle>
                            Featured Products
                        </SectionTitle>
                    </Box>
                    <Box>
                        <Grid sx={{
                            borderLeft: '1px solid #f0f2f5'
                        }} container spacing={0}>
                            {
                                products.map((item, index) => <Grid lg={2.4} md={3} sm={4} xs={6} key={index}>
                                    <BasicProductItem product={item} />
                                </Grid>)
                            }
                        </Grid>
                    </Box>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default FeaturedProducts;