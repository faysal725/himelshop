import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeSkeleton from '../Skeleton/Home/HomeSkeleton';
import LoginPage from './Auth/Login/LoginPage';
import ResetPage from './Auth/ResetPage/ResetPage';
import SignUpPage from './Auth/SignUp/SignUpPage';
import Cart from './Cart/Cart';
import CategoriesPage from './Categories/CategoriesPage';
import CheckoutPage from './Checkout/CheckoutPage';
import Contact from './Contact/Contact';
import MainHelpCenterPage from './CustomerCare/HelpCenter/HelpCenterPage';
import PaymentGuidePage from './CustomerCare/PaymentPage/PaymentPage';
import ReturnRefund from './CustomerCare/ReturnRefund/ReturnRefund';
import TermAndCondition from './CustomerCare/TermAndCondition/TermAndCondition';
import HelpCenterPage from './HelpCenter/HelpCenterPage';
import HomePage from './Home/HomePage';
import About from './KnowUs/About/About';
import BlogPage from './KnowUs/Blog/BlogPage';
import Apply from './KnowUs/Careers/Apply/Apply';
import Career from './KnowUs/Careers/Career';
import CareerDetails from './KnowUs/Careers/CareerDetails/CareerDetails';
import PrivacyPolicy from './KnowUs/PrivacyPolicy/PrivacyPolicy';
import SiteMap from './KnowUs/SiteMap/SiteMap';
import MainCategoriesPage from './MainCategories/MainCategoriesPage';
import OrderConfirmPage from './OrderConfirm/OrderConfirmPage';
import AffiliatePage from './Partnership/Affiliate/AffiliatePage';
import WholesalePage from './Partnership/Wholesale/WholesalePage';
import PaymentPage from './Payment/PaymentPage';
import ProductDetailsPage from './ProductDetails/ProductDetailsPage';
import ProfilePage from './Profile/ProfilePage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Search from './Search/Search';
import UserDashboard from './UserDashboard/UserDashboard';

const Routes = () => {
    return (
        <Switch>
            {/* Protected Routes */}
            <ProtectedRoute exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/sign-up" component={SignUpPage} />
            <ProtectedRoute exact path="/reset" component={ResetPage} />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/product-details" component={ProductDetailsPage} />
            <Route exact path="/categories" component={MainCategoriesPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/category" component={CategoriesPage} />
            <Route exact path="/shopping-cart" component={Cart} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/order-confirm" component={OrderConfirmPage} />
            <Route path="/search" component={Search} />
            <Route exact path="/payment" component={PaymentPage} />
            <Route exact path="/skeleton" component={HomeSkeleton} />
            <Route path="/user-profile" component={UserDashboard} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/site-map" component={SiteMap} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/term-condition" component={TermAndCondition} />
            <Route exact path="/return-refund" component={ReturnRefund} />
            <Route exact path="/help-center" component={HelpCenterPage} />
            <Route exact path="/main-help-center" component={MainHelpCenterPage} />
            <Route exact path="/payment-guide" component={PaymentGuidePage} />
            <Route exact path="/blogs" component={BlogPage} />
            <Route exact path="/affiliate" component={AffiliatePage} />
            <Route exact path="/wholesale" component={WholesalePage} />
            <Route exact path="/careers" component={Career} />
            <Route exact path="/careers/:careerTitle" component={CareerDetails} />
            <Route path="/careers/:careerTitle/apply" component={Apply} />

            <Redirect from="/" to="/" />
        </Switch>
    );
};

export default Routes;
