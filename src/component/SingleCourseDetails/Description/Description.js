import React, { Fragment, useEffect, useState } from "react";
import Teacher from "../../../asset/images/course-teacher/teacher.jpg";
import { FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";


function Description() {
    const [courseInfo, setCourseInfo] = useState([]);
    const [TeacherInfo, setTeacherInfo] = useState([]);
    const [CourseLearnInfo, setCourseLearnInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/course-single-response/10/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                // setCourseInfo(response.data);
                console.log('course information 0 = ', response.data.data)
                var data = JSON.stringify(response.data.data);
                console.log('course infor data = ', data);
                setCourseInfo(response.data.data); 
                setTeacherInfo(response.data.data.course_created_by_info)
                setCourseLearnInfo(response.data.data.course_learn_info)
                console.log('course information 0 = ', response.data.data)
                console.log('course information = ', response.data.data.course_created_by_info)
            }
        });
    }, []);

    const CourseInfoTeacherAndDescription = (() => {
        console.log('is loading4 = ', isLoading);
        if (isLoading === true) {
            return <div className="xl:ml-32">
            <div className="flex flex-wrap">
                <div className="xl:w-2/12">
                    <img className="xl:h-28 xl:mt-7 xl:w-28 rounded-full xl:border-4 xl:border-white xl:shadow-lg" src={Teacher} alt="teacher" />
                    <button className="xl:ml-2 text-maincolor xl:font-semibold xl:text-xl xl:mt-3">+ Follow</button>
                </div>
                <div className="xl:w-10/12 xl:-ml-12">
                    <h6 className=" text-sectionTitleColor text-3xl font-semibold xl:pr-24 xl:mt-8">Learn how to pitch and grow your business, how to
                        make your ideas speak</h6>
                    <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-4">Mario rossi   •   Trainer and Speaker</h6>
                    <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-2">
                        <ul className="flex sm:justify-center xl:justify-start">
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                            <h6 className="xl:ml-2 xl:-mt-.75 xl:text-xs"> 4.5 <em>(2312 ratings on 42012 students enrolled)</em></h6>
                        </ul>

                    </h6>
                </div>
            </div>
            <div className="flex flex-wrap xl:mt-9">
                <div className="xl:w-full">
                    <h6 className="text-sectionTitleColor text-3xl font-semibold">Description</h6>
                    <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-5 xl:leading-5 xl:pr-24">Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</h6>


                    <h6 className="text-sectionTitleColor xl:text-xl font-semibold xl:mt-5 xl:mb-5">What will you learn:</h6>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/12">
                            <FiCheckCircle className=" text-btngreen xl:h-6 xl:w-6" />
                        </div>
                        <div className="xl:w-11/12 xl:-ml-14">
                            <h6>Suas summo id sed erat erant oporteat</h6>
                            <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</h6>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="xl:w-1/12">
                            <FiCheckCircle className=" text-btngreen xl:h-6 xl:w-6" />
                        </div>
                        <div className="xl:w-11/12 xl:-ml-14">
                            <h6>Illud singulis indoctum ad sed</h6>
                            <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</h6>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="xl:w-1/12">
                            <FiCheckCircle className=" text-btngreen xl:h-6 xl:w-6" />
                        </div>
                        <div className="xl:w-11/12 xl:-ml-14">
                            <h6>Alterum bonorum mentitum an mel</h6>
                            <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        }
        else if (isLoading === false) {
            return (
                <div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-2/12">
                            <img 
                            className="xl:h-28 xl:mt-7 xl:w-28 rounded-full xl:border-4 xl:border-white xl:shadow-lg"
                                src={ApiUrl.ImageBaseUrl+TeacherInfo.image} alt="teacher" />
                            <button className="xl:ml-2 text-maincolor xl:font-semibold xl:text-xl xl:mt-3">+ Follow</button>
                        </div>
                        <div className="xl:w-10/12 xl:-ml-12">
                            <h6 className=" text-sectionTitleColor text-3xl font-semibold xl:pr-24 xl:mt-8">
                                {courseInfo.course_title}
                            </h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-4">Mario rossi   •   Trainer and Speaker</h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-2">
                                <ul className="flex sm:justify-center xl:justify-start">
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                    <h6 className="xl:ml-2 xl:-mt-.75 xl:text-xs"> 4.5 <em>(2312 ratings on 42012 students enrolled)</em></h6>
                                </ul>

                            </h6>
                        </div>
                    </div>
                    <div className="flex flex-wrap xl:mt-9">
                        <div className="xl:w-full">
                            <h6 className="text-sectionTitleColor text-3xl font-semibold">Description</h6>
                            <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-5 xl:leading-5 xl:pr-24">
                                {courseInfo.course_description}
                            </h6>
                            <h6 className="text-sectionTitleColor xl:text-xl font-semibold xl:mt-5 xl:mb-5">What will you learn:</h6>
                            {CourseLearnInfo.map((course_learn_info, index) => (
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/12">
                                        <FiCheckCircle className=" text-btngreen xl:h-6 xl:w-6" />
                                    </div>
                                    <div className="xl:w-11/12 xl:-ml-14">
                                        <h6>{course_learn_info.course_learn_question}</h6>
                                        <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">
                                            {course_learn_info.course_learn_answer}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
            )
        }
    })()

    return (
        <Fragment>
            <div className="xl:ml-32">
                {
                    CourseInfoTeacherAndDescription
                }
            </div>
        </Fragment>
    );
}

export default Description;