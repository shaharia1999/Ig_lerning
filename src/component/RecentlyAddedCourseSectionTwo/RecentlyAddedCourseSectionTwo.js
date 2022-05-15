import React, { Component, Fragment } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpeedMeter from "../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import ShareIcon from "../../asset/images/icon/icon_share.png";
import MasterCourseThumbnail from "../../asset/images/master-course/master-course-thumbnail.png";
import Play from "../../asset/images/icon/play.png";
import CourseLogo from "../../asset/images/logo/course-logo.png";
import Flag from "../../asset/images/icon/usa.png";
import { GoPrimitiveDot } from "react-icons/go";
import { MdLogin } from "react-icons/md";

class RecentlyAddedCourseSectionTwo extends Component {
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

                                <div class="mb-4">
                                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                        <li class="mr-2" role="presentation">
                                            <button class="active text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="master-tab" data-tabs-target="#master" type="button" role="tab" aria-controls="master" aria-selected="false">Master Degrees</button>
                                        </li>
                                        <li class="mr-2" role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="certifications-tab" data-tabs-target="#certifications" type="button" role="tab" aria-controls="certifications" aria-selected="false">Certifications</button>
                                        </li>
                                        <li class="mr-2" role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="certificate-tab" data-tabs-target="#certificate-data" type="button" role="tab" aria-controls="certificate-data" aria-selected="false">Certificates</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div id="myTabContent">
                        <div class="hidden p-4 bg-white rounded-lg" id="master" role="tabpanel" aria-labelledby="master-tab">

                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div class="mb-4 mt-4">
                                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent1" role="tablist">
                                        <li class="mr-2" role="presentation">
                                            <button class="active text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="business1-tab" data-tabs-target="#business1" type="button" role="tab" aria-controls="business1" aria-selected="false">Business & Company</button>
                                        </li>
                                        <li class="mr-2" role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="finance1-tab" data-tabs-target="#finance1" type="button" role="tab" aria-controls="finance1" aria-selected="false">Finance</button>
                                        </li>
                                        <li class="mr-2" role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="big-data1-tab" data-tabs-target="#big-data1" type="button" role="tab" aria-controls="big-data1" aria-selected="false">IA & Big Data</button>
                                        </li>
                                        <li role="presentation">
                                            <button class="text-base font-medium leading-tight bg-white focus:bg-maincolor active:bg-maincolor inline-block text-black hover:text-black focus:text-white active:text-white lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 rounded-3xl mx-2 h-11" id="marketing-tab1" data-tabs-target="#marketing1" type="button" role="tab" aria-controls="marketing1" aria-selected="false">Digital Marketing</button>
                                        </li>
                                    </ul>
                                </div>



                                <div id="myTabContent1">
                                    <div class="hidden p-4 bg-white rounded-lg" id="business1" role="tabpanel" aria-labelledby="business-tab1">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">

                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                                <div className="wrapper antialiased text-gray-900">

                                                    <div className="relative">
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

                                                        <div className="flex flex-wrap lg:mt-3">
                                                            <div className="w-1/5">
                                                                <a href="!#">
                                                                    <div
                                                                        class="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="w-4/5">
                                                                <a href="!#">
                                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                                        <h6 className="font-medium text-xl -mt-2 text-white">University of Mishigan</h6>
                                                                        <h6 className="font-extralight lg:-ml-6 flex text-sm text-white"> <img className="w-5 h-5 rounded-full border-2 border-white mr-2" src={Flag} /> United State of America</h6>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="relative px-4 -mt-16">
                                                        <div className="bg-white p-4 rounded-lg shadow-lg">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                                        English Course Learn Online</h4>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <span className="text-gray-600 text-xs mt-2">Starts September 2022</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2">  11 Weeks</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-start">
                                                                        <span className="bg-master-degree-bg rounded-xl lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 text-master-degree-text  text-xs mt-2">Certified Master Degrees</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap mt-5">
                                                                <div className="w-2/5">
                                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                                        <a className="z-30"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" /></a>
                                                                        <a className="-ml-3 z-20"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" /></a>
                                                                        <a className="-ml-3 z-10"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="w-3/5 relative">
                                                                    <div className="flex xl:justify-end -mt-3 absolute right-0 absolute">
                                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
                                                                        <button
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal"/>
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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

                                                        <div className="flex flex-wrap lg:mt-3">
                                                            <div className="w-1/5">
                                                                <a href="!#">
                                                                    <div
                                                                        class="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="w-4/5">
                                                                <a href="!#">
                                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                                        <h6 className="font-medium text-xl -mt-2 text-white">University of Mishigan</h6>
                                                                        <h6 className="font-extralight lg:-ml-6 flex text-sm text-white"> <img className="w-5 h-5 rounded-full border-2 border-white mr-2" src={Flag} /> United State of America</h6>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="relative px-4 -mt-16">
                                                        <div className="bg-white p-4 rounded-lg shadow-lg">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                                        English Course Learn Online</h4>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <span className="text-gray-600 text-xs mt-2">Starts September 2022</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2">  11 Weeks</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-start">
                                                                        <span className="bg-master-degree-bg rounded-xl lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 text-master-degree-text  text-xs mt-2">Certified Master Degrees</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap mt-5">
                                                                <div className="w-2/5">
                                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                                        <a className="z-30"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" /></a>
                                                                        <a className="-ml-3 z-20"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" /></a>
                                                                        <a className="-ml-3 z-10"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="w-3/5 relative">
                                                                    <div className="flex xl:justify-end -mt-3 absolute right-0 absolute">
                                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
                                                                        <button
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal"/>
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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

