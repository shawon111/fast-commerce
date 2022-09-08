import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';
import { AiFillWarning } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import productImage from '../public/images/productDemoImage.png';
import { BiMinus, BiPlus } from 'react-icons/bi';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import axios from "axios";

const Cart = () => {
    const metaInfo = { title: "Cart | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };

    const cart_items = useSelector((state) => state.addItemToCart);

    const [quantity, setQuantity] = useState(1);
    const handleSetQuantity = (method) => {
        if (method === "minus") {
            if (quantity === 1) {
                setQuantity(1)
            }
            else {
                setQuantity(quantity - 1)
            }
        }
        else if (method === "plus") {
            setQuantity(quantity + 1)
        }
    }

    useEffect(() => {
        let cart_items_id = [];
        cart_items.map(item => cart_items_id.push(item.id))
        if (cart_items_id.length > 0) {
            axios.get(`https://fast-commerce-backend.onrender.com/cart-items?products=${cart_items_id}`).then((res) => {
                console.log("cart response", res.data)
            })
        }

    }, [cart_items])


    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Box sx={{
                        paddingTop: { lg: '50px', sm: '30px', xs: '20px' }
                    }}>
                        <Typography sx={{
                            color: '#103178',
                            fontWeight: '600',
                            lineHeight: '1.3',
                            fontSize: { lg: '40px', sm: '30px', xs: '25px' },
                            marginBottom: '30px'
                        }} variant='h3'>
                            Shopping Cart
                        </Typography>
                        <Box sx={{
                            padding: '40px 0px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Box>
                                <AiFillWarning style={{
                                    color: '#FAAD14',
                                    fontSize: '70px',
                                    display: 'block',
                                    margin: 'auto',
                                    marginBottom: '15px'
                                }} />
                                <Typography sx={{
                                    color: '#000000d9',
                                    fontWeight: '500',
                                    lineHeight: '1.3',
                                    fontSize: { lg: '20px', sm: '18px', xs: '16px' },
                                }} variant='h3'>
                                    No product in cart.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                        }}>
                            <Grid container spacing={4}>
                                <Grid item md={8} xs={12}>
                                    <Box>
                                        <Grid container spacing={0}>
                                            <Grid item md={6} sx={{
                                                paddingRight: '45px'
                                            }}>
                                                <Typography variant='h6' sx={{
                                                    color: '#103178',
                                                    fontWeight: '600',
                                                    lineHeight: '1.3',
                                                    fontSize: { lg: '16px', xs: '14px' },
                                                }}>
                                                    Product
                                                </Typography>
                                            </Grid>
                                            <Grid item md={5} sx={{
                                                paddingRight: '45px'
                                            }}>
                                                <Typography variant='h6' sx={{
                                                    color: '#103178',
                                                    fontWeight: '600',
                                                    lineHeight: '1.3',
                                                    fontSize: { lg: '16px', xs: '14px' },
                                                }}>
                                                    Quantity
                                                </Typography>
                                            </Grid>
                                            <Grid item md={1}>
                                                <Typography variant='h6' sx={{
                                                    color: '#103178',
                                                    fontWeight: '600',
                                                    lineHeight: '1.3',
                                                    fontSize: { lg: '16px', xs: '14px' },
                                                }}>
                                                    Total
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{
                                            padding: '8px 8px',
                                            border: '1px solid #f0f2f5',
                                            marginTop: '15px',
                                            alignItems: 'center'
                                        }} container spacing={0}>
                                            <Grid item md={6} sx={{
                                                paddingRight: '45px'
                                            }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                    gap: '15px'
                                                }}>
                                                    <Box>
                                                        <button style={{
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            cursor: 'pointer'
                                                        }}>
                                                            <BsX style={{
                                                                color: '#103178',
                                                                fontSize: '22px'
                                                            }} />
                                                        </button>
                                                    </Box>
                                                    <Box>
                                                        <Image
                                                            src={productImage}
                                                            alt="cart-product-image"
                                                            width={90}
                                                            height={90}
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='h6' sx={{
                                                            color: '#103178',
                                                            fontWeight: '500',
                                                            lineHeight: '1.3',
                                                            fontSize: { lg: '15px', xs: '14px' },
                                                        }}>
                                                            Demo product Demo product Demo
                                                        </Typography>
                                                        <Typography variant='h6' sx={{
                                                            color: '#103178',
                                                            fontWeight: '600',
                                                            lineHeight: '1.3',
                                                            fontSize: { lg: '16px', xs: '14px' },
                                                            marginTop: '10px'
                                                        }}>
                                                            $80
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={5} sx={{
                                                paddingRight: '45px'
                                            }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    padding: '12px 15px',
                                                    backgroundColor: '#F0F2F5',
                                                    alignItems: 'center',
                                                    borderRadius: '40px',
                                                }}>
                                                    <BiMinus style={{
                                                        color: '#103178',
                                                        cursor: 'pointer',
                                                        width: '40px',
                                                        display: 'inline-block'
                                                    }} onClick={() => handleSetQuantity("minus")} />
                                                    <Typography sx={{
                                                        color: '#103178',
                                                        fontWeight: '600',
                                                        width: { sm: '50px', xs: '30px' },
                                                        display: 'inline-block',
                                                        textAlign: 'center'
                                                    }} variant='p'>{quantity}</Typography>
                                                    <BiPlus style={{
                                                        color: '#103178',
                                                        cursor: 'pointer',
                                                        width: '40px',
                                                        display: 'inline-block'
                                                    }} onClick={() => handleSetQuantity("plus")} />
                                                </Box>
                                            </Grid>
                                            <Grid item md={1}>
                                                <Typography variant='h6' sx={{
                                                    color: '#103178',
                                                    fontWeight: '700',
                                                    lineHeight: '1.3',
                                                    fontSize: { lg: '16px', xs: '14px' },
                                                    marginTop: '10px'
                                                }}>
                                                    $80
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2} sx={{
                                            marginTop: '40px'
                                        }}>
                                            <Grid item lg={6} md={4} xs={12}>
                                                <Box>
                                                    <Button sx={{
                                                        textTransform: 'capitalize',
                                                        fontSize: { lg: '16px', xs: '14px' },
                                                        color: '#fff',
                                                        backgroundColor: '#FD8D27',
                                                        display: 'inline-block',
                                                        boxShadow: 'none',
                                                        borderRadius: '30px',
                                                        transition: 'all',
                                                        padding: '8px 30px',
                                                        "&:hover": {
                                                            backgroundColor: '#103178',
                                                            boxShadow: 'none'
                                                        }
                                                    }} variant="contained">back to shop</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={6} md={8} xs={12}>
                                                <input style={{
                                                    border: 'none',
                                                    outline: 'none',
                                                    height: '35px',
                                                    background: '#F0F2F5',
                                                    padding: '23px 20px',
                                                    fontSize: '15px',
                                                    fontWeight: '600',
                                                    borderRadius: '30px',
                                                    width: '65%',
                                                    marginRight: '15px'
                                                }}
                                                    type="text"
                                                    required
                                                    className='cart_input'
                                                    placeholder='Enter your coupon'
                                                />
                                                <Button sx={{
                                                    textTransform: 'capitalize',
                                                    fontSize: { lg: '16px', xs: '14px' },
                                                    color: '#fff',
                                                    backgroundColor: '#103178',
                                                    display: 'inline-block',
                                                    boxShadow: 'none',
                                                    borderRadius: '30px',
                                                    transition: 'all',
                                                    padding: '8px 30px',
                                                    "&:hover": {
                                                        backgroundColor: '#103178',
                                                        boxShadow: 'none'
                                                    }
                                                }} variant="contained">apply</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Box>
                                        <Box>
                                            <Typography variant='h6' sx={{
                                                color: '#103178',
                                                fontWeight: '600',
                                                lineHeight: '1.3',
                                                fontSize: { lg: '16px', xs: '14px' },
                                            }}>
                                                Cart Total
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            padding: '20px',
                                            border: '1px solid #f0f2f6',
                                            marginTop: '15px'
                                        }}>
                                            <Stack>
                                                <Box sx={{
                                                    padding: '15px 0px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    borderBottom: '1px solid #f0f2f6'
                                                }}>
                                                    <Typography variant='h6' sx={{
                                                        color: '#103178',
                                                        fontWeight: '600',
                                                        lineHeight: '1.3',
                                                        fontSize: { lg: '15px', xs: '13px' },
                                                    }}>
                                                        Sub Total
                                                    </Typography>
                                                    <Typography variant='h6' sx={{
                                                        color: '#103178',
                                                        fontWeight: '700',
                                                        lineHeight: '1.3',
                                                        fontSize: { lg: '15px', xs: '13px' },
                                                    }}>
                                                        $80
                                                    </Typography>
                                                </Box>
                                                <Box sx={{
                                                    padding: '15px 0px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    borderBottom: '1px solid #f0f2f6'
                                                }}>
                                                    <Typography variant='h6' sx={{
                                                        color: '#103178',
                                                        fontWeight: '600',
                                                        lineHeight: '1.3',
                                                        fontSize: { lg: '15px', xs: '13px' },
                                                    }}>
                                                        Tax
                                                    </Typography>
                                                    <Typography variant='h6' sx={{
                                                        color: '#103178',
                                                        fontWeight: '700',
                                                        lineHeight: '1.3',
                                                        fontSize: { lg: '15px', xs: '13px' },
                                                    }}>
                                                        Not Applicable
                                                    </Typography>
                                                </Box>
                                                <Box sx={{
                                                    padding: '15px 0px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    borderBottom: '1px solid #f0f2f6'
                                                }}>
                                                    <Typography variant='h6' sx={{
                                                        color: '#103178',
                                                        fontWeight: '600',
                                                        lineHeight: '1.3',
                                                        fontSize: { lg: '15px', xs: '13px' },
                                                    }}>
                                                        Total
                                                    </Typography>
                                                    <Typography variant='h6' sx={{
                                                        color: '#103178',
                                                        fontWeight: '700',
                                                        lineHeight: '1.3',
                                                        fontSize: { lg: '15px', xs: '13px' },
                                                    }}>
                                                        $80
                                                    </Typography>
                                                </Box>
                                                <Box sx={{
                                                    padding: '15px 0px 0px 0px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                    <Button sx={{
                                                        textTransform: 'capitalize',
                                                        fontSize: { lg: '16px', xs: '14px' },
                                                        color: '#fff',
                                                        backgroundColor: '#FD8D27',
                                                        display: 'inline-block',
                                                        width: '100%',
                                                        boxShadow: 'none',
                                                        borderRadius: '30px',
                                                        transition: 'all',
                                                        padding: '8px 0px',
                                                        "&:hover": {
                                                            backgroundColor: '#103178',
                                                            boxShadow: 'none'
                                                        }
                                                    }} variant="contained">Proceed to checkout</Button>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Cart;