import React, { Fragment } from "react";
import Play from "../../../asset/images/icon/play.png";
import StarRatings from 'react-star-ratings';
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import CourseLogo from "../../../asset/images/logo/course-logo.svg";

function ChooseCourse() {
    return (
        <Fragment>
            <div className="container 2xl:my-12 xl:my-12 lg:my-2 md:my-4 sm:my-2 my-12 2xl:px-1 xl:px-1 lg:px-16 md:px-8 sm:px-8">
                <h6 className="2xl:text-3xl 2xl:font-bold xl:ml-5 xl:mb-16">Art & Design</h6>
                <div className="flex flex-wrap">
                    <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                        <div className="flex">
                            <h4 className="2xl:text-2xl xl:text-2xl lg:text-xl text-xl font-semibold text-sectionTitleColor dark:text-white 2xl:ml-6 xl:ml-4 lg:ml-3 md:ml-2 sm:ml-4 ml-4 -mt-6">Choose your course and getting started</h4>
                        </div>
                    </div>
                    <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full relative 2xl:-mt-9 xl:-mt-9 lg:-mt-9 md:mt-3 mt-4">
                        <div className="flex-wrap flex float-right">
                            <li className="list-none mx-2">
                                <button type="button"
                                    className="inline-block w-full display md:w-auto 2xl:px-10 xl:px-10 lg:px-8 md:px-6 px-3 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 2xl:text-base xl:text-base lg:text-sm text-xs bg-maincolor 2xl:font-normal xl:font-normal lg:font-normal leading-tight text-white rounded-3xl xl:h-11 h-10"
                                >
                                    Most Popular
                                </button>
                            </li>

                            <li className="list-none mx-2">
                                <button type="button"
                                    className="inline-block w-full display md:w-auto 2xl:px-10 xl:px-10 lg:px-8 md:px-6 px-3 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 2xl:text-base xl:text-base lg:text-sm text-xs bg-maincolor 2xl:font-normal xl:font-normal lg:font-normal leading-tight text-white rounded-3xl xl:h-11 h-10"
                                >
                                    New
                                </button>
                            </li>

                            <li className="list-none mx-2">
                                <button type="button"
                                    className="inline-block w-full display md:w-auto 2xl:px-10 xl:px-10 lg:px-8 md:px-6 px-3 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 2xl:text-base xl:text-base lg:text-sm text-xs bg-maincolor 2xl:font-normal xl:font-normal lg:font-normal leading-tight text-white rounded-3xl xl:h-11 h-10"
                                >
                                    Tranding
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="2xl:mt-1 xl:-mt-8 lg:-mt-5 md:mt-4">
                    <div className="fade show active">
                        <div className="-mx-1 flex flex-wrap px-1">

                            <div className="my-1 px-1 w-full 2xl:my-8 xl:my-8 lg:my-8 2xl:px-5 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:1/3">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                            src=""></video>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-4 lg:left-3 left-4 bg-black text-white rounded-full 2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6" src={CourseLogo} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 2xl:mt-3 xl:mt-3 lg:mt-3 mt-3 ml-3">
                                                        <h6 className="xl:font-medium font-normal xl:text-lg text-sm text-black dark:text-white">arena web</h6>
                                                        <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">45 min</h6>

                                                        <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                        Learn Python: The Complete Python Programming Course
                                                    </h4>
                                                </div>
                                                {/* <div className="w-1/5 justify-end flex">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white h-6 xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-1 rounded">Live
                                            </button>
                                        </div> */}
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-2/3">
                                                    <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                                    </div>
                                                </div>
                                                <div className="w-1/3">
                                                    <div className="flex relative sm:justify-center xl:justify-start">
                                                        <span
                                                            className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">$40</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                <StarRatings
                                                    rating={4}
                                                    starDimension="15px"
                                                    starSpacing="4px"
                                                    starRatedColor="rgb(251, 191, 36)"
                                                />
                                                <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">(4.5)</h6>
                                            </ul>

                                            <div className="flex flex-wrap">
                                                <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                                    <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-1 xl:pr-1 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0 pl-0 rounded-sm">
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-3 xl:w-4 lg:h-3 lg:w-3 h-3 w-5" src={LoveIcon} alt="" />
                                                        </button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
                                                            Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-1 px-1 w-full 2xl:my-8 xl:my-8 lg:my-8 2xl:px-5 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:1/3">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                            src=""></video>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-4 lg:left-3 left-4 bg-black text-white rounded-full 2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6" src={CourseLogo} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 2xl:mt-3 xl:mt-3 lg:mt-3 mt-3 ml-3">
                                                        <h6 className="xl:font-medium font-normal xl:text-lg text-sm text-black dark:text-white">arena web</h6>
                                                        <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">45 min</h6>

                                                        <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                        The Complete 2022 Web Development Bootcamp
                                                    </h4>
                                                </div>
                                                {/* <div className="w-1/5 justify-end flex">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white h-6 xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-1 rounded">Live
                                            </button>
                                        </div> */}
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-2/3">
                                                    <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                                    </div>
                                                </div>
                                                <div className="w-1/3">
                                                    <div className="flex relative sm:justify-center xl:justify-start">
                                                        <span
                                                            className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">$40</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                <StarRatings
                                                    rating={4}
                                                    starDimension="15px"
                                                    starSpacing="4px"
                                                    starRatedColor="rgb(251, 191, 36)"
                                                />
                                                <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">(4.5)</h6>
                                            </ul>

                                            <div className="flex flex-wrap">
                                                <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                                    <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-1 xl:pr-1 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0 pl-0 rounded-sm">
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-3 xl:w-4 lg:h-3 lg:w-3 h-3 w-5" src={LoveIcon} alt="" />
                                                        </button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
                                                            Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-1 px-1 w-full 2xl:my-8 xl:my-8 lg:my-8 2xl:px-5 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:1/3">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                            src=""></video>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-4 lg:left-3 left-4 bg-black text-white rounded-full 2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6" src={CourseLogo} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 2xl:mt-3 xl:mt-3 lg:mt-3 mt-3 ml-3">
                                                        <h6 className="xl:font-medium font-normal xl:text-lg text-sm text-black dark:text-white">arena web</h6>
                                                        <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">45 min</h6>

                                                        <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                        The Complete Development Bootcamp
                                                    </h4>
                                                </div>
                                                {/* <div className="w-1/5 justify-end flex">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white h-6 xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-1 rounded">Live
                                            </button>
                                        </div> */}
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-2/3">
                                                    <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                                    </div>
                                                </div>
                                                <div className="w-1/3">
                                                    <div className="flex relative sm:justify-center xl:justify-start">
                                                        <span
                                                            className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">$40</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                <StarRatings
                                                    rating={4}
                                                    starDimension="15px"
                                                    starSpacing="4px"
                                                    starRatedColor="rgb(251, 191, 36)"
                                                />
                                                <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">(4.5)</h6>
                                            </ul>

                                            <div className="flex flex-wrap">
                                                <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                                    <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-1 xl:pr-1 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0 pl-0 rounded-sm">
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-3 xl:w-4 lg:h-3 lg:w-3 h-3 w-5" src={LoveIcon} alt="" />
                                                        </button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
                                                            Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-1 px-1 w-full 2xl:my-8 xl:my-8 lg:my-8 2xl:px-5 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:1/3">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <video type="video/mp4" muted
                                            loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                            src=""></video>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-4 lg:left-3 left-4 bg-black text-white rounded-full 2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6" src={CourseLogo} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 2xl:mt-3 xl:mt-3 lg:mt-3 mt-3 ml-3">
                                                        <h6 className="xl:font-medium font-normal xl:text-lg text-sm text-black dark:text-white">arena web</h6>
                                                        <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">45 min</h6>

                                                        <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                        The Complete 2022 Web Bootcamp
                                                    </h4>
                                                </div>
                                                {/* <div className="w-1/5 justify-end flex">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white h-6 xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-1 rounded">Live
                                            </button>
                                        </div> */}
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-2/3">
                                                    <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                                    </div>
                                                </div>
                                                <div className="w-1/3">
                                                    <div className="flex relative sm:justify-center xl:justify-start">
                                                        <span
                                                            className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">$40</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                <StarRatings
                                                    rating={4}
                                                    starDimension="15px"
                                                    starSpacing="4px"
                                                    starRatedColor="rgb(251, 191, 36)"
                                                />
                                                <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">(4.5)</h6>
                                            </ul>

                                            <div className="flex flex-wrap">
                                                <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                                    <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                        <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                                    <div
                                                        className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1 right-0 absolute">
                                                        <button
                                                            className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-1 xl:pr-1 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0 pl-0 rounded-sm">
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-3 xl:w-4 lg:h-3 lg:w-3 h-3 w-5" src={LoveIcon} alt="" />
                                                        </button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
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
        </Fragment >
    );
}

export default ChooseCourse;