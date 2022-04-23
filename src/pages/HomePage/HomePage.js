import React, { Component, Fragment } from 'react';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Footer from '../../component/Common/Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Footer />
                <CopyRight/>
            </Fragment>
        );
    }
}

export default HomePage;