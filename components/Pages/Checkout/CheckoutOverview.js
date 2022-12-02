import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CheckoutOverview = () => {
    const [paymentMethod, setPaymentMethod] = useState("")
    const [paymentDisable, setPaymentDisable] = useState(true)
    useEffect(()=>{
        if(paymentMethod.length>0){
            setPaymentDisable(false)
        }else{
            setPaymentDisable(true)
        }
    }, [paymentMethod])

    return (
        <Box sx={{
            border: '3px solid #FD8D27',
            padding: '1.5rem',
            borderRadius: '4px'
        }}>
            <Box>
                <Box>
                    <Typography sx={{
                        color: '#103178',
                        fontWeight: '600',
                        lineHeight: '1.3',
                        fontSize: { lg: '30px', sm: '27px', xs: '24px' },
                        marginBottom: '10px'
                    }} variant='h3'>
                        Your Order
                    </Typography>
                </Box>
                <Box sx={{
                    padding: '20px',
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
                                Total Products
                            </Typography>
                            <Typography variant='h6' sx={{
                                color: '#103178',
                                fontWeight: '700',
                                lineHeight: '1.3',
                                fontSize: { lg: '15px', xs: '13px' },
                            }}>
                                4
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
                                Subtotal
                            </Typography>
                            <Typography variant='h6' sx={{
                                color: '#103178',
                                fontWeight: '700',
                                lineHeight: '1.3',
                                fontSize: { lg: '15px', xs: '13px' },
                            }}>
                                $500
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
                                Shipping
                            </Typography>
                            <Typography variant='h6' sx={{
                                color: '#103178',
                                fontWeight: '700',
                                lineHeight: '1.3',
                                fontSize: { lg: '15px', xs: '13px' },
                            }}>
                                Free Shipping
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
                                $600
                            </Typography>
                        </Box>
                        <Box>
                            <FormControl sx={{
                                paddingTop: '20px'
                            }}>
                                <FormLabel
                                sx={{
                                    color: '#103178',
                                    fontWeight: '600'
                                }}
                                    id="demo-radio-buttons-group-label">Payment Methods</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <FormControlLabel sx={{
                                        color: '#103178',
                                    }} value="cash" control={<Radio />} label="Cash On Delivery" />
                                    <FormControlLabel sx={{
                                        color: '#103178',
                                    }} value="stripe" control={<Radio />} label="Stripe Payment" />
                                </RadioGroup>
                            </FormControl>
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
                                width: 'fit-content',
                                boxShadow: 'none',
                                borderRadius: '30px',
                                transition: 'all',
                                padding: '8px 30px',
                                "&:hover": {
                                    backgroundColor: '#103178',
                                    boxShadow: 'none'
                                }
                            }} variant="contained" disabled={paymentDisable} id="order-btn">Place Order</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default CheckoutOverview;