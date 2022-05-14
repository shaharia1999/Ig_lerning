import React, { Component, Fragment } from 'react';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';
import Partner from '../../component/Home/Partner/Partner';
import ClientSays from '../../component/ClientSays/ClientSays';
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import HomeBanner from '../../component/Home/HomeBanner/HomeBanner';
import HomeAdvertisedment from '../../component/Home/HomeAdvertisedment/HomeAdvertisedment';
import BusinessCompany from '../../component/Course/RecentlyAddedCourse/BusinessCompany/BusinessCompany';
import RecentlyAddedCourseSectionTwo from '../../component/RecentlyAddedCourseSectionTwo/RecentlyAddedCourseSectionTwo';

class HomePage extends Component {
    
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <HomeBanner/>
                <BusinessCompany/>
                <RecentlyAddedCourseSectionTwo/>
                <HomeAdvertisedment/>
                <ClientSays/>
                <Partner/>
                <Footer />
                <CopyRight/>
            </Fragment>
        );
    }
}

export default HomePage;