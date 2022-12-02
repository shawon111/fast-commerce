import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const BillingAddress = () => {
    return (
        <form>
            <Typography sx={{
                color: '#103178',
                fontWeight: '600',
                lineHeight: '1.3',
                fontSize: { lg: '30px', sm: '27px', xs: '24px' },
                marginBottom: '30px'
            }} variant='h3'>
                Billing Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
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
                        placeholder='First Name *'
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
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
                        placeholder='Last Name *'
                    />
                </Grid>
                <Grid item xs={12}>
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
                        className='contact_input'
                        placeholder='Company Name (optional)'
                    />
                </Grid>
                <Grid item xs={12}>
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
                        placeholder='Country *'
                    />
                </Grid>
                <Grid item xs={12}>
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
                        placeholder='Street Address *'
                    />
                </Grid>
                <Grid item xs={12}>
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
                        placeholder='Post Code / Zip *'
                    />
                </Grid>
                <Grid item xs={12}>
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
                        placeholder='Town / City *'
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
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
                        type="email"
                        required
                        className='contact_input'
                        placeholder='Email *'
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
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
                        type="tel"
                        required
                        className='contact_input'
                        placeholder='Phone *'
                    />
                </Grid>
                <Grid item xs={12}>
                    <textarea style={{
                        border: 'none',
                        outline: 'none',
                        background: '#F0F2F5',
                        padding: '23px 20px',
                        fontSize: '15px',
                        fontWeight: '600',
                        borderRadius: '30px'

                    }}
                        required
                        className='contact_input'
                        placeholder='Order Note (optional)'
                        rows="4"
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default BillingAddress;