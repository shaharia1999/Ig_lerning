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
                <div className="container 2xl:my-12 xl:my-8 lg:-my-8 my-12 2xl:pl-16 2xl:-pr-4 xl:pl-12 xl:-pr-4 lg:pl-16 lg:-pr-16 2xl:mt-8 xl:mt-8 lg:mt-8">
                    <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-sectionTitleColor dark:text-white 2xl:ml-6 xl:ml-4 lg:ml-3 ml-4 -mt-6">Our Partners</h4>
                    <div className="flex flex-wrap mt-3 p-3 justify-center">
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="2xl:h-16 xl:h-16 lg:h-12 w-auto" src={Okta} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="2xl:h-16 xl:h-16 lg:h-12 w-auto" src={Fancykit} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="2xl:h-16 xl:h-16 lg:h-12 w-auto" src={Deters} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="2xl:h-16 xl:h-16 lg:h-12 w-auto" src={Solana} alt=""/>
                        </div>
                        <div className="xl:w-1/5 w-1/3 p-3">
                            <img className="2xl:h-16 xl:h-16 lg:h-12 w-auto" src={TheCube} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Partner;