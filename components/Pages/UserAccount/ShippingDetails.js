import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const ShippingDetails = () => {
    return (
        <Box sx={{
            border: '1px solid #f0f2f6',
            padding: '30px 20px',
            margin: '15px 0px'
        }}>
            <Typography sx={{
                color: '#103178',
                fontWeight: '500',
                lineHeight: '1.3',
                fontSize: { lg: '28px', sm: '22px', xs: '18px' },
                marginBottom: '30px'
            }} variant='h3'>
                Shipping Details
            </Typography>
            <Box>
                <form>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Full Name" variant="outlined" />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Phone Number" variant="outlined" />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Country" variant="outlined" />
                            </Grid>
                            <Grid item md={6} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Street Address 1" variant="outlined" />
                            </Grid>
                            <Grid item md={6} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Street Address 2" variant="outlined" />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="State/City" variant="outlined" />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField sx={{
                                    width: '100%',
                                }} 
                                 id="outlined-basic" label="Postal Code" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default ShippingDetails;