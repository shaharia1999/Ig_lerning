import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Google from "../../../asset/images/iglearn-pro-brand-logo/google.png";
import LogoMba from "../../../asset/images/iglearn-pro-brand-logo/logo-mba.png";
import Politecnico from "../../../asset/images/iglearn-pro-brand-logo/Politecnico.png";
import Uci from "../../../asset/images/iglearn-pro-brand-logo/uci.png";

class IgLearnProBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="IgLearnProBanner">
                    <div className="container">
                        <div class="flex flex-auto">
                            <div class="lg:basis-1/2">
                                <h2 className="text-white lg:font-semibold lg:text-5xl lg:mt-80 ">Train your team!</h2>
                                <h2 className="text-white lg:font-semibold lg:text-5xl mt-6">Thanks to IntelloGeek Learning</h2>

                                <h6 className="text-white lg:font-extralight lg:text-xl mt-6 lg:mr-12 lg:mb-10">and grow the sale turnover of your company.
                                    companies that have increased their productivity and
                                    success with us</h6>

                                <Link to="/"><span className="text-sm font-normal leading-tight bg-maincolor text-white lg:pl-16 lg:pr-16 lg:pt-4 lg:pb-4 rounded-3xl mx-2 h-11">Start Trial</span></Link>   
                            </div>

                            <div class="lg:basis-1/2">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container -mt-28">
                    <div class="flex flex-row bg-white rounded-xl shadow-client border-none lg:p-4 w-full text-center">
                        <div class="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Google} />
                            </div>
                        </div>

                        <div class="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={LogoMba} />
                            </div>
                        </div>

                        <div class="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Politecnico} />
                            </div>
                        </div>

                        <div class="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Uci} />
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default IgLearnProBanner;