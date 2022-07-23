import React, { Fragment } from "react";
import Vision from "../../../asset/images/banner/provide-vission.svg";

function ProvideVission() {
    return (
        <Fragment>
            <section className="bg-visionBg dark:bg-dark-color2">
                <div className="container 2xl:pt-12 2xl:pb-20 xl:pt-2 xl:pb-16 lg:pt-5 md:pt-6 sm:pt-5">
                    <div className="flex flex-wrap xl:mt-6">

                        <div className="lg:w-1/2 w-full xl:pr-24 xl:mt-40 lg:mt-36 mt-10">
                            <div className="xl:p-6 pl-5 pr-5">
                                <p className="text-about-text1 dark:text-white 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl xl:mb-6 font-semibold">We provide a vision to transform your life with learning...</p>
                                <p className="text-about-text1 dark:text-gray-400 xl:text-lg text-base font-normal xl:mt-5 mt-3">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="xl:p-6 p-4 md:justify-center sm:justify-center flex">
                                <img className="vision-image xl:mt-0 2xl:mb-5 xl:-mb-7 lg:mb-10 md:mt-4 md:mb-12 sm:mt-5 sm:mb-10 -mt-28 -mb-28" src={Vision} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default ProvideVission;