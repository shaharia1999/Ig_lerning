import React, { Fragment, useEffect } from "react";
import CartCheckout from "../../component/CartCheckout/CartCheckout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";

function CartCheckoutPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <CartCheckout />
        </Fragment>
    );
}
export default CartCheckoutPage;