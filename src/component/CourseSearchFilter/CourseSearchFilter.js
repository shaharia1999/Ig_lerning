import React, { Fragment } from "react";
import { FaStar } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import SpeedMeter from "../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import ShareIcon from "../../asset/images/icon/icon_share.png";
import Play from "../../asset/images/icon/play.png";
import CourseLogo from "../../asset/images/logo/course-logo.png";
import MyVideo from "../../asset/video/mov_bbb.mp4";
import 'tw-elements';

function CourseSearchFilter() {
    return (
        <Fragment>
            <div>
                <div className="container">
                    <h6 className="text-center xl:mt-10 xl:text-2xl text-maingray xl:font-semibold">Result of your Research >> “Learn Big Data”</h6>
                    <div className="flex flex-wrap">
                        <div className="xl:w-full">

                            <div className="flex flex-wrap xl:mt-6">
                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i> <span className="ml-2">Business & Company</span></button>
                                </div>

                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>


                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>

                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>

                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>


                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>


                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>


                                <div className="xl:w-1/4 xl:mt-5">
                                    <button className=" text-breadcrumbs-text border border-gray-200 xl:text-sm xl:font-medium rounded-3xl xl:pt-3 xl:pb-3 xl:pl-12 xl:pr-12"><i className="fa fa-book"></i><span className="ml-2">Business & Company</span></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >


                <div className="bg-gray-100 xl:mt-10 xl:pt-3 xl:pb-3">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/2">
                                <h6 className=" text-maingray text-xl font-semibold xl:pl-10">768 Result for “Learn Big Data”</h6>
                            </div>
                            <div className="xl:w-1/2 flex justify-end">

                                <select class="select h-8 w-56 rounded-sm bg-gray-200 focus:border-hidden  active:border-hidden font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Short Result By</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="5">1</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="4">2</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="3">3</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="2">4</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="1">5</option>
                                </select>
                                <BsFillGrid3X3GapFill className=" text-3xl float-right xl:ml-4 xl:mt-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="flex flex-wrap xl:mt-10">
                        <div className="xl:w-4/12 xl:pr-10">
                            <div className="flex flex-wrap bg-white rounded-xl shadow-search-filter border-none xl:pl-7 xl:pr-4 w-full xl:mt-6 xl:pb-8">
                                <h6 className="xl:text-2xl xl:mt-5 xl:font-bold text-maingray">Course Filters</h6>

                                <select class="select w-full rounded-sm xl:mt-5 bg-gray-100 focus:border-hidden  active:border-hidden font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Short Result By</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="5">1</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="4">2</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="3">3</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="2">4</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="1">5</option>
                                </select>

                                <select class="select w-1/2 rounded-sm xl:mt-5 bg-gray-100 focus:border-hidden active:border-hidden font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Short Result By</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="5">1</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="4">2</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="3">3</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="2">4</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="1">5</option>
                                </select>

                                <select class="select w-1/2 rounded-sm xl:mt-5 bg-gray-100 focus:border-hidden active:border-hidden font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Short Result By</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="5">1</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="4">2</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="3">3</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="2">4</option>
                                    <option className="text-maincolor hover:bg-maincolor" value="1">5</option>
                                </select>

                            </div>
                        </div>
                        <div className="xl:w-8/12">
                            <div className="mt-4">
                                <div className="fade show active">

                                    <div className="flex flex-wrap w-full -px-1 xl:-px-4">

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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


                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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


                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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

                                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={MyVideo}></video>
                                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    class="text-sm absolute top-0 left-2 rounded-full h-10 w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-10 w-10" src={CourseLogo} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                                    <h6 className="font-medium xl:text-sm text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>

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
                                                                    Tame your Big Data Course Learn Online
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
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400 text-sm" /></h6>
                                                            <h6 className="mb-4 mx-1 text-xs font-normal text-client-section-des">( 4.5
                                                                )</h6>
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


export default CourseSearchFilter;