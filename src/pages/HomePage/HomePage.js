import React, { useEffect, Fragment } from 'react';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';
import Partner from '../../component/Home/Partner/Partner';
import ClientSays from '../../component/ClientSays/ClientSays';
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import HomeBanner from '../../component/Home/HomeBanner/HomeBanner';
import HomeAdvertisedment from '../../component/Home/HomeAdvertisedment/HomeAdvertisedment';
import BusinessCompany from '../../component/Course/RecentlyAddedCourse/BusinessCompany/BusinessCompany';
import RecentlyAddedCourseSectionTwo from '../../component/RecentlyAddedCourseSectionTwo/RecentlyAddedCourseSectionTwo';
import MostPopularCourse from '../../component/Home/MostPopularCourse/MostPopularCourse';
import RecommandForYou from '../../component/Home/RecommandForYou/RecommandForYou';
import OnlyOnIntelloGeek from '../../component/Home/OnlyOnIntelloGeek/OnlyOnIntelloGeek';
import InBaseOfYourInterest from '../../component/Home/InBaseOfYourInterest/InBaseOfYourInterest';
import darkModeTheme from "../../darkModeTheme";

function HomePage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <HomeBanner />
            <BusinessCompany />
            <RecentlyAddedCourseSectionTwo />
            <MostPopularCourse />
            <RecommandForYou />
            <OnlyOnIntelloGeek />
            <InBaseOfYourInterest />
            <HomeAdvertisedment />
            <ClientSays />
            <Partner />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}
export default HomePage;