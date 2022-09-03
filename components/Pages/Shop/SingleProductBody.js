import { Box } from '@mui/material';
import React from 'react';
import CustomerAlsoBuy from './CustomerAlsoBuy';
import SingleProductDescription from './SingleProductDescription';
import SingleProductHeader from './SingleProductHeader';
import SingleProductSaleBanner from './SingleProductSaleBanner';

const SingleProductBody = () => {
    const sectionBannerData = {
        title: "Digital DSW-5X Smart Watch",
        price: "89.99",
        discount: "-40",
        link: "/",
        bgImage: "/images/bigbanner1.jpg",
        badgeBgColor: "#FFC800",
        badgeColor: "#fff",
        buttonColor: "#FFC800",
        textColor: "#fff",
        priceColor: '#FFC800',
        overlayColor: '#0000004d, #0000004d'
    }

    return (
        <Box>
            <SingleProductHeader />
            <SingleProductDescription />
            {/* <CustomerAlsoBuy /> */}
            <SingleProductSaleBanner data={sectionBannerData} />
        </Box>
    );
};

export default SingleProductBody;