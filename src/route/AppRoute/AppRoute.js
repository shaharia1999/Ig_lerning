import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import OpssPage from '../../pages/OpssPage/OpssPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import IgLearnProPage from '../../pages/IgLearnProPage/IgLearnProPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import ForgetPasswordPage from '../../pages/ForgetPasswordPage/ForgetPasswordPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import PricingPage from '../../pages/PricingPage/PricingPage';
import SingleCourseDetailsPage from '../../pages/SingleCourseDetailsPage/SingleCourseDetailsPage';
import TrainerProfilePage from '../../pages/TrainerProfilePage/TrainerProfilePage';
import CourseSearchFilterPage from '../../pages/CourseSearchFilterPage/CourseSearchFilterPage';
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage';
import CartCheckoutPage from '../../pages/CartCheckoutPage/CartCheckoutPage';
import CartPaymentPage from '../../pages/CartPaymentPage/CartPaymentPage';
import CartSummeryPage from '../../pages/CartSummeryPage/CartSummeryPage';
import MyCoursePage from '../../pages/MyCoursePage/MyCoursePage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
                    <Route exact path="/login" render={(props) => <LoginPage {...props} key={Date.now()} />} />
                    <Route exact path="/registration" render={(props) => <RegistrationPage {...props} key={Date.now()} />} />
                    <Route exact path="/forget-password" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />} />

                    <Route exact path="/ig-learn-Pro" render={(props) => <IgLearnProPage {...props} key={Date.now()} />} />
                    <Route exact path="/contact-us" render={(props) => <ContactPage {...props} key={Date.now()} />} />
                    <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />

                    <Route exact path="/price" render={(props) => <PricingPage {...props} key={Date.now()} />} />
                    <Route exact path="/checkout" render={(props) => <CheckoutPage {...props} key={Date.now()} />} />

                    <Route exact path="/cart-summery" render={(props) => <CartSummeryPage {...props} key={Date.now()} />} />
                    <Route exact path="/cart-checkout" render={(props) => <CartCheckoutPage {...props} key={Date.now()} />} />
                    <Route exact path="/cart-checkout-payment" render={(props) => <CartPaymentPage {...props} key={Date.now()} />} />

                    <Route exact path="/my-course" render={(props) => <MyCoursePage {...props} key={Date.now()} />} />

                    <Route exact path="/course-details/:id" render={(props) => <SingleCourseDetailsPage {...props} key={Date.now()} />} />
                    <Route exact path="/trainer-profile" render={(props) => <TrainerProfilePage {...props} key={Date.now()} />} />
                    <Route exact path="/course-search-filter" render={(props) => <CourseSearchFilterPage {...props} key={Date.now()} />} />
                    
                    <Route path="" component={OpssPage} /> 
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;