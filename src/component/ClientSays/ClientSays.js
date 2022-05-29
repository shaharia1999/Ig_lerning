import React, { useState, useEffect, Fragment } from 'react';
import Client1 from "../../asset/images/client/client1.jpg";
import { FaStar } from "react-icons/fa";
import ApiUrl from '../../Api/ApiUrl';
import axios from "axios";


function ClientSays() {
    const [says_client, setClientSays] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/what-our-client-say/').then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setClientSays(response.data.data);
            }
        });
    }, []);

    const html_says_client = (() => {
        if (isLoading === true) {
            return <div class="flex  w-full flex-wrap lg:mt-6 p-3">
                <div class="lg:basis-1/3 px-4 animate-pulse">
                    <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 h-full w-auto">
                        <div className="rounded-full h-36 w-36 mt-8 mb-12 bg-gray-500 rounded-full" />
                        <div class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0 h-4 bg-gray-200 rounded animate-pulse-slow" />
                        <ul className="flex sm:justify-center xl:justify-start mt-2">
                            <div class="mb-4 h-4 bg-gray-400 rounded w-1/4"></div>
                            <div class="h-4 bg-gray-400 rounded w-1/4"></div>
                        </ul>
                        <div class="text-sectionTitleColor text-2xl font-semibold h-6 bg-gray-400 rounded w-3/4"></div>
                        <div class="text-client-section-des text-md mt-2 h-6 bg-gray-400 rounded w-3/4"></div>
                    </div>
                </div>
                <div class="lg:basis-1/3 px-4 animate-pulse">
                    <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 h-full w-auto">
                        <div className="rounded-full h-36 w-36 mt-8 mb-12 bg-gray-500 rounded-full" />
                        <div class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0 h-4 bg-gray-200 rounded animate-pulse-slow" />
                        <ul className="flex sm:justify-center xl:justify-start mt-2">
                            <div class="mb-4 h-4 bg-gray-400 rounded w-1/4"></div>
                            <div class="h-4 bg-gray-400 rounded w-1/4"></div>
                        </ul>
                        <div class="text-sectionTitleColor text-2xl font-semibold h-6 bg-gray-400 rounded w-3/4"></div>
                        <div class="text-client-section-des text-md mt-2 h-6 bg-gray-400 rounded w-3/4"></div>
                    </div>
                </div>
                <div class="lg:basis-1/3 px-4 animate-pulse">
                    <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 h-full w-auto">
                        <div className="rounded-full h-36 w-36 mt-8 mb-12 bg-gray-500 rounded-full" />
                        <div class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0 h-4 bg-gray-200 rounded animate-pulse-slow" />
                        <ul className="flex sm:justify-center xl:justify-start mt-2">
                            <div class="mb-4 h-4 bg-gray-400 rounded w-1/4"></div>
                            <div class="h-4 bg-gray-400 rounded w-1/4"></div>
                        </ul>
                        <div class="text-sectionTitleColor text-2xl font-semibold h-6 bg-gray-400 rounded w-3/4"></div>
                        <div class="text-client-section-des text-md mt-2 h-6 bg-gray-400 rounded w-3/4"></div>
                    </div>
                </div>
            </div>
        }
        else if (isLoading === false) {
            return (
                says_client.map((says_client, index) => (
                    <div key={index} class="lg:basis-1/3 px-4">
                        <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 h-full w-auto">
                            <img className="rounded-full h-36 w-36 mt-8 mb-12" src={ApiUrl.ImageBaseUrl + says_client.user_info.image} alt=''/>
                            <h5 class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0">{says_client.review_description}</h5>
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
                            <p class="text-sectionTitleColor text-2xl font-semibold">{says_client.user_info.username}</p>
                            <p class="text-client-section-des text-md mt-2">Student</p>
                        </div>
                    </div>
                ))
            )
        }
    })()

    return (
        <Fragment>
            <div className="container lg:mt-8 lg:mb-12">
                <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor">What Our Client Say</h4>
                <div class="flex flex-wrap lg:mt-6 p-3">
                    {
                        html_says_client
                    }
                </div>
            </div>
        </Fragment>
    );

}
export default ClientSays;