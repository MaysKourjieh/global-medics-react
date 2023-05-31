import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../theme';

const Layout = ({ children }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const contentHeight = contentRef.current.clientHeight;
            const windowHeight = window.innerHeight;

            if (contentHeight < windowHeight) {
                contentRef.current.style.flexGrow = '1';
            } else {
                contentRef.current.style.flexGrow = '0';
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <div ref={contentRef} style={{ flex: '1' }}>
                    {children}
                </div>
                <Footer />
            </div>
    );
};

export default Layout;
