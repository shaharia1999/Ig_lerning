import React, { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

import SpeedMeter from "../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import ShareIcon from "../../asset/images/icon/icon_share.png";
import Play from "../../asset/images/icon/play.png";
import CourseLogo from "../../asset/images/logo/course-logo.png";
import MyVideo from "../../asset/video/mov_bbb.mp4";
import 'tw-elements';
import ReactFlagsSelect from "react-flags-select";
import MultiRangeSlider from "multi-range-slider-react";
import webroukCustomRange from "https://cdn.skypack.dev/webrouk-custom-range@latest";

function CourseSearchFilter() {
    const [selected, setSelected] = useState("");
    const onSelect = (code) => setSelected(code);

    const showSelectedLabel = ("Show Selected Label", true);
    const showSecondarySelectedLabel = (
        "Show Secondary Selected Label",
        true
    );
    const selectedSize = ("Selected Size", 16);
    const showOptionLabel = ("Show Option Label", true);
    const showSecondaryOptionLabel = ("Show Secondary Option Label", true);
    const optionsSize = ("Options Size", 16);
    const placeholder = ("Placeholder", "");
    const searchable = ("Searchable", false);
    const searchPlaceholder = ("Search Placeholder", "");
    const alignOptionsToRight = ("Align Options to Right", false);
    const fullWidth = ("Full Width", true);
    const disabled = ("Disabled", false);


    // for multiple rage selection
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };


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

                                <select class="select h-8 w-56 border-none active:outline-none focus:outline-none rounded-sm bg-gray-200 focus:border-hidden  active:border-hidden font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Short Result By</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="5">Most Relevent</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="4">Most Reviewed</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="3">Highest rated</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="2">Newest</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="1">Lowest Price</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="1">Highest Price</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white hover:bg-maincolor" value="1">Best Selling</option>
                                    <hr/>
                                    <option className=" text-gray-500 bg-white  hover:bg-maincolor" value="1">Best Teacher</option>
                                </select>

                                <BsFillGrid3X3GapFill className=" text-3xl float-right xl:ml-4 xl:mt-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="flex flex-wrap xl:mt-10">
                        <div className="xl:w-4/12 xl:pr-10">
                            <div className="flex flex-wrap bg-white rounded-xl shadow-search-filter border-none xl:pl-7 xl:pr-6 w-full xl:mt-6 xl:pb-8">

                                <div className="xl:w-full">
                                    <h6 className="xl:text-2xl xl:mt-5 xl:font-bold text-maingray">Course Filters</h6>
                                </div>

                                <div className="xl:w-full">
                                    <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Details</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>



                                <div className="xl:w-full flex flex-wrap">
                                    <div className="xl:w-1/2 xl:pr-1">
                                        <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Duration</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                        </select>
                                    </div>

                                    <div className="xl:w-1/2 xl:pl-1">
                                        <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Course By</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="xl:w-full xl:mt-7">
                                    <ReactFlagsSelect
                                        selected={selected}
                                        onSelect={onSelect}
                                        showSelectedLabel={showSelectedLabel}
                                        showSecondarySelectedLabel={showSecondarySelectedLabel}
                                        selectedSize={selectedSize}
                                        showOptionLabel={showOptionLabel}
                                        showSecondaryOptionLabel={showSecondaryOptionLabel}
                                        optionsSize={optionsSize}
                                        placeholder={placeholder}
                                        searchable={searchable}
                                        searchPlaceholder={searchPlaceholder}
                                        alignOptionsToRight={alignOptionsToRight}
                                        fullWidth={fullWidth}
                                        disabled={disabled}
                                    />
                                </div>


                                <div className="xl:w-full flex flex-wrap">
                                    <div className="xl:w-1/2 xl:pr-1">
                                        <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Language</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                        </select>
                                    </div>

                                    <div className="xl:w-1/2 xl:pl-1">
                                        <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Level</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="xl:w-full">
                                    <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Features</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>


                                <div className="xl:w-full">
                                    <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Prices</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>


                                <div className="xl:w-full">
                                    <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Type</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>


                                <div className="xl:w-full">
                                    <div class="form-check xl:mt-7">
                                        <input class="form-check-input appearance-none focus:outline-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label inline-block text-gray-800 xl:text-sm xl:font-normal" for="flexCheckDefault">
                                            Option Checkable (Value)
                                        </label>
                                    </div>
                                </div>


                                <div className="xl:w-full xl:mt-7">
                                    <webrouk-custom-range start="0" end="5000" from="300" to="700" prefix-char="$">

                                        <input type="hidden" />
                                    </webrouk-custom-range>
                                </div>


                                <div className="xl:w-full xl:h-12 xl:pt-3 bg-gray-100 xl:mt-7">
                                    <div className="flex">
                                        <span className="ml-3 w-80 text-sm font-medium text-gray-900 dark:text-gray-300 float-left">IntelloGeek Choice</span>
                                        <label for="default-toggle" className="relative cursor-pointer float-right right-0 flex">
                                            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-maincolor"></div>

                                        </label>
                                    </div>

                                </div>



                                <div className="xl:w-full flex flex-wrap xl:mt-7">
                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Itialian
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        With Certificate
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>


                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Big Data Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>


                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Italian
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 xl:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Big Data Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>
                                </div>



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