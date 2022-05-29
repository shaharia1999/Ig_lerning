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
            </div>
        </Fragment>
    );
}

export default SingleCourseDetails;