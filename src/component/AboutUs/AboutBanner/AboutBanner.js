import React, { Fragment } from "react";
import { ImPlay2 } from "react-icons/im";
import AboutBannerImg from "../../../asset/images/banner/about-banner.svg";

function AboutBanner() {
    return (
        <Fragment>
            <section className="about-bg-height">
                <div className="container">
                    <div class="flex flex-auto xl:pl-8 xl:pr-8">
                        <div class="xl:basis-1/2">
                            <h2 className="text-maincolor xl:font-medium xl:text-xl xl:mt-56">About us</h2>
                            <h2 className="text-about-text1 xl:font-semibold xl:text-5xl xl:mt-4">Reach your peak. <br /> We’ll help you get <br /> there.</h2>
                            <h2 className="text-about-text1 xl:font-light xl:text-base xl:mt-4">Get your blood tests delivered at let home collect sample from <br /> the victory of the managments that supplies best <br /> design system guidelines ever.</h2>
                            <button className="bg-watch-video xl:pt-3 xl:pb-3 xl:pl-8 xl:pr-8 xl:rounded-2xl xl:mt-4 text-white font-normal text-xl flex"> <ImPlay2 className="xl:mr-2 font-normal bg-watch-video-play rounded-xl text-2xl" /> Watch Video</button>
                        </div>

                        <div class="xl:basis-1/2">
                            <img className="xl:mt-16 xl:p-5" src={AboutBannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default AboutBanner;