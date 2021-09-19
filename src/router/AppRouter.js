import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
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
