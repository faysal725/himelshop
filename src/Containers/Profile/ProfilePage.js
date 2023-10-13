import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MobCategoryHeader from '../../Components/Header/MobCategoryHeader/MobCategoryHeader';
import Profile from './Profile';
import { useSizeContext } from '../../contexts/SizeContextProvider';

const ProfilePage = () => {



    const { isMobile, isDesktop } = useSizeContext();


  return (
    <>
        {isDesktop && <Header />}
        {isMobile && <MobCategoryHeader />}
        <React.Suspense fallback="Categories Loading...">
                <Profile />
            </React.Suspense>
        {isDesktop && <Footer />}
    </>
  )
}

export default ProfilePage