import { useHistory } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import MyWishlist from './MyWishlist';

const Wishlist = () => {
    const history = useHistory();

    return (
        <div className="review-wrapper">
            <h4>My Wishlist</h4>
            <div className="tabsWrapper">
                <Tabs>
                    <TabList>
                        <Tab>My Wishlist</Tab>
                        <Tab>Past Purchases</Tab>
                    </TabList>

                    <TabPanel>
                        <MyWishlist />
                    </TabPanel>
                    <TabPanel>
                        <div className="no-data">
                            <p className="text-gray">There are no Product Added</p>
                            <button
                                onClick={() => history.push('/')}
                                type="button"
                                className="continue-btn"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Wishlist;
