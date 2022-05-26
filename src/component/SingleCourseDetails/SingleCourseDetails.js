import React, { Fragment } from "react";
import RecentlyBoughtCourse from "./RecentlyBoughtCourse/RecentlyBoughtCourse";
import RecentlyViewedCourse from "./RecentlyViewedCourse/RecentlyViewedCourse";
import RecommandedCourse from "./RecommandedCourse/RecommandedCourse";
import StudentBoughtCourse from "./StudentBoughtCourse/StudentBoughtCourse";
import Footer from "../Common/Footer/Footer";
import Breadcrumbs from "../Other/Breadcrumbs/Breadcumbs";
import DiscountCardCourse from "./DiscountCardCourse/DiscountCardCourse";
import Description from "./Description/Description";
import StudentFeedback from "./StudentFeedback/StudentFeedback";
import Review from "./Review/Review";
import 'flowbite';

function SingleCourseDetails() {
    return (
        <Fragment>

            <div>
                <Breadcrumbs />
            </div>

            <div className="flex flex-wrap">
                <div className="xl:w-8/12">
                    <Description />
                    <StudentFeedback/>
                    <Review/>
                </div>
                <div className="xl:w-4/12 relative">
                    <DiscountCardCourse />
                </div>
            </div>

            <div className="stack">
                <div className="bg-white">
                    <div className="container-fluid xl:mt-4 xl:mb-20">
                        <h6 className="xl:mb-8 xl:ml-32 xl:text-3xl xl:font-semibold">Recently Viewed Products</h6>
                        <RecentlyViewedCourse />
                    </div>

                    <div className="container-fluid xl:mt-4 xl:mb-20">
                        <h6 className="xl:mb-8 xl:ml-32 xl:text-3xl xl:font-semibold">Recommended courses for you</h6>
                        <RecommandedCourse />
                    </div>

                    <div className="container-fluid xl:mt-4 xl:mb-20">
                        <h6 className="xl:mb-8 xl:ml-32 xl:text-3xl xl:font-semibold">Recently bought courses</h6>
                        <RecentlyBoughtCourse />
                    </div>

                    <div className="container-fluid xl:mt-4 xl:mb-20">
                        <h6 className="xl:mb-8 xl:ml-32 xl:text-3xl xl:font-semibold">Student also bought this course</h6>
                        <StudentBoughtCourse />
                    </div>
                    <Footer />
                </div>
                {/* 


                <div className="flex flex-wrap fixed-top right-0 xl:mt-72 float-right justify-end">
                    <div className="xl:w-4/12 flex xl:pr-36">
                        <div class="bg-BgLoveIcon rounded-lg">
                            <div className="rounded-lg">
                                <video type="video/mp4" muted
                                    loop className="w-full xl:p-5 h-72"
                                    src={MyVideo}></video>
                            </div>

                            <div class="xl:p-5">
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button class="text-white bg-maincolordeep xl:rounded-md xl:py-4 xl:w-full opacity-100">Enroll now</button>
                                <h6 className="text-black xl:font-semibold xl:text-2xl xl:mt-5 xl:mb-4">What's Included</h6>
                                <ul>
                                    <li className="text-black">Mobile Support</li>
                                    <li className="text-black">Lession Archive</li>
                                    <li className="text-black">Mobile Support</li>
                                    <li className="text-black">Tutor Chat</li>
                                    <li className="text-black">Course Certificate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </Fragment>
    );
}

export default SingleCourseDetails;