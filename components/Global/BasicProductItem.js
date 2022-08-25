import { Box, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import {RiHeartAddLine, RiAlignLeft, RiShoppingCart2Line} from 'react-icons/ri';
import {HiSearch} from 'react-icons/hi';
import Link from 'next/link';

const BasicProductItem = ({ product }) => {
    const { name, price, rating_star, image } = product;
    return (
        <Box
        className='product_card_container'
        sx={{
            padding: '0px 0px',
            borderTop: '1px solid #f0f2f5',
            borderRight: '1px solid #f0f2f5',
            borderBottom: '1px solid #f0f2f5'
        }}>
            <Box sx={{
                textAlign: 'center',
                padding: '30px 30px 0px 30px',
                position: 'relative'
            }}>
                <Box>
                    <Image
                        src={image}
                        alt="product image"
                        width={150}
                        height={150}
                    />
                </Box>
                <Box className='product_card_overlay'>
                    <Stack spacing={1}>
                        <Box className="product_item_hover_element" sx={{
                            width: '30px',
                            height: '30px',
                            background: '#f0f2f5',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <RiHeartAddLine style={{
                                fontSize: '16px',
                                color: '#103178',
                                fontWeight: '700'
                            }} />
                        </Box>
                        <Box className="product_item_hover_element" sx={{
                            width: '30px',
                            height: '30px',
                            background: '#f0f2f5',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <RiAlignLeft style={{
                                fontSize: '16px',
                                color: '#103178',
                                fontWeight: '700'
                            }} />
                        </Box>
                        <Box className="product_item_hover_element" sx={{
                            width: '30px',
                            height: '30px',
                            background: '#f0f2f5',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <HiSearch style={{
                                fontSize: '16px',
                                color: '#103178',
                                fontWeight: '700'
                            }} />
                        </Box>
                        <Box className="product_item_hover_element" sx={{
                            width: '30px',
                            height: '30px',
                            background: '#f0f2f5',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <RiShoppingCart2Line style={{
                                fontSize: '16px',
                                color: '#103178',
                                fontWeight: '700'
                            }} />
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{
                marginTop: '15px',
                padding: '0px 30px 30px 30px'
            }}>
                <Link href="/">
                <Typography className='product_cart_title' sx={{
                    color: '#103178',
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '15px',
                    cursor: 'pointer'
                }} variant='h5'>
                    {name}
                </Typography>
                </Link>
                <Typography sx={{
                    color: '#103178',
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '5px'
                }} variant='h4'>
                    ${price}
                </Typography>
                <Rating name="read-only" value={parseFloat(rating_star)} size="small" readOnly />
            </Box>
        </Box>
    );
};

export default BasicProductItem;