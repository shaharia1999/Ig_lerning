import React, { Fragment } from "react";
import { FaStar } from "react-icons/fa";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import Play from "../../../asset/images/icon/play.png";
import CourseLogo from "../../../asset/images/logo/course-logo.png";
import MyVideo from "../../../asset/video/mov_bbb.mp4";
import 'tw-elements';

function CurrentCourse() {
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

                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-1.5 xl:w-1/4">
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


                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-1.5 xl:w-1/4">
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



                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-1.5 xl:w-1/4">
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



                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-1.5 xl:w-1/4">
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
        </Fragment>
    );
}

export default CurrentCourse;