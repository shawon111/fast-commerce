import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const BlogCard = ({ blogData }) => {
    const { title, categories, date, author, description, image } = blogData;
    return (
        <Box>
            <Box sx={{
                marginBottom: {lg: '20px', sm: '16px', xs: '12px'}
            }} className='blog_card_img'>
                <Image
                    src={image}
                    alt="blog-image"
                    width={1070}
                    height={530}
                    style={{
                        borderRadius: '5px'
                    }}
                />
            </Box>
            <Box sx={{
                marginBottom: {lg: '20px', sm: '16px', xs: '12px'}
            }}>
                {
                    categories.map((item, index) => <Link key={index} href="/">
                        <Button sx={{
                            padding: '2px 15px',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            fontWeight: '500',
                            marginRight: "10px",
                            borderRadius: '20px',
                            boxShadow: 'none',
                            backgroundColor: '#103178',
                            color: '#fff',
                            "&:hover": {
                                backgroundColor: '#103178'
                            }
                        }} variant='contained'>{item}</Button>
                    </Link>)
                }
            </Box>
            <Box sx={{
                marginBottom: {lg: '15px', sm: '13px', xs: '12px'}
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontWeight: '600',
                    fontSize: { lg: '14px', xs: '12px' },
                    display: 'inline-block',
                    marginRight: '15px',

                }} variant='p'>
                    {date}
                </Typography>
                <Link href="/">
                    <Typography sx={{
                        color: '#5b6c8f',
                        fontWeight: '500',
                        fontSize: { lg: '14px', xs: '12px' },
                        display: 'inline-block',
                        cursor: 'pointer',
                        transition: 'all .3s',
                        "&:hover": {
                            color: '#FD8D27'
                        }
                    }} variant='p'>
                        {author}
                    </Typography>
                </Link>
            </Box>
            <Box sx={{
                marginBottom: {lg: '20px', sm: '16px', xs: '12px'}
            }}>
                <Link href="/">
                    <Typography variant='h2' sx={{
                        textAlign: 'start',
                        fontSize: { lg: '40px', sm: '35px', xs: '30px' },
                        color: '#103178',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all .3s',
                        "&:hover": {
                            color: '#FD8D27'
                        }
                    }}>
                        {title}
                    </Typography>
                </Link>
            </Box>
            <Box sx={{
                marginBottom: {lg: '20px', sm: '16px', xs: '12px'}
            }}>
                <Typography sx={{
                    color: '#5b6c8f',
                    fontWeight: '500',
                    fontSize: { lg: '16px', xs: '14px' },
                    display: 'inline-block',
                    cursor: 'pointer',
                }} variant='p'>
                    {description}...
                </Typography>
            </Box>
            <Box>
                <Button sx={{
                    padding: '2px 15px',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    fontWeight: '500',
                    marginRight: "10px",
                    borderRadius: '20px',
                    boxShadow: 'none',
                    transition: 'all .3s',
                    backgroundColor: 'transparent',
                    color: '#103178',
                    border: '1.5px solid #103178',
                    "&:hover": {
                        backgroundColor: 'transparent',
                        color: '#FD8D27',
                        border: '1.5px solid #FD8D27',
                        boxShadow: 'none'
                    }
                }} variant='contained'>Read More</Button>
            </Box>
        </Box>
    );
};

export default BlogCard;