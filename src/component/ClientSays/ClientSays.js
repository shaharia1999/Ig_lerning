import React, { useState, useEffect, Fragment, useRef } from 'react';
import Client1 from "../../asset/images/client/client1.jpg";
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
                        <div className="bg-white rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                            <div className="rounded-full bg-gray-100 h-36 w-36 mt-8 mb-12"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-8/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-4 rounded"></div>
                            <div className="mt-2 xl:w-6/12 bg-gray-100 h-5 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-2 rounded"></div>
                        </div>
                    </div>

                    <div className="xl:basis-1/3 px-4 animate-pulse">
                        <div className="bg-white rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                            <div className="rounded-full bg-gray-100 h-36 w-36 mt-8 mb-12"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-8/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-4 rounded"></div>
                            <div className="mt-2 xl:w-6/12 bg-gray-100 h-5 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-2 rounded"></div>
                        </div>
                    </div>

                    <div className="xl:basis-1/3 px-4 animate-pulse">
                        <div className="bg-white rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                            <div className="rounded-full bg-gray-100 h-36 w-36 mt-8 mb-12"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-12/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-8/12 h-3 bg-gray-100 rounded"></div>
                            <div className="mt-2 xl:w-3/12 bg-gray-100 h-4 rounded"></div>
                            <div className="mt-2 xl:w-6/12 bg-gray-100 h-5 rounded"></div>
                            <div clclassNameass="mt-2 xl:w-3/12 bg-gray-100 h-2 rounded"></div>
                        </div>
                    </div>
                </div>
            )
        }
    })()

    const says_client_data = (() => {
        if (isLoading === false) {
            return says_client.map((says_client, index) => (
                <div key={index} className="xl:w-1/3 px-4">
                    <div className="bg-white rounded-2xl shadow-client border-none xl:p-12 h-full w-auto">
                        <img className="rounded-full h-36 w-36 mt-8 mb-12" src={ApiUrl.ImageBaseUrl + says_client.user_info.image} alt='' />
                        <h5 className="text-base font-normal text-client-section-des leading-8 mb-4 mt-0">{`${says_client.review_description.substring(0, 250)}...`}</h5>
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
                        <p className="text-sectionTitleColor text-2xl font-semibold">{says_client.user_info.username}</p>
                        <p className="text-client-section-des text-md mt-2">Student</p>
                    </div>
                </div>
            ))
        }
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container xl:mt-8 xl:mb-12">
                    <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor">What Our Client Say</h4>
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
        return (
            <Fragment>
                <div className="container xl:mt-8 xl:mb-12">
                    <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor">What Our Client Say</h4>
                    <div className="xl:mt-6">
                        <Slider
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