import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ShippingFeatures from './ShippingFeatures';
import MobileBottomNavigation from './MobileBottomNavigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { updateLoginStatus } from '../../redux/actions';
import { useDispatch } from 'react-redux';

// notification toast functions

export const showToast = (type, message) => {
    if (type === "success") {
        toast.success(`${message}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    else if (type === "error") {
        toast.error(`${message}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    else if (type === "warn") {
        toast.warn(`${message}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}


// layout component

const Layout = ({ children, metaInfo }) => {
    const { title, keywords, metaDesc } = metaInfo;
    const dispatch = useDispatch();
    // // // authenticate user
    useEffect(() => {
        if (typeof window !== undefined) {
            if (localStorage.getItem("userData") !== null) {
                const checkUser = JSON.parse(localStorage.getItem("userData"));
                if (checkUser.email) {
                    axios.get(`https://fast-commerce-backend.onrender.com/login`, {
                        headers: {
                            "email": checkUser.email,
                            "password": checkUser.password
                        }
                    }).then(response => {
                        const data = response.data;
                        if (data) {
                            dispatch(updateLoginStatus(data.loginStatus))
                        }
                    })
                }
            }
        }
    }, [])
    return (
        <div>
            <Head>
                <meta name="description" content={metaDesc && metaDesc} />
                <meta name="keywords" content={keywords && keywords} />
                <title>{title && title}</title>
            </Head>
            <Header />
            <main>
                {
                    children
                }
                <ShippingFeatures />
            </main>
            <Footer />
            <MobileBottomNavigation />

            {/* notification toast component */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Layout;