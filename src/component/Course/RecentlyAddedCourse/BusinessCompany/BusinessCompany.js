import React, { Fragment, useEffect, useState, useRef } from "react";
import SpeedMeter from "../../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../../asset/images/icon/icon_share.png";
import ApiUrl from "../../../../Api/ApiUrl";
import Play from "../../../../asset/images/icon/play.png";
import CourseLogo from "../../../../asset/images/logo/course-logo.svg";
import 'tw-elements';
import axios from "axios";
import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                marginTop: "-20px",
                right: "-45px",
                opacity: "1",
                display: "block",
                background: "#ffffff",

                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "20px",
                position: "absolute",
                width: "40px",
                height: "40px",
                transform: "translate(0%, 0px)",
                cursor: "pointer",
                color: "transparent",
                border: "none",
                outline: "none",
                borderRadius: "50px",
            }}
            onClick={onClick}
        >
            <span className="slide-arrow-font-next"><MdOutlineArrowForwardIos /></span>
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                marginTop: "-20px",
                left: "-45px",
                opacity: "1",
                display: "block",
                background: "#ffffff",

                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "20px",
                position: "absolute",
                width: "40px",
                height: "40px",
                transform: "translate(0%, 0px)",
                cursor: "pointer",
                color: "transparent",
                border: "none",
                outline: "none",
                borderRadius: "50px",
            }}
            onClick={onClick}
        >
            <span className="slide-arrow-font-previous"><MdOutlineArrowBackIos /></span>
        </button>
    );
}

