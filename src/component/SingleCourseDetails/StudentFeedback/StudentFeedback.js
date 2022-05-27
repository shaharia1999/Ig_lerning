import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { FaStar, FaStepBackward } from "react-icons/fa";
import ApiUrl from "../../../Api/ApiUrl";

function StudentFeedback() {
    const [studentFeedBack, setStudentFeedBack] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/course-student-feedback/10/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentFeedBack(response.data.data); 
                console.log('course student feedback = ', response.data.data)
            }
        });
    }, []);
    const StudentFeedBackHTML = (() => {
        if (isLoading === true) {
            return <div className="flex flex-wrap">
                    <div className="xl:w-1/5 xl:mt-6">
                        <div className="bg-maincolor xl:rounded-lg text-center">
                            <h6 className="xl:pt-6 xl:text-5xl text-white xl:font-bold">4.5</h6>
                            <ul className="flex justify-center xl:mt-2">
                                <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                <li className="mb-4 mx-.75"><FaStar className=" text-gray-200" /></li>
                            </ul>
                            <h6 className="xl:pb-6 xl:-mt-2 xl:text-base text-white xl:font-medium">Course Ratings</h6>
                        </div>
                    </div>
                    <div className="xl:w-3/5 xl:mt-4 xl:pl-8 ">
                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-3">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>

                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "55%" }}></div>
                        </div>

                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>


                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "35%" }}></div>
                        </div>


                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </div>
                    <div className="xl:w-1/5 xl:mt-5">
                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">16%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">19%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">23%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">18%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">24%</h6>
                        </ul>

                    </div>
            </div>
        }
        else if (isLoading === false){
            return <div className="flex flex-wrap">
                    <div className="xl:w-1/5 xl:mt-6">
                        <div className="bg-maincolor xl:rounded-lg text-center">
                            <h6 className="xl:pt-6 xl:text-5xl text-white xl:font-bold">{studentFeedBack.avg_rating}</h6>
                            {(() => {
                                if (studentFeedBack.avg_rating > 4 && studentFeedBack.avg_rating <=5){
                                    return <ul className="flex justify-center xl:mt-2">
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className=" text-gray-200" /></li>
        
                                    </ul>
                                }
                                else if (studentFeedBack.avg_rating >=2 && studentFeedBack.avg_rating <3){
                                return <ul className="flex justify-center xl:mt-2">
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    {/* <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li> */}
                                    {/* <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li> */}
                                    {/* <li className="mb-4 mx-.75"><FaStar className=" text-gray-200" /></li> */}
    
                                </ul>
    
                                }

                            })()}

                            <h6 className="xl:pb-6 xl:-mt-2 xl:text-base text-white xl:font-medium">Course Ratings</h6>
                        </div>
                    </div>
                    <div className="xl:w-3/5 xl:mt-4 xl:pl-8 ">
                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-3">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>

                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "55%" }}></div>
                        </div>

                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>


                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "35%" }}></div>
                        </div>


                        <div class="w-full bg-gray-200 rounded-full h-3.5 xl:mt-5">
                            <div class="bg-progress-bar h-3.5 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </div>
                    <div className="xl:w-1/5 xl:mt-5">
                    
                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">{studentFeedBack.five_rating_percentage}%</h6>
                        </ul>
                       
                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">{studentFeedBack.four_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">{studentFeedBack.three_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">{studentFeedBack.two_rating_percentage}%</h6>
                        </ul>

                        <ul className="flex justify-center xl:mt-1">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <li className="mb-4 mx-.75"><FaStar className=" text-gray-300" /></li>
                            <h6 className="xl:ml-2 text-sm text-black font-normal">{studentFeedBack.one_rating_percentage}%</h6>
                        </ul>

                    </div>
                </div>
        }
    })()
    return (
        <Fragment>
            <div className="xl:ml-32 xl:mt-5 xl:mr-14">
                <h6 className="text-sectionTitleColor text-3xl font-semibold">Student Feedback</h6>
                {
                    StudentFeedBackHTML
                }
            </div>
        </Fragment>
    );
}

export default StudentFeedback;