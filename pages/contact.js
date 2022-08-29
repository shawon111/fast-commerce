import React from 'react';
import Layout from '../components/Global/Layout';
import { Box, Grid } from '@mui/material'
import ContactInfo from '../components/Pages/Contact/ContactInfo';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';
import ContactMap from '../components/Pages/Contact/ContactMap';
import ContactForm from '../components/Pages/Contact/ContactForm';

const Contact = () => {
    const metaInfo = { title: "Contact | FastComerce | Best fashion store online", keywords: "fast commerce, ecommerce, contact, fast commerce contact", metaDesc: "Contact with fast commerce to get the best deal" };
    return (
        <>
            <Layout metaInfo={metaInfo}>
                <Box sx={{
                    padding: {lg: '60px 0px 0px 0px', sm:'30px 0px 0px 0px', xs:'20px 0px 0px 0px'}
                }}>
                    <ResponsiveContainer>
                        <Grid container spacing={2}>
                            <Grid md={4} xs={12} item>
                                <ContactInfo />
                            </Grid>
                            <Grid md={8} xs={12} item>
                                <ContactMap />
                            </Grid>
                        </Grid>
                        <Box>
                            <ContactForm />
                        </Box>
                    </ResponsiveContainer>
                </Box>
            </Layout>
        </>
    );
};

export default Contact;