import React, { Fragment } from "react";
import Vision from "../../../asset/images/banner/provide-vission.svg";

function ProvideVission() {
    return (
        <Fragment>
            <section className="bg-visionBg dark:bg-dark-color2">
                <div className="container lg:pt-20 lg:pb-20">
                    <div className="flex flex-wrap lg:mt-6">

                        <div className="lg:w-1/2 w-full xl:pr-24 lg:mt-40">
                            <div className="lg:p-6">
                                <p className="text-about-text1 dark:text-white lg:text-5xl lg:mb-6 lg:font-semibold">We provide a vision to transform your life with learning...</p>

                                <p className="text-about-text1 dark:text-gray-400 lg:text-lg font-normal lg:mt-5">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="lg:p-6">
                                <img className="vision-image" src={Vision} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default ProvideVission;