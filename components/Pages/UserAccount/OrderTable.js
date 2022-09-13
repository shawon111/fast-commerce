import React from 'react';
import { Box, Typography } from '@mui/material';

const OrderTable = () => {

    return (
        <Box sx={{
            padding: '15px',
            borderBottom: '1px solid #f0f2f6',
            borderLeft: '1px solid #f0f2f6',
            borderRight: '1px solid #f0f2f6',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            alignItems: 'center',
            width: 'fit-content'
        }}>
            <Typography
                sx={{
                    color: '#12A05C',
                    fontWeight: '500',
                    fontSize: { lg: '15px', sm: '13px', xs: '11px' },
                    width: '140px'
                }}
                variant='h5'>
                a5676324
            </Typography>
            <Typography
                sx={{
                    color: '#12A05C',
                    fontWeight: '500',
                    fontSize: { lg: '15px', sm: '13px', xs: '11px' },
                    width: '140px'
                }}
                variant='h5'>
                5
            </Typography>
            <Typography
                sx={{
                    color: '#12A05C',
                    fontWeight: '500',
                    fontSize: { lg: '15px', sm: '13px', xs: '11px' },
                    width: '140px'
                }}
                variant='h5'>
                Paid
            </Typography>
            <Typography
                sx={{
                    color: '#12A05C',
                    fontWeight: '500',
                    fontSize: { lg: '15px', sm: '13px', xs: '11px' },
                    width: '140px'
                }}
                variant='h5'>
                Processing
            </Typography>
            <Typography
                sx={{
                    color: '#12A05C',
                    fontWeight: '500',
                    fontSize: { lg: '15px', sm: '13px', xs: '11px' },
                    width: '140px'
                }}
                variant='h5'>
                $300
            </Typography>
            <Typography
                sx={{
                    color: '#12A05C',
                    fontWeight: '500',
                    fontSize: { lg: '15px', sm: '13px', xs: '11px' },
                    width: '140px',
                    border: '2px solid #12A05C',
                    padding: '10px 5px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all .3s',
                    borderRadius: '4px',
                    "&:hover": {
                        backgroundColor: '#12a05c',
                        color: '#fff'
                    }
                }}
                variant='h5'>
                Details
            </Typography>
        </Box>
    );
};

export default OrderTable;