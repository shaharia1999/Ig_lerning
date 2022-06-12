import React, { useEffect, Fragment } from "react";
import Login from '../../component/Login/Login';
import darkModeTheme from "../../darkModeTheme";

function LoginPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <Login />
        </Fragment>
    );
}
export default LoginPage;