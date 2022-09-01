import { Box, Grid, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import paymentOptionsImg from '../../../public/images/payment-options.png';
import { TbShieldCheck } from 'react-icons/tb';
import BasicProductItem from '../../Global/BasicProductItem';
import demoProductImage from '../../../public/images/productDemoImage.png';

const SingleProductSidebar = () => {
    const relatedProducts = [
        {
            name: "Lorem imsum dolor",
            price: "30",
            rating_star: "5",
            image: demoProductImage
        },
        {
            name: "Lorem imsum dolor",
            price: "50",
            rating_star: "5",
            image: demoProductImage
        },
    ]

    return (
        <Box>
            <Box sx={{
                backgroundColor: '#F0F2F5',
                display: 'flex',
                justifyContent: 'center',
                padding: '30px 40px',
                borderRadius: '4px'
            }}>
                <Image
                    src={paymentOptionsImg}
                    alt="payment-options"
                    width={140}
                    height={110}
                />
            </Box>
            <Box>
                <Box sx={{
                    marginTop: '10px',
                    padding: '10px',
                    backgroundImage: 'url(/images/sheild-bg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: { lg: '200px', sm: '120px', xs: '90px' },
                    backgroundPositionX: '50%',
                    backgroundPositionY: '90%',
                    backgroundColor: '#F6F7E5',
                    borderRadius: '6px',
                    height: '300px'
                }}>
                    <Grid container>
                        <Grid item lg={12}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    marginRight: '10px'
                                }}>
                                    <TbShieldCheck style={{
                                        color: '#12a05c',
                                        fontSize: '40px'
                                    }} />
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{
                                        color: '#12a05c',
                                        fontSize: '16px',
                                        lineHeight: '1.4',
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: '10px'
                                    }}>
                                        <strong>100% Secure delivery</strong> without contacting the courier
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px'
                        }} item lg={12}>
                            <Button style={{
                                backgroundColor: '#12A05C',
                                color: '#fff',
                                padding: '10px 30px',
                                lineHeight: '1',
                                borderRadius: '18px',
                                textTransform: 'capitalize',
                                fontSize: '16px',
                                fontWeight: '500',
                                display: 'inline-block',
                            }} variant='contained'>More</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
            <Box sx={{
                marginTop: '40px'
            }}>
                <Typography sx={{
                    color: '#103178',
                    fontSize: { lg: '24px', sm: '21px', xs: '18px' },
                    fontWeight: '600',
                    marginBottom: '20px'
                }} variant='h4'>
                    Related products
                </Typography>
                <Box sx={{
                    marginTop: '10px'
                }}>
                    <Grid container>
                        {
                            relatedProducts.map((item, index) => <Grid sx={{
                                borderLeft: '1px solid #f0f2f5'
                            }} item lg={12} md={12} sm={12} xs={12} key={index}>
                            <BasicProductItem product={item} />
                        </Grid>)
                        }
                    </Grid>
                </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SingleProductSidebar;