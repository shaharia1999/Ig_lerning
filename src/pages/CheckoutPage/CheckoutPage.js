import React, { Fragment, useEffect } from "react";
import Checkout from "../../component/Checkout/Checkout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";

function CheckoutPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <Checkout />
        </Fragment>
    );
}
export default CheckoutPage;