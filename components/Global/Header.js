import { Badge, Box, Button, Divider, Grid, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Link from 'next/link';
import { FaSearch, FaRegUser } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { RiShoppingCart2Line, RiHeart2Fill } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import DropDownMenu from './AccountDropDownMenu';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { AddToSearchResult, setInitialState } from '../../redux/actions';
import { useRouter } from 'next/router';

const Header = () => {
    const [showMobileSearchField, setShowMobileSearchField] = useState(false);
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const router = useRouter();
    const cart_items = useSelector((state) => state.addItemToCart);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cart_items") !== null) {
                const checkLocalStorage = JSON.parse(localStorage.getItem("cart_items"));
                if (checkLocalStorage.length > 0) {
                    console.log("got from localstorage", checkLocalStorage)
                    dispatch(setInitialState(checkLocalStorage))
                }
            }
        }
    }, [])
    console.log("cart-items-cart-page", cart_items)
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const searchText = e.target.value;
        axios.get(`https://fast-commerce-backend.onrender.com/all/search?text=${searchText}`).then((res) => {
            console.log(res.data)
            if (res.data === "No documents found!") {
                setSearchSuggestions([{ name: "No product found!", _id: "/" }])
            } else {
                setSearchSuggestions(res.data);
                setShowSuggestion(true)
            }
        })
        if (searchText === "") {
            setShowSuggestion(false)
        }
    }

    const handleGoToSearchResult = () => {
        dispatch(AddToSearchResult(searchSuggestions));
        setShowSuggestion(false)
        router.push('/search-result/products')

    }

    return (
        <Box sx={{
            padding: { md: '30px 0px 0px 0px', xs: '10px 0px 0px 0px' }
        }}>
            <Stack spacing={0} sx={{
                paddingBottom: { md: '30px', xs: '10px' },
            }}>
                <ResponsiveContainer>
                    <Grid sx={{ alignItems: 'center' }} container spacing={2}>
                        <Grid item xs={8} sm={6} lg={3}>

                            <Box>
                                <Link href="/">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: 'fit-content',
                                        cursor: 'pointer'
                                    }}>
                                        <RiHeart2Fill style={{
                                            fontSize: '40px',
                                            color: '#103178'
                                        }} />
                                        <Typography sx={{
                                            fontSize: { md: '30px', sm: '28px', xs: '26px' }
                                        }} className='primary-logo' fontWeight="700" variant="h4" w="fit-content">
                                            FastComm.
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </Grid>
                        {/* mobile search icon */}
                        <Grid item sx={{
                            display: { md: 'none', xs: 'flex' },
                            justifyContent: 'flex-end'
                        }} sm={6} xs={4}>
                            <Button
                                variant="text"
                                height="35px"
                                fontSize="40px"
                                onClick={() => setShowMobileSearchField(!showMobileSearchField)}
                            ><FaSearch className='darkText' style={{ fontSize: '20px' }} /></Button>
                        </Grid>

                        {/* mobile search bar  */}
                        <Grid item xs={12} sx={{
                            display: { md: 'none', xs: `${showMobileSearchField ? "flex" : "none"}` },
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                background: '#F0F2F5',
                                width: 'fit-content',
                                padding: '5px 0px',
                                borderRadius: '30px',
                                position: 'relative'
                            }}>
                                {
                                    showSuggestion && <Box sx={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '60px',
                                        zIndex: '5',
                                        backgroundColor: '#fff',
                                        width: '100%',
                                        borderRadius: '4px'
                                    }}>
                                        <List sx={{
                                            padding: '0',
                                            boxShadow: '0px 0px 25px -10px #c7c7c9'
                                        }}>
                                            {
                                                searchSuggestions.length > 0 && searchSuggestions?.map((item, index) => <Link href={item.name === "No product found!" ? "/" : `/shop/${item._id}`} key={index}><ListItem onClick={() => setShowSuggestion(false)} sx={{
                                                    cursor: 'pointer',
                                                    borderBottom: '1px solid #f0f2f5',
                                                    transition: 'all .2s',
                                                    '&:hover': {
                                                        backgroundColor: '#f0f2f5'
                                                    }
                                                }}>
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                </ListItem></Link>)
                                            }
                                        </List>
                                    </Box>
                                }
                                <input style={{
                                    border: 'none',
                                    outline: 'none',
                                    height: '35px',
                                    background: 'transparent',
                                    padding: '0px 20px',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                }}
                                    type="search"
                                    className='search-input'
                                    placeholder='Search for products'
                                    onChange={(e) => handleSearch(e)}
                                /><Button
                                    variant="text"
                                    height="35px"
                                    fontSize="40px"
                                    onClick={() => handleGoToSearchResult()}
                                ><FaSearch className='darkText' style={{ fontSize: '20px' }} /></Button>
                            </Box>
                        </Grid>
                        {/* tablet and desktop search bar */}
                        <Grid item xs={12} sm={6} lg={5} sx={{
                            alignItems: 'center',
                            display: { md: 'block', xs: 'none' }
                        }}>
                            <Box sx={{
                                background: '#F0F2F5',
                                width: 'fit-content',
                                padding: '5px 0px',
                                borderRadius: '30px',
                                position: 'relative'
                            }}>
                                {/* search suggestions box */}
                                {
                                    showSuggestion && <Box sx={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '60px',
                                        zIndex: '5',
                                        backgroundColor: '#fff',
                                        width: '100%',
                                        borderRadius: '4px'
                                    }}>
                                        <List sx={{
                                            padding: '0',
                                            boxShadow: '0px 0px 25px -10px #c7c7c9'
                                        }}>
                                            {
                                                searchSuggestions.length > 0 && searchSuggestions?.map((item, index) => <Link href={item.name === "No product found!" ? "/" : `/shop/${item._id}`} key={index}><ListItem onClick={() => setShowSuggestion(false)} sx={{
                                                    cursor: 'pointer',
                                                    borderBottom: '1px solid #f0f2f5',
                                                    transition: 'all .2s',
                                                    '&:hover': {
                                                        backgroundColor: '#f0f2f5'
                                                    }
                                                }}>
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                </ListItem></Link>)
                                            }
                                        </List>
                                    </Box>

                                }

                                <input style={{
                                    border: 'none',
                                    outline: 'none',
                                    height: '35px',
                                    background: 'transparent',
                                    padding: '0px 20px',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                }}
                                    type="search"
                                    className='search-input'
                                    placeholder='Search for products'
                                    onChange={(e) => handleSearch(e)}
                                /><Button
                                    variant="text"
                                    height="35px"
                                    fontSize="40px"
                                    onClick={() => handleGoToSearchResult()}
                                ><FaSearch className='darkText' style={{ fontSize: '20px' }} /></Button>
                            </Box>
                        </Grid>
                        <Grid xs={3} lg={4} sx={{
                            display: { md: 'flex', xs: 'none' },
                            justifyContent: 'end',
                        }} item>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Box>
                                    <select style={{
                                        fontSize: '11px',
                                        padding: '10px',
                                        border: 'none',
                                        outline: 'none',
                                        fontWeight: '600',
                                        color: '#103178'
                                    }}>
                                        <option value="1">USD</option>
                                        <option value="2">EURO</option>
                                    </select>
                                </Box>
                                <Box>
                                    <Box sx={{ gap: '25px', flexDirection: 'row', display: 'flex' }}>
                                        <Box sx={{
                                            cursor: 'pointer'
                                        }}>
                                            <DropDownMenu />
                                        </Box>
                                        <Box sx={{
                                            cursor: 'pointer'
                                        }}>
                                            <Badge badgeContent={0} showZero
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        color: "#fff",
                                                        backgroundColor: "#103178"
                                                    }
                                                }}>
                                                <FiHeart style={{
                                                    fontSize: '23px',
                                                    color: '#ff9923',
                                                    fontWeight: '200'
                                                }}></FiHeart>
                                            </Badge>
                                        </Box>
                                        <Box sx={{
                                            cursor: 'pointer'
                                        }}>
                                            <Badge badgeContent={cart_items.length} showZero
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        color: "#fff",
                                                        backgroundColor: "#103178"
                                                    }
                                                }}
                                            >
                                                <Link href="/cart">
                                                    <RiShoppingCart2Line style={{
                                                        fontSize: '23px',
                                                        color: '#ff9923',
                                                        fontWeight: '200'
                                                    }}></RiShoppingCart2Line>
                                                </Link>
                                            </Badge>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </ResponsiveContainer>
            </Stack>
            <Stack pt="20px" sx={{
                display: { md: 'block', xs: 'none' },
                paddingBottom: { md: '20px', xs: '10px' }
            }} borderTop="1px solid #f0f2f5" borderBottom="1px solid #f0f2f5">
                <ResponsiveContainer>
                    <Grid container spacing={2}>
                        <Grid item lg={8} md={6}>
                            <Box>
                                <ul className='nav-menu' style={{
                                    display: 'flex',
                                }}>
                                    <li style={{ cursor: 'pointer' }}><span style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}><HiMenu style={{ marginRight: '5px', fontSize: '20px', fontWeight: '700' }} />Products</span></li>
                                    <li><Link href="/">Homepage</Link></li>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item sx={{ textAlign: 'end' }} lg={4} md={6}>
                            <Typography color="#5b6c8f" fontWeight="500" fontSize="15px" variant='p'>
                                Need help? 0020 500 - FastCommerce - 000
                            </Typography>
                        </Grid>
                    </Grid>
                </ResponsiveContainer>
            </Stack>
        </Box>
    );
};

export default Header;