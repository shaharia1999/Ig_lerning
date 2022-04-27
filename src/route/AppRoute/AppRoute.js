import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import OpssPage from '../../pages/OpssPage/OpssPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>

                    <Route path="" component={OpssPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;