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

function PricingPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <PriceBanner />
            <Price />
            <PriceAccordonSection />
            <PriceContactSection />
            <Partner />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}
export default PricingPage;