import { Badge, Box, Paper } from '@mui/material';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import { HiMenu } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AccountDropDownMenu from './AccountDropDownMenu';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

const MobileBottomNavigation = () => {
    const [showHamburger, setShowHamburger] = useState(false)
    const cart_items = useSelector((state) => state.addItemToCart);
    return (
        <Box sx={{
            display: { md: 'none', xs: 'block' },
            maxWidth: '100vw',
            overflow: 'hidden'
        }}>
            <ResponsiveContainer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '10px 0px 5px 0px', zIndex: 5 }}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexDirection: 'row',
                        }}>
                            <Box>
                                <HiMenu onClick={()=> setShowHamburger(true)} style={{
                                    fontSize: '23px',
                                    color: '#ff9923',
                                    fontWeight: '200'
                                }}></HiMenu>
                            </Box>
                            <Box>
                                <Link href="/">
                                    <AiOutlineHome style={{
                                        fontSize: '23px',
                                        color: '#ff9923',
                                        fontWeight: '200'
                                    }}></AiOutlineHome>
                                </Link>
                            </Box>
                            <Box sx={{
                                cursor: 'pointer'
                            }}>
                                <AccountDropDownMenu />
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
                </Paper>
            </ResponsiveContainer>
            <Box>
                <HamburgerMenu showHamburger={showHamburger} setShowHamburger={setShowHamburger}  />
            </Box>
        </Box>
    );
};

export default MobileBottomNavigation;