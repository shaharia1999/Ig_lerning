import React, { useState, useEffect, Fragment, useRef } from "react";
import ApiUrl from "../../../Api/ApiUrl";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TopCategories() {
    const [topCategory, setTopCategory] = useState([]);
    const [totalTopCategory, setTotalTopCategory] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [nav3, setNav3] = useState();
    const slider3 = useRef();

    function getTopCategory() {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/v2/top-category-info/').then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setTopCategory(response.data.data);
                setTotalTopCategory(response.data.category_count);
            }
        });
    }
    useEffect(() => {
        getTopCategory();
    }, []);

    const Topcategory_Loading = (() => {
        if (isLoading === true) {
            return (
                <div className="flex flex-wrap w-full">
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded xl:p-4 xl:w-full">
                            <div className="rounded w-full 2xl:h-52 xl:h-44 h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white dark:bg-dark-scleton1 shadow-sm rounded xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100 dark:bg-dark-scleton2"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })()

    const Topcategory = (() => {
        if (isLoading === false) {
            return (
                topCategory.map((category, index) => (
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 2xl:my-8 xl:my-4 lg:my-8 xl:px-5 xl:w-1/3">
                        <article className="overflow-hidden xl:rounded-lg rounded-sm xl:shadow-lg shadow-sm hover:opacity-30 hover:bg-black dark:bg-dark-color2">
                            <img alt="Placeholder" className="block bg-fixed lg:h-64 md:h-48 h-56 w-full" src={category.category_preview_img} />
                            <h1 className="xl:text-lg xl:font-medium text-center text-maingray dark:text-white xl:mt-4 xl:mb-4 mt-3 mb-3">{category.category_name}</h1>
                        </article>
                    </div>
                ))
            )
        }
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Top Categories ({totalTopCategory}) </h4>
                    <div className="xl:mt-4">
                        {
                            Topcategory_Loading
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

    if (isLoading === false) {
        var settings = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                        rows:2
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
                        rows:1,
                        dots:false
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="container 2xl:my-12 xl:my-8 lg:-my-8 my-12 2xl:pl-16 2xl:-pr-4 xl:pl-12 xl:-pr-4 lg:pl-16 lg:-pr-16 md:px-12 sm:px-8">
                    <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-sectionTitleColor dark:text-white 2xl:ml-6 xl:ml-4 lg:ml-3 ml-4 lg:mt-8 sm:mt-2 -mt-6">Top Categories ({totalTopCategory}) </h4>
                    <div className="2xl:mt-1 xl:-mt-2 lg:-mt-2 md:mt-4 sm:mt-3">
                        <Slider
                            {...settings}
                            ref={(slider3) => setNav3(slider3)}
                            slidesToShow={3}
                            dots={true}
                            adaptiveHeight={true}
                            infinite={true}
                            slidesToScroll={1}
                            loop={true}
                            speed={1000}
                            autoplay={true}
                            autoplaySpeed={1500}
                            swipeToSlide={true}
                            rows={2}
                            arrows={false}
                        >
                            {
                                Topcategory
                            }
                        </Slider>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default TopCategories;