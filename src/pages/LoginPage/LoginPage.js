import React, { Fragment } from "react";
import Login from '../../component/Login/Login';
import MobileLogin from "../../component/Login/MobileLogin";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";

function LoginPage() {
    return (
        <Fragment>
            <div className="DesktopLogin">
                <Login />
            </div>
            <div className="MobileLogin">
                <NavMenuMobile/>
                <MobileLogin />
            </div>
        </Fragment>
    );
}
export default LoginPage;