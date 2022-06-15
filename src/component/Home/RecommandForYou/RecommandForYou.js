import React, { Fragment, useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import SpeedMeter from "../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import Play from "../../../asset/images/icon/play.png";
import CourseLogo from "../../../asset/images/logo/course-logo.svg";
import MyVideo from "../../../asset/video/mov_bbb.mp4"
import 'tw-elements';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';


function RecommandForYou() {
    const [RecommandForYouData, setRecommandForYouData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [BasedTotal, setBasedTotal] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/recommend-course/`).then((response) => {
            if (response.data.error === false) {
                setBasedTotal(response.data.total_count);
                setRecommandForYouData(response.data.data);
                setIsLoading(false);
            }
        });
    }, []);

    const [nav5, setNav5] = useState();
    const slider5 = useRef();

    const RecommandForYouDataLoading = (() => {
        return (
            <>
                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
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

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 animate-pulse">
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

    const RecommandForYouSuccess_Data = (() => {
        return (
            RecommandForYouData.map((intellogeek_data) => (
                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4">
                    <div className="wrapper antialiased text-gray-900">
                        <div className="relative">
                            <video type="video/mp4" muted
                                loop className="w-full vid h-72 object-cover object-center rounded-lg shadow-md"
                                src={ApiUrl.ImageBaseUrl + intellogeek_data?.promotional_video}></video>
                            {/* <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={Course1} /> */}

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
                                        <div className="text-lg absolute top-0 text-black mt-5">
                                            <h6 className="font-medium text-lg text-black">{intellogeek_data?.channel_name_id?.channel_name}</h6>
                                            <h6 className="font-light text-base text-black">{intellogeek_data.course_duration} min</h6>

                                            <img className="xl:h-36 ml-8" src={Play} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative px-4 -mt-16">
                            <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg dark:shadow-xl">
                                <div className="flex flex-wrap">
                                    <div className="w-4/5">
                                        <Link
                                            to={`/course-details/${intellogeek_data.course_id}`}
                                            className="mt-1 xl:text-base font-semibold text leading-tight text-CourseTitle dark:text-white">
                                            {`${intellogeek_data.course_title.substring(0, 40)}...`}
                                        </Link>
                                    </div>
                                    <div className="w-1/5">
                                        <button
                                            className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white lg:pl-3 lg:pr-3 lg:pt-1 lg:pb-0.5 rounded-sm">LIVE
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap">
                                    <div className="w-2/3">
                                        <div className="flex sm:justify-center xl:justify-start">
                                            <span className="text-gray-600 dark:text-gray-500 text-sm">77 Participients</span>
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        <div className="flex relative sm:justify-center xl:justify-start">
                                            <span
                                                className="text-maincolor text-lg font-medium inset-y-0 right-0 absolute">
                                                ${intellogeek_data?.course_price[0]?.new_price}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="flex sm:justify-center xl:justify-start">
                                    <StarRatings
                                        rating={intellogeek_data?.avg_rating}
                                        starDimension="15px"
                                        starSpacing="4px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des dark:text-gray-500">
                                        ({intellogeek_data?.avg_rating})
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
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Only On IntelloGeek ({BasedTotal}) </h4>

                    <div className="lg:mt-6 flex flex-wrap -mx-1 lg:-mx-4 w-full">
                        {
                            RecommandForYouDataLoading
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
                <h4 className="text-4xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Recommand For You ({BasedTotal}) </h4>

                    <div className="lg:mt-6 -mx-1 lg:-mx-4">
                        <Slider
                            ref={(slider5) => setNav5(slider5)}
                            slidesToShow={4}
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
                                RecommandForYouSuccess_Data
                            }
                        </Slider>
                    </div>

                </div>
            </Fragment>
        );
    }
}
export default RecommandForYou;