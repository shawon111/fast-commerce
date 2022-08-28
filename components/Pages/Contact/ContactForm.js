import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const ContactForm = () => {
    return (
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
                Fill up the form if you have any question
            </Typography>
            <Box>
                <form>
                    <Grid container spacing={3}>
                        <Grid item sm={4} xs={12}>
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
                                placeholder='Name'
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
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
                                placeholder='Email'
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
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
                                placeholder='Phone'
                            />
                        </Grid>
                        <Grid item sm={12} xs={12}>
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
                                placeholder='Message'
                                rows="5"
                            />
                        </Grid>
                    </Grid>
                    <Button className='brandBtn' sx={{
                        marginTop: '20px',
                        fontSize: {lg: '20px', sm: '18px', xs: '16px'}
                    }} variant='contained'>Send message</Button>
                </form>
            </Box>

        </Box>
    );
};

export default ContactForm;