import React, { Fragment, useEffect } from "react";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import MyCourse from "../../component/MyCourse/MyCourse";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import MyCourseMobile from "../../component/MyCourse/MyCourseMobile";

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

            <div className="MyCourseForDesktop">
                <MyCourse />
            </div>
            <div className="MyCourseForMobile">
                <MyCourseMobile />
            </div>
        </Fragment>
    );
}
export default MyCoursePage;