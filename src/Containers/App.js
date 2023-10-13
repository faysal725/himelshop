import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Aside from '../Components/Aside/Aside';
import SideMenu from '../Components/SideMenu/SideMenu';
import SideMenuContextProvider from '../contexts/SideMenuContextProvider';
import SizeContextProvider from '../contexts/SizeContextProvider';
import { getUser } from '../Redux/Auth/authSlice';
import { allCategories } from '../Redux/Category/categorySlice';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allCategories());
        dispatch(getUser());
    }, [dispatch])

    return (
        <BrowserRouter>
            <SideMenuContextProvider>
                <SizeContextProvider>
                    <Aside />
                    <SideMenu />
                    <Routes />
                </SizeContextProvider>
            </SideMenuContextProvider>
            <ScrollToTop />
        </BrowserRouter>
    );
};

export default App;
