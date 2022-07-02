import React, { Fragment } from "react";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";
import MobileRegistration from "../../component/Registration/MobileRegistation";
import Registration from '../../component/Registration/Registration';

function RegistrationPage() {
    return (
        <Fragment>
            <div className="DesktopRegistration">
                <Registration />
            </div>
            <div className="MobileRegistration">
                <NavMenuMobile />
                <MobileRegistration />
            </div>
        </Fragment>
    );
}
export default RegistrationPage;