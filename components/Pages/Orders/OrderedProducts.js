import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ProductImage from '../../../public/images/productDemoImage.png';
import { AiOutlineClose } from 'react-icons/ai';

const OrderedProducts = () => {
    return (
        <Box>
            <Box sx={{
                marginBottom: '30px',
                borderBottom: '1px solid #f0f2f6',
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontWeight: '500',
                    lineHeight: '1.3',
                    fontSize: { lg: '22px', sm: '18px', xs: '16px' },
                    marginBottom: '30px'
                }} variant='h3'>
                    Products
                </Typography>
                <Box sx={{
                    borderLeft: '1px solid #f0f2f6',
                    borderRight: '1px solid #f0f2f6',
                    borderTop: '1px solid #f0f2f6',
                    padding: '15px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: {md: '80px', sm: '60px', xs: '30px'}
                    }}>
                        <Box>
                            <Image
                                src={ProductImage}
                                width={80}
                                height={80}
                                alt="product"
                            />
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: '#103178',
                                fontWeight: '600',
                                lineHeight: '1.3',
                                fontSize: { lg: '18px', sm: '17px', xs: '15px' },
                            }} variant='h3'>
                                Plain red t-shirt for men
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: '#103178',
                                fontWeight: '600',
                                lineHeight: '1.3',
                                fontSize: { lg: '18px', sm: '17px', xs: '15px' },
                            }} variant='h3'>
                                $120
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <AiOutlineClose style={{
                                color: '#103178',
                                fontWeight: '600'
                            }} />
                            <Typography sx={{
                                color: '#103178',
                                fontWeight: '600',
                                lineHeight: '1.3',
                                fontSize: { lg: '18px', sm: '17px', xs: '15px' },
                            }} variant='h3'>
                                1
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default OrderedProducts;