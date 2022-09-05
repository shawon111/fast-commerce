import { Box, Grid, Pagination, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BasicProductItem from '../../Global/BasicProductItem';
const axios = require('axios');

const AllProductGrid = ({products, setPageProduct, setProductPage, productLength}) => {
    const pageCount = Math.ceil(productLength / 12);   
    const [page, setPage] = useState(1)

    const handlePaginationChange = (event, value) => {
        setProductPage(value)
        setPage(value)
        axios.get(`https://fast-commerce-backend.onrender.com/products/page?index=${value}`).then((res)=>{
            setPageProduct(res.data)
            })
    } 

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
                }} count={pageCount} onChange={handlePaginationChange}/>
            </Box>
        </Box>
    );
};

export default AllProductGrid;