import React, { useState, useEffect, Fragment, useRef } from 'react';
import { FaStar } from "react-icons/fa";
import ApiUrl from '../../Api/ApiUrl';
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ClientSays() {
    const [says_client, setClientSays] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nav1, setNav1] = useState();
    const slider1 = useRef();

    useEffect(() => {
        setIsLoading(true);
        console.log('is loading ', isLoading);
        axios.get(`${ApiUrl.BaseUrl}api/course/what-our-client-say/`).then((response) => {
            if (response.data.error === false) {
                console.log('client says data');
                setClientSays(response.data.data);
                console.log('data = ', response.data.data);
                console.log('is loading ', isLoading);
                setIsLoading(false);
                console.log('is loading ', isLoading);
            }
        });
    }, []);

    const says_client_lazy_loading = (() => {
        if (isLoading === true) {
            return (
                <div className="flex w-full flex-wrap xl:mt-6 p-3">
                    <div className="xl:basis-1/3 px-4 animate-pulse">
                        <div className="bg-white dark:bg-dark-scleton1 rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                            <div className="rounded-full bg-gray-100 dark:bg-dark-scleton2 h-36 w-36 mt-8 mb-12"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-4 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-6/12 bg-gray-100 h-5 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-2 dark:bg-dark-scleton2 rounded"></div>
                        </div>
                    </div>

                    <div className="xl:basis-1/3 px-4 animate-pulse">
                        <div className="bg-white dark:bg-dark-scleton1 rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                            <div className="rounded-full bg-gray-100 dark:bg-dark-scleton2 h-36 w-36 mt-8 mb-12"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-4 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-6/12 bg-gray-100 h-5 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-2 dark:bg-dark-scleton2 rounded"></div>
                        </div>
                    </div>

                    <div className="xl:basis-1/3 px-4 animate-pulse">
                        <div className="bg-white dark:bg-dark-scleton1 rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                            <div className="rounded-full bg-gray-100 dark:bg-dark-scleton2 h-36 w-36 mt-8 mb-12"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-8/12 h-3 bg-gray-100 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-4 dark:bg-dark-scleton2 rounded"></div>
                            <div className="mt-2 xl:w-6/12 bg-gray-100 h-5 dark:bg-dark-scleton2 rounded"></div>
                            <div clclassNameass="mt-2 xl:w-3/12 bg-gray-100 dark:bg-dark-scleton2 h-2 rounded"></div>
                        </div>
                    </div>
                </div>
            )
        }
    })()

    const says_client_data = (() => {
        if (isLoading === false) {
            return says_client.map((says_client, index) => (
                <div key={index} className="xl:w-1/3 w-1/3 lg:px-2 px-4">
                    <div className="bg-white dark:bg-dark-color2 xl:rounded-2xl rounded-lg shadow-client border-none xl:p-12 p-10 mb-6 h-full w-auto">
                        <img className="rounded-full xl:h-36 xl:w-36 h-28 w-28 xl:mt-8 mt-3 xl:mb-12 mb-6" src={ApiUrl.ImageBaseUrl + says_client.user_info.image} alt='' />
                        <h5 className="xl:text-base text-sm font-normal text-client-section-des xl:leading-8 leading-6 mb-4 mt-0 dark:text-white">{`${says_client.review_description.substring(0, 250)}...`}</h5>
                        {(() => {
                            if (says_client.rating === 5) {
                                return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                                </ul>
                            } else if (says_client.rating === 4) {
                                return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                                </ul>
                            } else if (says_client.rating === 3) {
                                return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                                </ul>
                            } else if (says_client.rating === 2) {
                                return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                                </ul>
                            } else if (says_client.rating === 1) {
                                return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                                </ul>
                            }
                        })()}
                        <p className="text-sectionTitleColor xl:text-2xl text-xl font-semibold dark:text-white">{says_client.user_info.username}</p>
                        <p className="text-client-section-des xl:text-md mt-2">Student</p>
                    </div>
                </div>
            ))
        }
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container xl:mt-8 xl:mb-12">
                    <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor dark:text-white">What Our Client Say</h4>
                    <div className="xl:mt-6">
                        {
                            says_client_lazy_loading
                        }
                    </div>
                </div>
            </Fragment >
        );
    }
    else if (isLoading === false) {
        var settings = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="container 2xl:my-12 xl:my-12 lg:my-12 my-12 2xl:px-16 xl:px-12 lg:px-16 md:px-8 sm:px-6">
                    <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-sectionTitleColor dark:text-white 2xl:ml-6 xl:ml-4 lg:ml-3 md:ml-3 ml-4 2xl:mt-8 xl:mt-6 lg:mt-4 -mt-6">What Our Client Say</h4>
                    <div className="xl:mt-6 mt-4">
                        <Slider
                            {...settings}
                            ref={(slider1) => setNav1(slider1)}
                            slidesToShow={3}
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
                            arrows={false}
                        >
                            {
                                says_client_data
                            }
                        </Slider>
                    </div>
                </div>
            </Fragment >
        );
    }
}
export default ClientSays;