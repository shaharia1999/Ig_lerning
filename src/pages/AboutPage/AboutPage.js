import React, { Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import OurMission from "../../component/AboutUs/OurMission/OurMission";
import ProvideVission from "../../component/AboutUs/ProvideVission/ProvideVission";
import LeadingStudentVideoSection from "../../component/AboutUs/LeadingStudentVideoSection/LeadingStudentVideoSection";

function AboutPage() {
    return (
        <Fragment>
            <NavBarTop />
            <OurMission/>
            <ProvideVission/>
            <LeadingStudentVideoSection/>

            <Footer />
            <CopyRight />
        </Fragment>
    );
}


export default AboutPage;