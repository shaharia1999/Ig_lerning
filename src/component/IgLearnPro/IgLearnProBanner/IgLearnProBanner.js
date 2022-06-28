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
                            <div className="xl:basis-1/2 basis-full ">
                                <h2 className="text-white xl:font-semibold xl:text-5xl text-xl xl:mt-80 mt-12">Train your team!</h2>
                                <h2 className="text-white xl:font-semibold xl:text-5xl text-xl xl:mt-6 mt-0">Thanks to IntelloGeek Learning</h2>

                                <h6 className="text-white xl:font-extralight xl:text-xl mt-6 xl:mr-12 xl:mb-10">and grow the sale turnover of your company.
                                    companies that have increased their productivity and
                                    success with us</h6>

                                <Link to="/"><span className="text-sm font-normal leading-tight bg-maincolor text-white xl:pl-16 xl:pr-16 xl:pt-4 xl:pb-4 rounded-3xl mx-2 h-11">Start Trial</span></Link>
                            </div>

                            <div className="xl:basis-1/2">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container -mt-28">
                    <div className="flex flex-row bg-white dark:bg-dark-color2 rounded-xl shadow-client border-none xl:p-4 w-full text-center">
                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Google} alt="" />
                            </div>
                        </div>

                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={LogoMba} alt="" />
                            </div>
                        </div>

                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Politecnico} alt="" />
                            </div>
                        </div>

                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Uci} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default IgLearnProBanner;