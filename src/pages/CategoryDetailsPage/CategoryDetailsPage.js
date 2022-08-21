import React, { Fragment, useEffect } from "react";
import darkModeTheme from "../../darkModeTheme";
import NavBarTop from "../../component/Common/NavBarTop/NavBarTop";
import NavMenuMobile from "../../component/Common/NavMenuMobile/NavMenuMobile";
import CategoryBreadcumbs from "../../component/CategoryDetails/CategoryBreadcumbs/CategoryBreadcumbs";
import ChooseCourse from "../../component/CategoryDetails/ChooseCourse/ChooseCourse";
import FeatureCourse from "../../component/CategoryDetails/FeatureCourse/FeatureCourse";
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from '../../component/Home/Partner/Partner';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';
import CategoryCourseFilter from "../../component/CategoryDetails/CategoryCourseFilter/CategoryCourseFilter";

function CategoryDetailsPage() {
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

            <CategoryBreadcumbs/>

            <ChooseCourse/>

            <FeatureCourse/>


            <CategoryCourseFilter/>


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

export default CategoryDetailsPage;