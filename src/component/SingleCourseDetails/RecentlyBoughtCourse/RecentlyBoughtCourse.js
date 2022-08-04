import React, { Fragment, useState, useEffect } from "react";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import Play from "../../../asset/images/icon/play.png";
import CourseLogo from "../../../asset/images/logo/course-logo.svg";
import 'tw-elements';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RecentlyBoughtCourse() {

    const [RecentlyBoughtCourseData, setRecentlyBoughtCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [BasedTotal, setBasedTotal] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/recently-bought-course/`).then((response) => {
            if (response.data.error === false) {
                setBasedTotal(response.data.total_count);
                setRecentlyBoughtCourseData(response.data.data);
                setIsLoading(false);
            }
        });
    }, []); 
    const RecentlyBoughtCourseLoading = (() => {
        return (
            <>
                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/5 animate-pulse">
                    <div className="wrapper">
                        <div className="relative">
                            <div className="w-full h-72 bg-white rounded-lg shadow-lg"></div>
                            <div className="flex flex-wrap">

                                <div className="w-1/5">
                                    <div className="absolute ml-2 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                </div>
                                <div className="w-4/5">
                                    <div className="absolute top-0 mt-5">
                                        <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                        <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                        <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100"></div>
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/5 animate-pulse">
                    <div className="wrapper">
                        <div className="relative">
                            <div className="w-full h-72 bg-white rounded-lg shadow-lg"></div>
                            <div className="flex flex-wrap">

                                <div className="w-1/5">
                                    <div className="absolute ml-2 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                </div>
                                <div className="w-4/5">
                                    <div className="absolute top-0 mt-5">
                                        <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                        <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                        <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100"></div>
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/5 animate-pulse">
                    <div className="wrapper">
                        <div className="relative">
                            <div className="w-full h-72 bg-white rounded-lg shadow-lg"></div>
                            <div className="flex flex-wrap">

                                <div className="w-1/5">
                                    <div className="absolute ml-2 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                </div>
                                <div className="w-4/5">
                                    <div className="absolute top-0 mt-5">
                                        <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                        <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                        <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100"></div>
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/5 animate-pulse">
                    <div className="wrapper">
                        <div className="relative">
                            <div className="w-full h-72 bg-white rounded-lg shadow-lg"></div>
                            <div className="flex flex-wrap">

                                <div className="w-1/5">
                                    <div className="absolute ml-2 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                </div>
                                <div className="w-4/5">
                                    <div className="absolute top-0 mt-5">
                                        <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                        <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                        <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100"></div>
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/5 animate-pulse">
                    <div className="wrapper">
                        <div className="relative">
                            <div className="w-full h-72 bg-white rounded-lg shadow-lg"></div>
                            <div className="flex flex-wrap">

                                <div className="w-1/5">
                                    <div className="absolute ml-2 top-0 bg-gray-100 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                </div>
                                <div className="w-4/5">
                                    <div className="absolute top-0 mt-5">
                                        <div className="bg-gray-100 xl:w-56 h-4 rounded"></div>
                                        <div className="bg-gray-100 xl:w-6/12 h-4 mt-2 rounded"></div>
                                        <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100"></div>
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
    })()

    const RecentlyBoughtCourseDataSuccess_Data = (() => {
        return (
            RecentlyBoughtCourseData.map((intellogeek_data) => (
                <div className="my-1 px-1 w-full md:w-1/2 2xl:my-8 xl:my-8 lg:my-8 2xl:px-5 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/2 lg:w-1/2">
                    <div className="wrapper antialiased text-gray-900">
                        <div className="relative">
                            <video type="video/mp4" muted
                                loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                src={ApiUrl.ImageBaseUrl + intellogeek_data?.promotional_video}></video>
                            {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

                            <div className="flex flex-wrap">
                                <div className="w-1/5">
                                    <a href="!#">
                                        <div
                                            className="text-sm absolute top-0 2xl:left-4 xl:left-4 lg:left-3 left-4 bg-black text-white rounded-full 2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            <img className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6" src={CourseLogo} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="w-4/5">
                                    <a href="!#">
                                        <div className="text-lg absolute top-0 xl:mt-5 mt-3 ml-3">
                                            <h6 className="font-medium xl:text-lg text-sm text-black dark:text-white">{intellogeek_data?.channel_name_id?.channel_name}</h6>
                                            <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">{intellogeek_data.course_duration} min</h6>

                                            <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                            <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <Link
                                            to={`/course-details/${intellogeek_data.course_id}`}
                                            className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                            {`${intellogeek_data.course_title.substring(0, 40)}...`}
                                        </Link>
                                    </div>
                                    {/* <div className="w-1/5">
                                        <button
                                            className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                        </button>
                                    </div> */}
                                </div>

                                <div className="flex flex-wrap">
                                    <div className="w-2/3">
                                        <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                            <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        <div className="flex relative sm:justify-center xl:justify-start">
                                            <span
                                                className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">
                                                ${intellogeek_data?.course_price[0]?.new_price}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                    <StarRatings
                                        rating={intellogeek_data?.avg_rating}
                                        starDimension="15px"
                                        starSpacing="4px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                    <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">
                                        ({intellogeek_data?.avg_rating})
                                    </h6>
                                </ul>

                                <div className="flex flex-wrap">
                                    <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                        <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                            <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                            <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                            <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                        <div
                                            className="flex sm:justify-center xl:justify-start 2xl:-mt-2.5 xl:-mt-2 lg:-mt-1 -mt-1 right-0 absolute">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-1 xl:pr-1 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0.5 pl-0 rounded-sm">
                                                <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-3 xl:w-4 lg:h-3 lg:w-3 h-3.5 w-4" src={LoveIcon} alt="" /></button>
                                            <button
                                                className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
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
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="xl:ml-28">
                    <div className="mt-4">
                        <div className=" fade show active">
                            <div className="flex flex-wrap -px-1 xl:-px-4">
                                {
                                    RecentlyBoughtCourseLoading
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
                    breakpoint: 1279.98,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        arrows: false
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
        return (
            <Fragment>
                <div className="xl:pl-28 lg:pl-12">
                    <div className="xl:mt-4 lg:mt-0">
                        <div className="">
                            <Slider
                                {...settings}
                                slidesToShow={5}
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
                            >
                                {
                                    RecentlyBoughtCourseDataSuccess_Data
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RecentlyBoughtCourse;