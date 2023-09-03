import React, { useState, useEffect, Fragment, useRef } from "react";
import ApiUrl from "../../../Api/ApiUrl";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import c1 from '../../../asset/images/shaharia/c1.png'
import c2 from '../../../asset/images/shaharia/c2.png'
import c3 from '../../../asset/images/shaharia/c3.png'
import c4 from '../../../asset/images/shaharia/c4.png'


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
                        <div className="  dark:bg-dark-scleton1 shadow-sm rounded xl:w-full relative">
                            <div className="rounded w-full  bg-gray-100 dark:bg-dark-scleton2"><img src={c1}></img></div>
                            <div className="flex flex-col absolute bottom-0 left-0  w-[100%]  text-center ">
                                <div className="w-full bg-white dark:bg-dark-scleton2 py-2 dark:text-white rounded">Business & Company</div>
                           
                            </div>
                        </div>
                    </div>

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="  dark:bg-dark-scleton1 shadow-sm rounded xl:w-full relative">
                            <div className="rounded w-full  bg-gray-100 dark:bg-dark-scleton2"><img src={c2}></img></div>
                            <div className="flex flex-col absolute bottom-0 left-0  w-[100%]  text-center ">
                                <div className="w-full bg-white dark:bg-dark-scleton2 py-2 dark:text-white rounded">Business & Company</div>
                           
                            </div>
                        </div>
                    </div>

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="  dark:bg-dark-scleton1 shadow-sm rounded xl:w-full relative">
                            <div className="rounded w-full  bg-gray-100 dark:bg-dark-scleton2"><img src={c3}></img></div>
                            <div className="flex flex-col absolute bottom-0 left-0  w-[100%]  text-center ">
                                <div className="w-full bg-white dark:bg-dark-scleton2 py-2 dark:text-white rounded">Business & Company</div>
                           
                            </div>
                        </div>
                    </div>

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="  dark:bg-dark-scleton1 shadow-sm rounded xl:w-full relative">
                            <div className="rounded w-full  bg-gray-100 dark:bg-dark-scleton2"><img src={c4}></img></div>
                            <div className="flex flex-col absolute bottom-0 left-0  w-[100%]  text-center ">
                                <div className="w-full bg-white dark:bg-dark-scleton2 py-2 dark:text-white rounded">Business & Company</div>
                           
                            </div>
                        </div>
                    </div>
                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="  dark:bg-dark-scleton1 shadow-sm rounded xl:w-full relative">
                            <div className="rounded w-full  bg-gray-100 dark:bg-dark-scleton2"><img src={c1}></img></div>
                            <div className="flex flex-col absolute bottom-0 left-0  w-[100%]  text-center ">
                                <div className="w-full bg-white dark:bg-dark-scleton2 py-2 dark:text-white rounded">Business & Company</div>
                           
                            </div>
                        </div>
                    </div>

                        <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="  dark:bg-dark-scleton1 shadow-sm rounded xl:w-full relative">
                            <div className="rounded w-full  bg-gray-100 dark:bg-dark-scleton2"><img src={c2}></img></div>
                            <div className="flex flex-col absolute bottom-0 left-0  w-[100%]  text-center ">
                                <div className="w-full bg-white dark:bg-dark-scleton2 py-2 dark:text-white rounded">Business & Company</div>
                           
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
                        <Link to="/category-details" className="overflow-hidden xl:rounded-lg rounded-sm xl:shadow-lg shadow-sm hover:opacity-30 hover:bg-black dark:bg-dark-color2">
                            <img alt="Placeholder" className="block bg-fixed lg:h-64 md:h-48 h-56 w-full" src={category.category_preview_img} />
                            <h1 className="xl:text-lg xl:font-medium text-center text-maingray dark:text-white xl:mt-4 xl:mb-4 mt-3 mb-3">{category.category_name}</h1>
                        </Link>
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