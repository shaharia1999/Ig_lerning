import React, { Fragment, useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Description() {
    let { id } = useParams();
    const [courseInfo, setCourseInfo] = useState([]);
    const [TeacherInfo, setTeacherInfo] = useState([]);
    const [CourseLearnInfo, setCourseLearnInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const [is_check_follow, setIsCheckFollow] = useState(false);
    var user_data = JSON.parse(localStorage.getItem("user_data"));

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/course-single-response/${id}/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setCourseInfo(response.data.data);
                setTeacherInfo(response.data.data.course_created_by_info);
                setCourseLearnInfo(response.data.data.course_learn_info);
                setIsCheckFollow(true);
            }
        });
    }, []);

    if (is_check_follow === true) {
        if (user_data !== null) {
            const user_id = user_data['id']
            const teacher_id = TeacherInfo.id
            const check_follow_data = {
                sender: user_id,
                receiver: teacher_id
            }
            axios.post(`${ApiUrl.BaseUrl}api/course/check-user-follow-status/`, check_follow_data).then((res) => {
                setIsFollow(res.data.is_follow)
            })
        }
    }

    const TeacherFollow = (teacher_id) => {
        const sender = user_data['id']
        const receiver = teacher_id
        const follow_data = {
            sender: sender,
            receiver: receiver
        }
        axios.post(ApiUrl.BaseUrl + 'api/course/follow/', follow_data).then((response) => {
            if (response.data.error === true) {
                alert(response.data.message)
            }
            else {
                setIsFollow(true)
            }
        });
    }
    const TeacherUnFollow = (teacher_id) => {
        const sender = user_data['id']
        const receiver = teacher_id
        const follow_data = {
            sender: sender,
            receiver: receiver
        }
        axios.post(ApiUrl.BaseUrl + 'api/course/un-follow/', follow_data).then((response) => {
            if (response.data.error === false) {
                setIsFollow(false)
            }
        });
    }


    const CourseInfoTeacherAndDescription = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="flex flex-wrap animate-pulse">
                        <div className="xl:w-2/12">
                            <div className="xl:h-28 xl:w-28 xl:mt-7 rounded-full xl:shadow-sm bg-gray-100"></div>
                            <div className="bg-gray-100 xl:h-6 xl:pr-24 xl:mt-5 w-28 rounded"></div>
                        </div>
                        <div className="xl:w-10/12 xl:-ml-12">
                            <div className="bg-gray-100 xl:h-6 xl:pr-24 xl:mt-8 w-11/12 rounded"></div>
                            <div className="bg-gray-100 xl:h-6 xl:pr-24 xl:mt-1 w-4/12 rounded"></div>
                            <div className="bg-gray-100 xl:h-3 xl:pr-24 xl:mt-2 w-3/12 rounded"></div>
                            <div className="bg-gray-100 xl:h-3 xl:pr-24 xl:mt-3 w-7/12 rounded"></div>
                        </div>
                    </div>
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
                    <div className="flex flex-wrap">
                        <div className="xl:w-2/12 lg:w-2/12">
                            <img
                                className="2xl:h-28 xl:h-24 lg:h-20 xl:mt-7 2xl:w-28 xl:w-24 lg:w-20 rounded-full xl:border-4 xl:border-white xl:shadow-lg"
                                src={courseInfo.course_image}
                                alt="teacher" />
                            {(() => {
                                if (isFollow === true) {
                                    return <button onClick={() => TeacherUnFollow(TeacherInfo.id)}
                                        className="xl:ml-2 text-maincolor xl:font-semibold xl:text-xl xl:mt-3">
                                        + Unfollow
                                    </button>
                                }
                                else {
                                    return <button onClick={() => TeacherFollow(TeacherInfo.id)}
                                        className="xl:ml-2 text-maincolor xl:font-semibold xl:text-xl xl:mt-3">
                                        + Follow
                                    </button>
                                }

                            })()}

                        </div>
                        <div className="2xl:w-10/12 xl:w-10/12 2xl:-ml-12 xl:-ml-6 lg:w-10/12 lg:-ml-10">
                            <h6 className=" text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl font-semibold xl:pr-24 xl:mt-8">
                                {courseInfo.course_title}
                            </h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal 2xl:mt-4 xl:mt-2">
                                <Link to={`/trainer-profile/${TeacherInfo.id}`}>
                                {TeacherInfo.username}   •   Trainer and Speaker
                                </Link>
                            </h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1">
                                <div className="flex sm:justify-center xl:justify-start">
                                    <StarRatings
                                        rating={courseInfo.avg_rating}
                                        starDimension="15px"
                                        starSpacing="4px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                    <h6 className="xl:ml-2 xl:mt-1 xl:text-xs">
                                        {courseInfo.avg_rating}
                                        <em>({courseInfo.total_student_rating}
                                            ratings on
                                            {courseInfo.total_student_enroll}
                                            students enrolled)
                                        </em>
                                    </h6>
                                </div>

                            </h6>
                        </div>
                    </div>
                    <div className="flex flex-wrap xl:mt-9">
                        <div className="w-full">
                            <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl font-semibold">
                                Description
                            </h6>
                            <h6 className="xl:text-xs xl:font-light text-breadcrumbs-text xl:mt-5 xl:leading-5 xl:pr-24">
                                {courseInfo.course_description}
                            </h6>
                            <h6 className="text-sectionTitleColor dark:text-white xl:text-xl font-semibold xl:mt-5 xl:mb-5">
                                What will you learn:
                            </h6>
                            {CourseLearnInfo.map((course_learn_info, index) => (
                                <div key={index}
                                    className="flex flex-wrap">
                                    <div className="xl:w-1/12">
                                        <FiCheckCircle
                                            className=" text-btngreen xl:h-6 xl:w-6"
                                        />
                                    </div>
                                    <div
                                        className="xl:w-11/12 xl:-ml-14">
                                        <h6 className="dark:text-white">{course_learn_info.course_learn_question}</h6>
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