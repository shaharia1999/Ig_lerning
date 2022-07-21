import React, { Fragment } from "react";
import Client1 from "../../../asset/images/Mission/client_1.svg";
import Client2 from "../../../asset/images/Mission/client_3.svg";
import Client3 from "../../../asset/images/Mission/client_4.svg";
import Client4 from "../../../asset/images/Mission/client_5.svg";
import Client5 from "../../../asset/images/Mission/client_6.svg";

function OurMission() {
    return (
        <Fragment>
            <div className="container xl:pt-16 lg:pt-10 xl:pb-20 lg:pb-20 md:pb-12 sm:pb-8">
                <div className="flex flex-wrap xl:mt-6">

                    <div className="lg:w-1/2 w-full xl:pr-24">
                        <div className="xl:p-6 xl:pl-5 xl:pr-5 pl-5 pr-5">
                            <p className="text-about-text1 dark:text-white xl:text-4xl text-2xl mb-2 xl:mb-6 xl:font-semibold font-semibold">Our Mission</p>
                            <hr className=" bg-maincolor xl:w-28 w-24 border-2 border-maincolor" />
                            <p className="text-about-text1 dark:text-gray-200 2xl:text-2xl xl:text-xl lg:text-xl text-base font-normal xl:mt-5 mt-3">Our mission is to make trust a central part of the digital transformation. We’re proud that over 60% of the Forbes Cloud 100 leans on G2 to increase revenue, manage and grow their reputation, and gain authentic customer insights.</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="xl:p-6 p-3">
                            <div className="flex flex-row mt-3 justify-around">
                                <div className="xl:basis-1/3">
                                    <img className="xl:h-28 xl:w-52 h-20 w-32" src={Client2} alt=""/>
                                </div>
                                <div className="xl:basis-1/3">
                                    <img className="xl:h-28 xl:w-52 h-20 w-32" src={Client1} alt=""/>
                                </div>
                                <div className="xl:basis-1/3">
                                    <img className="xl:h-28 xl:w-52 h-20 w-32" src={Client3} alt=""/>
                                </div>
                            </div>
                            <div className="flex flex-row xl:mt-3 mt-1 justify-center">
                                <div className="xl:basis-1/3">
                                    <img className="xl:h-28 xl:w-52 h-20 w-32" src={Client5} alt=""/>
                                </div>
                                <div className="xl:basis-1/3">
                                    <img className="xl:h-28 xl:w-52 h-20 w-32" src={Client4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}


export default OurMission;