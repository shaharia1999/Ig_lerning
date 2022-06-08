import React, { Fragment, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import Play from "../../../asset/images/icon/play.png";
import CourseLogo from "../../../asset/images/logo/course-logo.png";
import MyVideo from "../../../asset/video/mov_bbb.mp4";
import 'tw-elements';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';
import reactRouterDom from "react-router-dom";

function CurrentCourse() {
    const [currentCourse, setCurrentCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-course/5/`).then((response) => {
            if (response.data.error === false) {
                setCurrentCourse(response.data.data?.course_info);
                setIsLoading(false);
            }
        })
    }, [])

    const CurrentCourseHTML = (() => {
        if (isLoading === true) {
            return <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                <div className="wrapper">
                    <div className="relative">
                        <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                        <div className="flex flex-wrap">

                            <div className="w-1/5">
                                <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                            </div>
                            <div className="w-4/5">
                                <div class="absolute top-0 mt-5 ml-3">
                                    <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                    <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                    <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative px-4 -mt-16">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                    <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                    <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-1/2">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                        <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                        <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                    </div>
                                </div>
                                <div className="w-1/2 relative">
                                    <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                        <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                        <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        else if (isLoading === false) {
            return currentCourse.map((current_course, current_course_index) => (
                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-1.5 xl:w-1/4">
                    <div className="wrapper antialiased text-gray-900">
                        <div className="relative">
                            <video type="video/mp4" muted
                                loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                src={ApiUrl.ImageBaseUrl + current_course.promotional_video}></video>
                            {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                            <div className="flex flex-wrap">
                                <div className="w-1/5">
                                    <a href="!#">
                                        <div
                                            class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            <img className="h-10 w-10" src={ApiUrl.ImageBaseUrl + current_course.channel_name_id?.channel_name_logo} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="w-4/5">
                                    <a href="!#">
                                        <div class="text-lg absolute top-0 text-black mt-5">
                                            <h6 className="font-medium xl:text-sm text-black xl:ml-1">{current_course.channel_name_id.channel_name}</h6>
                                            <h6 className="font-light xl:text-xs text-black">40 min</h6>

                                            <img className="xl:h-24 xl:ml-6 xl:-mt-2" src={Play} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative px-2 -mt-16">
                            <div className="bg-white p-3 rounded-lg shadow-lg">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="mt-1 text-sm font-semibold text leading-tight text-CourseTitle">
                                            {current_course.course_title}
                                        </h4>
                                    </div>
                                </div>
                                <div className="flex flex-wrap xl:mt-1">
                                    <div className="w-2/3">
                                        <div className="flex sm:justify-center xl:justify-start">
                                            <span className="text-gray-600 text-xs">77 Participients</span>
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        <div className="flex relative sm:justify-center xl:justify-start">
                                            <span
                                                className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$4.99</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="flex sm:justify-center xl:justify-start xl:mt-1">
                                    <StarRatings
                                        rating={current_course.avg_rating}
                                        starDimension="15px"
                                        starSpacing="4px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                    <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">
                                        ({current_course.avg_rating})
                                    </h6>
                                </ul>

                                <div className="flex flex-wrap">
                                    <div className="w-1/2">
                                        <div className="flex sm:justify-center xl:justify-start -mt-3">
                                            <a><img className="xl:h-4 xl:w-4 mx-1" src={SpeedMeter} alt="" /></a>
                                            <a><img className="xl:h-4 xl:w-4 mx-1" src={ShareIcon} alt="" /></a>
                                            <a><img className="xl:h-4 xl:w-4 mx-1" src={CertificateIcon} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="w-1/2 relative">
                                        <div
                                            className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                            <button
                                                className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-0 lg:pr-0 lg:pt-1 lg:pb-1 rounded-md">
                                                <img className="xl:h-3 xl:w-3 mx-1" src={LoveIcon} alt="" /></button>
                                            <button
                                                className="text-xs font-extralight bg-maincolor text-white lg:pl-1 lg:pr-1 lg:pt-0.5 lg:pb-0.5 rounded-sm">Enroll
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
        }
    })()

    return (
        <Fragment>
            <div className="">
                <div className="mt-4">
                    <div className="fade show active">
                        <h6 className="xl:text-3xl font-semibold text-sectionTitleColor float-right xl:mb-5">Current Courses</h6>
                        <div className="">
                            <hr className="w-full flex border" />
                            <hr className="w-64 flex border-4 xl:-mt-2 float-right" />
                        </div>

                        <div className="flex flex-wrap w-full -px-1 xl:-px-4">
                            {
                                CurrentCourseHTML
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CurrentCourse;