import React, { Fragment, useEffect } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from '../../component/Home/Partner/Partner';
import CourseSearchFilter from "../../component/CourseSearchFilter/CourseSearchFilter";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';

function CourseSearchFilterPage() {
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

            <CourseSearchFilter />
            <Partner />
            <div className="DesktopFooter">
                <Footer />
            </div>
            <div className="MobileFooter">
                <FooterMobile />
            </div>
            <CopyRight />
        </Fragment>
    );
}


export default CourseSearchFilterPage;