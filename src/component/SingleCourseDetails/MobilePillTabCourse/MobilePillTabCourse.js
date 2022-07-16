import React, { Fragment, useState, useEffect } from "react";
import "../../../asset/css/login.css";
import Description from "../Description/Description";
import Lessons from "../Lessons/Lessons";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
import Review from "../Review/Review";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { MdEuro } from "react-icons/md";

function MobilePillTabCourse() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

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

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="flex flex-wrap text-gray-800">
                    <div className="w-full flex">
                        <div className="flex flex-wrap">
                            <div className="w-full rounded-lg bg-white dark:bg-dark-color2 flex">
                                <div className="mt-1 mb-4 w-full">

                                    <div className="flex flex-wrap justify-center w-full pl-3 pr-3">
                                        <ul className="nav nav-pills flex flex-wrap list-none mb-1" id="pills-tab3" role="tablist">
                                            <li className="nav-item w-1/3 justify-center" role="presentation">
                                                <span
                                                    type="button"
                                                    className="nav-link dark:text-white cursor-pointer bg-gray-300 block font-medium text-sm leading-tight w-full md:w-auto rounded-3xl px-10 py-2 my-2 focus:outline-none focus:ring-0 active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" role="tab" aria-controls="pills-home3"
                                                    aria-selected="true">
                                                    Description
                                                </span>
                                            </li>
                                            <li className="nav-item w-1/3 justify-center" role="presentation">
                                                <span
                                                    type="button"
                                                    className="nav-link dark:text-white cursor-pointer bg-gray-300 block font-medium text-sm leading-tight rounded-3xl w-full md:w-auto px-10 py-2 my-2 focus:outline-none focus:ring-0" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" role="tab"
                                                    aria-controls="pills-profile3" aria-selected="false">
                                                    Lessons
                                                </span>
                                            </li>
                                            <li className="nav-item w-1/3 justify-center" role="presentation">
                                                <span type="button"
                                                    className="nav-link dark:text-white cursor-pointer bg-gray-300 block font-medium text-sm leading-tight rounded-3xl w-full md:w-auto px-10 py-2 my-2 focus:outline-none focus:ring-0" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" role="tab"
                                                    aria-controls="pills-contact3" aria-selected="false">
                                                    Reviews
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex bg-gray-50 pl-4 pr-4 pt-3 pb-3 rounded-md ml-4 mr-4 mt-3 mb-4">
                               
                                        <div className="w-6/12">
                                            <h6 className="flex text-sectionTitleColor dark:text-white text-3xl font-semibold">
                                                {coursePriceData.new_price}
                                                <MdEuro
                                                    className="mt-.5"
                                                />
                                                <strike
                                                    className="flex text-client-section-des dark:text-gray-400 text-xl font-extralight mt-1 ml-4">
                                                    {coursePriceData.main_price}€
                                                </strike>
                                            </h6>
                                        </div>
                                        <div className="w-6/12">
                                            {(() => {
                                                if (coursePriceData.discount_percentage === null) {

                                                }
                                                else {
                                                    return <h6 className="dark:text-gray-300 mt-2">{coursePriceData.discount_percentage}% Discounted Price</h6>
                                                }
                                            })()}
                                        </div>
                                 
                                    </div>


                                    <div className="flex flex-wrap pl-4 pr-4">
                                        <div className="bg-maincolor justify-center flex cursor-pointer w-full rounded-md pt-3 pb-3">
                                            <h6 className="text-lg text-white font-medium text-center">Enroll Now</h6>
                                        </div>
                                    </div>


                                    <div className="tab-content flex-wrap flex" id="pills-tabContent3">
                                        <div className="tab-pane w-full fade show active"
                                            id="pills-home3" role="tabpanel"
                                            aria-labelledby="pills-home-tab3">

                                            <div className="flex flex-wrap w-full mt-4">
                                                <Description />
                                            </div>
                                        </div>
                                        <div className="tab-pane w-full fade"
                                            id="pills-profile3" role="tabpanel"
                                            aria-labelledby="pills-profile-tab3">
                                            <div className="flex flex-wrap mt-4 ">
                                                <div className="w-full">
                                                    <Lessons />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane w-full fade"
                                            id="pills-contact3" role="tabpanel"
                                            aria-labelledby="pills-contact-tab3">

                                            <div className="flex flex-wrap mt-4 ">
                                                <div className="w-full">
                                                    <StudentFeedback />
                                                    <Review />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Fragment >
    );
}
export default MobilePillTabCourse;