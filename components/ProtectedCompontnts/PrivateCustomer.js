import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PrivateCustomer = ({ children }) => {
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.isloggedIn);

    // 
    useEffect(() => {
            if (isLoggedIn === false) {
                router.push('/login')
                console.log("im here")
            }
    }, [])


    return (
        <Box>
            {
                isLoggedIn && children
            }
        </Box>
    );
};

export default PrivateCustomer;