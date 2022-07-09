import React, { Fragment, useEffect } from "react";
import Checkout from "../../component/Checkout/Checkout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";
import MobileCheckout from "../../component/Checkout/MobileCheckout";

function CheckoutPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <div className="Desktop">
                <NavBarTop />
            </div>
            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <div className="DesktopCheckout">
                <Checkout />
            </div>
            <div className="MobileCheckout">
                <MobileCheckout />
            </div>
        </Fragment>
    );
}
export default CheckoutPage;