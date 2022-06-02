import React, { Fragment } from "react";
import CartSummery from "../../component/CartSummery/CartSummery";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";

function CartSummeryPage() {
    return (
        <Fragment>
            <NavBarTop/>
            <CartSummery />
        </Fragment>
    );
}
export default CartSummeryPage;