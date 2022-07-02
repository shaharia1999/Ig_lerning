import React, { useEffect, Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import SingleCourseDetails from "../../component/SingleCourseDetails/SingleCourseDetails";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import MobileSingleCourseDetails from "../../component/SingleCourseDetails/MobileSingleCourseDetails";

function SingleCourseDetailsPage() {
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

            <div className="DesktopSingleCourseDetails">
                <SingleCourseDetails />
            </div>
            <div className="MobileSingleCourseDetails">
                <MobileSingleCourseDetails />
            </div>
        </Fragment>
    );
}
export default SingleCourseDetailsPage;