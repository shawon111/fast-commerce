import { Box } from '@mui/material';
import React from 'react';
import CustomerAlsoBuy from './CustomerAlsoBuy';
import SingleProductDescription from './SingleProductDescription';
import SingleProductHeader from './SingleProductHeader';

const SingleProductBody = () => {
    return (
        <Box>
            <SingleProductHeader />
            <SingleProductDescription />
            <CustomerAlsoBuy />
        </Box>
    );
};

export default SingleProductBody;