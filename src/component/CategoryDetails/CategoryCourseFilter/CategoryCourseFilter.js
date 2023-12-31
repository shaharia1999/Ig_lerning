import React, { Fragment, useState, useEffect } from "react";
import { FaStar, FaThList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import Play from "../../../asset/images/icon/play.png";
import 'tw-elements';
import StarRatings from 'react-star-ratings';
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";


function CategoryCourseFilter() {
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
            return (
                <>
                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-60 bg-white rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-3 top-0 bg-gray-100 rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5 ml-3">
                                            <div className="bg-gray-100 xl:w-28 h-3 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-3 mt-2 rounded"></div>
                                            <div className="xl:h-20 xl:mt-4 xl:-ml-8 xl:-mr-5 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-3 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-3 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-4 h-4 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-8 h-4 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (isLoading === false) {
            if (courseList === false) {
                return (
                    courseFilterData.map((course_filter_data, course_filter_index) => (
                        <div key={course_filter_index} className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 lg:w-1/3 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <video type="video/mp4" muted
                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                        src={ApiUrl.ImageBaseUrl + course_filter_data?.course_information?.promotional_video}></video>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-2 h-10 rounded-full w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-10 rounded-full w-10" src={ApiUrl.ImageBaseUrl + course_filter_data?.course_information?.channel_name?.channel_name_logo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-black mt-5">
                                                    <h6 className="font-medium lg:text-sm text-black xl:ml-1">{course_filter_data?.course_information?.channel_name?.channel_name}</h6>
                                                    <h6 className="font-light lg:text-xs text-black">{course_filter_data?.course_information?.course_duration} min</h6>
                                                    <img className="xl:h-24 lg:h-24 xl:ml-6 lg:ml-4 xl:-mt-2 rounded-full" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-2 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                        <div className="flex flex-wrap">
                                            <div className="w-full">
                                                <h4 className="mt-1 text-sm font-medium text leading-tight text-CourseTitle dark:text-white">
                                                    {course_filter_data?.course_information?.course_title}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap lg:mt-1">
                                            <div className="w-2/3">
                                                <div className="flex sm:justify-center lg:justify-start">
                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                </div>
                                            </div>
                                            <div className="w-1/3">
                                                <div className="flex relative sm:justify-center xl:justify-start">
                                                    <span
                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">${course_filter_data?.new_price}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="flex sm:justify-center lg:justify-start">
                                            <StarRatings
                                                rating={course_filter_data?.course_information?.avg_rating}
                                                starDimension="15px"
                                                starSpacing="2px"
                                                starRatedColor="rgb(251, 191, 36)"
                                                className="xl:mt-1"
                                            />
                                            <h6 className="mb-4 xl:mt-1.5 lg:mt-1 mx-1 text-xs font-normal text-client-section-des">
                                                ({course_filter_data?.course_information?.avg_rating})
                                            </h6>
                                        </ul>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex sm:justify-center lg:justify-start xl:-mt-3 lg:-mt-2">
                                                    <a><img className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 2xl:mx-1 lg:mx-0.5" src={SpeedMeter} alt="" /></a>
                                                    <a><img className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 2xl:mx-1 lg:mx-0.5" src={ShareIcon} alt="" /></a>
                                                    <a><img className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 2xl:mx-1 lg:mx-0.5" src={CertificateIcon} alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="w-1/2 relative">
                                                <div
                                                    className="flex sm:justify-center xl:justify-start -mt-3 2xl:ml-auto xl:-ml-5 lg:-ml-5 right-0 absolute">
                                                    <button
                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white xl:pl-0 xl:pr-0 xl:pt-1 xl:pb-1 lg:py-0.5 px-0.5 xl:mr-1 lg:mr-0.5 rounded-sm">
                                                        <img className="xl:h-3 xl:w-3 lg:h-3 lg:w-3 mx-1" src={LoveIcon} alt="" /></button>
                                                    <button
                                                        className="text-xs font-light bg-maincolor text-white xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 lg:px-1 lg:py-1 rounded-sm">Enroll
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
                        <div key={course_filter_index1} className="my-1 px-1 bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg xl:my-3 xl:px-1.5 w-full">
                            <div className="wrapper flex antialiased">
                                <div className="relative w-2/12">
                                    <video type="video/mp4" muted
                                        loop className="w-32 vid h-24 xl:ml-2 object-cover object-center rounded-lg shadow-md"
                                        src={ApiUrl.ImageBaseUrl + course_filter_data1?.course_information?.promotional_video}></video>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-4 rounded-full h-5 w-5 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="xl:h-5 xl:w-5 xl:rounded-full" src={ApiUrl.ImageBaseUrl + course_filter_data1?.course_information?.channel_name?.channel_name_logo} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 mt-3">
                                                    <h6 className="font-medium xl:text-xs text-white dark:text-white xl:ml-1">{course_filter_data1?.course_information?.channel_name?.channel_name}</h6>
                                                    <h6 className="font-light xl:text-xs text-white dark:text-white">{course_filter_data1?.course_information?.course_duration} min</h6>
                                                    <img className="xl:h-16 lg:h-16 xl:ml-2 lg:ml-1 lg:-mt-4 xl:-mt-2" src={Play} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-6/12 2xl:-ml-3 xl:ml-3 lg:ml-4">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <h4 className="mt-1 2xl:text-lg xl:text-base lg:text-sm font-semibold text leading-none text-CourseTitle dark:text-white">
                                                {course_filter_data1?.course_information?.course_title}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap 2xl:my-1 xl:my-0.5 lg:my-0.5">
                                        <div className="w-full">
                                            <div className="flex sm:justify-center lg:justify-start">
                                                <span className="text-gray-600 text-sm dark:text-gray-500">77 Participients</span>
                                            </div>
                                        </div>
                                    </div>

                                    <StarRatings
                                        rating={course_filter_data1?.course_information?.avg_rating}
                                        starDimension="16px"
                                        starSpacing="2px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                </div>

                                <div className="w-4/12 xl:pr-2">

                                    <div className="flex flex-wrap xl:mt-1">
                                        <div className="w-full">
                                            <div className="flex lg:justify-end">
                                                <span className="text-maincolor xl:text-xl xl:font-semibold">${course_filter_data1?.new_price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex w-full flex-wrap xl:mt-5 lg:mt-10">
                                        <div className="w-1/2">
                                            <div className="flex lg:justify-end">
                                                <a><img className="2xl:h-7 2xl:w-7 xl:h-6 xl:w-6 lg:h-5.5 lg:w-5 xl:mx-1 lg:mx-0.5" src={SpeedMeter} alt="" /></a>
                                                <a><img className="2xl:h-7 2xl:w-7 xl:h-6 xl:w-6 lg:h-5 lg:w-5 xl:mx-1 lg:mx-0.5" src={ShareIcon} alt="" /></a>
                                                <a><img className="2xl:h-7 2xl:w-7 xl:h-6 xl:w-6 lg:h-5 lg:w-5 xl:mx-1 lg:mx-0.5" src={CertificateIcon} alt="" /></a>
                                            </div>
                                        </div>

                                        <div className="w-1/2 relative">
                                            <div className="flex lg:justify-start right-0 absolute">
                                                <button className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white 2xl:mr-4 2xl:px-2 2xl:py-1 xl:px-2 xl:py-0.5 lg:px-1 lg:py-1  xl:rounded-md lg:rounded">
                                                    <img className="2xl:h-4 2xl:w-4 lg:h-3 lg:w-3 mx-1" src={LoveIcon} alt="" />
                                                </button>
                                                <button data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    className="xl:text-xs lg:text-2xs lg:font-normal bg-maincolor mx-1 text-white 2xl:px-4 xl:px-2 xl:py-1.5 lg:px-2 lg:py-1 rounded-sm">Enroll
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

    const courseSubCategoryHTML = (() => {
        return courseSubCategory.map((course_sub_category_list) => (
            <div className="lg:w-auto lg:mt-5 lg:mx-2">
                <button className=" text-breadcrumbs-text border border-gray-200 lg:text-sm lg:font-medium rounded-3xl xl:py-3 xl:px-12 lg:py-2 lg:px-10">
                    <i className="fa fa-book"></i>
                    <span className="ml-2">{course_sub_category_list.sub_category_name}</span>
                </button>
            </div>
        ))
    })()

    return (
        <Fragment>
            <div>
                <div className="container">
                    <h6 className="xl:mt-24 lg:mt-8 xl:text-3xl lg:text-xl text-maingray dark:text-white lg:font-bold lg:mb-0">Popular Topic</h6>
                </div >

                <div className="container-fluid">
                    <div className="flex flex-wrap">
                        <div className="lg:w-full bg-white dark:bg-dark-color2">
                            <div className="container">
                                <div className="flex flex-wrap xl:mt-6 lg:mt-4 xl:mb-10 lg:mb-8">
                                    {
                                        courseSubCategoryHTML
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div >


                <div className="container">
                    <h6 className="xl:mt-10 lg:mt-8 xl:text-3xl lg:text-xl text-maingray dark:text-white lg:font-bold lg:mb-0">Popular Instructor</h6>
                </div >

                <div className="container lg:mt-8">
                    <div className="flex flex-wrap w-full">

                        <div className="w-1/5 text-center lg:px-2">
                            <div className="bg-white rounded-md shadow-lg lg:p-6">
                                <img className="h-20 w-20 rounded-full mx-auto border-4 border-maincolor" src="https://eddie-hernandez.com/wp-content/uploads/2021/09/Medical-Residency-ERAS-application-photo-headshot-01.jpg" alt="" />
                                <h6 className="w-12 h-7 flex text-center mx-auto bg-white shadow-md p-2 -mt-3 relative rounded-sm"><FaStar className="text-xs text-CertificateColor" /><span className="text-xs text-maingray font-medium ml-0.5 -mt-0.25">4.8</span></h6>
                                <h6 className="xl:mt-2 xl:font-medium xl:text-lg">Daniel Walter Scott</h6>
                                <h6 className="text-xs text-gray-600">User Experience Design, User Interface Design</h6>
                                <div className="flex-wrap flex lg:mt-5 divide-x-2">
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Students</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">546,238</h6>
                                    </div>
                                
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Course</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/5 text-center lg:px-2">
                            <div className="bg-white rounded-md shadow-lg lg:p-6">
                                <img className="h-20 w-20 rounded-full mx-auto border-4 border-maincolor" src="https://eddie-hernandez.com/wp-content/uploads/2021/09/Medical-Residency-ERAS-application-photo-headshot-01.jpg" alt="" />
                                <h6 className="w-12 h-7 flex text-center mx-auto bg-white shadow-md p-2 -mt-3 relative rounded-sm"><FaStar className="text-xs text-CertificateColor" /><span className="text-xs text-maingray font-medium ml-0.5 -mt-0.25">4.8</span></h6>
                                <h6 className="xl:mt-2 xl:font-medium xl:text-lg">Daniel Walter Scott</h6>
                                <h6 className="text-xs">User Experience Design, User Interface Design</h6>
                                <div className="flex-wrap flex lg:mt-5 divide-x-2">
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Students</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">546,238</h6>
                                    </div>
                                
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Course</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/5 text-center lg:px-2">
                            <div className="bg-white rounded-md shadow-lg lg:p-6">
                                <img className="h-20 w-20 rounded-full mx-auto border-4 border-maincolor" src="https://eddie-hernandez.com/wp-content/uploads/2021/09/Medical-Residency-ERAS-application-photo-headshot-01.jpg" alt="" />
                                <h6 className="w-12 h-7 flex text-center mx-auto bg-white shadow-md p-2 -mt-3 relative rounded-sm"><FaStar className="text-xs text-CertificateColor" /><span className="text-xs text-maingray font-medium ml-0.5 -mt-0.25">4.8</span></h6>
                                <h6 className="xl:mt-2 xl:font-medium xl:text-lg">Daniel Walter Scott</h6>
                                <h6 className="text-xs">User Experience Design, User Interface Design</h6>
                                <div className="flex-wrap flex lg:mt-5 divide-x-2">
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Students</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">546,238</h6>
                                    </div>
                                
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Course</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/5 text-center lg:px-2">
                            <div className="bg-white rounded-md shadow-lg lg:p-6">
                                <img className="h-20 w-20 rounded-full mx-auto border-4 border-maincolor" src="https://eddie-hernandez.com/wp-content/uploads/2021/09/Medical-Residency-ERAS-application-photo-headshot-01.jpg" alt="" />
                                <h6 className="w-12 h-7 flex text-center mx-auto bg-white shadow-md p-2 -mt-3 relative rounded-sm"><FaStar className="text-xs text-CertificateColor" /><span className="text-xs text-maingray font-medium ml-0.5 -mt-0.25">4.8</span></h6>
                                <h6 className="xl:mt-2 xl:font-medium xl:text-lg">Daniel Walter Scott</h6>
                                <h6 className="text-xs">User Experience Design, User Interface Design</h6>
                                <div className="flex-wrap flex lg:mt-5 divide-x-2">
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Students</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">546,238</h6>
                                    </div>
                                
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Course</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/5 text-center lg:px-2">
                            <div className="bg-white rounded-md shadow-lg lg:p-6">
                                <img className="h-20 w-20 rounded-full mx-auto border-4 border-maincolor" src="https://eddie-hernandez.com/wp-content/uploads/2021/09/Medical-Residency-ERAS-application-photo-headshot-01.jpg" alt="" />
                                <h6 className="w-12 h-7 flex text-center mx-auto bg-white shadow-md p-2 -mt-3 relative rounded-sm"><FaStar className="text-xs text-CertificateColor" /><span className="text-xs text-maingray font-medium ml-0.5 -mt-0.25">4.8</span></h6>
                                <h6 className="xl:mt-2 xl:font-medium xl:text-lg">Daniel Walter Scott</h6>
                                <h6 className="text-xs">User Experience Design, User Interface Design</h6>
                                <div className="flex-wrap flex lg:mt-5 divide-x-2">
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Students</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">546,238</h6>
                                    </div>
                                
                                    <div className="w-1/2">
                                        <h6 className="lg:text-sm text-gray-400 font-normal">Total Course</h6>
                                        <h6 className="lg:text-lg text-maincolor font-semibold justify-start">30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-100 dark:bg-dark-color3 xl:py-3 lg:py-3 lg:mt-20">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="lg:w-1/2">
                                <h6 className=" text-maingray dark:text-white text-xl xl:mt-2 lg:mt-3 font-bold xl:pl-6 lg:pl-6">All Design Course</h6>
                            </div>
                            <div className="lg:w-1/2 flex justify-end">

                                <select className="select xl:h-8 lg:h-5 w-56 border-none active:outline-none focus:outline-none rounded-sm bg-gray-200 focus:border-hidden  active:border-hidden font-normal">
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
                                                className=" text-3xl cursor-pointer float-right xl:ml-4 lg:ml-4 xl:mt-2 lg:mt-2" />
                                        )
                                    } else if (courseList === true) {
                                        return (
                                            <FaThList
                                                value={courseList}
                                                onClick={() => setCourseList(false)}
                                                className="text-3xl cursor-pointer float-right xl:ml-4 lg:ml-4 xl:mt-2 lg:mt-2" />
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="flex flex-wrap lg:mt-10">
                        <div className="lg:w-4/12 lg:pr-10">
                            <div className="flex flex-wrap bg-white dark:bg-dark-color2 rounded-xl shadow-search-filter border-none xl:pl-7 lg:pl-4 xl:pr-6 lg:pr-4 w-full xl:mt-6 xl:pb-8 lg:pb-5">
                                <div className="lg:w-full">
                                    <h6 className="xl:text-2xl lg:text-xl xl:mt-5 lg:mt-4 lg:font-bold text-maingray dark:text-white">Course Filters</h6>
                                </div>

                                <div className="lg:w-full">
                                    <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Details</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>

                                <div className="lg:w-full">
                                    <select
                                        onChange={selectSubCategoryID}
                                        value={SubCategoryID}
                                        className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Subcategories Course</option>
                                        {
                                            CourseSubCategoryHTML
                                        }
                                    </select>
                                </div>

                                <div className="lg:w-full flex flex-wrap">
                                    <div className="xl:w-1/2 lg:w-full xl:pr-1">
                                        <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Duration</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                        </select>
                                    </div>

                                    <div className="xl:w-1/2 lg:w-full xl:pl-1">
                                        <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Course By</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                            <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="lg:w-full xl:mt-7">
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

                                <div className="lg:w-full flex flex-wrap">
                                    <div className="xl:w-1/2 lg:w-full xl:pr-1">
                                        <select
                                            onChange={selectLanguage}
                                            value={languageID}
                                            className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected value={0} className="hover:bg-maincolor text-sm">Language</option>
                                            {
                                                CourseLanguageHTML
                                            }
                                        </select>
                                    </div>
                                    <div className="xl:w-1/2 lg:w-full xl:pl-1">
                                        <select
                                            onChange={selectCourseLevelID}
                                            value={courseLevelID}
                                            className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                            <option selected className="hover:bg-maincolor text-sm">Course Level</option>
                                            {
                                                CourseLevelHTML
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="lg:w-full">
                                    <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Features</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>

                                <div className="lg:w-full">
                                    <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Prices</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>

                                <div className="lg:w-full">
                                    <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Course Type</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>

                                <div className="lg:w-full">
                                    <select className="select lg:w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 lg:mt-4 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                        <option selected className="hover:bg-maincolor text-sm">Skills</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                        <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                    </select>
                                </div>

                                <div className="lg:w-full">
                                    <div className="form-check xl:mt-7 lg:mt-4">
                                        <input className="form-check-input appearance-none focus:outline-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            value={courseWithCertificate}
                                            onChange={selectCourseWithCertificate}
                                            id="flexCheckDefault" />
                                        <label className="form-check-label inline-block text-gray-800 lg:text-sm lg:font-normal" for="flexCheckDefault">
                                            Course with certificate
                                        </label>
                                    </div>
                                </div>

                                <div className="lg:w-full xl:mt-7 lg:mt-4">
                                    <webrouk-custom-range start="0" end="5000" from="300" to="700" prefix-char="$">

                                        <input type="hidden" />
                                    </webrouk-custom-range>
                                </div>

                                <div className="lg:w-full xl:h-12 lg:h-8 xl:pt-3 lg:pt-1.5 bg-gray-100 xl:mt-7 lg:mt-3">
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

                                <div className="lg:w-full flex flex-wrap xl:mt-7 lg:mt-4">
                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Itialian
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        With Certificate
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Big Data Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Italian
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>

                                    <span
                                        className="xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 lg:mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        Big Data Courses
                                        <button className="bg-transparent hover focus:outline-none">
                                            <span><IoCloseOutline className="xl:h-4 xl:w-4 xl:ml-3" /></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-8/12">
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


export default CategoryCourseFilter;