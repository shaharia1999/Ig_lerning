import React, { useEffect, Fragment } from "react";
import ContactUs from "../../component/ContactUs/ContactUs";
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';
import Partner from '../../component/Home/Partner/Partner';
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import OurOffices from "../../component/OurOffices/OurOffices";
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import FooterMobile from '../../component/Common/FooterMobile/FooterMobile';
import ContactMobile from "../../component/ContactUs/ContactMobile";
import OurOfficeMobile from "../../component/OurOffices/OurOfficeMobile";

function ContactPage() {

    useEffect(() => {
        darkModeTheme();
    }, [])

    return (
        <Fragment>
            <div className="bg-white">
                <div className="Desktop">
                    <NavBarTop />
                </div>
                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                <div className="DesktopContact">
                    <ContactUs />
                </div>
                <div className="MobileContact">
                    <ContactMobile />
                </div>

                <div className="DesktopOffice">
                    <OurOffices />
                </div>
                <div className="MobileOffice">
                    <OurOfficeMobile />
                </div>

                <Partner />
                
                <div className="DesktopFooter">
                    <Footer />
                </div>

                <div className="MobileFooter">
                    <FooterMobile />
                </div>
                <CopyRight />
            </div>
        </Fragment>
    );
}
export default ContactPage;