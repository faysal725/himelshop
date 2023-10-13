import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import bKash from '../../../assets/images/bkash.jpg';
import nagad from '../../../assets/images/nagad.jpg';
import ShoppingHeader from '../../../Components/ShopingHeader/ShoppingHeader';
import OrderSummery from '../OrderSummery/OrderSummery';
import './PaymentDesktop.scss';
import TabContent from './TabContent';

const PaymentDesktop = () => {
    return (
        <>
            <ShoppingHeader step={3} />
            <div className="container mt-3">
                <h6 className="py-3">Select Payment Method</h6>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="paymentTabsWrapper">
                            <Tabs>
                                <TabList>
                                    <Tab>
                                        <div className="tab-item">
                                            <img width="70px" src={bKash} alt="" />
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div className="tab-item">
                                            <img width="70px" src={nagad} alt="" />
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div className="tab-item">
                                            <img width="70px" src={nagad} alt="" />
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div className="tab-item">
                                            <img width="70px" src={nagad} alt="" />
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div className="tab-item">
                                            <img width="70px" src={nagad} alt="" />
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div className="tab-item">
                                            <img width="70px" src={nagad} alt="" />
                                        </div>
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel>
                                    <TabContent />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <OrderSummery />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentDesktop;
