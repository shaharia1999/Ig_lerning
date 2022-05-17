import React, { Fragment } from "react";
import { FaStar } from "react-icons/fa";
import SpeedMeter from "../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import ShareIcon from "../../asset/images/icon/icon_share.png";
import Play from "../../asset/images/icon/play.png";
import CourseLogo from "../../asset/images/logo/course-logo.png";
import { useQuery } from "react-query";
import ApiUrl from "../../Api/ApiUrl";
import 'tw-elements';

function RecentlyAddedCourseOne({subcategory_id}) {

    console.log('recently added subcategoryt id = ', subcategory_id);
    // const [subcategory_id, { subcategory_id }] = subcategory_id;
    console.log('recently added subcategoryt id = ', subcategory_id);
    const custom_headers = {
        method: 'get',

        headers: new Headers({
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        })
    }

    const fetchSubCategoryBasedCourse = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/course/course-subcategory-response/" + subcategory_id +"/", custom_headers)).json();
    const course_in_sub_category_based = useQuery("course_in_sub_category_based", fetchSubCategoryBasedCourse);
    console.log('course_in_sub_category_based = ', course_in_sub_category_based);
    console.log('course_in_sub_category_based status = ', course_in_sub_category_based.status);
    const course_in_sub_category_based_data = course_in_sub_category_based.data;
    console.log('course_in_sub_category_based_data = ', course_in_sub_category_based_data);

    if (course_in_sub_category_based.status === 'loading') {
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Recently Added Course</h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <h1>Loading</h1>
                </div>
            </div>
        );
    }else if (course_in_sub_category_based.status === 'success') {
        
        const html_recently_added_course = course_in_sub_category_based_data.data.map((course_in_sub_category_based, index) => (


            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                <div className="wrapper antialiased text-gray-900">

                    <div className="relative">

                        <video type="video/mp4" muted
                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                            src=""></video>
                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                        <div className="flex flex-wrap">
                            <div className="w-1/5">
                                <a href="!#">
                                    <div
                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        <img className="h-12 w-12" src={CourseLogo} alt=""/>
                                    </div>
                                </a>
                            </div>
                            <div className="w-4/5">
                                <a href="!#">
                                    <div class="text-lg absolute top-0 text-white mt-5">
                                         <h6 className="font-medium text-lg text-white">{course_in_sub_category_based.course_informations['0'].channel_name_id?.channel_name}</h6> 
                                        <h6 className="font-light text-base text-white">{course_in_sub_category_based.course_informations['0'].course_duration} min</h6> 

                                        <img className="lg:h-36 ml-8" src={Play} alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative px-4 -mt-16">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <div className="flex flex-wrap">
                                <div className="w-4/5">
                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">
                                       tttt
                                    </h4>
                                </div>
                                <div className="w-1/5">
                                    <button
                                        className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-1 rounded-md">Live
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap">
                                <div className="w-2/3">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <span className="text-gray-600 text-sm">77 Participients</span>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="flex relative sm:justify-center xl:justify-start">
                                        <span
                                            className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$4.99</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex sm:justify-center xl:justify-start">
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                    )</h6>
                            </ul>

                            <div className="flex flex-wrap">
                                <div className="w-1/2">
                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} alt=""/></a>
                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} alt=""/></a>
                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} alt=""/></a>
                                    </div>
                                </div>
                                <div className="w-1/2 relative">
                                    <div
                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                        <button
                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                            <img className="px-1 h-3 w-5" src={LoveIcon} alt=""/></button>
                                        <button
                                            className="text-sm font-extralight leading-tight bg-maincolor text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-sm">Enroll
                                            Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ))

        return (
            <Fragment>
                <div className="tab-pane fade show active" id="pills-business" role="tabpanel"
                    aria-labelledby="pills-business-tab3">

                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {
                            html_recently_added_course
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default RecentlyAddedCourseOne;