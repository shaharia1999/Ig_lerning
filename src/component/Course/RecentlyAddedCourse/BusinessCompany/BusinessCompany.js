import React, { Component, Fragment, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpeedMeter from "../../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../../asset/images/icon/icon_share.png";
import { useQuery } from "react-query";
import ApiUrl from "../../../../Api/ApiUrl";
import Course1 from "../../../../asset/images/course-thumbnail/course-thumbnail.png";
import Play from "../../../../asset/images/icon/play.png";
import CourseLogo from "../../../../asset/images/logo/course-logo.png";
import 'tw-elements';
import RecentlyAddedCourseOne from "../../../RecentlyAddedCourseOne/RecentlyAddedCourseOne";
import axios from "axios";


function BusinessCompany() {
    const [subCategory, setSubCategory] = React.useState([]);
    const [recently_addedsubcategoryId, setSubcategoryID] = React.useState([]);

    // const custom_headers = {
    //     method: 'get',

    //     headers: new Headers({
    //         'Accept-Language': 'en',
    //         'Content-Type': 'application/json',
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Credentials": "true",
    //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    //     })
    // }

    // const OnSubCategoryDetails = (subcategory_id) => {
    //     console.log('subcategory = ', subcategory_id);
    //     setSubcategoryId(subcategory_id)
    // }


    React.useEffect(() => {
        axios.get(ApiUrl.BaseUrl + 'api/course/course-subcategory-response/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
                setSubcategoryID(response.data.data);
                console.log("axios", response.data);
            }
        });
    }, []);

    function fetchData(sub_category_id) {
        axios.get(ApiUrl.BaseUrl + 'api/course/course-subcategory-response/' + sub_category_id + "/",
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setSubcategoryID(response.data.data);
                console.log("axios-details", response.data.data.course_informations);
            }
        });
    };

    const data_of_subcategory = subCategory.map((subcategory, index) => (
        <div>
            <input id={subcategory.sub_category_id} type='hidden' name={subcategory.sub_category_id} />
            <li className="nav-item" role="presentation">
                <button type="button"
                    className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11"
                    // id="pills-business-tab3"
                    // data-bs-toggle="pill"
                    // data-bs-target="pills-business"
                    // role="tab" aria-controls="pills-Business"
                    // aria-selected="true"
                    onClick={() => fetchData(subcategory.sub_category_id)}
                >
                    {subcategory.sub_category_name}
                </button>
            </li>
        </div>
        
    ));

    const data_of_subcategory_course = recently_addedsubcategoryId.map((sub_category_course, index) => (
        sub_category_course.course_informations.map((course, course_index) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                <div className="wrapper antialiased text-gray-900">
                    <div className="relative">
                        <video type="video/mp4" muted
                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                            src={ApiUrl.ImageBaseUrl + course.promotional_video}></video>
                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                        <div className="flex flex-wrap">
                            <div className="w-1/5">
                                <a href="!#">
                                    <div
                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        <img className="h-12 w-12" src={CourseLogo} alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="w-4/5">
                                <a href="!#">
                                    <div class="text-lg absolute top-0 text-white mt-5">
                                        <h6  className="font-medium text-lg text-black">joy</h6> 
                                        <h6 className="font-light text-base text-black">{course.course_duration} min</h6> 

                                        <img className="lg:h-36 ml-8" src={Play} alt="" />
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
                                        {course.course_title}
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
                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} alt="" /></a>
                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} alt="" /></a>
                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} alt="" /></a>
                                    </div>
                                </div>
                                <div className="w-1/2 relative">
                                    <div
                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                        <button
                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                            <img className="px-1 h-3 w-5" src={LoveIcon} alt="" /></button>
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
    ));


    return (
        <Fragment>
            <div className="container my-12">

                <div className="flex flex-wrap">
                    <div className="w-1/3">
                        <div className="flex">
                            <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Recently Added
                                Course</h4>
                        </div>
                    </div>
                    <div className="w-2/3 relative">
                        <div className="flex right-0 absolute">


                            <div class="mb-4">
                                <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" 
                                // id="pills-tab3"
                                //     role="tablist"
                                    >
                                    {
                                        data_of_subcategory
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className=" fade show active"
                        // id="pills-business"
                        // role="tabpanel"
                        // aria-labelledby="pills-business-tab3"
                    >

                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {
                                data_of_subcategory_course
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
// }



// }
export default BusinessCompany;