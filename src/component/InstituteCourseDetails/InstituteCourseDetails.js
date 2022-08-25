import React, { Fragment } from "react";
import Breadcrumbs from "../Other/Breadcrumbs/Breadcumbs";
import 'flowbite';
import Description from "../SingleCourseDetails/Description/Description";
import Lessons from "../SingleCourseDetails/Lessons/Lessons";
import StudentFeedback from "../SingleCourseDetails/StudentFeedback/StudentFeedback";
import Review from "../SingleCourseDetails/Review/Review";
import DiscountCardCourse from "../SingleCourseDetails/DiscountCardCourse/DiscountCardCourse";
import RecentlyViewedCourse from "../SingleCourseDetails/RecentlyViewedCourse/RecentlyViewedCourse";
import RecommandedCourse from "../SingleCourseDetails/RecommandedCourse/RecommandedCourse";
import RecentlyBoughtCourse from "../SingleCourseDetails/RecentlyBoughtCourse/RecentlyBoughtCourse";
import StudentBoughtCourse from "../SingleCourseDetails/StudentBoughtCourse/StudentBoughtCourse";
import Footer from "../Common/Footer/Footer";
import CopyRight from "../Common/CopyRight/CopyRight";
import InstituteCoverBanner from "./InstituteCoverBanner/InstituteCoverBanner";
import InstituteDescription from "./InstituteDescription/InstituteDescription";

function InstituteCourseDetails() {
    return(
        <Fragment>
    <div>
        <Breadcrumbs />
    </div>

    <div className="flex relative flex-wrap">
        <div className="">
            <InstituteCoverBanner />
        </div>
        <div className="lg:w-4/12 ml-auto">
            <DiscountCardCourse />
        </div>
    </div>

    <div className="flex flex-wrap">
        <div className="lg:w-8/12">
            <InstituteDescription />
            <Lessons />
            <StudentFeedback />
            <Review />
        </div>
        {/* <div className="lg:w-4/12 relative">
            <DiscountCardCourse />
        </div> */}
    </div>

    <div className="stack flex flex-wrap">
        <div className="bg-white w-full dark:bg-dark-color2">
            <div className="container-fluid xl:mt-16 lg:mt-12 xl:mb-20 lg:mb-16">
                <h6 className="xl:mb-8 xl:ml-32 lg:ml-16 2xl:text-3xl xl:text-2xl lg:text-xl lg:font-semibold dark:text-white">Recently Viewed Products</h6>
                <RecentlyViewedCourse />
            </div>

            <div className="container-fluid xl:mt-4 xl:mb-20">
                <h6 className="xl:mb-8 xl:ml-32 lg:ml-16 2xl:text-3xl xl:text-2xl lg:text-xl lg:font-semibold dark:text-white">Recommended courses for you</h6>
                <RecommandedCourse />
            </div>

            <div className="container-fluid xl:mt-4 xl:mb-20">
                <h6 className="xl:mb-8 xl:ml-32 lg:ml-16 2xl:text-3xl xl:text-2xl lg:text-xl lg:font-semibold dark:text-white">Recently bought courses</h6>
                <RecentlyBoughtCourse />
            </div>

            <div className="container-fluid xl:mt-4 xl:mb-20">
                <h6 className="xl:mb-8 xl:ml-32 lg:ml-16 2xl:text-3xl xl:text-2xl lg:text-xl lg:font-semibold dark:text-white">Student also bought this course</h6>
                <StudentBoughtCourse />
            </div>
            <Footer />
            <CopyRight />
        </div>
    </div>
</Fragment>
    )
}
export default InstituteCourseDetails;