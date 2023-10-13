import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
    const { user } = useSelector(state => state.auth)
    return (
        <Route {...rest}
            render={() => {
                return user && user.code === 200 ? <Redirect to='/' /> : <Component />;
            }
            } />
    )
}

export default ProtectedRoute