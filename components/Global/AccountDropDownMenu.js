import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge } from '@mui/material';
import {FaRegUser} from 'react-icons/fa';

export default function AccountDropDownMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
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
            >
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>SignUp</MenuItem>
                <MenuItem onClick={handleClose}>SignIn</MenuItem>
                <MenuItem onClick={handleClose}>LogOut</MenuItem>
            </Menu>
        </div>
    );
}