import React, { Fragment, useEffect, useState } from "react";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import MasterCourseThumbnail from "../../asset/images/master-course/master-course-thumbnail.png";
import CourseLogo from "../../asset/images/logo/course-logo.svg";
import { GoPrimitiveDot } from "react-icons/go";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";
import { Link } from "react-router-dom";
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

function RecentlyAddedCourseSectionTwo() {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [getCourse, setCourse] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [subCategoryLoading, setSubCategoryLoading] = useState(false);
    const [CourseLoading, setCourseLoading] = useState(false);


    useEffect(() => {
        setCategoryLoading(true);
        setSubCategoryLoading(true);
        setCourseLoading(true);
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/category-based-subcategory/').then((response) => {
            if (response.data.error === false) {
                setCategory(response.data.data);
                setSubCategory(response.data.data);
                setCourse(response.data.data);
                setCategoryLoading(false);
                setSubCategoryLoading(false);
                setCourseLoading(false);
                setIsLoading(false);
            }
        });
    }, []);

    const CategoryBasedSubCategory = (category_id) => {
        axios.get(ApiUrl.BaseUrl + 'api/course/category-based-subcategory/' + category_id + "/").then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
                setCourse(response.data.data);
            }
        });
    };

    function SubCategoryCourseInfo(sub_category_id) {
        axios.get(ApiUrl.BaseUrl + 'api/course/sub-category-based-subcategory/' + sub_category_id + "/").then((response) => {
            if (response.data.error === false) {
                setCourse(response.data.data);
            }
        });
    };

    const category_Data_Loading = (() => {
        if (categoryLoading === true) {
            return (
                <h6>Loading</h6>
            )
        }
    })()

    const category_data = (() => {
        if (categoryLoading === false) {
            return (
                category.map((category_info, index) => (
                    <li key={index} className="nav-item" role="presentation">
                        <button type="button"
                            onClick={() => CategoryBasedSubCategory(category_info.category_id)}
                            className="nav-link1 block w-full md:w-auto px-6 py-3 my-2 md:mr-2 active text-base font-medium leading-tight mx-2 h-11" id="pills-master-tab3" data-bs-toggle="pill" data-bs-target="#pills-master" role="tab" aria-controls="pills-master" aria-selected="true">
                            {category_info.category_name}
                        </button>
                    </li>
                ))
            )
        }
    })()

    const data_of_subcategory_Loading = (() => {
        if (subCategoryLoading === true) {
            return (
                <h6>Loading</h6>
            )
        }
    })()

    const data_of_subcategory = (() => {
        if (subCategoryLoading === false) {
            return (
                subCategory.map((category_info) => (
                    category_info.sub_category_information.map((subcategory, index) => (
                        <div key={index}>
                            <li className="nav-item" role="presentation">
                                <button type="button"
                                    className="nav-link block w-full px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11"
                                    onClick={() => SubCategoryCourseInfo(subcategory.sub_category_id)}
                                >
                                    {subcategory.sub_category_name}
                                </button>
                            </li>
                        </div>
                    ))
                ))
            )
        }
    })()

    const data_of_course_details_Loading = (() => {
        if (CourseLoading === true) {
            return (
                <>
                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-12 h-7 rounded"></div>
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
                                <div className="w-full h-72 bg-white rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-12 h-7 rounded"></div>
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
                                <div className="w-full h-72 bg-white rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-12 h-7 rounded"></div>
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
                                <div className="w-full h-72 bg-white rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-14 xl:-mr-6 rounded-sm bg-gray-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5 bg-gray-100 xl:w-10/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-6/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-8/12 h-4 rounded"></div>
                                            <div className="mt-1.5 bg-gray-100 xl:w-7/12 h-4 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 bg-gray-100 w-7 h-7 rounded"></div>
                                                <div className="mt-3 mx-1 bg-gray-100 w-12 h-7 rounded"></div>
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

    const data_of_course_details = (() => {
        if (CourseLoading === false) {
            return (
                getCourse.map((category_info) => (
                    category_info.course_information.map((course, course_index) => (
                        <div key={course_index} className="xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} alt='' />

                                    <div className="flex flex-wrap lg:mt-3">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    className="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt='' />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div className="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-xl -mt-2 text-white">{course.channel_name?.channel_name}</h6>
                                                    <h6 className="font-extralight lg:-ml-6 flex text-sm text-white">
                                                        <img className="w-5 h-5 rounded-full border-2 border-white mr-2"
                                                            src={ApiUrl.ImageBaseUrl + course?.channel_name?.channel_name_logo} alt='' />
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white dark:bg-dark-color2 p-4 rounded-lg shadow-lg">
                                        <div className="flex flex-wrap">
                                            <div className="w-full">
                                                <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle dark:text-white">
                                                    {course?.course_title}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-2/4">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">Starts September 2022</span>
                                                </div>
                                            </div>
                                            <div className="w-2/4">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2 dark:text-gray-400">  11 Weeks</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="flex flex-wrap">
                                            <div className="w-full">
                                                <div className="flex xl:justify-start">
                                                    <span className="bg-master-degree-bg dark:bg-dark-color3 rounded-xl xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 text-master-degree-text dark:text-white text-xs mt-2">Certified Master Degrees</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap mt-5">
                                            <div className="w-2/5">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <Link to="" className="z-30">
                                                        <img className="h-8 w-8 rounded-full border-2 border-white"
                                                            src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" alt="" />
                                                    </Link>
                                                    <Link to="" className="-ml-3 z-20">
                                                        <img className="h-8 w-8 rounded-full border-2 border-white"
                                                            src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" alt="" />
                                                    </Link>
                                                    <Link to="" className="-ml-3 z-10">
                                                        <img className="h-8 w-8 rounded-full border-2 border-white"
                                                            src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="w-3/5 relative">
                                                <div className="flex xl:justify-end -mt-3 absolute right-0">
                                                    <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 xl:mr-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon} alt='' /></button>
                                                    <button
                                                        className="text-sm flex font-light leading-tight bg-apply-now text-white xl:pl-3 xl:pr-3 xl:pt-2 xl:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ))
            )
        }
    })()

    if (isLoading === true) {
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

                                <div className="mb-4">
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                        {
                                            category_Data_Loading
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap">
                        <div className="show w-full active">
                            <ul className="nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                {
                                    data_of_subcategory_Loading
                                }
                            </ul>

                            <div className="flex flex-wrap -mx-1 xl:-mx-4">
                                <div className="mt-4 w-full">
                                    <div className="fade show active">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            {
                                                data_of_course_details_Loading
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
    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="container my-12">
                    <div className="flex flex-wrap">
                        <div className="w-1/3">
                            <div className="flex">
                                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Recently Added Course</h4>
                            </div>
                        </div>
                        <div className="w-2/3 relative">
                            {/* <div className="flex right-0 absolute">
                                <div className="mb-4">
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"> 
                                    */}
                            <Slider
                                slidesToShow={5}
                                focusOnSelect={true}
                                dots={false}
                                adaptiveHeight={true}
                                infinite={true}
                                slidesToScroll={1}
                                loop={true}
                                speed={1000}
                                autoplay={false}
                                autoplaySpeed={1500}
                                swipeToSlide={true}
                                nextArrow={<SampleNextArrow />}
                                prevArrow={<SamplePrevArrow />}
                            >
                                {
                                    category_data
                                }
                            </Slider>

                            {/* </ul>
                                </div>
                            </div> 
                            */}
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap">
                        <div className="show w-full active">
                            <ul className="nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                {
                                    data_of_subcategory
                                }
                            </ul>
                            <div className="flex flex-wrap -mx-1 xl:-mx-4">
                                <div className="mt-4 w-full">
                                    <div className="fade show active">
                                        <div className="-mx-1 lg:-mx-4">
                                            <Slider
                                                slidesToShow={4}
                                                focusOnSelect={true}
                                                dots={false}
                                                adaptiveHeight={true}
                                                infinite={true}
                                                slidesToScroll={1}
                                                loop={true}
                                                speed={1000}
                                                autoplay={false}
                                                autoplaySpeed={1500}
                                                swipeToSlide={true}
                                                nextArrow={<SampleNextArrow />}
                                                prevArrow={<SamplePrevArrow />}
                                            >
                                                {
                                                    data_of_course_details
                                                }
                                            </Slider>

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