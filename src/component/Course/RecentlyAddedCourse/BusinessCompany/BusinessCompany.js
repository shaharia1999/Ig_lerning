import React, { Component, Fragment } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpeedMeter from "../../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../../asset/images/icon/icon_share.png";

class BusinessCompany extends Component {
    render() {
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
                                <Link to="/"><span
                                    className="text-base font-medium leading-tight bg-maincolor text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11">Business & Company</span></Link>
                                <Link to="/finance"><span
                                    className="text-base font-medium leading-tight text-CourseTitle lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-xl mx-2">Finance</span></Link>
                                <Link to="/big-data"><span
                                    className="text-base font-medium leading-tight text-CourseTitle lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-xl mx-2">IA & Big Data</span></Link>
                                <Link to="/digital-marketing"><span
                                    className="text-base font-medium leading-tight text-CourseTitle lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-xl mx-2">Digital Marketing</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-1 lg:-mx-4">

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/8JJ101D3knE"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md px-1">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-maincolor text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-sm px-1">Enroll
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/RGOj5yH7evk"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/8JJ101D3knE"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/RGOj5yH7evk"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/8JJ101D3knE"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
                            <div className="wrapper bg-gray-400 antialiased text-gray-900">

                                <div className="relative">
                                    <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/RGOj5yH7evk"></iframe>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-6 w-6" src={SpeedMeter}/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-lg text-white">ABC Learning
                                                        Center</h6>
                                                    <h6 className="font-light text-base text-white">45 min</h6>
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
                                                        className="text-maincolor text-lg font-medium float-right inset-y-0 right-0 absolute">$4.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center xl:justify-start">
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400"/></h6>
                                            <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5
                                                )</h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a><img className="px-1 h-6 w-8" src={SpeedMeter}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={ShareIcon}/></a>
                                                    <a><img className="px-1 h-6 w-8" src={CertificateIcon}/></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                    <button
                                                        className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon}/></button>
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
            </Fragment>
        );
    }
}
export default BusinessCompany;