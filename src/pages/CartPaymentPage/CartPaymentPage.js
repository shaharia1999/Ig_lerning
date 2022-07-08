import React, { Fragment, useEffect } from "react";
import CartPayment from "../../component/CartPayment/CartPayment";
import CartPaymentMobile from "../../component/CartPayment/CartPaymentMobile";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";

function CartPaymentPage() {
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

            <div className="CartPaymentDesktop">
                <CartPayment />
            </div>
            <div className="CartPaymentMobile">
                <CartPaymentMobile />
            </div>
        </Fragment>
    );
}
export default CartPaymentPage;