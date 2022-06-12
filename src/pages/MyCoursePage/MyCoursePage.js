import React, { Fragment, useEffect } from "react";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import MyCourse from "../../component/MyCourse/MyCourse";
import darkModeTheme from "../../darkModeTheme";

function MyCoursePage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <MyCourse />
        </Fragment>
    );
}
export default MyCoursePage;