import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import Tooltip from '@mui/material/Tooltip';

const ContactInfo = () => {
    return (
        <Box>
            <Stack>
                <Box>
                    <Box sx={{
                        padding: { lg: '0px 50px 0px 0px', sm: '0px 20px 0px 0px', xs: '0px 0px 0px 0px' },
                        borderBottom: '1px solid #f0f2f5'
                    }}>
                        <Typography sx={{
                            fontSize: { lg: '50px', md: '45px', sm: '40px', xs: '37px' },
                            fontWeight: '600',
                            color: '#103178',
                            lineHeight: '1.3',
                            marginBottom: '20px'
                        }} variant='h1'>
                            How can we help you?
                        </Typography>
                        <Typography sx={{
                            fontSize: { lg: '16px', xs: '15px' },
                            fontWeight: '500',
                            color: '#5b6c8f',
                            lineHeight: '1.3',
                            marginBottom: '20px',
                            display: 'inline-block'
                        }} variant='p'>
                            We are at your disposal 7 days a week!
                        </Typography>
                    </Box>
                    <Box sx={{
                        padding: { lg: '0px 50px 0px 0px', sm: '0px 20px 0px 0px', xs: '0px 0px 0px 0px' },
                        borderBottom: '1px solid #f0f2f5',
                        marginTop: '20px'
                    }}>
                        <Box sx={{
                            paddingBottom: '25px'
                        }}>
                            <Box>
                                <Typography variant='h6' sx={{
                                    color: '#103178',
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    marginBottom: "5px",
                                    lineHeight: '1.3'
                                }}>
                                    0020 500 - FastCommerce - 000
                                </Typography>
                                <Typography variant='p' sx={{
                                    color: '#5b6c8f',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    marginBottom: "15px",
                                    lineHeight: '1.4',
                                    display: 'inline-block'
                                }}>
                                    Monday - Friday: 9:00-20:00
                                    <br />
                                    Saturday: 11:00 - 15:00
                                </Typography>
                                <Box>
                                    <a className='contact_send_mail_btn' style={{
                                        color: '#103178',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        backgroundColor: '#ffffff',
                                        padding: '6px 25px',
                                        border: '1px solid #f0f2f5',
                                        borderRadius: '25px',
                                        display: 'inline-block',
                                        marginTop: '20px'
                                    }} href="mailto:example@fastcommerce">example@fastcommerce</a>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        padding: { lg: '0px 50px 0px 0px', sm: '0px 20px 0px 0px', xs: '0px 0px 0px 0px' },
                        marginTop: '25px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <Tooltip title="Facebook" placement="top" arrow>
                                <a style={{
                                    color: "#5b6c8f",
                                    fontSize: '20px',
                                    margin: '5px 9px'
                                }} href="https://facebook.com">
                                    <FaFacebookF />
                                </a>
                            </Tooltip>
                            <Tooltip title="Instagram" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://instagram.com">
                                <AiOutlineInstagram />
                            </a>
                            </Tooltip>
                            <Tooltip title="Youtube" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://youtube.com">
                                <AiFillYoutube />
                            </a>
                            </Tooltip>
                            <Tooltip title="Pinterest" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://pinterest.com">
                                <FaPinterestP />
                            </a>
                            </Tooltip>
                            <Tooltip title="Linkedin" placement="top" arrow>
                            <a style={{
                                color: "#5b6c8f",
                                fontSize: '20px',
                                margin: '5px 9px'
                            }} href="https://linkedin.com">
                                <FaLinkedinIn />
                            </a>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>
                <Box>

                </Box>
            </Stack>
        </Box>
    );
};

export default ContactInfo;