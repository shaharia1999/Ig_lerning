import React, { Fragment } from "react";
import { FaStar } from "react-icons/fa";

function StudentFeedback() {
    return (
        <Fragment>
            <div className="xl:ml-32 xl:mt-5 xl:mr-14">
                <h6 className="text-sectionTitleColor text-3xl font-semibold">Student Feedback</h6>
                <div className="flex flex-wrap">
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
            </div>
        </Fragment>
    );
}

export default StudentFeedback;