import React, { useEffect, Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import IgLearnProBanner from '../../component/IgLearnPro/IgLearnProBanner/IgLearnProBanner';
import CoachTrainer from '../../component/IgLearnPro/CoachTrainer/CoachTrainer';
import OurFeatures from '../../component/IgLearnPro/OurFeatures/OurFeatures';
import MediaTalk from '../../component/IgLearnPro/MediaTalk/MediaTalk';
import ClientSays from '../../component/ClientSays/ClientSays';
import Partner from '../../component/Home/Partner/Partner';
import Footer from '../../component/Common/Footer/Footer';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import darkModeTheme from "../../darkModeTheme";

function IgLearnProPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <IgLearnProBanner />
            <CoachTrainer />
            <OurFeatures />
            <MediaTalk />
            <ClientSays />
            <Partner />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}
export default IgLearnProPage;