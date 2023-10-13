import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

const Profile = React.lazy(() => import('./Profile/Profile'));
const Address = React.lazy(() => import('./Address/Address'));
const Order = React.lazy(() => import('./Order/Order'));
const MyOrder = React.lazy(() => import('./MyOrder/MyOrder'));
const Return = React.lazy(() => import('./Return/Return'));
const Cancel = React.lazy(() => import('./Cancel/Cancel'));
const Review = React.lazy(() => import('./Review/Review'));
const Wishlist = React.lazy(() => import('./wishlist/Wishlist'));
const Affiliate = React.lazy(() => import('./Affiliate/Affiliate'));

const UserRoutes = ({ match }) => {
    return (
        <div className="col-md-9">
            <div className="dashboard-wrapper p-3">
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <Suspense fallback="Loading...">
                            <Profile />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/address`}>
                        <Suspense fallback="Loading...">
                            <Address />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/voucher`}>Hello It Not Voucher</Route>
                    <Route path={`${match.path}/order`}>
                        <Suspense fallback="Loading...">
                            <Order />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/my-order`}>
                        <Suspense fallback="Loading...">
                            <MyOrder />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/return`}>
                        <Suspense fallback="Loading...">
                            <Return />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/cancel`}>
                        <Suspense fallback="Loading...">
                            <Cancel />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/review`}>
                        <Suspense fallback="Loading...">
                            <Review />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/wishlist`}>
                        <Suspense fallback="Loading...">
                            <Wishlist />
                        </Suspense>
                    </Route>
                    <Route path={`${match.path}/affiliate`}>
                        <Suspense fallback="Loading...">
                            <Affiliate />
                        </Suspense>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default withRouter(UserRoutes);
