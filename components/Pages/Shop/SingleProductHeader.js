import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import productImage from '../../../public/images/productDemoImage.png';
import moreImage1 from '../../../public/images/demoProduct2.webp';
import { BsCheckLg } from 'react-icons/bs';

const SingleProductHeader = () => {
    const [featuredImage, setFeaturedImage] = useState(productImage);
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item md={7} xs={12}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Image
                                src={featuredImage}
                                alt="product-image"
                                width={400}
                                height={400}
                            />
                        </Box>
                        <Box marginTop="30px">
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                        <Box sx={{
                                            border: '1px solid #103178',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '10px'
                                        }}>
                                            <Image
                                                src={productImage}
                                                alt="product-image"
                                                width={100}
                                                height={100}
                                                onClick={() => setFeaturedImage(productImage)}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box
                                            sx={{
                                                border: '1px solid #103178',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '10px'
                                            }}
                                        >
                                            <Image
                                                src={moreImage1}
                                                alt="product-image"
                                                width={100}
                                                height={100}
                                                onClick={() => setFeaturedImage(moreImage1)}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Box>
                        <Button style={{
                            backgroundColor: '#12A05C',
                            color: '#fff',
                            padding: '4px 20px',
                            lineHeight: '1',
                            borderRadius: '18px',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            fontWeight: '500',
                            display: 'inline-block',
                            boxShadow: 'none',
                            marginBottom: '20px'
                        }} variant='contained'>ONLY 3 LEFT IN STOCK</Button>
                        <Box sx={{
                            paddingBottom: '25px',
                            borderBottom: '1px solid #f0f2f5'
                        }}>
                            <Typography
                                sx={{
                                    color: '#5b6c8f',
                                    fontSize: '14',
                                    fontWeight: '500',
                                    textTransform: 'capitalize',
                                    marginBottom: '4px',
                                    display: 'inline-block'
                                }}
                                variant="p">
                                No brand
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#103178',
                                    fontSize: { lg: '30px', sm: '28px', xs: '25px' },
                                    fontWeight: '600',
                                    textTransform: 'capitalize',
                                    marginBottom: '7px'
                                }}
                                variant="h4">
                                Lorem ipsum dolor
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Rating name="read-only" value={4} size="small" readOnly />
                                <span style={{
                                    color: '#5b6c8f',
                                    fontSize: '13px',
                                    display: 'inline-flex',
                                    marginLeft: '10px',
                                    fontWeight: '500'
                                }}>( 5 review )</span>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: '10px',
                            paddingBottom: '25px',
                            borderBottom: '1px solid #f0f2f5'
                        }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{
                                        minWidth: 'fit-content',
                                        marginRight: '12px'
                                    }}>
                                        <BsCheckLg style={{
                                            fontSize: '14px',
                                            color: '#00a198'
                                        }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{ fontSize: 13, fontWeight: '600', color: '#103178' }}
                                        primary="Premium quality" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{
                                        minWidth: 'fit-content',
                                        marginRight: '12px'
                                    }}>
                                        <BsCheckLg style={{
                                            fontSize: '14px',
                                            color: '#00a198'
                                        }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{ fontSize: 13, fontWeight: '600', color: '#103178' }}
                                        primary="Money back guarranty" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{
                                        minWidth: 'fit-content',
                                        marginRight: '12px'
                                    }}>
                                        <BsCheckLg style={{
                                            fontSize: '14px',
                                            color: '#00a198'
                                        }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{ fontSize: 13, fontWeight: '600', color: '#103178' }}
                                        primary="Affordable price" />
                                </ListItem>
                            </List>
                        </Box>
                        <Box sx={{
                            paddingBottom: '25px',
                            borderBottom: '1px solid #f0f2f5',
                            marginTop: '25px'
                        }}>
                            <Box>
                                <Typography
                                    sx={{
                                        color: '#103178',
                                        fontSize: { lg: '30px', sm: '28px', xs: '25px' },
                                        fontWeight: '600',
                                        textTransform: 'capitalize',
                                        marginBottom: '7px'
                                    }}
                                    variant="h4">
                                    $60.38
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleProductHeader;