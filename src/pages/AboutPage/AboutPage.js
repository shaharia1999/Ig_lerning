import React, { Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import OurMission from "../../component/AboutUs/OurMission/OurMission";
import ProvideVission from "../../component/AboutUs/ProvideVission/ProvideVission";
import LeadingStudentVideoSection from "../../component/AboutUs/LeadingStudentVideoSection/LeadingStudentVideoSection";
import AboutBanner from "../../component/AboutUs/AboutBanner/AboutBanner";
import AboutAnalytics from "../../component/AboutUs/AboutAnalytics/AboutAnalytics";
import OurTeam from "../../component/AboutUs/OurTeam/OurTeam";
import LearningTeachingSection from "../../component/AboutUs/LearningTeachingSection/LearningTeachingSection";
import AboutContact from "../../component/AboutUs/AboutContact/AboutContact";
import WeEmpower from "../../component/AboutUs/WeEmpower/WeEmpower";

function AboutPage() {
    return (
        <Fragment>
            <NavBarTop />
            <AboutBanner/>
            <LearningTeachingSection/>
            <OurMission/>
            <ProvideVission/>
            <AboutAnalytics/>
            <LeadingStudentVideoSection/>
            <WeEmpower/>
            <OurTeam/>
            <AboutContact/>
            <Footer />
            <CopyRight />
        </Fragment>
    );
}


export default AboutPage;