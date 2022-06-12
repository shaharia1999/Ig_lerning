import React, { Fragment, useEffect } from "react";
import ForgetPassword from "../../component/ForgetPassword/ForgetPassword";
import darkModeTheme from "../../darkModeTheme";

function ForgetPasswordPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <ForgetPassword />
        </Fragment>
    );
}

export default ForgetPasswordPage;