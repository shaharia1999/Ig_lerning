import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';
import { useParams } from "react-router-dom";


function StudentFeedback() {
    let { id } = useParams();
    const [studentFeedBack, setStudentFeedBack] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/course-student-feedback/${id}/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentFeedBack(response.data.data);
            }
        });
    }, []);

    const StudentFeedBackHTML = (() => {
        if (isLoading === true) {
            return (
                <div className="flex flex-wrap animate-pulse">
                    <div className="xl:w-1/5 xl:mt-6">
                        <div className="bg-gray-100 xl:w-full xl:h-full xl:rounded-lg text-center">

                        </div>
                    </div>
                    <div className="xl:w-3/5 xl:mt-4 xl:pl-8 ">
                        <div className="w-full bg-gray-200 rounded h-3.5 xl:mt-3">
                            <div className="bg-gray-100 h-3.5 rounded"></div>
                        </div>

                        <div className="w-full bg-gray-200 rounded h-3.5 xl:mt-5">
                            <div className="bg-gray-100 h-3.5 rounded"></div>
                        </div>

                        <div className="w-full bg-gray-200 rounded h-3.5 xl:mt-5">
                            <div className="bg-gray-100 h-3.5 rounded"></div>
                        </div>


                        <div className="w-full bg-gray-200 rounded h-3.5 xl:mt-5">
                            <div className="bg-gray-100 h-3.5 rounded"></div>
                        </div>


                        <div className="w-full bg-gray-200 rounded h-3.5 xl:mt-5">
                            <div className="bg-gray-100 h-3.5 rounded"></div>
                        </div>
                    </div>
                    <div className="xl:w-1/5 xl:mt-2">
                        <div className="flex justify-center h-3.5 xl:mt-5">
                            <div className="bg-gray-100 mb-4 mx-.75 xl:h-3.5 xl:w-8/12 rounded"></div>
                        </div>

                        <div className="flex justify-center h-3.5 xl:mt-5">
                            <div className="bg-gray-100 mb-4 mx-.75 xl:h-3.5 xl:w-7/12 rounded"></div>
                        </div>

                        <div className="flex justify-center h-3.5 xl:mt-5">
                            <div className="bg-gray-100 mb-4 mx-.75 xl:h-3.5 xl:w-6/12 rounded"></div>
                        </div>

                        <div className="flex justify-center h-3.5 xl:mt-5">
                            <div className="bg-gray-100 mb-4 mx-.75 xl:h-3.5 xl:w-5/12 rounded"></div>
                        </div>

                        <div className="flex justify-center h-3.5 xl:mt-5">
                            <div className="bg-gray-100 mb-4 mx-.75 xl:h-3.5 xl:w-4/12 rounded"></div>
                        </div>

                    </div>
                </div>
            )
        }
        else if (isLoading === false) {
            return (
                <div className="flex flex-wrap xl:mt-0 mt-4">
                    <div className="xl:w-1/5 w-4/12 xl:mt-6">
                        <div className="bg-maincolor xl:rounded-lg rounded-md text-center">
                            <h6 className="2xl:pt-6 xl:pt-4 pt-2 2xl:text-5xl xl:text-3xl text-lg text-white xl:font-bold">{studentFeedBack.avg_rating}</h6>
                            <ul className="flex justify-center xl:mt-2">
                                <StarRatings
                                    rating={studentFeedBack.avg_rating}
                                    starDimension="15px"
                                    starSpacing="4px"
                                    starRatedColor="rgb(251, 191, 36)"
                                />
                            </ul>
                            <h6 className="2xl:pb-6 xl:pb-4 pb-2 2xl:mt-2 xl:mt-1 xl:text-base text-xs text-white xl:font-medium">Course Ratings</h6>
                        </div>
                    </div>
                    <div className="xl:w-3/5 w-4/12 2xl:mt-4 xl:mt-3 xl:pl-8 pl-2">
                        <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-3 xl:mt-4 mt-2">
                            <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: `${studentFeedBack.five_rating_percentage}%` }}></div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-4 mt-2">
                            <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: `${studentFeedBack.four_rating_percentage}%` }}></div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-4 mt-2">
                            <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: `${studentFeedBack.three_rating_percentage}%` }}></div>
                        </div>


                        <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-4 mt-2">
                            <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: `${studentFeedBack.two_rating_percentage}%` }}></div>
                        </div>


                        <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-3.5 mt-2">
                            <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: `${studentFeedBack.one_rating_percentage}%` }}></div>
                        </div>
                    </div>
                    <div className="xl:w-1/5 w-4/12 2xl:mt-5 xl:mt-8">

                        <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 mt-1.5">
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">{studentFeedBack.five_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2">
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">{studentFeedBack.four_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2.5">
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">{studentFeedBack.three_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2.5">
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">{studentFeedBack.two_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2.5">
                            <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                            <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">{studentFeedBack.one_rating_percentage}%</h6>
                        </ul>

                    </div>
                </div>
            )
        }
    })()
    return (
        <Fragment>
            <div className="xl:ml-32 lg:ml-12 xl:mt-5 xl:mr-14 xl:p-0 p-4">
                <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl text-xl font-semibold">Student Feedback</h6>
                {
                    StudentFeedBackHTML
                }
            </div>
        </Fragment>
    );
}

export default StudentFeedback;