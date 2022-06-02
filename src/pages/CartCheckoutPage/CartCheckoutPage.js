import React, { Fragment } from "react";
import CartCheckout from "../../component/CartCheckout/CartCheckout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";

function CartCheckoutPage() {
    return (
        <Fragment>
            <NavBarTop/>
            <CartCheckout />
        </Fragment>
    );
}
export default CartCheckoutPage;