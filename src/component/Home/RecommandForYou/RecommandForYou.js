import React, { Fragment, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import Play from "../../../asset/images/icon/play.png";
import CourseLogo from "../../../asset/images/logo/course-logo.svg";
import MyVideo from "../../../asset/video/mov_bbb.mp4"
import 'tw-elements';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RecommandForYou() {
    const [nav5, setNav5] = useState();
    const slider5 = useRef();

    return (
        <Fragment>
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Recommand For You (30) </h4>

                <div className="lg:mt-6 -mx-1 lg:-mx-4">
                    <Slider
                        ref={(slider5) => setNav5(slider5)}
                        slidesToShow={4}
                        focusOnSelect={true}
                        dots={true}
                        adaptiveHeight={true}
                        infinite={true}
                        slidesToScroll={1}
                        loop={true}
                        speed={1000}
                        height={600}
                        autoplay={true}
                        autoplaySpeed={1500}
                        swipeToSlide={true}
                    >

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <video type="video/mp4" muted
                                        loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                        src={MyVideo}></video>
                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning Center</h6>
                                                    <h6 className="font-light text-base text-white">40 min</h6>

                                                    <img className="xl:h-36 ml-8" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                        <div className="flex flex-wrap">
                                            <div className="w-4/5">
                                                <h4 className="mt-1 xl:text-base xl:font-medium text leading-tight text-CourseTitle dark:text-white">
                                                    React Complete Guide
                                                </h4>
                                            </div>
                                            <div className="w-1/5">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-2/3">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
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
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des dark:text-gray-500">( 4.5
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
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 xl:mr-1 rounded-sm">
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

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <video type="video/mp4" muted
                                        loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                        src={MyVideo}></video>
                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning Center</h6>
                                                    <h6 className="font-light text-base text-white">40 min</h6>

                                                    <img className="xl:h-36 ml-8" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                        <div className="flex flex-wrap">
                                            <div className="w-4/5">
                                                <h4 className="mt-1 xl:text-base xl:font-medium text leading-tight text-CourseTitle dark:text-white">
                                                    React Complete Guide
                                                </h4>
                                            </div>
                                            <div className="w-1/5">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-2/3">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
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
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des dark:text-gray-500">( 4.5
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
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 xl:mr-1 rounded-sm">
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

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <video type="video/mp4" muted
                                        loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                        src={MyVideo}></video>
                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning Center</h6>
                                                    <h6 className="font-light text-base text-white">40 min</h6>

                                                    <img className="xl:h-36 ml-8" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                        <div className="flex flex-wrap">
                                            <div className="w-4/5">
                                                <h4 className="mt-1 xl:text-base xl:font-medium text leading-tight text-CourseTitle dark:text-white">
                                                    React Complete Guide
                                                </h4>
                                            </div>
                                            <div className="w-1/5">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-2/3">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
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
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des dark:text-gray-500">( 4.5
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
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 xl:mr-1 rounded-sm">
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

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <video type="video/mp4" muted
                                        loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                        src={MyVideo}></video>
                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning Center</h6>
                                                    <h6 className="font-light text-base text-white">40 min</h6>

                                                    <img className="xl:h-36 ml-8" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                        <div className="flex flex-wrap">
                                            <div className="w-4/5">
                                                <h4 className="mt-1 xl:text-base xl:font-medium text leading-tight text-CourseTitle dark:text-white">
                                                    React Complete Guide
                                                </h4>
                                            </div>
                                            <div className="w-1/5">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-2/3">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
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
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des dark:text-gray-500">( 4.5
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
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 xl:mr-1 rounded-sm">
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

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <video type="video/mp4" muted
                                        loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                        src={MyVideo}></video>
                                    {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning Center</h6>
                                                    <h6 className="font-light text-base text-white">40 min</h6>

                                                    <img className="xl:h-36 ml-8" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                        <div className="flex flex-wrap">
                                            <div className="w-4/5">
                                                <h4 className="mt-1 xl:text-base xl:font-medium text leading-tight text-CourseTitle dark:text-white">
                                                    React Complete Guide
                                                </h4>
                                            </div>
                                            <div className="w-1/5">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-2/3">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
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
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des dark:text-gray-500">( 4.5
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
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 xl:mr-1 rounded-sm">
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

                    </Slider>
                </div>

            </div>
        </Fragment>
    );

}
export default RecommandForYou;