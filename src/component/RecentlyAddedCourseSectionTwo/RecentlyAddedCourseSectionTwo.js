import React, { Component, Fragment } from "react";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import MasterCourseThumbnail from "../../asset/images/master-course/master-course-thumbnail.png";
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
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3"
                                        role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button type="button" className="nav-link1 block w-full md:w-auto px-6 py-3 my-2 md:mr-2 active text-base font-medium leading-tight mx-2 h-11" id="pills-master-tab3" data-bs-toggle="pill" data-bs-target="#pills-master" role="tab" aria-controls="pills-master" aria-selected="true">Master degress</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button type="button" className="nav-link1 block w-full md:w-auto px-6 py-3 my-2 md:mr-2 text-base font-medium leading-tight mx-2 h-11" id="pills-certifications-tab3" data-bs-toggle="pill" data-bs-target="#pills-certifications" role="tab" aria-controls="pills-certifications" aria-selected="false">Certifications</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button type="button" className="nav-link1 block w-full md:w-auto px-6 py-3 my-2 md:mr-2 text-base font-medium leading-tight mx-2 h-11" id="pills-certificate-tab3" data-bs-toggle="pill" data-bs-target="#pills-certificate" role="tab" aria-controls="pills-certificate" aria-selected="false">Certificate</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="tab-content mt-4" id="pills-tabContent3">
                        <div className="tab-pane fade show active" id="pills-master" role="tabpanel"
                            aria-labelledby="pills-master-tab3">


                            <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active text-base active:bg-maincolor focus:bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-business1-tab3" data-bs-toggle="pill" data-bs-target="#pills-business1" role="tab" aria-controls="pills-Business1" aria-selected="true">Business & Company</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-finance1-tab3" data-bs-toggle="pill" data-bs-target="#pills-finance1" role="tab" aria-controls="pills-finance1" aria-selected="false">Finance</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-bigdata1-tab3" data-bs-toggle="pill" data-bs-target="#pills-bigdata1" role="tab" aria-controls="pills-bigdata1" aria-selected="false">IA & Big Data</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-marketing1-tab3" data-bs-toggle="pill" data-bs-target="#pills-marketing1" role="tab" aria-controls="pills-marketing1" aria-selected="false">Digital Marketing</button>
                                </li>
                            </ul>


                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="tab-content mt-4" id="pills-tabContent3">
                                    <div className="tab-pane fade show active" id="pills-business1" role="tabpanel"
                                        aria-labelledby="pills-business1-tab3">

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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                    <div className="tab-pane fade" id="pills-finance1" role="tabpanel"
                                        aria-labelledby="pills-finance1-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                    <div className="tab-pane fade" id="pills-bigdata1" role="tabpanel"
                                        aria-labelledby="pills-bigdata1-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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

                                    <div className="tab-pane fade" id="pills-marketing1" role="tabpanel"
                                        aria-labelledby="pills-marketing1-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                        <div className="tab-pane fade" id="pills-certifications" role="tabpanel"
                            aria-labelledby="pills-certifications-tab3">
                            <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active text-base active:bg-maincolor focus:bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-business2-tab3" data-bs-toggle="pill" data-bs-target="#pills-business2" role="tab" aria-controls="pills-Business2" aria-selected="true">Business & Company</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-finance2-tab3" data-bs-toggle="pill" data-bs-target="#pills-finance2" role="tab" aria-controls="pills-finance2" aria-selected="false">Finance</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-bigdata2-tab3" data-bs-toggle="pill" data-bs-target="#pills-bigdata2" role="tab" aria-controls="pills-bigdata2" aria-selected="false">IA & Big Data</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-marketing2-tab3" data-bs-toggle="pill" data-bs-target="#pills-marketing2" role="tab" aria-controls="pills-marketing2" aria-selected="false">Digital Marketing</button>
                                </li>
                            </ul>


                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="tab-content mt-4" id="pills-tabContent3">
                                    <div className="tab-pane fade show active" id="pills-business2" role="tabpanel"
                                        aria-labelledby="pills-business2-tab3">

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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                    <div className="tab-pane fade" id="pills-finance2" role="tabpanel"
                                        aria-labelledby="pills-finance2-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                    <div className="tab-pane fade" id="pills-bigdata2" role="tabpanel"
                                        aria-labelledby="pills-bigdata2-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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

                                    <div className="tab-pane fade" id="pills-marketing2" role="tabpanel"
                                        aria-labelledby="pills-marketing2-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                        <div className="tab-pane fade" id="pills-certificate" role="tabpanel"
                            aria-labelledby="pills-certificate-tab3">
                            <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active text-base active:bg-maincolor focus:bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-business3-tab3" data-bs-toggle="pill" data-bs-target="#pills-business3" role="tab" aria-controls="pills-Business3" aria-selected="true">Business & Company</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-finance3-tab3" data-bs-toggle="pill" data-bs-target="#pills-finance3" role="tab" aria-controls="pills-finance3" aria-selected="false">Finance</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-bigdata3-tab3" data-bs-toggle="pill" data-bs-target="#pills-bigdata3" role="tab" aria-controls="pills-bigdata3" aria-selected="false">IA & Big Data</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11" id="pills-marketing3-tab3" data-bs-toggle="pill" data-bs-target="#pills-marketing3" role="tab" aria-controls="pills-marketing3" aria-selected="false">Digital Marketing</button>
                                </li>
                            </ul>


                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="tab-content mt-4" id="pills-tabContent3">
                                    <div className="tab-pane fade show active" id="pills-business3" role="tabpanel"
                                        aria-labelledby="pills-business3-tab3">

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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                    <div className="tab-pane fade" id="pills-finance3" role="tabpanel"
                                        aria-labelledby="pills-finance3-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                    <div className="tab-pane fade" id="pills-bigdata3" role="tabpanel"
                                        aria-labelledby="pills-bigdata3-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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

                                    <div className="tab-pane fade" id="pills-marketing3" role="tabpanel"
                                        aria-labelledby="pills-marketing3-tab3">
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
                                                                            className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
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
}
export default RecentlyAddedCourseSectionTwo;