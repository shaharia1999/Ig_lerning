import React, { useEffect, Fragment } from "react";
import Footer from "../../component/Common/Footer/Footer";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import ClientSays from '../../component/ClientSays/ClientSays';
import Partner from '../../component/Home/Partner/Partner';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import TrainerProfile from "../../component/TrainerProfile/TrainerProfile";
import TrainerBanner from "../../component/TrainerProfile/TrainerBanner/TrainerBanner";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';

function TrainerProfilePage() {
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

            <TrainerBanner />
            <TrainerProfile />
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
export default TrainerProfilePage;