import React, { Fragment } from "react";
import { BsArrowRight } from "react-icons/bs";
import StudentIcon from "../../../asset/images/icon/student-icon.svg";
import TeacherIcon from "../../../asset/images/icon/teacher-icon.svg";

function WeEmpower() {
    return (
        <Fragment>
            <section className="bg-visionBg dark:bg-dark-color1">
                <div className="container xl:pt-16 xl:pb-24 pt-10 pb-16">
                    <h4 className="xl:text-4xl text-2xl	font-semibold text-about-text1 dark:text-white text-center xl:mt-2 xl:mb-16 lg:mb-12">At iG Learn, We Empower:</h4>
                    <div className="flex flex-wrap xl:mt-6 xl:pl-20 xl:pr-20 pl-3 pr-3">

                        <div className="lg:w-1/2 px-4 xl:mt-0 lg:mt-4 md:mt-12 xl:mb-0 mt-4 mb-4">
                            <div className="bg-student-card-bg dark:bg-dark-color2 rounded-2xl shadow-client border-maincolor shadow-student border-2 2xl:p-16 xl:p-10 lg:px-8 lg:py-12 md:px-10 md:py-16 sm:px-8 sm:py-10 p-5 h-full w-auto">
                                <img className="rounded-full bg-white dark:bg-dark-color2 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 h-16 w-16 xl:mt-0 xl:mb-8 md:mb-4 sm:mb-4" src={StudentIcon} alt="" />
                                <p className="text-about-text1 dark:text-white xl:text-3xl md:text-2xl sm:text-xl 2xl:font-bold lg:font-semibold text-lg font-semibold">Student</p>
                                <h5 className="2xl:text-xl lg:text-lg xl:font-medium text-lg font-medium text-about-text1 dark:text-white xl:leading-6 leading-tight xl:mb-4 xl:mt-3 mt-2 mb-2">Read unfiltered, write unfiltered, unbiased, 100% validated reviews.</h5>
                                <p className="text-client-section-des xl:text-base text-xs text-md mt-2">Reviews written by actual users -- not “pay-to-play” analysts — that help you avoid the inherent risks of buying business technology.</p>
                                <button className="bg-teacher-card-button xl:pt-3 xl:pb-3 xl:pl-8 xl:pr-8 pt-2 pb-2 pl-6 pr-6 xl:rounded-2xl rounded-2xl mt-3 xl:mt-4 text-white font-normal xl:text-xl text-xs flex"> Get Started <BsArrowRight className="xl:ml-2 xl:mt-1 font-normal xl:text-2xl text-xl" /></button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 px-4 xl:mt-0 lg:mt-4 md:mt-12 xl:mb-0 mt-4 mb-4">
                            <div className="bg-teacher-card dark:bg-dark-color2 rounded-2xl shadow-client border-watch-video shadow-teacher border-2 2xl:p-16 xl:p-10 lg:px-8 lg:py-12 md:px-10 md:py-16 sm:px-8 sm:py-10 p-5 h-full w-auto">
                                <img className="rounded-full bg-white dark:bg-dark-color2 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 h-16 w-16 xl:mt-0 xl:mb-8 md:mb-4 sm:mb-4" src={TeacherIcon} alt="" />
                                <p className="text-about-text1 dark:text-white xl:text-3xl md:text-2xl sm:text-xl 2xl:font-bold lg:font-semibold text-lg font-semibold">Teacher</p>
                                <h5 className="2xl:text-xl lg:text-lg xl:font-medium text-lg font-medium text-about-text1 dark:text-white xl:leading-6 leading-tight xl:mb-4 xl:mt-3 mt-2 mb-2">Get your software or service in front of millions of monthly buyers.</h5>
                                <p className="text-client-section-des xl:text-base text-xs mt-2">Reviews written by actual users -- not “pay-to-play” analysts — that help you avoid the inherent risks of buying business technology.</p>
                                <button className="bg-watch-video xl:pt-3 xl:pb-3 xl:pl-8 xl:pr-8 pt-2 pb-2 pl-6 pr-6 xl:rounded-2xl rounded-2xl mt-3 xl:mt-4 text-white font-normal xl:text-xl text-xs flex"> Get Started <BsArrowRight className="xl:ml-2 xl:mt-1 font-normal xl:text-2xl text-xl" /></button>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default WeEmpower;