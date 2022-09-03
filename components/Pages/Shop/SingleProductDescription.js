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
const SingleProductDescription = () => {
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            marginTop: {md: '80px', sm: '65px', xs: '50px'}
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
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{
                    padding: { md: '50px', sm: '40px', xs: '20px' },
                    border: '1px solid #f0f2f5'
                }}>
                    <Typography variant='p' sx={{
                        color: '#5b6c8f',
                        fontSize: { md: '16px', sm: '15px', xs: '14px' },
                        fontWeight: '500'
                    }}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </Typography>
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
                        No review!!
                    </Typography>
                </Box>
            </TabPanel>
        </Box>
    );
};

export default SingleProductDescription;