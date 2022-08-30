import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import demoBlogImage from '../../../public/images/bigbanner-4.jpg';

const SingleBlogBody = () => {
    const blog = {
        title: "Stylish dresses for girls are available now!",
        categories: ["women", "fashion"],
        date: "August 12, 2022",
        author: "Paul",
        description: `<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong></p><br/><br/> <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p> <br/>
        <div class="blog_img_text_block" style="display: flex; justify-content: flex-between; align-items: center">
        <div><img style="width: 30vw" src="/images/img2.png" alt="image inside blog" /></div>
        <div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p></div>
        </div>
        <br/>
        <div>
        <p>Cras elementum varius felis id mollis. In nec enim molestie, laoreet lorem sit amet, eleifend ipsum. Aenean at metus lectus. In vitae condimentum tortor. Nam nec porttitor justo, non fringilla sapien. Sed bibendum sem non mauris porta lobortis. Vivamus ex quam, maximus at blandit nec, aliquam ullamcorper ligula. Phasellus dolor felis, pharetra id pharetra ac, commodo vitae ante. Nulla ac molestie nisl. Cras arcu felis, molestie nec arcu eget, luctus dictum sem. Ut lacus arcu, posuere in urna in, auctor lobortis risus. Curabitur viverra purus vestibulum nibh fringilla, sit amet pellentesque turpis accumsan. Pellentesque eu tincidunt mauris. Duis maximus ornare nisl venenatis interdum. Nunc eget ante lorem. Donec porttitor, sapien sit amet pharetra blandit, est mauris ultricies tellus, sed varius metus urna sit amet erat.</p>
        </div>
       `,
        image: demoBlogImage,
    }

    return (
        <Box sx={{
            padding: { lg: '60px 0px 0px 0px', sm: '30px 0px 0px 0px', xs: '20px 0px 0px 0px' }
        }}>
            <Box sx={{
                marginBottom: { lg: '10px', sm: '10px', xs: '10px' }
            }}>
                {
                    blog.categories.map((item, index) => <Link key={index} href="/">
                        <Button sx={{
                            padding: '2px 15px',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            fontWeight: '500',
                            marginRight: "10px",
                            borderRadius: '20px',
                            boxShadow: 'none',
                            backgroundColor: '#103178',
                            color: '#fff',
                            "&:hover": {
                                backgroundColor: '#103178'
                            }
                        }} variant='contained'>{item}</Button>
                    </Link>)
                }
            </Box>
            <Box sx={{
                marginBottom: { lg: '15px', sm: '13px', xs: '12px' }
            }}>
                <Box sx={{
                    color: '#103178',
                    fontWeight: '600',
                    fontSize: { lg: '14px', xs: '12px' },
                    display: 'inline-block',
                    marginRight: '15px',

                }} variant='p'>
                    {blog.date}
                </Box>
                <Link href="/">
                    <Box sx={{
                        color: '#5b6c8f',
                        fontWeight: '500',
                        fontSize: { lg: '14px', xs: '12px' },
                        display: 'inline-block',
                        cursor: 'pointer',
                        transition: 'all .3s',
                        "&:hover": {
                            color: '#FD8D27'
                        }
                    }} variant='p'>
                        {blog.author}
                    </Box>
                </Link>
            </Box>
            <Box sx={{
                marginBottom: { lg: '40px', sm: '30px', xs: '25px' }
            }}>
                <Link href="/">
                    <Box variant='h2' sx={{
                        textAlign: 'start',
                        fontSize: { lg: '40px', sm: '35px', xs: '30px' },
                        color: '#103178',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all .3s',
                        "&:hover": {
                            color: '#FD8D27'
                        }
                    }}>
                        {blog.title}
                    </Box>
                </Link>
            </Box>
            <Box sx={{
                marginBottom: { lg: '20px', sm: '16px', xs: '12px' }
            }} >
                <Image
                    src={blog.image}
                    alt="blog-image"
                    width={1070}
                    height={530}
                    style={{
                        borderRadius: '5px'
                    }}
                />
            </Box>
            <Box sx={{
                marginTop: { lg: '40px', sm: '30px', xs: '25px' }
            }}>
                <Box sx={{
                    color: '#5b6c8f',
                    fontWeight: '500',
                    fontSize: { lg: '16px', xs: '14px' },
                    display: 'inline-block',
                }}
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                >
                </Box>
            </Box>
        </Box>
    );
};

export default SingleBlogBody;