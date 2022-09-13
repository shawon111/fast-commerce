import { Box, Typography } from '@mui/material';
import React from 'react';
import OrderTable from './OrderTable';

const MyOrders = () => {
    return (
        <Box sx={{
            border: '1px solid #f0f2f6',
            padding: '30px 20px',
            margin: '15px 0px'
        }}>
            <Typography sx={{
                color: '#103178',
                fontWeight: '500',
                lineHeight: '1.3',
                fontSize: { lg: '28px', sm: '22px', xs: '18px' },
                marginBottom: '30px'
            }} variant='h3'>
                My Orders
            </Typography>
            <Box sx={{
                width: '100%'
            }}>
                <Box sx={{
                    width: { lg: '80%', md: '95%', xs: '100%' },
                    overflowX: {md: 'hidden', xs: 'scroll'}
                }}>
                    <Box sx={{
                        padding: '15px',
                        border: '1px solid #f0f2f6',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        width: 'fit-content'
                    }}>
                        <Typography
                            sx={{
                                color: '#103178',
                                fontWeight: '500',
                                fontSize: { lg: '20px', sm: '18px', xs: '15px' },
                                width: '140px'
                            }}
                            variant='h5'>
                            Order Id
                        </Typography>
                        <Typography
                            sx={{
                                color: '#103178',
                                fontWeight: '500',
                                fontSize: { lg: '20px', sm: '18px', xs: '15px' },
                                width: '140px'
                            }}
                            variant='h5'>
                            Quantity
                        </Typography>
                        <Typography
                            sx={{
                                color: '#103178',
                                fontWeight: '500',
                                fontSize: { lg: '20px', sm: '18px', xs: '15px' },
                                width: '140px'
                            }}
                            variant='h5'>
                            Payment Status
                        </Typography>
                        <Typography
                            sx={{
                                color: '#103178',
                                fontWeight: '500',
                                fontSize: { lg: '20px', sm: '18px', xs: '15px' },
                                width: '140px'
                            }}
                            variant='h5'>
                            Order Status
                        </Typography>
                        <Typography
                            sx={{
                                color: '#103178',
                                fontWeight: '500',
                                fontSize: { lg: '20px', sm: '18px', xs: '15px' },
                                width: '140px'
                            }}
                            variant='h5'>
                            order Total
                        </Typography>
                        <Typography
                            sx={{
                                color: '#103178',
                                fontWeight: '500',
                                fontSize: { lg: '20px', sm: '18px', xs: '15px' },
                                width: '140px'
                            }}
                            variant='h5'>
                            Action
                        </Typography>
                    </Box>
                    <OrderTable />
                </Box>
            </Box>
        </Box>
    );
};

export default MyOrders;