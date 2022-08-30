import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';

const Login = () => {
    const metaInfo = { title: "Login | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, blog, fast commerce blog", metaDesc: "Contact with fast commerce to get the best deal" };
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
                                    <form>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Typography sx={{
                                                    color: '#103178',
                                                    fontSize: { lg: '16px', sm: '14px', xs: '12px' },
                                                    fontWeight: '500',
                                                    marginBottom: '10px'
                                                }} variant="h5">
                                                    Username or email address *
                                                </Typography>
                                                <input style={{
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
                                                    Password *
                                                </Typography>
                                                <input style={{
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
                                        <Button className='brandBtn' sx={{
                                            marginTop: '30px',
                                            fontSize: { lg: '20px', sm: '18px', xs: '16px' }
                                        }} variant='contained'>Login</Button>
                                    </form>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}></Grid>
                        </Grid>
                        <Grid container spacing={4}>
                            <Grid item>
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