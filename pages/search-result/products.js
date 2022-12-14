import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BasicProductItem from '../../components/Global/BasicProductItem';
import Layout from '../../components/Global/Layout';
import ResponsiveContainer from '../../components/Global/ResponsiveContainer';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

const Products = () => {
    const metaInfo = { title: "search result - FastComerce", keywords: "fast commerce, ecommerce", metaDesc: "Fast commerce is the best shopping website online" };

    const [searchResult, setSearchResult] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);

    const searchTextValue = useSelector((state) => state.SearchTextState)
    const searchResultData = useSelector((state) => state.getSearchResult);
    console.log("searchresultpage_101", searchTextValue)

    useEffect(() => {
        setSearchResult(searchResultData);
    }, [searchResultData])

    useEffect(() => {
        if (searchResultData.length < 1 || searchResultData[0].name === "No product found!") {
            setShowPreloader(true)
            axios.get(`https://fast-commerce-backend.onrender.com/all/search?text=${searchTextValue}`).then((res) => {
                if (res.data === "No documents found!") {
                    setSearchResult([{ name: "No product found!", _id: "/" }])
                    setShowPreloader(false)
                } else {
                    setSearchResult(res.data);
                    setShowPreloader(false)
                }
            })
        }
    }, [searchTextValue, searchResultData])

    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    {showPreloader === true ?
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: { lg: '50px', sm: '30px', xs: '20px' }
                        }}>
                            <Bars
                                height="100"
                                width="100"
                                color="#103178"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </Box> :
                        <Box>
                            {searchResult.length && searchResult[0].name === "No product found!" ?
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
                                        No product found!
                                    </Typography>
                                </Box> :
                                <Box>
                                    <Box>
                                        <Typography sx={{
                                            textAlign: 'start',
                                            fontSize: { lg: '40px', sm: '35px', xs: '30px' },
                                            color: '#103178',
                                            fontWeight: '700',
                                            marginTop: { lg: '40px', sm: '20px', xs: '20px' },
                                            marginBottom: { lg: '40px', sm: '35px', xs: '28px' }
                                        }} variant="h1">
                                            Search Result...
                                        </Typography>
                                        <Grid sx={{
                                            borderLeft: '1px solid #f0f2f5'
                                        }} container spacing={0}>
                                            {
                                                searchResult.length > 0 && searchResult.map((item, index) => <Grid item lg={3} md={3} sm={4} xs={6} key={index}>
                                                    <BasicProductItem product={item} />
                                                </Grid>)
                                            }
                                        </Grid>
                                    </Box>
                                </Box>
                            }
                        </Box>
                    }
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Products;