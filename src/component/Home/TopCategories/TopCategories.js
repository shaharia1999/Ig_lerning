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
                    <div className="p-4 xl:w-1/3 bg-white shadow-sm rounded-lg xl:mt-2 px-4">
                        <div className="animate-pulse xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-10/12 h-3 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 xl:w-1/3 bg-white shadow-sm rounded-lg xl:mt-2 px-4">
                        <div className="animate-pulse xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-10/12 h-3 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 xl:w-1/3 bg-white shadow-sm rounded-lg xl:mt-2 ">
                        <div className="animate-pulse xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-10/12 h-3 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 xl:w-1/3 bg-white shadow-sm rounded-lg xl:mt-2 ">
                        <div className="animate-pulse xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-10/12 h-3 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 xl:w-1/3 bg-white shadow-sm rounded-lg xl:mt-2 ">
                        <div className="animate-pulse xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-10/12 h-3 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 xl:w-1/3 bg-white shadow-sm rounded-lg xl:mt-2 ">
                        <div className="animate-pulse xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-10/12 h-3 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
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
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black dark:bg-dark-color2">
                            <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={category.category_preview_img} />
                            <h1 className="xl:text-lg xl:font-medium text-center text-maingray dark:text-white xl:mt-4 xl:mb-4">{category.category_name}</h1>
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
        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor dark:text-white ml-3">Top Categories ({totalTopCategory}) </h4>
                    <div className="xl:mt-4">

                        <Slider
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