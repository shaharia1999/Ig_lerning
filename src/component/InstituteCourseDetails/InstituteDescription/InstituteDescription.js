import React, { Fragment, useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function InstituteDescription() {
    let { id } = useParams();
    const [courseInfo, setCourseInfo] = useState([]);
    const [CourseLearnInfo, setCourseLearnInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/course-single-response/${id}/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setCourseInfo(response.data.data);
                setCourseLearnInfo(response.data.data.course_learn_info);
            }
        });
    }, []);

    const CourseInfoTeacherAndDescription = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="flex flex-wrap xl:mt-9 animate-pulse">
                        <div className="xl:w-full">
                            <div className="bg-gray-100 xl:h-8 xl:pr-24 xl:mt-5 w-32 rounded"></div>
                            <div className="bg-gray-100 xl:h-2 xl:mt-5 w-10/12 rounded"></div>
                            <div className="bg-gray-100 xl:h-2 xl:mt-1 w-8/12 rounded"></div>

                            <div className="bg-gray-100 xl:h-6 xl:pr-24 xl:mt-5 w-56 rounded"></div>
                            <div className="flex flex-wrap">
                                <div className="xl:w-full xl:ml-0">
                                    <div className="bg-gray-100 xl:h-4 xl:mt-5 w-5/12 rounded"></div>
                                    <div className="bg-gray-100 xl:h-2 xl:mt-2 w-10/12 rounded"></div>
                                    <div className="bg-gray-100 xl:h-2 xl:mt-1 w-8/12 rounded"></div>
                                </div>
                            </div>

                            <div className="flex flex-wrap">
                                <div className="xl:w-full xl:ml-0">
                                    <div className="bg-gray-100 xl:h-4 xl:mt-5 w-5/12 rounded"></div>
                                    <div className="bg-gray-100 xl:h-2 xl:mt-2 w-10/12 rounded"></div>
                                    <div className="bg-gray-100 xl:h-2 xl:mt-1 w-8/12 rounded"></div>
                                </div>
                            </div>

                            <div className="flex flex-wrap">
                                <div className="xl:w-full xl:ml-0">
                                    <div className="bg-gray-100 xl:h-4 xl:mt-5 w-5/12 rounded"></div>
                                    <div className="bg-gray-100 xl:h-2 xl:mt-2 w-10/12 rounded"></div>
                                    <div className="bg-gray-100 xl:h-2 xl:mt-1 w-8/12 rounded"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
        else if (isLoading === false) {
            return (
                <div>
                    <div className="flex flex-wrap xl:mt-9 mt-5">
                        <div className="w-full">
                            <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl text-xl font-semibold">
                                Description
                            </h6>
                            <h6 className="xl:text-xs text-xs text-justify xl:font-light text-breadcrumbs-text xl:mt-5 mt-3 xl:leading-5 xl:pr-24 lg:pr-8">
                                {courseInfo.course_description}
                            </h6>
                            <h6 className="text-sectionTitleColor dark:text-white xl:text-xl font-semibold xl:mt-5 mt-3 xl:mb-5 mb-3">
                                What will you learn:
                            </h6>
                            {CourseLearnInfo.map((course_learn_info, index) => (
                                <div key={index}
                                    className="flex flex-wrap xl:mb-0 mb-1">
                                    <div className="xl:w-1/12">
                                        <FiCheckCircle
                                            className=" text-btngreen xl:h-6 xl:w-6"
                                        />
                                    </div>
                                    <div className="xl:w-11/12 xl:-ml-14 ml-1">
                                        <h6 className="dark:text-white">{course_learn_info.course_learn_question}</h6>
                                        <h6 className="xl:text-xs text-2xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">
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
            <div className="xl:ml-32 lg:ml-12 xl:p-0 p-4">
                {
                    CourseInfoTeacherAndDescription
                }
            </div>
        </Fragment>
    );
}

export default InstituteDescription;