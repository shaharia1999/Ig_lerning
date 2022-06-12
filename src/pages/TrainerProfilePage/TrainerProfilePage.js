import React, { useEffect, Fragment } from "react";
import Footer from "../../component/Common/Footer/Footer";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import ClientSays from '../../component/ClientSays/ClientSays';
import Partner from '../../component/Home/Partner/Partner';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import TrainerProfile from "../../component/TrainerProfile/TrainerProfile";
import TrainerBanner from "../../component/TrainerProfile/TrainerBanner/TrainerBanner";
import darkModeTheme from "../../darkModeTheme";

function TrainerProfilePage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <TrainerBanner />
            <TrainerProfile />
            <ClientSays />
            <Partner />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}
export default TrainerProfilePage;