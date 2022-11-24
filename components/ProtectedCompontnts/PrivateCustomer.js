import { Box } from '@mui/material';
import React from 'react';

const PrivateCustomer = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export default PrivateCustomer;