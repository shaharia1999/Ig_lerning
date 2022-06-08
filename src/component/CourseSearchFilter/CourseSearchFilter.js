import React, { Fragment, useState, useEffect } from "react";
import { FaStar, FaThList } from "react-icons/fa";
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
import StarRatings from 'react-star-ratings';
import ReactFlagsSelect from "react-flags-select";
import MultiRangeSlider from "multi-range-slider-react";
import webroukCustomRange from "https://cdn.skypack.dev/webrouk-custom-range@latest";
import { Link } from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";


function CourseSearchFilter() {
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

    const [courseLevel, setCourseLevel] = useState([]);
    const [courseLanguage, setCourseLanguage] = useState([]);
    const [courseCountry, setCourseCountry] = useState([]);
    const [courseSubCategory, setSubCategory] = useState([]);
    const [courseFilterData, setCourseFilterData] = useState([]);
    const countryCodeName = [];

    const countries = courseCountry;


    // for multiple rage selection
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    console.log('min price value = ', minValue);
    console.log('max price value = ', maxValue);

    const [selected, setSelected] = useState(null);
    var contryCode = selected;

    var onSelect = (code) => {
        setSelected(code);
        contryCode = code;
        SearchFunction();
    }

    var [languageID, setLanguageID] = useState(null);
    var newLanguageID = languageID;
    var selectLanguage = (e) => {
        setLanguageID(e.target.value)
        newLanguageID = e.target.value;
        SearchFunction();
    }

    const [courseLevelID, setCourseLevelID] = useState(null);
    var NewCourseLevelID = courseLevelID;

    var selectCourseLevelID = (e) => {
        setCourseLevelID(e.target.value)
        NewCourseLevelID = e.target.value;
        SearchFunction();
    }

    const [SubCategoryID, setSubCategoryID] = useState(null);
    var NewSubCategoryID = SubCategoryID;

    var selectSubCategoryID = (e) => {
        setSubCategoryID(e.target.value)
        NewSubCategoryID = e.target.value;
        SearchFunction();
    }

    var courseDetails = null;


    var [courseWithCertificate, setCourseWithCertificate] = useState(false);
    var newCourseWithCertificate = courseWithCertificate;
    var selectCourseWithCertificate = (e) => {
        setCourseWithCertificate(e.target.checked);
        newCourseWithCertificate = e.target.checked;
        SearchFunction();
    }
    const [IntelloGeekChoice, setIntelloGeekChoice] = useState(false);

    var newIntelloGeekChoice = IntelloGeekChoice;
    var selectIntelloGeekChoice = (e) => {
        setIntelloGeekChoice(e.target.checked);
        newIntelloGeekChoice = e.target.checked;
        SearchFunction();
    }

    console.log('courseWithCertificate = ', courseWithCertificate);
    console.log('IntelloGeekChoice = ', IntelloGeekChoice);


    const [isLoading, setIsLoading] = useState(false);
    const [courseList, setCourseList] = useState(false);


    useEffect(() => {
        axios.get(`${ApiUrl.BaseUrl}api/v2/courselevel-info/`).then((response) => {
            if (response.data.error === false) {
                setCourseLevel(response.data.data);
            }
        });
        axios.get(`${ApiUrl.BaseUrl}api/v2/course-language-info/`).then((response) => {
            if (response.data.error === false) {
                setCourseLanguage(response.data.data)
            }
        });
        axios.get(`${ApiUrl.BaseUrl}api/v2/country-info/`).then((response) => {
            if (response.data.error === false) {
                for (var i = 0; i < response.data.data.length; i++) {
                    var s = String(response.data.data[i].country_code_name)
                    countryCodeName.push(s)
                }
                setCourseCountry(countryCodeName)
            }
        });
        axios.get(`${ApiUrl.BaseUrl}api/v2/sub-category-info/`).then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
            }
        });
    }, [])


    const SearchFunction = () => {
        setIsLoading(true);

        console.log('contryCode = ', contryCode);
        var data = {
            course_level_id: NewCourseLevelID,
            language_id: newLanguageID,
            country_id: contryCode,
            sub_category_id: NewSubCategoryID,
            course_with_certificate: newCourseWithCertificate,
            intellogeek_choice: newIntelloGeekChoice
        }
        console.log('function called data is ', data);
        axios.post(`${ApiUrl.BaseUrl}api/search/course/`, data).then((response) => {
            if (response.data.error === false) {
                console.log('success')
                console.log('course filter data = ', response.data.data);
                setCourseFilterData(response.data.data);
                setIsLoading(false);
            }
        })
    };
    const CourseLevelHTML = (() => {
        return (
            courseLevel.map((course_level) => (
                <option className="text-maincolor bg-white hover:bg-maincolor"
                    value={course_level.course_level_id}>
                    {course_level.course_level_title}
                </option>
            ))
        )
    })()

    const CourseLanguageHTML = (() => {
        return (
            courseLanguage.map((course_language) => (
                <option className="text-maincolor bg-white hover:bg-maincolor" value={course_language.language_id}>{course_language.language_name}</option>
            ))
        )
    })()

    const CourseSubCategoryHTML = (() => {
        return (
            courseSubCategory.map((course_sub_category) => (
                <option className="text-maincolor bg-white hover:bg-maincolor" value={course_sub_category.sub_category_id}>{course_sub_category.sub_category_name}</option>
            ))
        )
    })()

    const CourseFilterDataHTML = (() => {
        if (isLoading === true) {
            return <h1>Loading</h1>
        }
        else if (isLoading === false) {
            if (courseList === false) {
                return (
                    courseFilterData.map((course_filter_data, course_filter_index) => (
                        <div key={course_filter_index} className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
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
                    ))
                )
            }
            else if (courseList === true) {
                return (
                    courseFilterData.map((course_filter_data1, course_filter_index1) => (
                        <div key={course_filter_index1} className="my-1 px-1 bg-white p-3 rounded-lg shadow-lg xl:my-3 xl:px-1.5 w-full">
                            <div className="wrapper flex antialiased">
                                <div className="relative w-2/12">
                                    <video type="video/mp4" muted
                                        loop className="w-32 vid h-24 xl:ml-2 object-cover object-center rounded-lg shadow-md"
                                        src={MyVideo}></video>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-4 rounded-full h-5 w-5 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="xl:h-5 xl:w-5" src={CourseLogo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-3">
                                                    <h6 className="font-medium xl:text-xs text-white xl:ml-1">sdhjb sdfhbja asufhba</h6>
                                                    <h6 className="font-light xl:text-xs text-white">40 min</h6>
                                                    <img className="xl:h-12 xl:ml-2 xl:-mt-6" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-6/12 xl:-ml-3">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <h4 className="mt-1 xl:text-xl font-semibold text leading-tight text-CourseTitle">
                                                Tame your Big Data Course Learn Online
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap xl:mt-1.5 xl:mb-1.5">
                                        <div className="w-full">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <span className="text-gray-600 text-sm">77 Participients</span>
                                            </div>
                                        </div>
                                    </div>

                                    <StarRatings
                                        rating={3.5}
                                        starDimension="18px"
                                        starSpacing="4px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                </div>

                                <div className="w-4/12 xl:pr-2">

                                    <div className="flex flex-wrap xl:mt-1">
                                        <div className="w-full">
                                            <div className="flex xl:justify-end">
                                                <span className="text-maincolor xl:text-xl xl:font-semibold">$4.99</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full flex-wrap xl:mt-5">
                                        <div className="w-1/2">
                                            <div className="flex xl:justify-around">
                                                <a><img className="xl:h-7 xl:w-7 mx-1" src={SpeedMeter} alt="" /></a>
                                                <a><img className="xl:h-7 xl:w-7 mx-1" src={ShareIcon} alt="" /></a>
                                                <a><img className="xl:h-7 xl:w-7 mx-1" src={CertificateIcon} alt="" /></a>
                                            </div>
                                        </div>

                                        <div className="w-1/2 relative">
                                            <div className="flex xl:justify-around right-0 absolute">
                                                <button className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white xl:mr-4 xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 rounded-md">
                                                    <img className="xl:h-4 xl:w-4 mx-1" src={LoveIcon} alt="" />
                                                </button>
                                                <button data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    className="xl:text-xs xl:font-normal bg-maincolor mx-1 text-white xl:pl-4 xl:pr-4 xl:pt-2 xl:pb-2 rounded-sm">Enroll
                                                    Now
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    ))
                )
            }
        }
    })()


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

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="5">Most Relevent</option>

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="4">Most Reviewed</option>

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="3">Highest rated</option>

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="2">Newest</option>

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="1">Lowest Price</option>

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="1">Highest Price</option>

                                    <option className=" option-custom bg-white hover:bg-maincolor" value="1">Best Selling</option>

                                    <option className=" option-custom bg-white  hover:bg-maincolor" value="1">Best Teacher</option>
                                </select>
                                {(() => {
                                    if (courseList === false) {
                                        return (
                                            <BsFillGrid3X3GapFill
                                                value={courseList}
                                                onClick={() => setCourseList(true)}
                                                className=" text-3xl float-right xl:ml-4 xl:mt-2" />
                                        )
                                    } else if (courseList === true) {
                                        return (
                                            <FaThList
                                                value={courseList}
                                                onClick={() => setCourseList(false)}
                                                className=" text-3xl float-right xl:ml-4 xl:mt-2" />
                                        )
                                    }
                                })()}
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

                                <div className="xl:w-full">
                                    <select
                                        onChange={selectSubCategoryID}
                                        value={SubCategoryID}
                                        class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Subcategories Course</option>
                                        {
                                            CourseSubCategoryHTML
                                        }
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
                                        value={selected}
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
                                        countries={countries}
                                    />
                                </div>

                                <div className="xl:w-full flex flex-wrap">
                                    <div className="xl:w-1/2 xl:pr-1">
                                        <select
                                            onChange={selectLanguage}
                                            value={languageID}
                                            class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected value={0} className="hover:bg-maincolor text-sm">Language</option>
                                            {
                                                CourseLanguageHTML
                                            }
                                        </select>
                                    </div>
                                    <div className="xl:w-1/2 xl:pl-1">
                                        <select
                                            onChange={selectCourseLevelID}
                                            value={courseLevelID}
                                            class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Course Level</option>
                                            {
                                                CourseLevelHTML
                                            }
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
                                    <select class="select xl:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Skills</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>

                                <div className="xl:w-full">
                                    <div class="form-check xl:mt-7">
                                        <input class="form-check-input appearance-none focus:outline-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            value={courseWithCertificate}
                                            onChange={selectCourseWithCertificate}
                                            id="flexCheckDefault" />
                                        <label class="form-check-label inline-block text-gray-800 xl:text-sm xl:font-normal" for="flexCheckDefault">
                                            Course with certificate
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
                                            <input type="checkbox"
                                                onChange={selectIntelloGeekChoice}
                                                value={IntelloGeekChoice}
                                                id="default-toggle" className="sr-only peer" />
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
                                        {
                                            CourseFilterDataHTML
                                        }
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