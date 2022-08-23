import { Box } from '@mui/material';
import React from 'react';

const ResponsiveContainer = ({children}) => {
    return (
        <Box sx={{
            width: {xl: '1290px', lg: '90%', md: '95%', sm: '95%', xs: '100%'},
            mx: 'auto',
            padding: {sm: '0px', xs: '0px 15px'}
        }}>
            {
                children
            }
        </Box>
    );
};

export default ResponsiveContainer;