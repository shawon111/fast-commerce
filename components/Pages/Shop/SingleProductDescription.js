import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types'

// function of mui tab component
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// main component
const SingleProductDescription = ({ product }) => {
    const { additionalInfo, desc, reviews } = product;

    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            marginTop: { md: '80px', sm: '65px', xs: '50px' }
        }}>
            <Box>
                <Tabs sx={{
                    display: 'flex'
                }} TabIndicatorProps={{
                    style: {
                        backgroundColor: "#103178",
                    }
                }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<span className='description_tab' style={{
                        color: '#103178',
                        fontWeight: '500',
                        textTransform: 'capitalize'
                    }}>Description</span>} {...a11yProps(0)} />
                    <Tab label={<span className='description_tab' style={{
                        color: '#103178',
                        fontWeight: '500',
                        textTransform: 'capitalize'
                    }}>Addition information</span>} {...a11yProps(1)} />
                    <Tab label={<span className='description_tab' style={{
                        color: '#103178',
                        fontWeight: '500',
                        textTransform: 'capitalize'
                    }}>Reviews</span>} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={{
                    padding: { md: '50px', sm: '40px', xs: '20px' },
                    border: '1px solid #f0f2f5'
                }}>
                    <Typography variant='p' sx={{
                        color: '#5b6c8f',
                        fontSize: { md: '16px', sm: '15px', xs: '14px' },
                        fontWeight: '500'
                    }}>
                        {desc}
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{
                    padding: { md: '50px', sm: '40px', xs: '20px' },
                    border: '1px solid #f0f2f5'
                }}>
                    <Box>
                        <ul>
                            {
                                additionalInfo?.split(",").map((item, index) => <li key={index}>
                                    <Typography variant='p' sx={{
                                        color: '#5b6c8f',
                                        fontSize: { md: '16px', sm: '15px', xs: '14px' },
                                        fontWeight: '500'
                                    }}>{item}</Typography>
                                </li>)
                            }
                        </ul>

                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{
                    padding: { md: '50px', sm: '40px', xs: '20px' },
                    border: '1px solid #f0f2f5'
                }}>
                    <Typography variant='p' sx={{
                        color: '#5b6c8f',
                        fontSize: { md: '30px', sm: '26px', xs: '22px' },
                        fontWeight: '500',
                        textAlign: 'center',
                        display: 'block'
                    }}>
                        {
                            reviews.length < 1 ? "No review!!" : ""
                        }
                    </Typography>
                </Box>
            </TabPanel>
        </Box>
    );
};

export default SingleProductDescription;