function BusinessCompany() {
    const [subCategory, setSubCategory] = useState([]);
    const [recently_addedsubcategoryId, setSubcategoryID] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [course_isLoading, setCourseIsLoading] = useState(false);

    const [nav9, setNav9] = useState();
    const slider9 = useRef();

    useEffect(() => {
        setIsLoading(true);
        setCourseIsLoading(true);

        axios.get(`${ApiUrl.BaseUrl}api/course/course-subcategory-response/`).then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
                setSubcategoryID(response.data.data);
                setIsLoading(false);
                setCourseIsLoading(false);
            }
        });
    }, []);

    const fetchData = (sub_category_id) => {
        console.log('seleceted sub category id called');
        setCourseIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/course-subcategory-response/${sub_category_id}/`).then((res) => {
            if (res.data.error === false) {
                setSubcategoryID(res.data.data);
                setCourseIsLoading(false);
            }
        });
    };

    const Subcategory_Loading = (() => {
        if (isLoading === true) {
            return (
                <>
                    <li className="nav-item animate-pulse mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 w-24 px-6 py-3 my-2 md:mr-2 h-8 rounded"></div>
                    </li>

                    <li className="nav-item animate-pulse mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 w-24 px-6 py-3 my-2 md:mr-2 h-8 rounded"></div>
                    </li>

                    <li className="nav-item animate-pulse mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 w-24 px-6 py-3 my-2 md:mr-2 h-8 rounded"></div>
                    </li>

                    <li className="nav-item animate-pulse mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 w-24 px-6 py-3 my-2 md:mr-2 h-8 rounded"></div>
                    </li>

                    <li className="nav-item animate-pulse mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 w-24 px-6 py-3 my-2 md:mr-2 h-8 rounded"></div>
                    </li>
                </>
            )
        }
    })()

    const data_of_subcategory = (() => {
        if (isLoading === false) {
            return subCategory.map((subcategory, index) => (
                <div key={index}>
                    <input id={subcategory.sub_category_id} type='hidden' name={subcategory.sub_category_id} />
                    <li className="nav-item list-none" role="presentation">
                        <button type="button"
                            className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 xl:text-base text-sm bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11"
                            onClick={() => fetchData(subcategory.sub_category_id)}
                        >
                            {subcategory.sub_category_name}
                        </button>
                    </li>
                </div>
            ));
        }
    })()

    const subcategory_course_Loading = (() => {
        if (course_isLoading === true) {
            return (
                <>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 dark:bg-dark-scleton2 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 dark:bg-dark-scleton2 w-12 h-7 rounded"></div>
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

    const data_of_subcategory_course = (() => {
        if (course_isLoading === false) {
            return recently_addedsubcategoryId.map((sub_category_course) => (
                sub_category_course.course_info.map((course, course_index) => (
                    <div key={course_index} className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/4">
                        <div className="wrapper antialiased text-gray-900">
                            <div className="relative">
                                <video type="video/mp4" muted
                                    loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                    src={ApiUrl.ImageBaseUrl + course.promotional_video}></video>

                                <div className="flex flex-wrap">
                                    <div className="w-1/5">
                                        <a href="!#">
                                            <div
                                                className="text-sm absolute top-0 xl:left-2 left-4 bg-black text-white rounded-full xl:h-12 xl:w-12 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                <img className="xl:h-12 xl:w-12 h-6 w-6" src={CourseLogo} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-4/5">
                                        <a href="!#">
                                            <div className="text-lg absolute top-0 xl:mt-5 mt-3 sm:ml-3">
                                                <h6 className="xl:font-medium font-normal xl:text-lg text-sm text-black dark:text-white">{course?.channel_name?.channel_name}</h6>
                                                <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">{course.course_duration} min</h6>

                                                <img className="xl:h-36 h-24 ml-8" src={Play} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <h4 className="mt-1 xl:text-base text-sm font-semibold text xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                {`${course.course_title.substring(0, 40)}...`}
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
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="flex relative sm:justify-center xl:justify-start">
                                                <span
                                                    className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">${course?.course_price[0]?.new_price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={course.avg_rating}
                                            starDimension="15px"
                                            starSpacing="4px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <h6 className="mb-4 mx-1 xl:text-sm text-xs font-normal text-client-section-des">({course.avg_rating})</h6>
                                    </ul>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start xl:-mt-3 -mt-1">
                                                <a><img className="xl:px-1 px-0.5 xl:h-6 xl:w-8 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                <a><img className="xl:px-1 px-0.5 xl:h-6 xl:w-8 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                <a><img className="xl;px-1 px-0.5 xl:h-6 xl:w-8 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div
                                                className="flex sm:justify-center xl:justify-start xl:-mt-3 -mt-1 right-0 absolute">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white xl:pl-1 xl:pr-1 xl:pt-1 xl:pb-1 xl:mr-1 rounded-sm">
                                                    <img className="px-1 xl:h-3 xl:w-5 h-3 w-5" src={LoveIcon} alt="" />
                                                </button>
                                                <button
                                                    className="xl:text-sm text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 pr-px pl-0.5 rounded-sm">Enroll
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
            ));
        }
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container my-12">
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/3 w-full">
                            <div className="flex">
                                <h4 className="xl:text-4xl text-xl font-semibold text-sectionTitleColor dark:text-white ml-3">Recently Added
                                    Course</h4>
                            </div>
                        </div>
                        <div className="w-2/3 relative">
                            <div className="flex right-0 absolute">
                                <div className="mb-4">
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                        {
                                            Subcategory_Loading
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className=" fade show active">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                {
                                    subcategory_course_Loading
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    else if (isLoading === false) {
        var settings = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        rows: 1,
                        arrows:false
                    }
                }
            ]
        };

        return (
            <Fragment>
                <div className="container my-12">
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/3 w-full">
                            <div className="flex">
                                <h4 className="xl:text-4xl text-xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Recently Added
                                    Course</h4>
                            </div>
                        </div>
                        <div className="xl:w-2/3 w-full relative sm:mt-4">
                            {/* <div className="flex right-0 absolute">
                                <div className="mb-4">
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"> */}
                            <Slider
                                {...settings}

                                slidesToShow={4}
                                focusOnSelect={true}
                                dots={false}
                                adaptiveHeight={false}
                                infinite={true}
                                slidesToScroll={1}
                                loop={true}
                                speed={300}
                                autoplay={false}
                                autoplaySpeed={1500}
                                swipeToSlide={true}
                            >
                                {
                                    data_of_subcategory
                                }
                            </Slider>

                            {/* </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="fade show active">
                            <div className="-mx-1 lg:-mx-4">
                                <Slider
                                    {...settings}
                                    ref={(slider9) => setNav9(slider9)}
                                    slidesToShow={4}
                                    focusOnSelect={true}
                                    dots={false}
                                    adaptiveHeight={false}
                                    infinite={true}
                                    slidesToScroll={1}
                                    loop={true}
                                    speed={500}
                                    autoplay={true}
                                    autoplaySpeed={3000}
                                    swipeToSlide={true}
                                    rows={2}
                                    nextArrow={<SampleNextArrow />}
                                    prevArrow={<SamplePrevArrow />}
                                >
                                    {
                                        data_of_subcategory_course
                                    }
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BusinessCompany;