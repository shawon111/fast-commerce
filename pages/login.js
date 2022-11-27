import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import Layout, { showToast } from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';
import { updateLoginStatus } from '../redux/actions';

const Login = () => {
    const metaInfo = { title: "Login | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };

    const router = useRouter();
    const dispatch = useDispatch();

    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPreloader, setShowPreloader] = useState(false);

    // customer login
    const loginInfo = {
        email,
        password
    }
    const handleLogin = (e) => {
        setShowPreloader(true)
        e.preventDefault();
        axios.get(`https://fast-commerce-backend.onrender.com/login`, {
            headers: {
                "email": loginInfo.email,
                "password": loginInfo.password
            }
        }).then(response=>{
            const data = response.data;
            setShowPreloader(false);
            if(data.loginStatus === true){
                showToast('success', 'Login Successfull!');
                dispatch(updateLoginStatus(data.loginStatus))
                localStorage.setItem("userData", JSON.stringify(loginInfo));
                localStorage.setItem("token", data.token)
                router.push('/account/user-dashboard')
            }else{
                showToast('error', 'No user found with this email');
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
                            Login
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box>
                                    <form onSubmit={(e)=> handleLogin(e)}>
                                        <Grid container spacing={3}>
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
                                                onChange={(e)=> setEmail(e.target.value)}
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
                                                onChange={(e)=> setPassword(e.target.value)}
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
                                                display: 'block',
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
                        <Grid container spacing={0}>
                            <Grid item sx={{marginRight: '15px'}}>
                                <Link href="/">
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
                                        Lost your password?
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register">
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
                                        Don&apos;t have an account?
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </ResponsiveContainer>
            </Layout>
        </>
    );
};

export default Login;