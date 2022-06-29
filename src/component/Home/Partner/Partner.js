import React, { Component, Fragment } from 'react';
import Okta from "../../../asset/images/partner/okta.svg";
import Fancykit from "../../../asset/images/partner/fancykit.svg";
import Deters from "../../../asset/images/partner/deters.svg";
import Solana from "../../../asset/images/partner/solana.svg";
import TheCube from "../../../asset/images/partner/the-cube.svg";

class Partner extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-8 mb-8">
                    <h4 className="xl:text-4xl text-xl	font-semibold text-sectionTitleColor xl:ml-3 ml-6 dark:text-white">Our Partners</h4>
                    <div className="flex flex-wrap mt-3 p-3 justify-center">
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="h-18 w-auto" src={Okta} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="h-18 w-auto" src={Fancykit} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="h-18 w-auto" src={Deters} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="h-18 w-auto" src={Solana} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="h-18 w-auto" src={TheCube} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Partner;