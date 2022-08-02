import React, { Fragment, useEffect } from "react";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import MyCourseDetails from "../../component/MyCourseDetails/MyCourseDetails";

function MyCourseDetailsPage() {

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

            <MyCourseDetails/>
        </Fragment>
    );
}
export default MyCourseDetailsPage;