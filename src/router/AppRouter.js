import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { startChecking } from '../actions/authAction';
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <Router>
            <Switch>

                <Route exact path="/login">
                    <AuthScreen />
                </Route>

                <Route exact path="/">
                    <CalendarScreen />
                </Route>

                <Redirect to="/login" />
            </Switch>
        </Router>
    )
}
