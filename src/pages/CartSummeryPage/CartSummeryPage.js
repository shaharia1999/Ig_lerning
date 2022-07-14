import React, { Fragment, useEffect } from "react";
import CartSummery from "../../component/CartSummery/CartSummery";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";
import CartSummeryMobile from "../../component/CartSummery/CartSummeryMobile";

function CartSummeryPage() {
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

            <div className="DesktopCartSummery">
                <CartSummery />
            </div>
            <div className="MobileCartSummery">
                <CartSummeryMobile />
            </div>
        </Fragment>
    );
}
export default CartSummeryPage;