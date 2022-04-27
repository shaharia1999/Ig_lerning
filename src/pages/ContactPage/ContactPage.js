import React, { Component, Fragment } from "react";
import ContactUs from "../../component/ContactUs/ContactUs";
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';
import Partner from '../../component/Home/Partner/Partner';
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import OurOffices from "../../component/OurOffices/OurOffices";

class ContactPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <ContactUs/>
                <OurOffices/>
                <Partner/>
                <Footer />
                <CopyRight/>
            </Fragment>
        );
    }
}
export default ContactPage;