import { Box, Grid, Pagination, Typography } from '@mui/material';
import React from 'react';
import BasicProductItem from '../../Global/BasicProductItem';
import demoProductImage from '../../../public/images/productDemoImage.png';

const AllProductGrid = () => {
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
        <Box>
            <Typography
                sx={{
                    fontSize: { lg: '25px', sm: '21px', xs: '18px' },
                    color: '#103178',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    marginBottom: '20px'
                }}
                variant="h3">
                All Products
            </Typography>
            <Box>
                <Grid sx={{
                    borderLeft: '1px solid #f0f2f5'
                }} container spacing={0}>
                    {
                        products.map((item, index) => <Grid item lg={3} md={3} sm={4} xs={6} key={index}>
                            <BasicProductItem product={item} />
                        </Grid>)
                    }
                </Grid>
            </Box>
            <Box sx={{
                marginTop: '35px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Pagination sx={{
                    ".MuiPaginationItem-text": {
                        color: '#103178',
                        fontWeight: '600',
                    }
                }} count={10} />
            </Box>
        </Box>
    );
};

export default AllProductGrid;