import React, { Fragment, useEffect } from "react";
import CartPayment from "../../component/CartPayment/CartPayment";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";

function CartPaymentPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <CartPayment />
        </Fragment>
    );
}
export default CartPaymentPage;