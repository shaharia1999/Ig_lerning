import React, { Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from "../../component/Home/Partner/Partner";
import PriceBanner from "../../component/Price/PriceBanner/PriceBanner";
import PriceAccordonSection from "../../component/Price/PriceAccordonSection/PriceAccordonSection";

function PricingPage() {
    return (
        <Fragment>
            <NavBarTop />
            <PriceBanner />
            <PriceAccordonSection />

            <Partner />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}


export default PricingPage;