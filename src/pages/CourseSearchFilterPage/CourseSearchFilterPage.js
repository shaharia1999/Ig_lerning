import React, { Fragment, useEffect } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from '../../component/Home/Partner/Partner';
import CourseSearchFilter from "../../component/CourseSearchFilter/CourseSearchFilter";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';
import MobileCourseSearchFilter from "../../component/CourseSearchFilter/MobileCourseSearchFilter";
import FeatureCourse from "../../component/CategoryDetails/FeatureCourse/FeatureCourse";
import PopularInstructor from "../../component/CourseSearchFilter/PopularInstructor";
import PopularTopics from "../../component/CourseSearchFilter/PopularTopics";
import ArtDesign from "../../component/CourseSearchFilter/ArtDesign";

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
            <div>
                <ArtDesign/>
            </div>
            <div className="">
                <FeatureCourse/>
            </div>
            <div>
                <PopularTopics/>
            </div>
            <div>
                <PopularInstructor/>
            </div>
            <div className="DesktopCourseSearchFilter">
                <CourseSearchFilter />
            </div>
            <div className="MobileCourseSearchFilter">
                <MobileCourseSearchFilter />
            </div>

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