import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import productImage from '../../../public/images/productDemoImage.png';
import moreImage1 from '../../../public/images/demoProduct2.webp';
import { BsCheckLg } from 'react-icons/bs';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

const SingleProductHeader = ({ product }) => {
    const { name, price, brand, additionalInfo, availableStock, category, desc, featuredImageUrl, features, galleryImagesUrls, metaDescription, metaTags, metaTitle, product_sizes, reviews, sku, stock, _id } = product;
    const [featuredImage, setFeaturedImage] = useState(featuredImageUrl);
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
                                src={`https://fast-commerce-backend.onrender.com/${featuredImage}`}
                                alt="product-image"
                                width={400}
                                height={400}
                                priority
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
                                            padding: '10px',
                                            cursor: 'pointer'
                                        }}>
                                            <Image
                                                src={`https://fast-commerce-backend.onrender.com/${featuredImageUrl}`}
                                                alt="product-image"
                                                width={100}
                                                height={100}
                                                priority
                                                onClick={() => setFeaturedImage(featuredImageUrl)}
                                            />
                                        </Box>
                                    </Grid>
                                        {
                                            galleryImagesUrls?.map((item, index) => <Grid item key={index} xs={2}><Box
                                                sx={{
                                                    border: '1px solid #103178',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    padding: '10px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <Image
                                                    src={`https://fast-commerce-backend.onrender.com/${item}`}
                                                    alt="product-image"
                                                    width={100}
                                                    height={100}
                                                    priority
                                                    onClick={() => setFeaturedImage(item)}
                                                />
                                            </Box></Grid>)
                                        }
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
                            padding: '6px 20px',
                            lineHeight: '1',
                            borderRadius: '18px',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            fontWeight: '500',
                            display: 'inline-block',
                            boxShadow: 'none',
                            marginBottom: '20px'
                        }} variant='contained'>ONLY {availableStock} LEFT IN STOCK</Button>
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
                                {brand}
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
                                {name}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Rating name="read-only" value={5} size="small" readOnly />
                                <span style={{
                                    color: '#5b6c8f',
                                    fontSize: '13px',
                                    display: 'inline-flex',
                                    marginLeft: '10px',
                                    fontWeight: '500'
                                }}>( 0 review )</span>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: '10px',
                            paddingBottom: '10px',
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
                            paddingBottom: '20px',
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
                                        marginBottom: '20px',
                                    }}
                                    variant="h4">
                                    ${price}
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginBottom: '15px'
                            }}>
                                <Typography sx={{
                                    color: '#103178',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    marginRight: '20px'
                                }} variant='p'>
                                    Sizes:
                                </Typography>
                                <Button sx={{
                                    padding: '2px 14px',
                                    textTransform: 'capitalize',
                                    fontSize: { sm: '14px', xs: '11px' },
                                    fontWeight: '600',
                                    marginRight: "6px",
                                    borderRadius: '20px',
                                    boxShadow: 'none',
                                    backgroundColor: '#fff',
                                    border: '1px solid #f0f2f5',
                                    color: '#103178',
                                    "&:hover": {
                                        backgroundColor: '#fff',
                                        border: '1px solid #103178',
                                        boxShadow: 'none'
                                    },
                                }} variant='contained'>small</Button>
                                <Button sx={{
                                    padding: '2px 14px',
                                    textTransform: 'capitalize',
                                    fontSize: { sm: '14px', xs: '11px' },
                                    fontWeight: '600',
                                    marginRight: "6px",
                                    borderRadius: '20px',
                                    boxShadow: 'none',
                                    backgroundColor: '#fff',
                                    border: '1px solid #f0f2f5',
                                    color: '#103178',
                                    "&:hover": {
                                        backgroundColor: '#fff',
                                        border: '1px solid #103178',
                                        boxShadow: 'none'
                                    },
                                }} variant='contained'>medium</Button>
                                <Button sx={{
                                    padding: '2px 14px',
                                    textTransform: 'capitalize',
                                    fontSize: { sm: '14px', xs: '11px' },
                                    fontWeight: '600',
                                    marginRight: "6px",
                                    borderRadius: '20px',
                                    boxShadow: 'none',
                                    backgroundColor: '#fff',
                                    border: '1px solid #f0f2f5',
                                    color: '#103178',
                                    "&:hover": {
                                        backgroundColor: '#fff',
                                        border: '1px solid #103178',
                                        boxShadow: 'none'
                                    },
                                }} variant='contained'>large</Button>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#103178',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    marginRight: '20px',
                                    marginBottom: '10px'
                                }} variant='p'>
                                    Quantity:
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: '10px',
                                    flexDirection: 'row'
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                            padding: { sm: '12px 15px', xs: '0px 25px' },
                                            backgroundColor: '#FD8D27',
                                            alignItems: 'center',
                                            borderRadius: { sm: '40px', xs: '40px' },
                                            cursor: 'pointer'
                                        }}>
                                        <Typography variant='p' sx={{
                                            color: '#fff',
                                            fontWeight: '600',
                                            padding: { sm: '0px 30px', xs: '0px 5px' },
                                            fontSize: { sm: '14px', xs: '12px' }
                                        }}>
                                            Add to cart
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#103178',
                                    fontSize: { lg: '14px', sm: '14px', xs: '12px' },
                                    fontWeight: '500',
                                    marginTop: '25px',
                                    display: 'inline-block',
                                    textDecoration: 'underline',
                                    transition: 'all .3s',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: '#FD8D27'
                                    }
                                }} variant='p'>
                                    Add to wishlist
                                </Typography>
                                <Typography sx={{
                                    color: '#103178',
                                    fontSize: { lg: '14px', sm: '14px', xs: '12px' },
                                    fontWeight: '500',
                                    marginTop: '25px',
                                    display: 'inline-block',
                                    textDecoration: 'underline',
                                    transition: 'all .3s',
                                    cursor: 'pointer',
                                    marginLeft: '25px',
                                    "&:hover": {
                                        color: '#FD8D27'
                                    }
                                }} variant='p'>
                                    Add to compare
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: '20px'
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: '#103178',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    marginRight: '20px'
                                }} variant='p'>
                                    Tags: <Typography sx={{
                                        color: '#5b6c8f',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        display: 'inline-block',
                                        marginLeft: '15px'
                                    }} variant='p'>Mens,</Typography>
                                    <Typography sx={{
                                        color: '#5b6c8f',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        display: 'inline-block',
                                        marginLeft: '15px'
                                    }} variant='p'>Fashion</Typography>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#103178',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    marginRight: '20px'
                                }} variant='p'>
                                    SKU: <span style={{
                                        marginLeft: '15px'
                                    }}>{sku}</span>
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginTop: '30px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <Tooltip title="Facebook" placement="top" arrow>
                                        <a style={{
                                            color: "#fff",
                                            fontSize: '14px',
                                            margin: '0px',
                                            backgroundColor: '#3B5998',
                                            width: '30px',
                                            height: '30px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            borderRadius: '4px'
                                        }} href="https://facebook.com">
                                            <FaFacebookF />
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Instagram" placement="top" arrow>
                                        <a style={{
                                            color: "#fff",
                                            fontSize: '14px',
                                            margin: '0px',
                                            backgroundColor: '#55ACEE',
                                            width: '30px',
                                            height: '30px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            borderRadius: '4px'
                                        }} href="https://instagram.com">
                                            <AiOutlineInstagram />
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Youtube" placement="top" arrow>
                                        <a style={{
                                            color: "#fff",
                                            fontSize: '14px',
                                            margin: '0px',
                                            width: '30px',
                                            height: '30px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            borderRadius: '4px',
                                            backgroundColor: '#CB2027'
                                        }} href="https://youtube.com">
                                            <AiFillYoutube />
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Linkedin" placement="top" arrow>
                                        <a style={{
                                            backgroundColor: "#176DBA",
                                            color: '#fff',
                                            fontSize: '14px',
                                            margin: '0px',
                                            width: '30px',
                                            height: '30px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            borderRadius: '4px',
                                        }} href="https://linkedin.com">
                                            <FaLinkedinIn />
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Pinterest" placement="top" arrow>
                                        <a style={{
                                            backgroundColor: "#FE3625",
                                            fontSize: '14px',
                                            margin: '0px',
                                            width: '30px',
                                            height: '30px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            color: '#fff',
                                            borderRadius: '4px',
                                        }} href="https://pinterest.com">
                                            <FaPinterestP />
                                        </a>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleProductHeader;