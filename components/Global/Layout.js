import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ShippingFeatures from './ShippingFeatures';
import MobileBottomNavigation from './MobileBottomNavigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    else if (type === "error"){
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
    else if (type === "warn"){
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