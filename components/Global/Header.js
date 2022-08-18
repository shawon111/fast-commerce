import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const Header = () => {
    return (
        <Box>
            <ResponsiveContainer>
                <Stack spacing={0}>
                    <Stack>
                        <Box>
                            <Box>
                                <Typography variant="h4">
                                    FastComm.
                                </Typography>
                            </Box>
                        </Box>
                        <Box>

                        </Box>
                        <Box>

                        </Box>
                    </Stack>
                    <Stack>
                    </Stack>
                </Stack>
            </ResponsiveContainer>
        </Box>
    );
};

export default Header;