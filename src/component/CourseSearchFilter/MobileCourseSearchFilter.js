import React, { Fragment, useState, useEffect } from "react";
import "../../asset/css/courseFilter.css";
import SpeedMeter from "../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import ShareIcon from "../../asset/images/icon/icon_share.png";
import Play from "../../asset/images/icon/play.png";
import 'tw-elements';
import StarRatings from 'react-star-ratings';
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrClose } from "react-icons/gr";
import ReactFlagsSelect from "react-flags-select";
import { IoCloseOutline } from "react-icons/io5";

function MobileCourseSearchFilter() {

    // course filter sidebar start
    const [CourseFilterSideNavState, setCourseFilterSideNavState] = useState("CourseFilterSideNavClose");
    const [CourseFilterContentOverState, setCourseFilterContentOverState] = useState("CourseFilterContentOverlayClose");
    console.log('SideNavState = ', CourseFilterSideNavState);

    const CourseFilterClickHandler = () => {
        CourseFilterSideNavOpenClose();
    }

    const CourseFilterContentOverlayClickHandler = () => {
        CourseFilterSideNavOpenClose();
    }

    const CourseFilterSideNavOpenClose = () => {
        if (CourseFilterSideNavState === "CourseFilterSideNavOpen") {
            setCourseFilterSideNavState("CourseFilterSideNavClose");
            setCourseFilterContentOverState("CourseFilterContentOverlayClose");
        } else {
            setCourseFilterSideNavState("CourseFilterSideNavOpen");
            setCourseFilterContentOverState("CourseFilterContentOverlayOpen");
        }
    }

    // course filter sidebar end

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

    const [courseCountry, setCourseCountry] = useState([]);

    const [selected, setSelected] = useState(null);
    var contryCode = selected;

    var onSelect = (code) => {
        setSelected(code);
        contryCode = code;
    }

    const [courseSubCategory, setSubCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get(`${ApiUrl.BaseUrl}api/v2/sub-category-info/`).then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
            }
        });
    }, [])

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
            return (
                <>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-4 xl:px-1.5 xl:w-1/4">
                        <div className="wrapper antialiased text-gray-900">
                            <div className="relative">
                                <video type="video/mp4" muted
                                    loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                    src={SpeedMeter}></video>

                                <div className="flex flex-wrap">
                                    <div className="w-1/5">
                                        <a href="!#">
                                            <div
                                                className="text-sm absolute top-0 left-2 h-10 rounded-full w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                <img className="h-10 rounded-full w-10" src={SpeedMeter} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-4/5">
                                        <a href="!#">
                                            <div className="text-lg absolute top-0 text-black mt-5">
                                                <h6 className="font-medium xl:text-sm text-black xl:ml-1">sefewfw</h6>
                                                <h6 className="font-light xl:text-xs text-black">30 min</h6>
                                                <img className="xl:h-24 xl:ml-6 xl:-mt-2 rounded-full" src={Play} alt="" />
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
                                                fwefw wefwe ewfwefw
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap xl:mt-1">
                                        <div className="w-2/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="flex relative sm:justify-center xl:justify-start">
                                                <span
                                                    className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={4}
                                            starDimension="15px"
                                            starSpacing="2px"
                                            starRatedColor="rgb(251, 191, 36)"
                                            className="xl:mt-1"
                                        />
                                        <h6 className="mb-4 xl:mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                            t
                                        </h6>
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
                                                    className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white xl:pl-0 xl:pr-0 xl:pt-1 xl:pb-1 xl:mr-1 rounded-sm">
                                                    <img className="xl:h-3 xl:w-3 mx-1" src={LoveIcon} alt="" /></button>
                                                <button
                                                    className="text-xs font-light bg-maincolor text-white xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 rounded-sm">Enroll
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
                                    src={SpeedMeter}></video>

                                <div className="flex flex-wrap">
                                    <div className="w-1/5">
                                        <a href="!#">
                                            <div
                                                className="text-sm absolute top-0 left-2 h-10 rounded-full w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                <img className="h-10 rounded-full w-10" src={SpeedMeter} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-4/5">
                                        <a href="!#">
                                            <div className="text-lg absolute top-0 text-black mt-5">
                                                <h6 className="font-medium xl:text-sm text-black xl:ml-1">sefewfw</h6>
                                                <h6 className="font-light xl:text-xs text-black">30 min</h6>
                                                <img className="xl:h-24 xl:ml-6 xl:-mt-2 rounded-full" src={Play} alt="" />
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
                                                fwefw wefwe ewfwefw
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap xl:mt-1">
                                        <div className="w-2/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="flex relative sm:justify-center xl:justify-start">
                                                <span
                                                    className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={4}
                                            starDimension="15px"
                                            starSpacing="2px"
                                            starRatedColor="rgb(251, 191, 36)"
                                            className="xl:mt-1"
                                        />
                                        <h6 className="mb-4 xl:mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                            t
                                        </h6>
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
                                                    className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white xl:pl-0 xl:pr-0 xl:pt-1 xl:pb-1 xl:mr-1 rounded-sm">
                                                    <img className="xl:h-3 xl:w-3 mx-1" src={LoveIcon} alt="" /></button>
                                                <button
                                                    className="text-xs font-light bg-maincolor text-white xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 rounded-sm">Enroll
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
                                    src={SpeedMeter}></video>

                                <div className="flex flex-wrap">
                                    <div className="w-1/5">
                                        <a href="!#">
                                            <div
                                                className="text-sm absolute top-0 left-2 h-10 rounded-full w-10 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                <img className="h-10 rounded-full w-10" src={SpeedMeter} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-4/5">
                                        <a href="!#">
                                            <div className="text-lg absolute top-0 text-black mt-5">
                                                <h6 className="font-medium xl:text-sm text-black xl:ml-1">sefewfw</h6>
                                                <h6 className="font-light xl:text-xs text-black">30 min</h6>
                                                <img className="xl:h-24 xl:ml-6 xl:-mt-2 rounded-full" src={Play} alt="" />
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
                                                fwefw wefwe ewfwefw
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap xl:mt-1">
                                        <div className="w-2/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="flex relative sm:justify-center xl:justify-start">
                                                <span
                                                    className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={4}
                                            starDimension="15px"
                                            starSpacing="2px"
                                            starRatedColor="rgb(251, 191, 36)"
                                            className="xl:mt-1"
                                        />
                                        <h6 className="mb-4 xl:mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                            t
                                        </h6>
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
                                                    className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white xl:pl-0 xl:pr-0 xl:pt-1 xl:pb-1 xl:mr-1 rounded-sm">
                                                    <img className="xl:h-3 xl:w-3 mx-1" src={LoveIcon} alt="" /></button>
                                                <button
                                                    className="text-xs font-light bg-maincolor text-white xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 rounded-sm">Enroll
                                                    Now
                                                </button>
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
    })()

    const courseSubCategoryHTML = (() => {
        return courseSubCategory.map((course_sub_category_list) => (
            <div className="w-1/4 mt-1 px-1.5">
                <button className=" text-breadcrumbs-text border border-gray-200 text-sm font-medium rounded-3xl pt-2 pb-2 pl-8 pr-8">
                    <i className="fa fa-book"></i>
                    <span className="ml-2">{course_sub_category_list.sub_category_name}</span>
                </button>
            </div>
        ))
    })()



    var settings1 = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: false
                }
            }
        ]
    };

    var settings = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    rows: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                    arrows: false,
                    rows: 4
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 4,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <Fragment>


            <div className="container">
                <div className="flex flex-wrap md:px-6 sm:px-7 px-5 md:mt-10 mt-7">
                    <div className="w-3/5">
                        <h6 className="text-lg text-maingray dark:text-white font-semibold mb-2">Result of your Research {'>>'} “Learn Big Data”</h6>
                    </div>
                    <div className="w-2/5 flex justify-end">
                        <button onClick={CourseFilterClickHandler} className="bg-maincolor text-sm font-medium rounded-lg px-3 py-1 h-8 text-white ">Course Filter</button>
                    </div>
                </div>
            </div >

            <div className="container-fluid">
                <div className="flex flex-wrap">
                    <div className="w-full bg-white dark:bg-dark-color2">
                        <div className="container">
                            <div className="md:mt-6 mt-4 mb-8">
                                <Slider
                                    {...settings1}
                                    slidesToShow={3}
                                    focusOnSelect={true}
                                    dots={false}
                                    adaptiveHeight={false}
                                    infinite={true}
                                    slidesToScroll={2}
                                    loop={true}
                                    speed={200}
                                    autoplay={false}
                                    autoplaySpeed={1500}
                                    swipeToSlide={true}
                                    arrows={false}
                                    variableWidth={true}
                                >
                                    {
                                        courseSubCategoryHTML
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="bg-gray-100 dark:bg-dark-color3 pt-3 pb-3">
                <div className="container">
                    <div className="flex flex-wrap pl-3 pr-3">
                        <div className="w-3/5">
                            <h6 className=" text-maingray dark:text-white text-sm mt-4 font-semibold">768 Result for “Learn Big Data”</h6>
                        </div>
                        <div className="w-2/5 flex justify-end">
                            <select className="select h-5 -py-1 border-none active:outline-none focus:outline-none rounded-sm bg-gray-200 focus:border-hidden  active:border-hidden font-normal">
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-wrap mt-5">
                    <div className="w-full">
                        <div className="mt-4">
                            <div className="fade show active">
                                <div className="px-1">
                                    <Slider
                                        {...settings}
                                        slidesToShow={2}
                                        focusOnSelect={true}
                                        dots={false}
                                        adaptiveHeight={false}
                                        infinite={true}
                                        slidesToScroll={1}
                                        loop={true}
                                        speed={200}
                                        autoplay={false}
                                        autoplaySpeed={1500}
                                        swipeToSlide={true}
                                        arrows={false}
                                        rows={4}
                                    >
                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
                                                                        Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="my-1 sm:px-5 md:px-2 px-1.5 md:w-1/3">
                                            <div className="wrapper antialiased text-gray-900">
                                                <div className="relative">
                                                    <video type="video/mp4" muted
                                                        loop className="w-full vid h-48 object-cover object-center rounded-lg shadow-md"
                                                        src={SpeedMeter}></video>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-1/5">
                                                            <a href="!#">
                                                                <div
                                                                    className="text-sm absolute top-0 left-2 h-8 rounded-full w-8 flex border-2 border-client-section-des flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                                    <img className="h-8 rounded-full w-8" src={SpeedMeter} alt="" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="w-4/5">
                                                            <a href="!#">
                                                                <div className="text-lg absolute top-0 text-black mt-3">
                                                                    <h6 className="font-medium text-sm text-black ml-2">Learn Python</h6>
                                                                    <h6 className="font-light text-xs text-black ml-2">30 min</h6>
                                                                    <img className="h-24 ml-4 mt-auto rounded-full" src={Play} alt="" />
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
                                                                Learn Python: The Complete Python Programming
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mt-1">
                                                            <div className="w-2/3">
                                                                <div className="flex md:justify-start">
                                                                    <span className="text-gray-600 text-xs dark:text-gray-500">77 Participients</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/3">
                                                                <div className="flex relative justify-start">
                                                                    <span
                                                                        className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">$20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul className="flex justify-start">
                                                            <StarRatings
                                                                rating={4}
                                                                starDimension="15px"
                                                                starSpacing="2px"
                                                                starRatedColor="rgb(251, 191, 36)"
                                                                className="mt-1"
                                                            />
                                                            <h6 className="mb-4 mt-1.5 mx-1 text-xs font-normal text-client-section-des">
                                                                (4)
                                                            </h6>
                                                        </ul>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-2/5">
                                                                <div className="flex justify-start -mt-2">
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={SpeedMeter} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={ShareIcon} alt="" /></a>
                                                                    <a><img className="md:h-4 md:w-4 h-3.5 w-3.5 mx-1" src={CertificateIcon} alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/5 relative">
                                                                <div
                                                                    className="flex sm:justify-center justify-start -mt-3 right-0 absolute">
                                                                    <button
                                                                        className="text-xs font-extralight leading-tight bg-BgLoveIcon text-white pl-0 pr-0 pt-1 pb-1 mr-0.5 rounded-sm">
                                                                        <img className="md:h-3 md:w-3 h-2 w-2 mx-1" src={LoveIcon} alt="" /></button>
                                                                    <button
                                                                        className="text-2xs font-light bg-maincolor text-white pl-1.5 pr-1.5 pt-0.5 pb-0.5 rounded-sm">Enroll
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
                        </div>
                    </div>
                </div>
            </div>

            <div className={CourseFilterSideNavState}>
                <div className="bg-white dark:bg-dark-color2">
                    <div className="flex flex-wrap mt-3">
                        <div className="w-1/2">
                            <h6 className="mt-7 ml-6 text-2xl font-semibold text-maingray">Course Filter</h6>
                        </div>
                        <div className="w-1/2">
                            <span onClick={CourseFilterClickHandler} className=" cursor-pointer"><GrClose className="mt-6 float-right mr-5 font-bold text-gray-600 h-9 w-9 bg-gray-200 rounded-full p-2" /></span>
                        </div>
                    </div>

                    <div className="flex flex-wrap mt-10 px-5">
                        <div className="w-full">
                            <select className="select w-full border-none active:outline-none focus:outline-none rounded-sm xl:mt-7 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                <option selected className="hover:bg-maincolor text-sm">Course Details</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                            </select>
                        </div>

                        <div className="w-full flex flex-wrap">
                            <div className="w-1/2 pr-1">
                                <select className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Duration</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                </select>
                            </div>

                            <div className="w-1/2 pl-1">
                                <select className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Course By</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                    <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full mt-5">
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
                            />
                        </div>

                        <div className="w-full flex flex-wrap">
                            <div className="w-1/2 pr-1">
                                <select
                                    className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                    <option selected value={0} className="hover:bg-maincolor text-sm">Language</option>
                                    <option className="hover:bg-maincolor text-sm" value="1">test1</option>
                                    <option className="hover:bg-maincolor text-sm" value="2">test2</option>
                                </select>
                            </div>
                            <div className="w-1/2 pl-1">
                                <select
                                    className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                    <option selected className="hover:bg-maincolor text-sm">Course Level</option>
                                    <option className="hover:bg-maincolor text-sm" value="1">test1</option>
                                    <option className="hover:bg-maincolor text-sm" value="2">test2</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full">
                            <select className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                <option selected className="hover:bg-maincolor text-sm">Course Features</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <select className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                <option selected className="hover:bg-maincolor text-sm">Course Prices</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <select className="select w-full border-none active:outline-none focus:outline-none rounded-sm mt-5 bg-gray-100 focus:border-maincolor focus:border-2 active:border-none font-normal">
                                <option selected className="hover:bg-maincolor text-sm">Course Type</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="5">1</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="4">2</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="3">3</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="2">4</option>
                                <option className="text-maincolor bg-white hover:bg-maincolor" value="1">5</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <div className="form-check mt-7">
                                <input className="form-check-input appearance-none focus:outline-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800 text-sm font-normal" for="flexCheckDefault">
                                    Course with certificate
                                </label>
                            </div>
                        </div>

                        <div className="w-full mt-7">
                            <webrouk-custom-range start="0" end="5000" from="300" to="700" prefix-char="$">

                                <input type="hidden" />
                            </webrouk-custom-range>
                        </div>

                        <div className="w-full h-12 pt-3 bg-gray-100 mt-7">
                            <div className="flex">
                                <span className="ml-3 w-80 text-sm font-medium text-gray-900 dark:text-gray-300 float-left">IntelloGeek Choice</span>
                                <label for="default-toggle" className="relative cursor-pointer float-right right-0 flex">
                                    <input type="checkbox"
                                        id="default-toggle" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-maincolor"></div>
                                </label>
                            </div>
                        </div>

                        <div className="w-full flex flex-wrap mt-7">
                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Itialian
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Spanish
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Courses
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Big Data
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Courses
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Italian
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Courses
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Big Data
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>

                            <span
                                className="px-4 py-1.5 mx-1 rounded-full text-gray-900 bg-white font-normal text-xs flex border border-gray-300 mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                Data
                                <button className="bg-transparent hover focus:outline-none">
                                    <span><IoCloseOutline className="h-4 w-4 ml-3" /></span>
                                </button>
                            </span>
                        </div>

                        <button className="btn btn-block bg-maincolor text-sm font-medium text-white mt-7 mb-10 border-none rounded-sm">
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            <div onClick={CourseFilterContentOverlayClickHandler} className={CourseFilterContentOverState}>

            </div>
        </Fragment>
    );
}

export default MobileCourseSearchFilter;