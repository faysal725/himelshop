import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './Affiliate.scss';
import Balance from './Balance';
import Information from './Information';
import Payouts from './Payouts';
import Promotions from './Promotions';
import Recommendations from './Recommendations';
import Reports from './Reports';
import Transitions from './Transitions';

const Affiliate = () => {
    return (
        <div className="review-wrapper">
            <h4>My Affiliate</h4>
            <div className="tabsWrapper">
                <Tabs>
                    <TabList>
                        <Tab>Information</Tab>
                        <Tab>Promotions</Tab>
                        <Tab>Recommendations</Tab>
                        <Tab>Reports</Tab>
                        <Tab>Balance</Tab>
                        <Tab>Transitions</Tab>
                        <Tab>Payouts</Tab>
                    </TabList>

                    <TabPanel>
                        <Information />
                    </TabPanel>
                    <TabPanel>
                        <Promotions />
                    </TabPanel>
                    <TabPanel>
                        <Recommendations />
                    </TabPanel>
                    <TabPanel>
                        <Reports />
                    </TabPanel>
                    <TabPanel>
                        <Balance />
                    </TabPanel>
                    <TabPanel>
                        <Transitions />
                    </TabPanel>
                    <TabPanel>
                        <Payouts />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Affiliate;
