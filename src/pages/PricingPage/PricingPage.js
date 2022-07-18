import React, { Fragment, useEffect } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from "../../component/Home/Partner/Partner";
import PriceBanner from "../../component/Price/PriceBanner/PriceBanner";
import PriceAccordonSection from "../../component/Price/PriceAccordonSection/PriceAccordonSection";
import PriceContactSection from "../../component/Price/PriceContactSection/PriceContactSection";
import Price from "../../component/Price/Price/Price";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';
import PriceMobile from "../../component/Price/Price/PriceMobile";
import PriceContactSectionMobile from "../../component/Price/PriceContactSection/PriceContactSectionMobile";

function PricingPage() {
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

            <PriceBanner />

            <div className="PriceDesktop">
                <Price />
            </div>
            <div className="PriceMobile">
                <PriceMobile />
            </div>

            <PriceAccordonSection />

            <div className="PriceContactDesktop">
                <PriceContactSection />
            </div>
            <div className="PriceContactMobile">
                <PriceContactSectionMobile />
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
export default PricingPage;