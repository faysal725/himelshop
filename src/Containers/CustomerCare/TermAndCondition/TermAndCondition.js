import Footer from '../../../Components/Footer/Footer';
import FooterMob from '../../../Components/Footer/FooterMob';
import Header from '../../../Components/Header/Header';
import HeaderBottom from '../../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';
import './TermAndCondition.scss';

const TermAndCondition = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}

            <div className="privacy-policy">
                <div className="container">
                    <h4 className="about-title pt-4 mb-4"> Term And Condition</h4>
                    <p>
                        This Privacy Policy explains how we collect, use and (under certain
                        conditions) disclose your personal information. This Privacy Policy also
                        explains the steps we have taken to secure your personal information.
                        Finally, this Privacy Policy explains your options regarding the collection,
                        use and disclosure of your personal information. By visiting the Site
                        directly or through another site, you accept the practices described in this
                        Policy.
                    </p>
                    <p>
                        Data protection is a matter of trust and your privacy is important to us. We
                        shall therefore only use your name and other information which relates to
                        you in the manner set out in this Privacy Policy. We will only collect
                        information where it is necessary for us to do so and we will only collect
                        information if it is relevant to our dealings with you.
                    </p>
                    <p>
                        We will only keep your information for as long as we are either required to
                        by law or as is relevant for the purposes for which it was collected.
                    </p>
                    <p>
                        You can visit the Site and browse without having to provide personal
                        details. During your visit to the Site you remain anonymous and at no time
                        can we identify you unless you have an account on the Site and log on with
                        your user name and password.
                    </p>
                    <div className="mt-5">
                        <h6>1. Data that we collect</h6>
                        <p>
                            We may collect various pieces of information if you seek to place an
                            order for a product with us on the Site.
                        </p>
                        <p>
                            We collect, store and process your data for processing your purchase on
                            the Site and any possible later claims, and to provide you with our
                            services. We may collect personal information including, but not limited
                            to, your title, name, gender, date of birth, email address, postal
                            address, delivery address (if different), telephone number, mobile
                            number, fax number, payment details, payment card details or bank
                            account details.
                        </p>
                        <p>
                            We will use the information you provide to enable us to process your
                            orders and to provide you with the services and information offered
                            through our website and which you request. Further, we will use the
                            information you provide to administer your account with us; verify and
                            carry out financial transactions in relation to payments you make; audit
                            the downloading of data from our website; improve the layout and/or
                            content of the pages of our website and customize them for users;
                            identify visitors on our website; carry out research on our users'
                            demographics; send you information we think you may find useful or which
                            you have requested from us, including information about our products and
                            services, provided you have indicated that you have not objected to
                            being contacted for these purposes. Subject to obtaining your consent we
                            may contact you by email with details of other products and services. If
                            you prefer not to receive any marketing communications from us, you can
                            opt out at any time.
                        </p>
                        <p>
                            We may pass your name and address on to a third party in order to make
                            delivery of the product to you (for example to our courier or supplier).
                            You must only submit to us the Site information which is accurate and
                            not misleading and you must keep it up to date and inform us of changes.
                        </p>
                        <p>
                            Your actual order details may be stored with us but for security reasons
                            cannot be retrieved directly by us. However, you may access this
                            information by logging into your account on the Site. Here you can view
                            the details of your orders that have been completed, those which are
                            open and those which are shortly to be dispatched and administer your
                            address details, bank details ( for refund purposes) and any newsletter
                            to which you may have subscribed. You undertake to treat the personal
                            access data confidentially and not make it available to unauthorized
                            third parties. We cannot assume any liability for misuse of passwords
                            unless this misuse is our fault.
                        </p>
                    </div>
                    <div className="my-4">
                        <h6> 2. Cookies</h6>
                        <p>
                            The acceptance of cookies is not a requirement for visiting the Site.
                            However we would like to point out that the use of the 'basket'
                            functionality on the Site and ordering is only possible with the
                            activation of cookies. Cookies are tiny text files which identify your
                            computer to our server as a unique user when you visit certain pages on
                            the Site and they are stored by your Internet browser on your computer's
                            hard drive. Cookies can be used to recognize your Internet Protocol
                            address, saving you time while you are on, or want to enter, the Site.
                            We only use cookies for your convenience in using the Site (for example
                            to remember who you are when you want to amend your shopping cart
                            without having to re-enter your email address) and not for obtaining or
                            using any other information about you (for example targeted
                            advertising). Your browser can be set to not accept cookies, but this
                            would restrict your use of the Site. Please accept our assurance that
                            our use of cookies does not contain any personal or private details and
                            are free from viruses. If you want to find out more information about
                            cookies, go to http://www.allaboutcookies.org or to find out about
                            removing them from your browser, go to
                            http://www.allaboutcookies.org/manage-cookies/index.html.
                        </p>
                    </div>
                </div>
            </div>
            {isDesktop && <Footer />}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default TermAndCondition;
