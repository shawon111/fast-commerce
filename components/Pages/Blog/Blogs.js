import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import BlogCard from './BlogCard';
import demoBlogImage from '../../../public/images/bigbanner-4.jpg'

const Blogs = () => {
    const blogsData = [
        {
            title: "Stylish dresses for girls are available now!",
            categories: ["women", "fashion"],
            date: "August 12, 2022",
            author: "Paul",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: demoBlogImage,
        },
        {
            title: "Buy these smart amazing watches to keep in the trend.",
            categories: ["men", "watch"],
            date: "August 11, 2022",
            author: "Paul",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: demoBlogImage,
        },
        {
            title: "Brand new ladies bags are available for sale!",
            categories: ["women", "bag"],
            date: "August 10, 2022",
            author: "Paul",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: demoBlogImage,
        },
    ]

    return (
        <Box sx={{
            padding: { lg: '60px 0px 0px 0px', sm: '30px 0px 0px 0px', xs: '20px 0px 0px 0px' }
        }}>
            <Grid container spacing={6}>
                {
                    blogsData.map((item, index) => <Grid xs={12} item key={index}><BlogCard blogData={item} /></Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Blogs;