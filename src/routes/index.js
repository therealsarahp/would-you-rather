import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import App from '../components/app';

const Routes = () => {
    const { authUser } = useSelector(({ auth }) => auth);
    const location = useLocation();

    if (location.pathname === '' || location.pathname === '/') {
        return <Redirect to={'/sample-page'} />;
    } else if (authUser && location.pathname === '/signin') {
        return <Redirect to={'/sample-page'} />;
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/signin" component={Login} />
                {/*<Route path="/signup" component={Register} />*/}
                {/*<Route path="/forgot-password" component={ForgotPasswordPage} />*/}
                <Route component={Error404} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
