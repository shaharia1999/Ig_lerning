import React, { Fragment } from "react";
import { BsArrowRight } from "react-icons/bs";
import StudentIcon from "../../../asset/images/icon/student-icon.svg";
import TeacherIcon from "../../../asset/images/icon/teacher-icon.svg";

function WeEmpower() {
    return (
        <Fragment>
            <section className="bg-visionBg">
                <div className="container xl:pt-16 xl:pb-24">
                    <h4 className="text-4xl	font-semibold text-about-text1 text-center xl:mt-2 xl:mb-16">At iG Learn, We Empower:</h4>
                    <div className="flex flex-wrap xl:mt-6 xl:pl-20 xl:pr-20">

                        <div class="xl:basis-1/2 px-4">
                            <div class="bg-student-card-bg rounded-2xl shadow-client border-maincolor shadow-student border-2 xl:p-16 h-full w-auto">
                                <img className="rounded-full bg-white h-28 w-28 xl:mt-0 xl:mb-8" src={StudentIcon} alt="" />
                                <p class="text-about-text1 xl:text-3xl xl:font-bold">Student</p>
                                <h5 class=" text-xl xl:font-medium text-about-text1 leading-8 xl:mb-4 xl:mt-3">Read unfiltered, write unfiltered, unbiased, 100% validated reviews.</h5>
                                <p class="text-client-section-des text-md mt-2">Reviews written by actual users -- not “pay-to-play” analysts — that help you avoid the inherent risks of buying business technology.</p>
                                <button className="bg-teacher-card-button xl:pt-3 xl:pb-3 xl:pl-8 xl:pr-8 xl:rounded-2xl xl:mt-4 text-white font-normal text-xl flex"> Get Started <BsArrowRight className="xl:ml-2 xl:mt-1 font-normal text-2xl" /></button>
                            </div>
                        </div>

                        <div class="xl:basis-1/2 px-4">
                            <div class="bg-teacher-card rounded-2xl shadow-client border-watch-video shadow-teacher border-2 xl:p-16 h-full w-auto">
                                <img className="rounded-full bg-white h-28 w-28 xl:mt-0 xl:mb-8" src={TeacherIcon} alt="" />
                                <p class="text-about-text1 xl:text-3xl xl:font-bold">Teacher</p>
                                <h5 class=" text-xl xl:font-medium text-about-text1 leading-8 xl:mb-4 xl:mt-3">Get your software or service in front of millions of monthly buyers.</h5>
                                <p class="text-client-section-des text-md mt-2">Reviews written by actual users -- not “pay-to-play” analysts — that help you avoid the inherent risks of buying business technology.</p>
                                <button className="bg-watch-video xl:pt-3 xl:pb-3 xl:pl-8 xl:pr-8 xl:rounded-2xl xl:mt-4 text-white font-normal text-xl flex"> Get Started <BsArrowRight className="xl:ml-2 xl:mt-1 font-normal text-2xl" /></button>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default WeEmpower;