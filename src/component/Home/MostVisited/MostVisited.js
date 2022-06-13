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
                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3 animate-pulse">
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

                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3 animate-pulse">
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

                    <div className="my-1 px-1 w-full bg-white md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3 animate-pulse">
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
        }
    })()

    const Mostvisited_data = (() => {
        if (isLoading === false) {
            return (
                mostvisited.map((mostvisited_c, index) => (
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="wrapper antialiased text-gray-900">

                            <div className="relative">
                                <video type="video/mp4" muted
                                    loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                    src={mostvisited_c.promotional_video}></video>
                                <div className="flex flex-wrap">
                                    <div className="w-1/5">
                                        <a href="!#">
                                            <div
                                                className="text-sm absolute top-0 left-2 bg-black text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                <img className="h-12 w-12" src={CourseLogo} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-4/5">
                                        <a href="!#">
                                            <div className="text-lg absolute top-0 mt-5">
                                                <h6 className="font-medium text-lg text-black dark:text-white">{mostvisited_c.channel_name.channel_name}</h6>
                                                <h6 className="font-light text-sm text-black dark:text-white">{mostvisited_c.course_duration} min</h6>

                                                <img className="lg:h-36 ml-8" src={Play} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-3 dark:bg-dark-color2 rounded-lg shadow-lg dark:shadow-xl">
                                    <div className="flex flex-wrap">
                                        <div className="w-4/5">
                                            <Link to={`/course-details/${mostvisited_c.course_id}`} className="mt-1 xl:text-base font-semibold text leading-tight text-CourseTitle dark:text-white">{`${mostvisited_c.course_title.substring(0, 40)}...`}</Link>
                                        </div>
                                        <div className="w-1/5">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-0.5 rounded-sm">Live
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
                                        <StarRatings
                                            rating={mostvisited_c.avg_rating}
                                            starDimension="15px"
                                            starSpacing="4px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">({mostvisited_c.avg_rating})
                                        </h6>
                                    </ul>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                <a><img className="px-1 h-6 w-8" src={SpeedMeter} alt="" /></a>
                                                <a><img className="px-1 h-6 w-8" src={ShareIcon} alt="" /></a>
                                                <a><img className="px-1 h-6 w-8" src={CertificateIcon} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="w-1/2 relative">
                                            <div
                                                className="flex sm:justify-center xl:justify-start -mt-3 right-0 absolute">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 xl:mr-1 rounded-sm">
                                                    <img className="px-1 h-3 w-5" src={LoveIcon} alt="" /></button>
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
                ))
            )
        }
    })()


    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Most Visited ({mostvisited_total_count}) </h4>
                    <div className="lg:mt-6 flex flex-wrap -mx-1 lg:-mx-4">
                        {
                            Mostvisited_Loading
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Most Visited ({mostvisited_total_count}) </h4>
                    <div className="lg:mt-6 -mx-1 lg:-mx-4">
                        <Slider
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={3}
                            focusOnSelect={true}
                            dots={true}
                            adaptiveHeight={true}
                            infinite={true}
                            slidesToScroll={1}
                            loop={true}
                            speed={1000}
                            height={600}
                            autoplay={true}
                            autoplaySpeed={1500}
                            swipeToSlide={true}
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