import React, { Component, Fragment } from 'react';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';
import Partner from '../../component/Home/Partner/Partner';
import ClientSays from '../../component/ClientSays/ClientSays';
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import HomeBanner from '../../component/Home/HomeBanner/HomeBanner';
import HomeAdvertisedment from '../../component/Home/HomeAdvertisedment/HomeAdvertisedment';
import Finance from '../../component/Course/RecentlyAddedCourse/Finance/Finance';

class FinancePage extends Component {

    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <HomeBanner/>
                <Finance/>
                <HomeAdvertisedment/>
                <ClientSays/>
                <Partner/>
                <Footer />
                <CopyRight/>
            </Fragment>
        );
    }
}

export default FinancePage;