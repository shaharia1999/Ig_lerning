import React, { Fragment } from "react";
import CartPayment from "../../component/CartPayment/CartPayment";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";

function CartPaymentPage() {
    return (
        <Fragment>
            <NavBarTop/>
            <CartPayment />
        </Fragment>
    );
}
export default CartPaymentPage;