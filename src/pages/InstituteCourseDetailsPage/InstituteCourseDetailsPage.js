import React, { useEffect, Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import darkModeTheme from "../../darkModeTheme";
import NavMenuMobile from '../../component/Common/NavMenuMobile/NavMenuMobile';
import InstituteCourseDetails from "../../component/InstituteCourseDetails/InstituteCourseDetails";


function InstituteCourseDetailsPage() {
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
        
            <InstituteCourseDetails />
        </Fragment>
    );
}
export default InstituteCourseDetailsPage;