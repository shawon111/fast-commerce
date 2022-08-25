import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ children }) => {
    return (
        <Typography sx={{
            fontSize: {lg: '40px', sm: '37px', xs: '34px'},
            color: '#103178',
            fontWeight: '700',
            textTransform: 'capitalize',
            textAlign: 'center'
        }} variant='h2'>
            {
                children
            }
        </Typography>
    );
};

export default SectionTitle;