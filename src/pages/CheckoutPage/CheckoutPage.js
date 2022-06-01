import React, { Fragment } from "react";
import Checkout from "../../component/Checkout/Checkout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";

function CheckoutPage() {
    return (
        <Fragment>
            <NavBarTop/>
            <Checkout />
        </Fragment>
    );
}
export default CheckoutPage;