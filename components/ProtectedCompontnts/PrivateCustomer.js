import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PrivateCustomer = ({children}) => {
    const router = useRouter();
    const isLoggedIn = useSelector(state=> state.isloggedIn);
    if(isLoggedIn === false){
        router.push('/login')
    }

    return (
        <Box>
           {
            isLoggedIn && children
           }
        </Box>
    );
};

export default PrivateCustomer;