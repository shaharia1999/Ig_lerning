import React, { Fragment, useEffect } from "react";
import CartCheckout from "../../component/CartCheckout/CartCheckout";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";
import CartCheckoutMobile from "../../component/CartCheckout/CartCheckoutMobile";
import CartCheckoutTablet from "../../component/CartCheckout/CartCheckoutTablet";

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

            <div className="DesktopCartCheckout">
                <CartCheckout />
            </div>
            <div className="MobileCartCheckout">
                <CartCheckoutMobile />
            </div>
            <div className="TabletCartCheckout">
                <CartCheckoutTablet />
            </div>
        </Fragment>
    );
}
export default CartCheckoutPage;