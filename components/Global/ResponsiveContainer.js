import { Box } from '@mui/material';
import React from 'react';

const ResponsiveContainer = ({children}) => {
    return (
        <Box sx={{
            width: {xl: '1290px', lg: '90%', md: '95%', sm: '98%', xs: '100%'},
            mx: 'auto',
        }}>
            {
                children
            }
        </Box>
    );
};

export default ResponsiveContainer;