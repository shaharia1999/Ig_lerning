import React, { Fragment } from "react";
import Vision from "../../../asset/images/banner/provide-vission.svg";

function ProvideVission() {
    return (
        <Fragment>
            <section className="bg-visionBg dark:bg-dark-color2">
                <div className="container xl:pt-20 xl:pb-20">
                    <div className="flex flex-wrap xl:mt-6">

                        <div className="xl:w-1/2 w-full xl:pr-24 xl:mt-40 mt-10">
                            <div className="xl:p-6 pl-5 pr-5">
                                <p className="text-about-text1 dark:text-white xl:text-5xl text-2xl xl:mb-6 font-semibold">We provide a vision to transform your life with learning...</p>
                                <p className="text-about-text1 dark:text-gray-400 xl:text-lg text-base font-normal xl:mt-5 mt-3">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                            </div>
                        </div>

                        <div className="xl:w-1/2 w-full">
                            <div className="xl:p-6 p-4 ">
                                <img className="vision-image xl:mt-0 -mt-28 -mb-28" src={Vision} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default ProvideVission;