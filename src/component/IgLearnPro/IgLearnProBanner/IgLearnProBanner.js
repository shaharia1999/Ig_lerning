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
                        <div className="flex flex-auto xl:p-0 p-3">
                            <div className="xl:w-1/2 w-full ">
                                <h2 className="text-white xl:font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl md:font-semibold sm:text-2xl sm:font-bold text-xl font-semibold 2xl:mt-64 xl:mt-60 lg:mt-48 md:mt-24 sm:mt-16 mt-12 xl:ml-0 lg:ml-0 md:ml-2 ml-4">Train your team!</h2>
                                <h2 className="text-white xl:font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl md:font-semibold sm:text-2xl sm:font-bold text-xl font-semibold 2xl:mt-6 xl:mt-3 xl:ml-0 lg:ml-0 md:ml-2 ml-4 mt-0">Thanks to IntelloGeek Learning</h2>

                                <h6 className="text-white xl:font-extralight font-light 2xl:text-xl xl:text-base sm:text-sm text-xs xl:mt-6 xl:lg-6 mt-3 xl:ml-0 lg:ml-0 md:ml-2 ml-4 xl:mr-12 xl:mb-10 mb-4">and grow the sale turnover of your company.
                                    companies that have increased their productivity and
                                    success with us</h6>

                                <Link to="/"><span className="text-sm font-normal leading-tight bg-maincolor text-white xl:pl-16 xl:pr-16 xl:pt-4 xl:pb-4 pl-8 pr-8 pt-2 pb-2 rounded-3xl mx-2 h-11">Start Trial</span></Link>
                            </div>

                            <div className="xl:w-1/2">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container xl:-mt-28 lg:-mt-20 sm:-mt-16 -mt-20">
                    <div className="flex flex-row bg-white dark:bg-dark-color2 rounded-xl shadow-client border-none md:p-4 sm:p-4 py-4 px-3 w-full text-center">
                        <div className="w-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 lg:h-32 lg:w-44 md:h-28 md:w-36 sm:h-20 sm:w-28 h-16 w-auto xl:p-0 p-2 object-contain" src={Google} alt="" />
                            </div>
                        </div>

                        <div className="w-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 lg:h-32 lg:w-44 md:h-28 md:w-36 sm:h-20 sm:w-28 h-16 w-auto xl:p-0 p-2 object-contain" src={LogoMba} alt="" />
                            </div>
                        </div>

                        <div className="w-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 lg:h-32 lg:w-44 md:h-28 md:w-36 sm:h-20 sm:w-28 h-16 w-auto xl:p-0 p-2 object-contain" src={Politecnico} alt="" />
                            </div>
                        </div>

                        <div className="w-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 lg:h-32 lg:w-44 md:h-28 md:w-36 sm:h-20 sm:w-28 h-16 w-auto xl:p-0 p-2 object-contain" src={Uci} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default IgLearnProBanner;