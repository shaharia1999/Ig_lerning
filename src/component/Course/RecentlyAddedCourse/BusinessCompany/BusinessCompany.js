import React, { Component, Fragment } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpeedMeter from "../../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../../asset/images/icon/icon_share.png";
import { useQuery } from "react-query";
import ApiUrl from "../../../../Api/ApiUrl";


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
                                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                        {/* {html_subcategory} */}
                                        <li class="mr-2" role="presentation">
                                            <button class="active text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="business-tab" data-tabs-target="#business" type="button" role="tab" aria-controls="business" aria-selected="false">Business & Company</button>
                                        </li>
                                        <li class="mr-2" role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="finance-tab" data-tabs-target="#finance" type="button" role="tab" aria-controls="finance" aria-selected="false">Finance</button>
                                        </li>
                                        <li class="mr-2" role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="big-data-tab" data-tabs-target="#big-data" type="button" role="tab" aria-controls="big-data" aria-selected="false">IA & Big Data</button>
                                        </li>
                                        <li role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="marketing-tab" data-tabs-target="#marketing" type="button" role="tab" aria-controls="marketing" aria-selected="false">Digital Marketing</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div id="myTabContent">
                        <div class="hidden p-4 bg-white rounded-lg" id="business" role="tabpanel" aria-labelledby="business-tab">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                    <div className="wrapper antialiased text-gray-900">

                                        <div className="relative">
                                            <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe>
                                            <div className="flex flex-wrap">
                                                <div className="w-1/5">
                                                    <a href="!#">
                                                        <div
                                                            class="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                            <img className="h-6 w-6" src={SpeedMeter} />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="w-4/5">
                                                    <a href="!#">
                                                        <div class="text-lg absolute top-0 text-white mt-5">
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


                        <div class="hidden p-4 bg-white rounded-lg" id="finance" role="tabpanel" aria-labelledby="finance-tab">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                    <div className="wrapper antialiased text-gray-900">

                                        <div className="relative">
                                            <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe>
                                            <div className="flex flex-wrap">
                                                <div className="w-1/5">
                                                    <a href="!#">
                                                        <div
                                                            class="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                            <img className="h-6 w-6" src={SpeedMeter} />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="w-4/5">
                                                    <a href="!#">
                                                        <div class="text-lg absolute top-0 text-white mt-5">
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
                                                            <span className="text-gray-600 text-sm">78 Participients</span>
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
                        <div class="hidden p-4 bg-white rounded-lg" id="big-data" role="tabpanel" aria-labelledby="big-data-tab">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                    <div className="wrapper antialiased text-gray-900">

                                        <div className="relative">
                                            <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe>
                                            <div className="flex flex-wrap">
                                                <div className="w-1/5">
                                                    <a href="!#">
                                                        <div
                                                            class="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                            <img className="h-6 w-6" src={SpeedMeter} />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="w-4/5">
                                                    <a href="!#">
                                                        <div class="text-lg absolute top-0 text-white mt-5">
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
                        <div class="hidden p-4 bg-white rounded-lg" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                    <div className="wrapper antialiased text-gray-900">

                                        <div className="relative">
                                            <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe>
                                            <div className="flex flex-wrap">
                                                <div className="w-1/5">
                                                    <a href="!#">
                                                        <div
                                                            class="text-sm absolute top-0 left-2 bg-black px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                            <img className="h-6 w-6" src={SpeedMeter} />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="w-4/5">
                                                    <a href="!#">
                                                        <div class="text-lg absolute top-0 text-white mt-5">
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