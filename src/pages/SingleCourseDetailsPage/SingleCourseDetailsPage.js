import React, { useEffect, Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import SingleCourseDetails from "../../component/SingleCourseDetails/SingleCourseDetails";
import darkModeTheme from "../../darkModeTheme";

function SingleCourseDetailsPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <SingleCourseDetails />
        </Fragment>
    );
}
export default SingleCourseDetailsPage;