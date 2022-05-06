import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import OpssPage from '../../pages/OpssPage/OpssPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import IgLearnProPage from '../../pages/IgLearnProPage/IgLearnProPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import  BigDataPage from '../../pages/BigDataPage/BigDataPage';
import FinancePage from '../../pages/FinancePage/FinancePage';
import DigitalMarketingPage from '../../pages/DigitalMarketingPage/DigitalMarketingPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/big-data" render={(props) => <BigDataPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/finance" render={(props) => <FinancePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/digital-marketing" render={(props) => <DigitalMarketingPage {...props} key={Date.now()}/>}/>

                    <Route exact path="/login" render={(props) => <LoginPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/registration" render={(props) => <RegistrationPage {...props} key={Date.now()}/>}/>

                    <Route exact path="/ig-learn-Pro" render={(props) => <IgLearnProPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/contact-us" render={(props) => <ContactPage {...props} key={Date.now()}/>}/>

                    <Route path="" component={OpssPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;