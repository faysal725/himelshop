import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import All from './All';
import './MyOrder.scss';
import ToPay from './ToPay';
import ToReceived from './ToReceived';
import ToShip from './ToShip';

const MyOrder = () => {
    return (
        <div className="tabsWrapper">
            <Tabs>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>To Pay</Tab>
                    <Tab>To Ship</Tab>
                    <Tab>To Receive</Tab>
                </TabList>
                <TabPanel>
                    <All />
                </TabPanel>
                <TabPanel>
                    <ToPay />
                </TabPanel>
                <TabPanel>
                    <ToShip />
                </TabPanel>
                <TabPanel>
                    <ToReceived />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyOrder;
