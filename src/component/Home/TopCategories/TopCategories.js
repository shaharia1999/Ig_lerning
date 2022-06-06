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

    const Topcategory = (() => {
        if (isLoading === true) {
            return (
                <div class="flex flex-wrap">
                    <div class="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                        <div class="animate-pulse xl:w-full">
                            <div class="rounded w-full h-52 bg-gray-200"></div>
                            <div class="flex flex-col mt-5">
                                <div class="w-full h-5 bg-gray-200 rounded"></div>
                                <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                                <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                        <div class="animate-pulse xl:w-full">
                            <div class="rounded w-full h-52 bg-gray-200"></div>
                            <div class="flex flex-col mt-5">
                                <div class="w-full h-5 bg-gray-200 rounded"></div>
                                <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                                <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (isLoading === false) {
            return (
                topCategory.map((category, index) => (
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                            <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={category.category_preview_img} />
                            <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">{category.category_name}</h1>
                        </article>
                    </div>
                ))
            )
        }
    })()


    return (
        <Fragment>
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories ({totalTopCategory}) </h4>
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

export default TopCategories;