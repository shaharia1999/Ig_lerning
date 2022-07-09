import React, { Fragment, useEffect } from "react";
import CartCheckout from "../../component/CartCheckout/CartCheckout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";

function CartCheckoutPage() {
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
            <CartCheckout />
        </Fragment>
    );
}
export default CartCheckoutPage;