import React from 'react';
import  {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from '../../Pages/Dashboard';
import Login from '../../Pages/Login';
import Register from '../../Pages/Registration';





const Routes = () => { 
    return (
        <Router>
            <Switch>
            <Route path="/login">
                <Login title="welcome" />
            </Route>
            <Route exact path="/">
                <Dashboard/>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
        </Router>
    )
}

export default Routes;
