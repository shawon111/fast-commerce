import { Box, Rating, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { RiHeartAddLine, RiAlignLeft, RiShoppingCart2Line } from 'react-icons/ri';
import { HiSearch } from 'react-icons/hi';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { AddToCartSingle } from '../../redux/actions';

const BasicProductItem = ({ product }) => {
    const { name, price, _id, featuredImageUrl } = product;

    const dispatch = useDispatch();

    const payload_info = {id: _id, qty: 1}
    return (
        <Box
            className='product_card_container'
            sx={{
                padding: '0px 0px',
                borderTop: '1px solid #f0f2f5',
                borderRight: '1px solid #f0f2f5',
                borderBottom: '1px solid #f0f2f5',
                height: {lg: '350px', sm: '320px', xs: '300px'}
            }}>
            <Box sx={{
                textAlign: 'center',
                padding: {lg: '30px 30px 0px 30px', sm: '20px 20px 0px 20px', xs: '10px 10px 0px 10px'},
                position: 'relative'
            }}>
                <Box>
                    <Link href={`/shop/${_id}`}>
                        <Image
                            src={`https://fast-commerce-backend.onrender.com/${featuredImageUrl}`}
                            alt="product image"
                            width={150}
                            height={150}
                            priority
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                    </Link>
                </Box>
                <Box sx={{
                    display: { sm: 'block', xs: 'none' }
                }} className='product_card_overlay'>
                    <Stack spacing={1}>
                        <Tooltip title="Wishlist" placement="bottom-start" arrow>
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
                        </Tooltip>
                        <Tooltip title="Add to compare" placement="bottom-start" arrow>
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
                        </Tooltip>
                        <Tooltip title="Quick view" placement="bottom-start" arrow>

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
                        </Tooltip>
                        <Tooltip title="Add to cart" placement="bottom-start" arrow>

                            <Box className="product_item_hover_element" sx={{
                                width: '30px',
                                height: '30px',
                                background: '#f0f2f5',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={()=> dispatch(AddToCartSingle(payload_info))}
                            >
                                <RiShoppingCart2Line style={{
                                    fontSize: '16px',
                                    color: '#103178',
                                    fontWeight: '700'
                                }} />
                            </Box>
                        </Tooltip>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{
                marginTop: '15px',
                padding: {lg: '0px 30px 30px 30px', sm: '0px 20px 20px 20px', xs: '0px 15px 15px 15px'}
            }}>
                <Link href={`/shop/${_id}`}>
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
                <Rating name="read-only" value={5} size="small" readOnly />
            </Box>
        </Box>
    );
};

export default BasicProductItem;