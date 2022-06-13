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
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3 dark:text-white">Our Partners</h4>
                    <div className="flex flex-row mt-3 p-3">
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Okta} alt=""/>
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Fancykit} alt=""/>
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Deters} alt=""/>
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Solana} alt=""/>
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={TheCube} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Partner;