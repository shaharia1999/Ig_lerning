import React, { Fragment } from "react";
import RecentlyBoughtCourse from "./RecentlyBoughtCourse/RecentlyBoughtCourse";
import RecentlyViewedCourse from "./RecentlyViewedCourse/RecentlyViewedCourse";
import RecommandedCourse from "./RecommandedCourse/RecommandedCourse";
import StudentBoughtCourse from "./StudentBoughtCourse/StudentBoughtCourse";
import FooterMobile from "../Common/FooterMobile/FooterMobile";
import Breadcrumbs from "../Other/Breadcrumbs/Breadcumbs";
import 'flowbite';
import CopyRight from '../../component/Common/CopyRight/CopyRight';
import Partner from "../../component/Home/Partner/Partner";
import SingleCourseVideo from "./SingleCourseVideo/SingleCourseVideo";
import MobilePillTabCourse from "./MobilePillTabCourse/MobilePillTabCourse";

function MobileSingleCourseDetails() {
    return (
        <Fragment>
            <div>
                <Breadcrumbs />
            </div>

            <div className="flex flex-wrap">
                <div className="w-full">
                    <SingleCourseVideo />
                    <MobilePillTabCourse />
                </div>
            </div>

            <div className="w-full">
                <div className="bg-white w-full dark:bg-dark-color2">
                    <div className="">
                        <h6 className="text-xl font-semibold dark:text-white pl-3 pr-3">Recently Viewed Products</h6>
                        <RecentlyViewedCourse />
                    </div>

                    <div className="mt-6">
                        <h6 className="text-xl font-semibold dark:text-white pl-3 pr-3">Recommended courses for you</h6>
                        <RecommandedCourse />
                    </div>

                    <div className="mt-6">
                        <h6 className="text-xl font-semibold dark:text-white pl-3 pr-3">Recently bought courses</h6>
                        <RecentlyBoughtCourse />
                    </div>

                    <div className="mt-6">
                        <h6 className="text-xl font-semibold dark:text-white pl-3 pr-3">Student also bought this course</h6>
                        <StudentBoughtCourse />
                    </div>
                    <Partner />
                    <FooterMobile />
                    <CopyRight />
                </div>
            </div>
        </Fragment>
    );
}

export default MobileSingleCourseDetails;