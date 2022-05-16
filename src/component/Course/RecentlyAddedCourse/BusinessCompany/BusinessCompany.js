import React, { Component, Fragment } from "react";
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

function BusinessCompany() {

    // const custom_headers =  { 
    //     method: 'get', 

    //     headers: new Headers({
    //         'Accept-Language': 'en', 
    //         'Content-Type': 'application/json'
    //     })
    // }
    // const fetchCourseSubCategory = async () =>
    //     await (await fetch(ApiUrl.BaseUrl + "api/course/course-subcategory-response/", custom_headers)).json();
    // const subcategory_response = useQuery("country", fetchCourseSubCategory);
    // const subcategory_response_data = subcategory_response.data;
    // console.log('subcategory_response_data',subcategory_response.status);

    // if (subcategory_response.status === 'loading'){
    //     return (
    //         <div className="container my-12">
    //             <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Recently Added
    //                             Course </h4>
    //             <div className="flex flex-wrap -mx-1 lg:-mx-4">
    //                 <h1>Loading</h1>
    //             </div>
    //         </div>
    //     );
    // }
    // else if(subcategory_response.status === 'success'){




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
                                <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3"
                                    role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active text-base active:bg-maincolor focus:bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-business-tab3" data-bs-toggle="pill" data-bs-target="#pills-business" role="tab" aria-controls="pills-Business" aria-selected="true">Business & Company</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-finance-tab3" data-bs-toggle="pill" data-bs-target="#pills-finance" role="tab" aria-controls="pills-finance" aria-selected="false">Finance</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-bigdata-tab3" data-bs-toggle="pill" data-bs-target="#pills-bigdata" role="tab" aria-controls="pills-bigdata" aria-selected="false">IA & Big Data</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-marketing-tab3" data-bs-toggle="pill" data-bs-target="#pills-marketing" role="tab" aria-controls="pills-marketing" aria-selected="false">Digital Marketing</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="tab-content mt-4" id="pills-tabContent3">
                    <div className="tab-pane fade show active" id="pills-business" role="tabpanel"
                        aria-labelledby="pills-business-tab3">

                        <div className="flex flex-wrap -mx-1 lg:-mx-4">


                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">

                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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


                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-finance" role="tabpanel"
                        aria-labelledby="pills-finance-tab3">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-bigdata" role="tabpanel"
                        aria-labelledby="pills-bigdata-tab3">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-marketing" role="tabpanel"
                        aria-labelledby="pills-marketing-tab3">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                <div className="wrapper antialiased text-gray-900">

                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"></video>
                                        {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}


                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        class="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="font-medium text-lg text-white">ABC Learning
                                                            Center</h6>
                                                        <h6 className="font-light text-base text-white">45 min</h6>

                                                        <img className="lg:h-36 ml-8" src={Play} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 -mt-16">
                                        <div className="bg-white p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-4/5">
                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                        English Course Learn Online</h4>
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
                                                        <a><img className="px-1 h-6 w-8" src={SpeedMeter} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={ShareIcon} /></a>
                                                        <a><img className="px-1 h-6 w-8" src={CertificateIcon} /></a>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
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
                        </div>
                    </div>
                </div>


            </div>
        </Fragment>
    );
}



// }
export default BusinessCompany;