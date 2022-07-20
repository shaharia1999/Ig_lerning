import React, { useEffect, Fragment, useState } from 'react';
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
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import HomeBannerMobile from '../../component/Home/HomeBanner/HomeBannerMobile';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';
import ApiUrl from '../../Api/ApiUrl';
import axios from "axios";



function HomePage() {
 
    const [cartInfo, setCartInfo] = useState([]);
    useEffect(() => {
        const cart_id = localStorage.getItem('cart_id')
        console.log('cart id = ', cart_id);
        if (cart_id != null){

        }
        else{
            axios.get(`${ApiUrl.BaseUrl}api/course/cart/`).then((response) => {
                if (response.data.error === false) {
                    setCartInfo(response.data.data);
                    localStorage.setItem('cart_info', JSON.stringify(response.data.data))
                    localStorage.setItem('cart_id', response.data.data['cart_id'])
                    console.log('cart infor = ', response.data.data);
                    console.log('cart id = ', response.data.data['cart_id']);
                }
            });
        }
        
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

            <div className="DesktopHomeBanner">
                <HomeBanner />
            </div>
            <div className="MobileHomeBanner">
                <HomeBannerMobile />
            </div>

            <BusinessCompany />
            <RecentlyAddedCourseSectionTwo />
            <MostPopularCourse />
            <RecommandForYou />
            <OnlyOnIntelloGeek />
            <InBaseOfYourInterest />
            <HomeAdvertisedment />
            <ClientSays />
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
export default HomePage;