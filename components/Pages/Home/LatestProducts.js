import { Box, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from '../../Global/ResponsiveContainer';
import SectionTitle from '../../Global/SectionTitle';

const LatestProducts = () => {
    return (
        <Box sx={{
            padding: '60px 0px'
        }}>
            <ResponsiveContainer>
                <Box>
                    <Box sx={{
                        marginBottom: '30px'
                    }}>
                        <SectionTitle>
                            Latest Products
                        </SectionTitle>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default LatestProducts;