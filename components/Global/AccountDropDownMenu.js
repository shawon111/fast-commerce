import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge, Box } from '@mui/material';
import { FaRegUser } from 'react-icons/fa';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { updateLoginStatus } from '../../redux/actions';
import { loginInfo } from '../../redux/actions';

export default function AccountDropDownMenu() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // logout
    const isLoggedIn = useSelector(state => state.isloggedIn)
    const handleLogOut = () =>{
        localStorage.removeItem("userData");
        localStorage.removeItem("token");
        dispatch(updateLoginStatus(false));
        dispatch(loginInfo({}))
        handleClose();
        router.push('/login')
    }

    return (
        <Box>
            <span
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Badge>
                    <FaRegUser style={{
                        fontSize: '23px',
                        color: '#ff9923',
                        fontWeight: '200'
                    }}></FaRegUser>
                </Badge>
            </span>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                className='header_dropdown'
            >
                { isLoggedIn ?
                <Box>
                    <MenuItem onClick={handleClose}><Link href="/account/user-dashboard">Dashboard</Link></MenuItem>
                    <MenuItem sx={{
                        color: '#103178'
                    }} onClick={handleLogOut}>LogOut</MenuItem>
                </Box> :
                <Box>
                    <MenuItem onClick={handleClose}><Link href="/login">Login</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/register">Register</Link></MenuItem>
                </Box>
                }
            </Menu>
        </Box>
    );
}