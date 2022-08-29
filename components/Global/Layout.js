import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ShippingFeatures from './ShippingFeatures';

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
        </div>
    );
};

export default Layout;