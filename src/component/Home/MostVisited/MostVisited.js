import React, { Fragment, useEffect, useState, useRef } from "react";
import Play from "../../../asset/images/icon/play.png";
import CourseLogo from "../../../asset/images/logo/course-logo.svg";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import ApiUrl from "../../../Api/ApiUrl";
import axios from "axios";
import StarRatings from 'react-star-ratings';
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


function MostVisited() {
    const [mostvisited, setMostvisited] = useState([]);
    const [mostvisited_total_count, setMostvisitedTotalCount] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [nav2, setNav2] = useState();
    const slider2 = useRef();

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/most-visited-course/').then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setMostvisited(response.data.data);
                setMostvisitedTotalCount(response.data.most_visited_count)
            }
        });
    }, []);

    const Mostvisited_Loading = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-2 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
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

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-2 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
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

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3 animate-pulse">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-lg shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-2 top-0 bg-gray-100 dark:bg-dark-scleton2 rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3"></div>
                                    </div>
                                    <div className="w-4/5">
                                        <div className="absolute top-0 mt-5">
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-56 h-4 rounded"></div>
                                            <div className="bg-gray-100 dark:bg-dark-scleton2 xl:w-6/12 h-4 mt-2 rounded"></div>
                                            <div className="xl:h-28 xl:mt-6 xl:-ml-8 rounded-sm bg-gray-100 dark:bg-dark-scleton2"></div>
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

    const Mostvisited_data = (() => {
        if (isLoading === false) {
            return (
                mostvisited.map((mostvisited_c, index) => (
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 2xl:my-8 xl:my-8 lg:my-8 2xl:px-3 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/3 lg:w-1/2">
                        <div className="wrapper antialiased text-gray-900">

                            <div className="relative">
                                <video type="video/mp4" muted
                                    loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                    src={mostvisited_c.promotional_video}></video>
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
                                                <h6 className="font-medium xl:text-lg text-sm text-black dark:text-white">{mostvisited_c?.channel_name?.channel_name}</h6>
                                                <h6 className="font-light xl:text-sm text-xs text-black dark:text-white">{mostvisited_c?.course_duration} min</h6>

                                                <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                                <div className="bg-white p-3 dark:bg-dark-color2 rounded-lg shadow-lg dark:shadow-xl">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <Link to={`/course-details/${mostvisited_c.course_id}`}
                                                className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                {`${mostvisited_c.course_title.substring(0, 40)}...`}
                                            </Link>
                                        </div>
                                        {/* <div className="w-1/5">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-0.5 rounded-sm">Live
                                            </button>
                                        </div> */}
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-2/3">
                                            <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="flex relative sm:justify-center xl:justify-start">
                                                <span
                                                    className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">
                                                    ${mostvisited_c?.course_price[0]?.new_price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                        <StarRatings
                                            rating={mostvisited_c.avg_rating}
                                            starDimension="15px"
                                            starSpacing="4px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">({mostvisited_c.avg_rating})
                                        </h6>
                                    </ul>

                                    <div className="flex flex-wrap">
                                        <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                            <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                                <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-5 xl:w-6 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-5 xl:w-6 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-5 xl:w-6 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                            <div
                                                className="flex sm:justify-center xl:justify-start 2xl:-mt-2.5 xl:-mt-2 lg:-mt-1 -mt-1 right-0 absolute">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-0.5 xl:pr-0.5 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0 pl-0 rounded-sm">
                                                    <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-2.5 xl:w-3 lg:h-3 lg:w-3 h-3 w-5" src={LoveIcon} alt="" />
                                                </button>
                                                <button
                                                    className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-1 xl:pr-1 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
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
    })()


    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container my-12 xl:mt-0 -mt-12">
                    <h4 className="xl:text-4xl text-2xl font-semibold text-sectionTitleColor ml-3 dark:text-white">Most Visited ({mostvisited_total_count}) </h4>
                    <div className="xl:mt-6 mt-4 flex flex-wrap -mx-1 xl:-mx-4">
                        {
                            Mostvisited_Loading
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

    else if (isLoading === false) {
        var settings = {
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows:false,
                        rows: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows:false,
                        rows: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        arrows:false
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
                <div className="container 2xl:my-12 xl:my-8 lg:-my-8 my-12 2xl:pl-16 2xl:-pr-4 xl:pl-12 xl:-pr-4 lg:pl-16 lg:-pr-28 md:px-10 sm:px-8">
                    <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-sectionTitleColor dark:text-white 2xl:ml-6 xl:ml-4 lg:ml-3 ml-4 md:-mt-12 sm:-mt-6 -mt-6">Most Visited ({mostvisited_total_count}) </h4>
                    <div className="2xl:mt-1 xl:-mt-2 lg:-mt-2 md:mt-3 sm:mt-3">
                        <Slider
                            {...settings}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={3}
                            focusOnSelect={true}
                            dots={false}
                            adaptiveHeight={false}
                            infinite={true}
                            slidesToScroll={1}
                            loop={true}
                            speed={300}
                            autoplay={true}
                            autoplaySpeed={2000}
                            swipeToSlide={true}
                            nextArrow={<SampleNextArrow />}
                            prevArrow={<SamplePrevArrow />}
                        >
                            {
                                Mostvisited_data
                            }
                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }



}
export default MostVisited;