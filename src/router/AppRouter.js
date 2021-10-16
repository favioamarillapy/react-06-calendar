import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../actions/authAction';
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, _id } = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return <h5>Loading...</h5>
    }

    return (
        <Router>

            <Switch>

                <PublicRoute
                    exact
                    path="/login"
                    component={AuthScreen}
                    isAuthenticated={!!_id}
                />

                <PrivateRoute
                    exact
                    path="/"
                    component={CalendarScreen}
                    isAuthenticated={!!_id}
                />

                <Redirect to="/login" />
            </Switch>
        </Router>
    )
}
