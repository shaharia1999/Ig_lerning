import React, { useEffect, Fragment } from "react";
import Registration from '../../component/Registration/Registration';
import darkModeTheme from "../../darkModeTheme";

function RegistrationPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <Registration />
        </Fragment>
    );
}
export default RegistrationPage;