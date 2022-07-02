import React, { Fragment, useEffect } from "react";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import MyCourse from "../../component/MyCourse/MyCourse";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';

function MyCoursePage() {
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
            <MyCourse />
        </Fragment>
    );
}
export default MyCoursePage;