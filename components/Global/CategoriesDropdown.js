import { Box, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const CategoriesDropdown = ({setShowCategoryDropdown, showCategoryDropdown}) => {
    const categoryList = [{ name: "Fashion", link: '/category/fashion' }, { name: "Womens", link: '/category/womens' }, { name: "Mens", link: '/category/mens' }, { name: "Clothes", link: '/category/clothes' }, { name: "Shoes", link: '/category/shoes' }, { name: "Pants", link: '/category/pants' }, { name: "Watches", link: '/category/watches' }, { name: "Bags", link: '/category/bags' }];
    return (
        <Box sx={{
            position: 'relative',
            display: `${showCategoryDropdown === true ? 'block' : 'none'}`
        }}>
            <ResponsiveContainer>
                <Box sx={{
                    position: 'absolute',
                    left: "15px",
                    top: "20px",
                    zIndex: '5',
                    backgroundColor: '#fff',
                    width: '15%',
                    borderRadius: '4px'
                }}>
                    <List sx={{
                        padding: '0',
                        boxShadow: '0px 0px 25px -10px #c7c7c9'
                    }}>
                        {
                            categoryList.map((item, index) => <Link onClick={()=> setShowCategoryDropdown(false)} href={item.link} key={index}><ListItem sx={{
                                cursor: 'pointer',
                                backgroundColor: `${index%2 === 0 ? "#fff" : "#f0f2f5"}`,
                                borderBottom: '1px solid #f0f2f5',
                                transition: 'all .2s',
                            }}>
                                <ListItemText
                                sx={{
                                    color: '#103178'
                                }}
                                    primary={item.name}
                                />
                            </ListItem></Link>)
                        }
                    </List>
                </Box>
            </ResponsiveContainer>
        </Box>
    );
};

export default CategoriesDropdown;