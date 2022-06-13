import React, { Fragment, useState, useEffect } from "react";
import MyVideo from "../../../asset/video/mov_bbb.mp4";
import { MdEuro } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { useParams } from "react-router-dom";

function DiscountCardCourse() {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [coursePriceData, setCoursePriceData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/course-details-price/${id}/`).then((response) => {
            if (response.data.error === false) {
                setCoursePriceData(response.data.data)
                console.log('course price data = ', response.data.data);
                setIsLoading(false)
            }
        })
    }, [])

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="rounded-lg fixed top-72 animate-pulse">
                    <div className="bg-white rounded-2xl">
                        <div className="rounded-2xl">
                            <div className="xl:w-96 xl:h-64 rounded bg-gray-100 xl:pt-4 xl:pr-4 xl:pl-4"></div>
                        </div>

                        <div className="xl:p-5">
                            <div className="flex xl:mt-4 xl:mb-5">
                                <div className="xl:w-6/12">
                                    <div className="bg-gray-100 xl:h-6 w-10/12"></div>
                                </div>
                                <div className="xl:w-6/12 flex justify-end">
                                    <div className="bg-gray-100 xl:h-6 w-10/12"></div>
                                </div>
                            </div>

                            <div className="bg-gray-100 justify-center flex xl:h-8 w-full"></div>

                            <div className="bg-gray-100 xl:mt-6 xl:h-6 w-9/12"></div>
                            <ul className="leading-8 xl:mt-6">
                                <div className="bg-gray-100 xl:mt-3 xl:h-3 w-4/12"></div>
                                <div className="bg-gray-100 xl:mt-3 xl:h-3 w-9/12"></div>
                                <div className="bg-gray-100 xl:mt-3 xl:h-3 w-7/12"></div>
                                <div className="bg-gray-100 xl:mt-3 xl:h-3 w-5/12"></div>
                                <div className="bg-gray-100 xl:mt-3 xl:h-3 w-8/12"></div>
                                <div className="bg-gray-100 xl:mt-3 xl:h-3 w-12/12"></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="fixed top-72">
                    <div className="bg-BgLoveIcon dark:bg-dark-color3 rounded-lg">
                        <div className="rounded-xl">
                            <video
                                type="video/mp4"
                                muted
                                loop
                                className="w-96 rounded-2xl xl:pt-4 xl:pr-4 xl:pl-4"
                                src={MyVideo}></video>
                        </div>

                        <div className="xl:p-5">
                            <div className="flex xl:mt-4 xl:mb-5">
                                <div className="xl:w-6/12">
                                    <h6 className="flex text-sectionTitleColor dark:text-white xl:text-3xl xl:font-semibold">
                                        {coursePriceData.new_price}
                                        <MdEuro
                                            className="xl:mt-.5"
                                        />
                                        <strike
                                            className="flex text-client-section-des dark:text-gray-400 xl:text-xl xl:font-extralight xl:ml-4">
                                            {coursePriceData.main_price}€
                                        </strike>
                                    </h6>
                                </div>
                                <div className="xl:w-6/12">
                                    {(() => {
                                        if (coursePriceData.discount_percentage === null) {

                                        }
                                        else {
                                            return <h6 className="dark:text-gray-300">{coursePriceData.discount_percentage}% Discounted Price</h6>
                                        }
                                    })()}
                                </div>
                            </div>
                            <button className="text-white justify-center flex bg-maincolor xl:rounded-md xl:py-4 xl:w-full opacity-100">
                                Enroll now
                                <FaHandPointer
                                    className="ml-2 xl:mt-1"
                                />
                            </button>
                            <h6 className="text-sectionTitleColor xl:font-semibold xl:text-2xl xl:mt-5 xl:mb-4 dark:text-white">What's Included</h6>
                            <ul className="leading-8">
                                <li className="text-black dark:text-gray-300">Mobile Support</li>
                                <li className="text-black dark:text-gray-300">Lession Archive</li>
                                <li className="text-black dark:text-gray-300">Mobile Support</li>
                                <li className="text-black dark:text-gray-300">Tutor Chat</li>
                                <li className="text-black dark:text-gray-300">Course Certificate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default DiscountCardCourse;