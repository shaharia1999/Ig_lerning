import React, { Fragment, useEffect } from "react";
import CartSummery from "../../component/CartSummery/CartSummery";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";

function CartSummeryPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <CartSummery />
        </Fragment>
    );
}
export default CartSummeryPage;