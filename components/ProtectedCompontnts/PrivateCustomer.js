import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ResponsiveContainer from '../Global/ResponsiveContainer';
import SectionTitle from '../Global/SectionTitle';

const PrivateCustomer = ({ children }) => {
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.isloggedIn);

    return (
        <Box>
            {
                isLoggedIn ? children : <Box sx={{
                    padding: '60px 0px 0px 0px'
                }}>
                    <ResponsiveContainer>
                        <Typography sx={{
                            fontSize: { lg: '26px', sm: '22px', xs: '18px' },
                            color: '#103178',
                            fontWeight: '600',
                            textAlign: 'center',
                            marginBottom: '30px'
                        }} >Please Login To See This Page</Typography>
                        <Link href="/login"><Button className='brandBtn loginBtn' sx={{
                            textTransform: 'capitalize',
                            fontSize: {lg: '18px', sm: '16px', xs: '14px'},
                            display: 'block',
                            margin: 'auto',
                        }}>Login</Button></Link>
                    </ResponsiveContainer>
                </Box>
            }

        </Box>
    );
};

export default PrivateCustomer;