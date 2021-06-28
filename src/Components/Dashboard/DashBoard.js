import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard1 from './DashBoard1/DashBoard1';
import Profile from './Profile/Profile';
function DashBoard() {
    return (
        <Router>
            <h1>dashjs</h1>
            <Switch>
                {/* <Route path="/das" exact component={() => <DashBoard1 />} />
                <Route path="/profile" exact component={() => <Profile />} /> */}
                {/* <Route path="/" exact component={() => <AboutUs />} /> */}

            </Switch>

        </Router>
    )
}

export default DashBoard

