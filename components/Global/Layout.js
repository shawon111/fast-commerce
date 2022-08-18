import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                
            </Head>
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;