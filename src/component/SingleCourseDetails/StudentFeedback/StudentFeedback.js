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
            return <div className="flex flex-wrap">
                <div className="xl:w-1/5 xl:mt-6">
                    <div className="bg-maincolor xl:rounded-lg text-center">
                        <h6 className="xl:pt-6 xl:text-5xl text-white xl:font-bold">{studentFeedBack.avg_rating}</h6>
                        <ul className="flex justify-center xl:mt-2">
                            <StarRatings
                                rating={studentFeedBack.avg_rating}
                                starDimension="15px"
                                starSpacing="4px"
                                starRatedColor="rgb(251, 191, 36)"
                            />
                        </ul>
                        <h6 className="xl:pb-6 xl:-mt-2 xl:text-base text-white xl:font-medium">Course Ratings</h6>
                    </div>
                </div>
                <div className="xl:w-3/5 xl:mt-4 xl:pl-8 ">
                    <div className="w-full bg-gray-200 rounded-full h-3.5 xl:mt-3">
                        <div className="bg-progress-bar h-3.5 rounded-full" style={{ width: `${studentFeedBack.five_rating_percentage}%` }}></div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                        <div className="bg-progress-bar h-3.5 rounded-full" style={{ width: `${studentFeedBack.four_rating_percentage}%` }}></div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                        <div className="bg-progress-bar h-3.5 rounded-full" style={{ width: `${studentFeedBack.three_rating_percentage}%` }}></div>
                    </div>


                    <div className="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                        <div className="bg-progress-bar h-3.5 rounded-full" style={{ width: `${studentFeedBack.two_rating_percentage}%` }}></div>
                    </div>


                    <div className="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                        <div className="bg-progress-bar h-3.5 rounded-full" style={{ width: `${studentFeedBack.one_rating_percentage}%` }}></div>
                    </div>
                </div>
                <div className="xl:w-1/5 xl:mt-5">

                    <ul className="flex justify-center xl:mt-1">
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <h6 className="xl:ml-2 text-sm text-black dark:text-gray-300 font-normal">{studentFeedBack.five_rating_percentage}%</h6>
                    </ul>

                    <ul className="flex justify-center xl:mt-1">
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <h6 className="xl:ml-2 text-sm text-black dark:text-gray-300 font-normal">{studentFeedBack.four_rating_percentage}%</h6>
                    </ul>

                    <ul className="flex justify-center xl:mt-1">
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <h6 className="xl:ml-2 text-sm text-black dark:text-gray-300 font-normal">{studentFeedBack.three_rating_percentage}%</h6>
                    </ul>

                    <ul className="flex justify-center xl:mt-1">
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <h6 className="xl:ml-2 text-sm text-black dark:text-gray-300 font-normal">{studentFeedBack.two_rating_percentage}%</h6>
                    </ul>

                    <ul className="flex justify-center xl:mt-1">
                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-600" /></li>
                        <h6 className="xl:ml-2 text-sm text-black dark:text-gray-300 font-normal">{studentFeedBack.one_rating_percentage}%</h6>
                    </ul>

                </div>
            </div>
        }
    })()
    return (
        <Fragment>
            <div className="xl:ml-32 xl:mt-5 xl:mr-14">
                <h6 className="text-sectionTitleColor dark:text-white text-3xl font-semibold">Student Feedback</h6>
                {
                    StudentFeedBackHTML
                }
            </div>
        </Fragment>
    );
}

export default StudentFeedback;