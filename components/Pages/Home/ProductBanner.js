import { Box, Grid } from '@mui/material';
import React from 'react';
import BannerSmall from '../../Global/BannerSmall';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import BgImage1 from '../../../public/images/small-banner-bg-1.png';
import BgImage2 from '../../../public/images/small-banner-bg-2.webp';
import BgImage3 from '../../../public/images/small-banner-bg-3.png';

const ProductBanner = () => {
    const ProductBannerData = [
        {
            title: "Casual cool ZS-03 keds",
            salePercentage: "20",
            badge: "",
            bgImage: BgImage1,
            link: "/shop",
            bgColor: '#F1F2F6'
        },
        {
            title: "BWear plain t-shirt",
            salePercentage: "10",
            badge: "",
            bgImage: BgImage2,
            link: "/shop",
            bgColor: '#DAECFA'
        },
        {
            title: "Kasio KD-5 digital watch",
            salePercentage: "",
            badge: "Hot!",
            bgImage: BgImage3,
            link: "/shop",
            bgColor: '#F1F2F6'
        },
    ]
    return (
        <Box sx={{
            padding: {lg: '30px 0px', sm: '25px 0px', xs: '20px 0px'}
        }}>
            <ResponsiveContainer>
                <Grid container spacing={2}>
                    {
                        ProductBannerData.map((item,index)=> <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                            <BannerSmall bannerData={item} />
                        </Grid>)
                    }
                </Grid>
            </ResponsiveContainer>
        </Box>
    );
};

export default ProductBanner;