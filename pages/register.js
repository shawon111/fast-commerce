import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import Layout, { showToast } from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';

const Register = () => {
    const metaInfo = { title: "Register | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };

    const router = useRouter();


    // states
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPreloader, setShowPreloader] = useState(false);

    // register new customer
    const customerInfo = {
        name,
        userName,
        email,
        password,
        shippingDetails: {}
    }
    const handleRegistration = (e) => {
        setShowPreloader(true);
        e.preventDefault();
        axios.post('https://fast-commerce-backend.onrender.com/register', customerInfo).then(response => {
            const data = response.data;
            if (data) {
                setShowPreloader(false)

                if (data.acknowledged === true) {
                    showToast('success', 'Registration Successfull!');
                    router.push('/login')
                } 
                else if(data.err === "both"){
                    showToast('error', 'Email and user name is already taken!');
                }
                else if(data.err === "email"){
                    showToast('error', 'Email is already taken!');
                }
                else if(data.err === "userName"){
                    showToast('error', 'User name is already taken!');
                }
                else if(data.err === "unknown"){
                    showToast('error', 'Something is wrong, please try again');
                }
                else {
                    showToast('error', 'Something is wrong, please try again');
                }
            } else {
                setShowPreloader(false)
                showToast('error', 'Something is wrong, please try again');
            }
        })
    }

    return (
        <>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <Box sx={{
                        padding: { lg: '60px 0px 0px 0px', sm: '30px 0px 0px 0px', xs: '20px 0px 0px 0px' }
                    }}>
                        <Typography sx={{
                            color: '#103178',
                            fontWeight: '600',
                            lineHeight: '1.3',
                            fontSize: { lg: '30px', sm: '27px', xs: '24px' },
                            marginBottom: '30px'
                        }} variant='h3'>
                            Register
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box>
                                    <form onSubmit={(e) => handleRegistration(e)}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Typography sx={{
                                                    color: '#103178',
                                                    fontSize: { lg: '16px', sm: '14px', xs: '12px' },
                                                    fontWeight: '500',
                                                    marginBottom: '10px'
                                                }} variant="h5">
                                                    Full name *
                                                </Typography>
                                                <input
                                                    onChange={(e) => setName(e.target.value)}
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        height: '35px',
                                                        background: '#F0F2F5',
                                                        padding: '23px 20px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        borderRadius: '30px'

                                                    }}
                                                    type="text"
                                                    required
                                                    className='contact_input'
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography sx={{
                                                    color: '#103178',
                                                    fontSize: { lg: '16px', sm: '14px', xs: '12px' },
                                                    fontWeight: '500',
                                                    marginBottom: '10px'
                                                }} variant="h5">
                                                    Username *
                                                </Typography>
                                                <input
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        height: '35px',
                                                        background: '#F0F2F5',
                                                        padding: '23px 20px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        borderRadius: '30px'

                                                    }}
                                                    type="text"
                                                    required
                                                    className='contact_input'
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography sx={{
                                                    color: '#103178',
                                                    fontSize: { lg: '16px', sm: '14px', xs: '12px' },
                                                    fontWeight: '500',
                                                    marginBottom: '10px'
                                                }} variant="h5">
                                                    Email address *
                                                </Typography>
                                                <input
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        height: '35px',
                                                        background: '#F0F2F5',
                                                        padding: '23px 20px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        borderRadius: '30px'

                                                    }}
                                                    type="email"
                                                    required
                                                    className='contact_input'
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography sx={{
                                                    color: '#103178',
                                                    fontSize: { lg: '16px', sm: '14px', xs: '12px' },
                                                    fontWeight: '500',
                                                    marginBottom: '10px'
                                                }} variant="h5">
                                                    Password *
                                                </Typography>
                                                <input
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        height: '35px',
                                                        background: '#F0F2F5',
                                                        padding: '23px 20px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        borderRadius: '30px'

                                                    }}
                                                    type="password"
                                                    required
                                                    className='contact_input'
                                                />
                                            </Grid>
                                        </Grid>
                                        {
                                            !showPreloader ? <input type="submit" className='brandBtn' style={{
                                                marginTop: '30px',
                                                cursor: 'pointer',
                                                zIndex: '5'
                                            }} /> : <Bars
                                                height="100"
                                                width="100"
                                                color="#103178"
                                                ariaLabel="bars-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                visible={true}
                                            />
                                        }

                                    </form>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}></Grid>
                        </Grid>
                        <Link href="/login">
                            <Typography sx={{
                                color: '#103178',
                                fontSize: { lg: '16px', sm: '14px', xs: '12px' },
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
                                Already have an account?
                            </Typography>
                        </Link>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Register;