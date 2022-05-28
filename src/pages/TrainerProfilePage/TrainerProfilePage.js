import React, { Component, Fragment } from "react";
import Footer from "../../component/Common/Footer/Footer";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import ClientSays from '../../component/ClientSays/ClientSays';
import Partner from '../../component/Home/Partner/Partner';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import TrainerProfile from "../../component/TrainerProfile/TrainerProfile";

class TrainerProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TrainerProfile/>
                <ClientSays/>
                <Partner/>
                <Footer />
                <CopyRight/>
            </Fragment>
        );
    }
}
export default TrainerProfilePage;