import { Box } from '@mui/material';
import React from 'react';

const ContactMap = () => {
    return (
        <Box sx={{
            marginLeft: {lg: '50px', md: '40px', xs: '0px'}
        }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.1362475758706!2d-80.49661177258596!3d39.30783501397013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884a14fdd4cb5493%3A0x62bedd961ec08d75!2s1743%20Flinderation%20Rd%2C%20Wallace%2C%20WV%2026448%2C%20USA!5e0!3m2!1sen!2sbd!4v1661682333079!5m2!1sen!2sbd" style={{border: '0', width: '100%', height: '450px'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    );
};

export default ContactMap;