                                                        <div className="flex flex-wrap lg:mt-3">
                                                            <div className="w-1/5">
                                                                <a href="!#">
                                                                    <div
                                                                        class="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="w-4/5">
                                                                <a href="!#">
                                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                                        <h6 className="font-medium text-xl -mt-2 text-white">University of Mishigan</h6>
                                                                        <h6 className="font-extralight lg:-ml-6 flex text-sm text-white"> <img className="w-5 h-5 rounded-full border-2 border-white mr-2" src={Flag} /> United State of America</h6>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="relative px-4 -mt-16">
                                                        <div className="bg-white p-4 rounded-lg shadow-lg">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                                        English Course Learn Online</h4>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <span className="text-gray-600 text-xs mt-2">Starts September 2022</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2">  11 Weeks</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-start">
                                                                        <span className="bg-master-degree-bg rounded-xl lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 text-master-degree-text  text-xs mt-2">Certified Master Degrees</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap mt-5">
                                                                <div className="w-2/5">
                                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                                        <a className="z-30"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" /></a>
                                                                        <a className="-ml-3 z-20"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" /></a>
                                                                        <a className="-ml-3 z-10"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="w-3/5 relative">
                                                                    <div className="flex xl:justify-end -mt-3 absolute right-0 absolute">
                                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
                                                                        <button
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal"/>
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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

                                                        <div className="flex flex-wrap lg:mt-3">
                                                            <div className="w-1/5">
                                                                <a href="!#">
                                                                    <div
                                                                        class="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                        <img className="h-12 w-12" src={CourseLogo} />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="w-4/5">
                                                                <a href="!#">
                                                                    <div class="text-lg absolute top-0 text-white mt-5">
                                                                        <h6 className="font-medium text-xl -mt-2 text-white">University of Mishigan</h6>
                                                                        <h6 className="font-extralight lg:-ml-6 flex text-sm text-white"> <img className="w-5 h-5 rounded-full border-2 border-white mr-2" src={Flag} /> United State of America</h6>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="relative px-4 -mt-16">
                                                        <div className="bg-white p-4 rounded-lg shadow-lg">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">Traning
                                                                        English Course Learn Online</h4>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <span className="text-gray-600 text-xs mt-2">Starts September 2022</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-2/4">
                                                                    <div className="flex sm:justify-center xl:justify-start">
                                                                        <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2">  11 Weeks</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-start">
                                                                        <span className="bg-master-degree-bg rounded-xl lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 text-master-degree-text  text-xs mt-2">Certified Master Degrees</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap mt-5">
                                                                <div className="w-2/5">
                                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                                        <a className="z-30"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" /></a>
                                                                        <a className="-ml-3 z-20"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" /></a>
                                                                        <a className="-ml-3 z-10"><img className="h-8 w-8 rounded-full border-2 border-white" src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="w-3/5 relative">
                                                                    <div className="flex xl:justify-end -mt-3 absolute right-0 absolute">
                                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                                            <img className="px-1 h-3 w-5" src={LoveIcon} /></button>
                                                                        <button
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal"/>
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


                                    <div class="hidden p-4 bg-white rounded-lg" id="finance1" role="tabpanel" aria-labelledby="finance-tab1">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                                <div className="wrapper antialiased text-gray-900">

                                                    <div className="relative">
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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

                                    <div class="hidden p-4 bg-white rounded-lg" id="big-data1" role="tabpanel" aria-labelledby="big-data1-tab">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                                <div className="wrapper antialiased text-gray-900">

                                                    <div className="relative">
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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

                                    <div class="hidden p-4 bg-white rounded-lg" id="marketing1" role="tabpanel" aria-labelledby="marketing-tab1">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                                                <div className="wrapper antialiased text-gray-900">

                                                    <div className="relative">
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                                                        {/* <iframe className="w-full h-72 object-cover object-center rounded-lg shadow-md"
                                                src="https://www.youtube.com/embed/j5Zsa_eOXeY"></iframe> */}
                                                        <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} />

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
                        </div>

                        <div class="hidden p-4 bg-white rounded-lg" id="certifications" role="tabpanel" aria-labelledby="certifications-tab">
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
                        <div class="hidden p-4 bg-white rounded-lg" id="certificate-data" role="tabpanel" aria-labelledby="certificate-data-tab">
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
}
export default RecentlyAddedCourseSectionTwo;