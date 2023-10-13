import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Review = () => {
    return (
        <div className="review-wrapper">
            <h4>My Review</h4>
            <div className="tabsWrapper">
                <Tabs>
                    <TabList>
                        <Tab>To Be Reviewed</Tab>
                        <Tab>History</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="no-data">
                            <p className="text-gray">There are no orders placed yet</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="no-data">
                            <p className="text-gray">There are no orders placed yet</p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Review;
