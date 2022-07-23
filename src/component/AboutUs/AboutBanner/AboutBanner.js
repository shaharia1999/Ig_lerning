import React, { Fragment } from "react";
import { ImPlay2 } from "react-icons/im";
import AboutBannerImg from "../../../asset/images/banner/about-banner.svg";

function AboutBanner() {
    return (
        <Fragment>
            <section className="about-bg-height bg-white dark:bg-dark-color1">
                <div className="container">
                    <div className="flex flex-wrap xl:pl-8 xl:pr-8 pl-4 pr-4">
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-maincolor xl:font-medium xl:text-xl lg:text-lg md:text-lg font-semibold 2xl:mt-56 xl:mt-48 lg:mt-36 md:mt-16 mt-12 xl:flex lg:text-left text-center">About us</h2>
                            <h2 className="text-about-text1 dark:text-white lg:font-semibold font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-2xl xl:mt-4 md:mt-3 lg:text-left text-center lg:pr-8">
                                Reach your peak. We’ll help you get there.
                            </h2>
                            <h2 className="text-about-text1 dark:text-gray-50 xl:font-light xl:text-base text-sm xl:mt-4 mt-3 lg:text-left text-center lg:pr-8">
                                Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
                            </h2>
                            <div className="lg:justify-start justify-center flex">
                                <span className="justify-center text-center xl:w-64 w-40 flex bg-watch-video lg:pt-3 pt-2 lg:pb-3 md:pt-2.5 md:pb-2.5 pb-2 xl:pl-8 pl-4 xl:pr-8 pr-4 lg:rounded-2xl md:rounded-xl rounded-lg xl:mt-4 mt-3 text-white font-normal xl:text-xl text-sm">
                                    <ImPlay2 className="xl:mr-2 mr-2 font-normal bg-watch-video-play rounded-xl xl:text-2xl text-base" />
                                    Watch Video
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-full">
                            <img className="xl:mt-16 lg:mt-12 md:mt-2 sm:mt-0 mt-8 xl:p-5 lg:p-3 md:p-20 sm:p-20"
                                src={AboutBannerImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default AboutBanner;