import React, { Fragment, useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import 'tw-elements';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FeatureTraining() {
    let { id } = useParams();
    const [featuredCourse, setFeaturedCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const customeSlider1 = React.useRef();
    const gotoNext = () => {
        customeSlider1.current.slickNext();
    }
    const gotoPrev = () => {
        customeSlider1.current.slickPrev();
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-featured/${id}/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false)
                setFeaturedCourse(response.data.data?.featured_info);
            }
        })
    }, [])

    const FeatureCourseIsLoading = (() => {
        return (
            <div className="flex flex-wrap">
                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                    <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded-sm xl:p-4 xl:w-full">
                        <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                        <div className="flex flex-col mt-5">
                            <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                    <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded-sm xl:p-4 xl:w-full">
                        <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                        <div className="flex flex-col mt-5">
                            <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                    <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded-sm xl:p-4 xl:w-full">
                        <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                        <div className="flex flex-col mt-5">
                            <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })()

    const FeatureCourseHTML = (() => {
        return (
            featuredCourse.map((featured_course, index) => (
                <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                    <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                        <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={ApiUrl.ImageBaseUrl + featured_course.image} />
                        <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">
                            {featured_course.featured_taainings}
                        </h1>
                    </article>
                </div>
            ))
        )
    })()


    if (isLoading === true) {
        return (
                <div className="mt-4">
                    <div className="fade show active">
                        <h6 className="xl:text-3xl font-semibold text-sectionTitleColor float-right xl:mb-5 dark:text-gray-50">Featured Training</h6>
                        <h6 className="float-left xl:mb-5 flex"><MdOutlineArrowBackIosNew onClick={() => gotoPrev()} className="bg-white dark:bg-dark-color2 cursor-pointer shadow-lg font-extrabold rounded-full p-2.5 h-10 w-10 text-maincolor" /><MdOutlineArrowForwardIos onClick={() => gotoNext()} className="bg-white dark:bg-dark-color2 cursor-pointer font-extrabold shadow-lg rounded-full p-2.5 h-10 w-10 text-maincolor ml-4" /></h6>
                        <div className="">
                            <hr className="w-full flex border dark:border-dark-scleton2" />
                            <hr className="w-64 flex border-4 xl:-mt-2 float-right dark:border-dark-scleton2" />
                        </div>
                        <div className="w-full -px-1 xl:-px-4">
                            {
                                FeatureCourseIsLoading
                            }
                        </div>
                    </div>
                </div>
        )
    }
    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="">
                    <div className="mt-4">
                        <div className="fade show active">
                            <h6 className="xl:text-3xl font-semibold text-sectionTitleColor float-right xl:mb-5 dark:text-gray-50">Featured Training</h6>
                            <h6 className="float-left xl:mb-5 flex"><MdOutlineArrowBackIosNew onClick={() => gotoPrev()} className="bg-white dark:bg-dark-color2 cursor-pointer shadow-lg font-extrabold rounded-full p-2.5 h-10 w-10 text-maincolor" /><MdOutlineArrowForwardIos onClick={() => gotoNext()} className="bg-white dark:bg-dark-color2 cursor-pointer font-extrabold shadow-lg rounded-full p-2.5 h-10 w-10 text-maincolor ml-4" /></h6>
                            <div className="">
                                <hr className="w-full flex border" />
                                <hr className="w-64 flex border-4 xl:-mt-2 float-right" />
                            </div>

                            <div className="w-full -px-1 xl:-px-4">
                                <Slider
                                    ref={customeSlider1}
                                    slidesToShow={3}
                                    dots={false}
                                    adaptiveHeight={true}
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
                                        FeatureCourseHTML
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

export default FeatureTraining;