import React, { useEffect, Fragment } from 'react';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';
import Partner from '../../component/Home/Partner/Partner';
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import Opss from '../../component/Opss/Opss';
import darkModeTheme from "../../darkModeTheme";

function OpssPage() {
    useEffect(() => {
        darkModeTheme();
    }, [])
    return (
        <Fragment>
            <NavBarTop />
            <Opss />
            <Partner />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}
export default OpssPage;
