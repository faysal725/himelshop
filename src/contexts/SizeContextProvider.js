/* eslint-disable prefer-rest-params */
import React, { createContext, useContext, useEffect, useState } from 'react';

export const SizeContext = createContext();

const SizeContextProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [size, setSize] = useState(6);
    const [isMobile, setIsMobile] = useState(true);
    const [isDesktop, setIsDesktop] = useState(true);

    function debounce(fn, ms) {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    useEffect(() => {
        const debouncedHandleResize = debounce(() => {
            setWidth(window.innerWidth);
        }, 0);

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    });

    useEffect(() => {
        if (width <= 575) {
            setSize(3);
            setIsMobile(true);
            setIsDesktop(false);
        } else if (width >= 576 && width < 767) {
            setSize(3);
            setIsMobile(true);
            setIsDesktop(false);
        } else if (width >= 768 && width < 991) {
            setSize(4);
            setIsMobile(false);
            setIsDesktop(true);
        } else if (width >= 992 && width < 1199) {
            setSize(6);
            setIsMobile(false);
            setIsDesktop(true);
        } else {
            setSize(6);
            setIsMobile(false);
            setIsDesktop(true);
        }
    }, [width]);

    return (
        <SizeContext.Provider value={{ size, width, isDesktop, isMobile }}>
            {children}
        </SizeContext.Provider>
    );
};

export const useSizeContext = () => useContext(SizeContext);

export default SizeContextProvider;
