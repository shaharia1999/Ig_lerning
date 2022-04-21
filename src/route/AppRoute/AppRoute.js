import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;