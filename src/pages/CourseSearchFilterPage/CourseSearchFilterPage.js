import React, { Fragment, useEffect } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from '../../component/Home/Partner/Partner';
import CourseSearchFilter from "../../component/CourseSearchFilter/CourseSearchFilter";
import darkModeTheme from "../../darkModeTheme";

function CourseSearchFilterPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <CourseSearchFilter/>
            <Partner/>
            <Footer />
            <CopyRight />
        </Fragment>
    );
}


export default CourseSearchFilterPage;