import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import SectionTitle from '../../Global/SectionTitle';
import watchCategory from '../../../public/images/small-banner-bg-3.png';
import shoesCategory from '../../../public/images/shoes-category.png';
import bagsCategory from '../../../public/images/bag-category.png';
import menCategory from '../../../public/images/men-category.png';
import Link from 'next/link';
import Image from 'next/image';


const PopularCategories = () => {
    const popularCategories = [
        { name: "watch", link: '/category/watch', image: watchCategory },
        { name: "shoes", link: '/category/shoes', image: shoesCategory },
        { name: "bags", link: '/category/bags', image: bagsCategory },
        { name: "men", link: '/category/men', image: menCategory },
    ]
    return (
        <Box sx={{
            padding: { lg: '60px 0px', sm: '30px 0px', xs: '20px 0px' }
        }}>
            <ResponsiveContainer>
                <Box>
                    <Box sx={{
                        marginBottom: '30px'
                    }}>
                        <Typography sx={{
                            fontSize: { lg: '26px', sm: '22px', xs: '20px' },
                            lineHeight: '1.3',
                            color: '#103178',
                            fontWeight: '600',
                            textAlign: 'center'
                        }} variant='h4'>
                            Check out the most popular categories
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={4}>
                            {
                                popularCategories.map((category, index) => <Grid item md={3} sm={6} xs={12} key={index}>
                                    <Box sx={{
                                        padding: "30px",
                                        backgroundColor: '#F0F2F5',
                                        borderRadius: '4px'
                                    }}>
                                        <Box sx={{
                                            marginBottom: '30px'
                                        }}>
                                            <Link href={category.link}>
                                                <Typography sx={{
                                                    cursor: 'pointer',
                                                    fontSize: { lg: '26px', sm: '22px', xs: '20px' },
                                                    lineHeight: '1.3',
                                                    color: '#103178',
                                                    textTransform: 'capitalize',
                                                    fontWeight: '500'
                                                }} variant='p'>
                                                    {category.name}
                                                </Typography>
                                            </Link>
                                            <Box sx={{
                                                marginTop: '10px'
                                            }}>
                                                <Link href={category.link}>
                                                    <span style={{
                                                        backgroundColor: '#12A05C',
                                                        color: '#fff',
                                                        padding: '5px 14px',
                                                        lineHeight: '1',
                                                        borderRadius: '18px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '12px',
                                                        fontWeight: '500',
                                                        display: 'inline-block',
                                                        marginBottom: '5px',
                                                        cursor: 'pointer'
                                                    }} variant='contained'>Discover More</span>
                                                </Link>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Image
                                                src={category.image}
                                                alt="category-image"
                                                width={300}
                                                height={300}
                                                loading="lazy"
                                            />
                                        </Box>
                                    </Box>
                                </Grid>)
                            }
                        </Grid>

                    </Box>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default PopularCategories;