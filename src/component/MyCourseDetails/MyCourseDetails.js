import React, { Fragment, useEffect, useState, useRef } from "react";
import VideoImg from "../../asset/images/VideoImg/videoImg.png"
import { FiCheckCircle } from "react-icons/fi";
import StarRatings from 'react-star-ratings';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";
import courseLessonImg from '../../asset/images/course-thumbnail/lesson-img.svg'
import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";
import { GrDocumentText } from "react-icons/gr";

function MyCourseDetails() {
    let { id } = useParams();
    var user_data = JSON.parse(localStorage.getItem('user_data'))
    console.log('user data = ', user_data);
    console.log('user data id = ', user_data['id']);
    const [isLoading, setIsLoading] = useState(false);
    const [CourseEnrollDetails, setCourseEnrollDetails] = useState([]);
    const [CourseLearnInfo, setCourseLearnInfo] = useState([]);
    const [CourseID, setCourseID] = useState('');
    const [studentFeedBack, setStudentFeedBack] = useState([]);
    const [courseReview, setStudentReview] = useState([]);
    const [StudentInformation, setStudentInformation] = useState([]);
    
    var [searchValue, setSearchValue] = useState('');
    var [searchRating, setSearchRating] = useState('');
    var searchRating1 = '';

    useEffect(() => {
        setIsLoading(true);
        my_course_details()
    }, []);

    const my_course_details = (() => {
        axios.get(ApiUrl.BaseUrl + 'api/course/course-enroll-details-overview/'+ id + '/').then((response) => {
            if (response.data.error === false) {
                setCourseEnrollDetails(response.data.data);
                setCourseLearnInfo(response.data.data['course_learn_info'])
                setCourseID(response.data.data.course_id)
                student_feedback(response.data.data.course_id)
                course_review(response.data.data.course_id)
                setIsLoading(false);
            }
        });
    })
    
    const student_feedback = ((courseId) => {
        console.log('course id = ', CourseID);
        axios.get(`${ApiUrl.BaseUrl}api/course/course-student-feedback/${courseId}/`).then((response) => {
            if (response.data.error === false) {
                setStudentFeedBack(response.data.data);
            }
        });
    })

    const course_review = ((courseId) => {
        axios.get(`${ApiUrl.BaseUrl}api/course/course-student-review/${courseId}/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentReview(response.data.data);
                setStudentInformation(response.data.data.student_information);
            }
        });
    })

    function ReviewSearch() {
        var review_search_data = {
            search_value: searchValue,
            rating: searchRating1
        }
        console.log('review data = ', review_search_data);
        axios.put(`${ApiUrl.BaseUrl}api/course/course-student-review-search/${CourseID}/`, review_search_data).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentReview(response.data.data);
                setStudentInformation(response.data.data.student_information);
                console.log('course student review = ', response.data.data)
            }
        });
    }

    function ReviewSearch1() {
        var review_search_data = {
            search_value: searchValue,
            rating: searchRating
        }
        axios.put(`${ApiUrl.BaseUrl}api/course/course-student-review-search/${CourseID}/`, review_search_data).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentReview(response.data.data);
                setStudentInformation(response.data.data.student_information);
            }
        });
    }

    
    
    console.log('CourseEnrollDetails = ', CourseEnrollDetails)
    console.log('course_learn_info = ', CourseLearnInfo)
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const course_enroll_overview_Loading = (() => {
        if (isLoading === true) {
            return (
                <div className="w-full">
                    <h6 className="text-sectionTitleColor dark:text-white lg:text-xl font-semibold">
                        Description
                    </h6>
                    <h6 className="xl:text-xs text-xs text-justify xl:font-light text-breadcrumbs-text xl:mt-5 mt-3 xl:leading-5 xl:pr-24">
                    Make real project according to the client requirements Implement HTML/Bootstrap template & Customise Django Admin Panel PostgreSQL Database & Deploy it into Production Server Setup Virtual Environment Creating Django Apps Git Implementing HTML and Bootstrap PostgreSQL Database Setup Django Static Files & Media Files Django Admin Customisation Database Schema, Models and Migrations Implementing RichText Editor & Multi-Select Fields on Admin Backend Fetching Database Objects Pagination Search Functionality User Authentication Login with Facebook & Login with Google Send Emails Database Dump Data & Load Data (local & remote) Deploy on Heroku Server (Gunicorn, Whitenoise)
                    </h6>
                    <h6 className="text-sectionTitleColor dark:text-white xl:text-xl font-semibold xl:mt-5 mt-3 xl:mb-5 mb-3">
                        What will you learn:
                    </h6>

                    <div className="flex flex-wrap xl:mb-0 mb-1">
                        <div className="xl:w-1/12">
                            <FiCheckCircle
                                className=" text-btngreen xl:h-6 xl:w-6"
                            />
                        </div>
                        <div className="xl:w-11/12 xl:-ml-14 ml-1">
                            <h6 className="dark:text-white">What will you learn:</h6>
                            <h6 className="xl:text-xs text-2xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">
                                Make real project according to the client requirements Implement
                            </h6>
                        </div>
                    </div>

                </div>
            )
        }
    })()

    const course_enroll_overview = (() => {
        if (isLoading === false) {
            return (
                <div className="w-full">
                    <h6 className="text-sectionTitleColor dark:text-white lg:text-xl font-semibold">
                        Description
                    </h6>
                    <h6 className="xl:text-xs text-xs text-justify xl:font-light text-breadcrumbs-text xl:mt-5 mt-3 xl:leading-5 xl:pr-24">
                        {CourseEnrollDetails?.course_info?.course_description} {' '}
                    </h6>
                    <h6 className="text-sectionTitleColor dark:text-white xl:text-xl font-semibold xl:mt-5 mt-3 xl:mb-5 mb-3">
                        What will you learn:
                    </h6>
                    {
                        CourseLearnInfo.map((course_learn) => (
                            <div className="flex flex-wrap xl:mb-0 mb-1">
                                <div className="xl:w-1/12">
                                    <FiCheckCircle
                                        className=" text-btngreen xl:h-6 xl:w-6"
                                    />
                                </div>
                                <div className="xl:w-11/12 xl:-ml-14 ml-1">
                                    <h6 className="dark:text-white">{' '} {course_learn?.course_learn_question}</h6>
                                    <h6 className="xl:text-xs text-2xs xl:font-light text-breadcrumbs-text xl:mt-1 xl:mb-4 xl:leading-5 xl:pr-24">
                                        {course_learn?.course_learn_answer}
                                    </h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
    })()

    const my_course_student_feedback_loading = (() => {
        return (
            <div className="flex flex-wrap xl:mt-0 mt-4">
                <div className="xl:w-1/5 w-4/12 xl:mt-6">
                    <div className="bg-maincolor xl:rounded-lg rounded-md text-center">
                        <h6 className="2xl:pt-6 xl:pt-4 pt-2 2xl:text-5xl xl:text-3xl text-lg text-white xl:font-bold">3.5</h6>
                        <ul className="flex justify-center xl:mt-2">
                            <StarRatings
                                rating={3.5}
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
                        <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: "60px" }}></div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-4 mt-2">
                        <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: "60px" }}></div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-4 mt-2">
                        <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: "60px" }}></div>
                    </div>


                    <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-4 mt-2">
                        <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: "60px" }}></div>
                    </div>


                    <div className="w-full bg-gray-200 rounded-full 2xl:h-3.5 xl:h-3 h-2 2xl:mt-5 xl:mt-3.5 mt-2">
                        <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full" style={{ width: "60px" }}></div>
                    </div>
                </div>
                <div className="xl:w-1/5 w-4/12 2xl:mt-5 xl:mt-8">

                    <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 mt-1.5">
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">40%</h6>
                    </ul>

                    <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2">
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">20%</h6>
                    </ul>

                    <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2.5">
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">18%</h6>
                    </ul>

                    <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2.5">
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">12%</h6>
                    </ul>

                    <ul className="flex justify-center 2xl:mt-1 xl:-mt-1 -mt-2.5">
                        <li className="mb-4 mx-0.5"><FaStar className="text-amber-400 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <li className="mb-4 mx-0.5"><FaStar className=" text-gray-600 xl:h-4 xl:w-4 h-2.5 w-2.5" /></li>
                        <h6 className="xl:ml-2 xl:text-sm text-2xs text-black dark:text-gray-300 font-normal ml-2 xl:mt-0 -mt-0.5">10%</h6>
                    </ul>

                </div>
            </div>
        )
    })()
    const my_course_student_feedback = (() => {
        return <div className="flex flex-wrap xl:mt-0 mt-4">
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
                    <div className="bg-progress-bar 2xl:h-3.5 xl:h-3 h-2 rounded-full"  style={{ width: `${studentFeedBack.three_rating_percentage}%` }}></div>
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
    })()

    const my_course_review_loading = (() => {
        return <div className="flex w-full xl:mt-5 mt-5">
            <div className="xl:w-1/12 w-2/12 xl:mt-2 2xl:mt-0">
                <img className="2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 h-12 w-12 rounded-full" src={VideoImg} alt="teacher" />
            </div>
            <div className="xl:w-11/12 w-10/12">
                <div>
                    <h6 className=" text-sectionTitleColor dark:text-white text-lg font-semibold">Monirul Islam Akand</h6>
                    <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1 mt-0">30 June, 2020</h6>
                    <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1">
                        <ul className="flex sm:justify-center xl:justify-start xl:mb-1">
                            <StarRatings
                                rating={3.5}
                                starDimension="15px"
                                starSpacing="2px"
                                starRatedColor="rgb(251, 191, 36)"
                            />
                            <h6 className="xl:ml-2 ml-2 xl:mt-1 mt-0.5 xl:text-xs text-2xs text-black dark:text-white font-medium">2 month ago</h6>
                        </ul>
                    </h6>
                    <h6 className="text-breadcrumbs-text text-sm xl:font-normal font-normal xl:tracking-normal xl:mt-0 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </h6>
                    <h6 className="text-breadcrumbs-text text-xs font-normal xl:mt-4 mt-3">Was this review helpful?</h6>
                    <div className="flex xl:mt-2 mt-1">
                        <Link to={`#`} className="xl:p-2 p-1.5 xl:mx-2 mx-1 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsUp className="text-maincolor xl:text-base" /></Link>
                        <Link to={`#`} className="xl:p-2 p-1.5 xl:mx-2 mx-1 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsDown className="text-maincolor xl:text-base" /></Link>
                        <h6 className="text-maincolor xl:mx-2 xl:mt-1.5 mt-1.5 xl:ml-2 ml-2 text-sm font-medium">Report</h6>
                    </div>
                    <hr className="xl:mt-5 mt-3 border dark:border-dark-color3" />
                </div>
            </div>
        </div>
    })()
    const my_course_review = (() => {
        return (
            courseReview.map((course_learn_info, index) => (
                <div className="flex w-full xl:mt-5 mt-5">
                    <div className="xl:w-1/12 w-2/12 xl:mt-2 2xl:mt-0">
                        <img className="2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 h-12 w-12 rounded-full" src={ApiUrl.ImageBaseUrl + course_learn_info.student_information.image} alt="teacher" />
                    </div>
                    <div className="xl:w-11/12 w-10/12">
                        <div>
                            <h6 className=" text-sectionTitleColor dark:text-white text-lg font-semibold">{course_learn_info.student_information.username}</h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1 mt-0">{course_learn_info.date}</h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1">
                                <ul className="flex sm:justify-center xl:justify-start xl:mb-1">
                                    <StarRatings
                                        rating={course_learn_info.rating}
                                        starDimension="15px"
                                        starSpacing="2px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                    <h6 className="xl:ml-2 ml-2 xl:mt-1 mt-0.5 xl:text-xs text-2xs text-black dark:text-white font-medium">{course_learn_info.whenpublished}</h6>
                                </ul>
                            </h6>
                            <h6 className="text-breadcrumbs-text text-sm xl:font-normal font-normal xl:tracking-normal xl:mt-0 mt-3">
                                {course_learn_info.review_description}
                            </h6>
                            <h6 className="text-breadcrumbs-text text-xs font-normal xl:mt-4 mt-3">Was this review helpful?</h6>
                            <div className="flex xl:mt-2 mt-1">
                                <Link to={`#`} className="xl:p-2 p-1.5 xl:mx-2 mx-1 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsUp className="text-maincolor xl:text-base" /></Link>
                                <Link to={`#`} className="xl:p-2 p-1.5 xl:mx-2 mx-1 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsDown className="text-maincolor xl:text-base" /></Link>
                                <h6 className="text-maincolor xl:mx-2 xl:mt-1.5 mt-1.5 xl:ml-2 ml-2 text-sm font-medium">Report</h6>
                            </div>
                            <hr className="xl:mt-5 mt-3 border dark:border-dark-color3" />
                        </div>
                    </div>
                </div>
            ))
        )
    })()
    return (
        <Fragment>
            <div className="container">
                <div className="flex flex-wrap lg:mt-7">
                    <div className="lg:w-4/12">
                        <div className="xl:p-0 p-4">
                            <div className="flex flex-wrap xl:mt-9 xl:mb-16">
                                <div className="lg:w-11/12 w-full">
                                    <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl text-xl font-semibold xl:mb-3">Content</h6>
                                    <h6 className="text-maincolor dark:text-white text-base font-normal lg:mb-5">5 Section.24 Lecture.2h 22m total length</h6>
                                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 lg:mb-5">
                                        <div class="bg-maincolor text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
                                    </div>
                                    <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                        <Accordion className="rounded m-0" open={open === 1} onClick={() => handleOpen(1)}>
                                            <AccordionHeader className="pr-4">
                                                <div>
                                                    <h1 className="xl:text-base text-sm text-maingray font-medium xl:pl-8">Chapter 1 : Be positive</h1>
                                                    <h1 className="lg:text-sm text-sm text-gray-400 font-normal xl:-ml-8">01/14  | 1h 38 min</h1>
                                                </div>
                                                <div className="h-4 w-4 bg-price-deep rounded-full xl:-mr-64 z-40 float-right flex xl:mt-5"></div>
                                            </AccordionHeader>
                                            <AccordionBody className="bg-gray-50 xl:pl-0 pl-4">
                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                    <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                                            <AccordionHeader className="flex pr-4">
                                                <div>
                                                    <h1 className="xl:text-base text-sm text-maingray font-medium xl:pl-8">Chapter 2 : Be positive</h1>
                                                    <h1 className="lg:text-sm text-sm text-gray-400 font-normal xl:-ml-8">01/14  | 1h 38 min</h1>
                                                </div>    
                                                <div className="h-4 w-4 bg-gray-500 rounded-full xl:-mr-64 z-40 float-right flex xl:mt-5"></div>                                        </AccordionHeader>
                                            <AccordionBody className="bg-gray-50 xl:pl-0 pl-4">
                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>


                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>


                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>


                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>


                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>


                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>


                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                    <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                                            <AccordionHeader className="flex pr-4">
                                                <div>
                                                    <h1 className="xl:text-base text-sm text-maingray font-medium xl:pl-8">Chapter 3 : Be positive</h1>
                                                    <h1 className="lg:text-sm text-sm text-gray-400 font-normal xl:-ml-8">01/14  | 1h 38 min</h1>
                                                </div>
                                                <div className="h-4 w-4 bg-price-deep rounded-full xl:-mr-64 z-40 float-right flex xl:mt-5"></div>
                                            </AccordionHeader>
                                            <AccordionBody className="bg-gray-50 xl:pl-0 pl-4">
                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                    <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
                                            <AccordionHeader className="flex pr-4">
                                                <div>
                                                    <h1 className="xl:text-base text-sm text-maingray font-medium xl:pl-8">Chapter 4 : Be positive</h1>
                                                    <h1 className="lg:text-sm text-sm text-gray-400 font-normal xl:-ml-8">01/14  | 1h 38 min</h1>
                                                </div>
                                                <div className="h-4 w-4 bg-price-deep rounded-full xl:-mr-64 z-40 float-right flex xl:mt-5"></div>
                                            </AccordionHeader>
                                            <AccordionBody className="bg-gray-50 xl:pl-0 pl-4">
                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                    <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                        <Accordion open={open === 5} onClick={() => handleOpen(5)}>
                                            <AccordionHeader className="flex pr-4">
                                                <div>
                                                    <h1 className="xl:text-base text-sm text-maingray font-medium xl:pl-8">Chapter 5 : Be positive</h1>
                                                    <h1 className="lg:text-sm text-sm text-gray-400 font-normal xl:-ml-8">01/14  | 1h 38 min</h1>
                                                </div>
                                                <div className="h-4 w-4 bg-price-deep rounded-full xl:-mr-64 z-40 float-right flex xl:mt-5"></div>
                                            </AccordionHeader>
                                            <AccordionBody className="bg-gray-50 xl:pl-0 pl-4">
                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr className="border-white border" />

                                                <div className="flex flex-wrap mt-0.5">
                                                    <div className="xl:w-2/12 mt-3 mb-3">
                                                        <img className="h-8 w-8 xl:ml-8 rounded-md" src={courseLessonImg} alt="" />
                                                    </div>
                                                    <div className="xl:w-10/12 mt-3 mb-3 xl:ml-0 ml-2">
                                                        <h6 className="xl:text-sm text-maingray font-medium">Compile VS Interpreted Languages</h6>
                                                        <span className="flex ">
                                                            <GrDocumentText
                                                                className="h-4 w-4 mr-3"
                                                            /> | <span className="ml-2">38 min</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-8/12">
                        <div className="">
                            <div className="w-full">
                                {/* <img src={VideoImg} alt="" /> */}
                                <video
                                    id="my-video"
                                    // class="video-js"
                                    class="video-js vjs-theme-fantasy vjs-16-9"
                                    controls
                                    // autoPlay={true}
                                    // muted
                                    // aspectRatio="16:9"
                                    // width="1020px"
                                    // height="576px"
                                    poster="https://futurevisioncomputers.com/wp-content/uploads/2021/03/computer_institute_banner_classes_in_surat-scaled-1024x576.jpg"
                                    data-setup='{}'
                                >
                                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                                    <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
                                    <p class="vjs-no-js">
                                        To view this video please enable JavaScript, and consider upgrading to a
                                        web browser that
                                        <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">supports HTML5 video</a>
                                    </p>
                                </video>
                            </div>

                            <div className="w-full">
                                <h6 className="lg:text-2xl lg:font-medium lg:mt-4">
                                    UI UX Designing Full Course
                                </h6>
                                <hr className="w-full lg:mt-3" />
                            </div>

                            <div className="w-full lg:mt-1 xl:pr-8 md:mt-5">
                                <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <span
                                            type="button"
                                            className="nav-link-my-course-details dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight w-full md:w-auto py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
                                            id="pills-home-tab3"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-1"
                                            role="tab"
                                            aria-controls="pills-home3"
                                            aria-selected="true">
                                            Overview
                                        </span>
                                    </li>
                                    <li className="nav-item mx-3" role="presentation">
                                        <span
                                            type="button"
                                            className="nav-link-my-course-details dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
                                            id="pills-profile-tab3"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-2"
                                            role="tab"
                                            aria-controls="pills-profile3"
                                            aria-selected="false">
                                            Notes
                                        </span>
                                    </li>
                                    <li className="nav-item mx-3" role="presentation">
                                        <span type="button"
                                            className="nav-link-my-course-details dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto py-3 my-2 md:ml-2 focus:outline-none focus:ring-0"
                                            id="pills-contact-tab3"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-3"
                                            role="tab"
                                            aria-controls="pills-contact3"
                                            aria-selected="false">
                                            Announcements
                                        </span>
                                    </li>
                                    <li className="nav-item mx-3" role="presentation">
                                        <span type="button"
                                            className="nav-link-my-course-details dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto py-3 my-2 md:ml-2 focus:outline-none focus:ring-0"
                                            id="pills-contact-tab3"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-4"
                                            role="tab"
                                            aria-controls="pills-contact3"
                                            aria-selected="false">
                                            Review
                                        </span>
                                    </li>
                                    <li className="nav-item mx-3" role="presentation">
                                        <span type="button"
                                            className="nav-link-my-course-details dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto py-3 my-2 md:ml-2 focus:outline-none focus:ring-0"
                                            id="pills-contact-tab3"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-5"
                                            role="tab"
                                            aria-controls="pills-contact3"
                                            aria-selected="false">
                                            Learning tools
                                        </span>
                                    </li>
                                </ul>
                            </div>


                            <div className="tab-content xl:mb-0 lg:mb-5 md:mb-6" id="pills-tabContent3">
                                <div className="tab-pane w-full fade show active"
                                    id="pills-1" role="tabpanel"
                                    aria-labelledby="pills-home-tab3">

                                    <div className="flex flex-wrap lg:-mt-2 md:mt-5">
                                        {(() => {
                                            if (isLoading === true) {
                                                return course_enroll_overview_Loading
                                            }
                                            else{
                                               return course_enroll_overview
                                            }
                                        })()}
                                    </div>
                                </div>
                                <div className="tab-pane w-full fade"
                                    id="pills-2" role="tabpanel"
                                    aria-labelledby="pills-profile-tab3">
                                    <div className="flex flex-wrap lg:-mt-2 md:mt-5">
                                        <h6>hello2</h6>
                                    </div>
                                </div>
                                <div className="tab-pane w-full fade"
                                    id="pills-3" role="tabpanel"
                                    aria-labelledby="pills-contact-tab3">
                                    <div className="flex flex-wrap w-full lg:-mt-2 md:mt-5">
                                        <h6>hello3</h6>
                                    </div>
                                </div>
                                <div className="tab-pane w-full fade"
                                    id="pills-4" role="tabpanel"
                                    aria-labelledby="pills-contact-tab3">

                                    <div className=" xl:mt-5 xl:mr-14 xl:p-0 p-4">
                                        <h6 className="text-sectionTitleColor lg:text-xl dark:text-white font-semibold">Student Feedback</h6>
                                        {(() => {
                                            if (isLoading === true) {
                                                return my_course_student_feedback_loading
                                            }
                                            else{
                                               return my_course_student_feedback
                                            }
                                        })()}
                                    </div>

                                    <div className="lg:mt-5 md:mt-5">
                                        <div className="lg:mt-0 xl:p-0 p-4">
                                            <h6 className="text-sectionTitleColor dark:text-white lg:text-xl text-xl font-semibold">Reviews</h6>
                                            <div className="w-full flex ">
                                                <div className="lg:w-8/12 xl:mt-6 mt-4 xl:mr-0 mr-2">
                                                    <div className="flex w-full">
                                                        <div className="input-group relative flex flex-wrap items-stretch w-full rounded-sm mb-4">
                                                            <input type="search"
                                                                value={searchValue}
                                                                onChange={(e) => setSearchValue(e.target.value)}
                                                                className="form-control relative flex-auto min-w-0 block w-full xl:px-5 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" placeholder="Search Reviews" aria-label="Search" aria-describedby="button-addon2" />
                                                            <button
                                                                onClick={(e) => {
                                                                    console.log('searchRating1 = ', searchRating1);
                                                                    ReviewSearch1();
                                                                }}
                                                                className="btn inline-block px-6 py-2.5 bg-maincolor border-none text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-black hover:shadow-lg focus:bg-maincolor  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-maincolor active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:w-4/12 xl:mt-6 mt-4 xl:pl-8">
                                                    <select
                                                        value={searchRating}
                                                        onChange={(e) => {
                                                            searchRating1 = e.target.value;
                                                            setSearchRating(searchRating1);
                                                            ReviewSearch();
                                                        }}
                                                        className="form-select form-select-lg mb-3 appearance-none block w-full px-4 xl:py-2 py-3 xl:text-xl text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label=".form-select-lg example">
                                                        <option value='' selected className="hover:bg-maincolor xl:text-lg text-sm">All Ratings</option>
                                                        <option className="text-maincolor hover:bg-maincolor xl:text-lg text-sm" value="5">5 Star</option>
                                                        <option className="text-maincolor hover:bg-maincolor xl:text-lg text-sm" value="4">4 Star</option>
                                                        <option className="text-maincolor hover:bg-maincolor xl:text-lg text-sm" value="3">3 Star</option>
                                                        <option className="text-maincolor hover:bg-maincolor xl:text-lg text-sm" value="2">2 Star</option>
                                                        <option className="text-maincolor hover:bg-maincolor xl:text-lg text-sm" value="1">1 Star</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap xl:pr-16 xl:mb-16">
                                                {(() => {
                                                    if (isLoading === true) {
                                                        return my_course_review_loading
                                                    }
                                                    else{
                                                        return my_course_review
                                                    }
                                                })()}

                                                {/* <div className="flex w-full xl:mt-5 mt-5">
                                                    <div className="xl:w-1/12 w-2/12 xl:mt-2 2xl:mt-0">
                                                        <img className="2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 h-12 w-12 rounded-full" src={VideoImg} alt="teacher" />
                                                    </div>
                                                    <div className="xl:w-11/12 w-10/12">
                                                        <div>
                                                            <h6 className=" text-sectionTitleColor dark:text-white text-lg font-semibold">Monirul Islam Akand</h6>
                                                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1 mt-0">30 June, 2020</h6>
                                                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1">
                                                                <ul className="flex sm:justify-center xl:justify-start xl:mb-1">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="15px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <h6 className="xl:ml-2 ml-2 xl:mt-1 mt-0.5 xl:text-xs text-2xs text-black dark:text-white font-medium">2 month ago</h6>
                                                                </ul>
                                                            </h6>
                                                            <h6 className="text-breadcrumbs-text text-sm xl:font-normal font-normal xl:tracking-normal xl:mt-0 mt-3">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </h6>
                                                            <h6 className="text-breadcrumbs-text text-xs font-normal xl:mt-4 mt-3">Was this review helpful?</h6>
                                                            <div className="flex xl:mt-2 mt-1">
                                                                <Link to={`#`} className="xl:p-2 p-1.5 xl:mx-2 mx-1 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsUp className="text-maincolor xl:text-base" /></Link>
                                                                <Link to={`#`} className="xl:p-2 p-1.5 xl:mx-2 mx-1 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsDown className="text-maincolor xl:text-base" /></Link>
                                                                <h6 className="text-maincolor xl:mx-2 xl:mt-1.5 mt-1.5 xl:ml-2 ml-2 text-sm font-medium">Report</h6>
                                                            </div>
                                                            <hr className="xl:mt-5 mt-3 border dark:border-dark-color3" />
                                                        </div>
                                                    </div>
                                                </div> */}


                                                
                                            </div>

                                        </div >
                                    </div>

                                </div>
                                <div className="tab-pane w-full fade"
                                    id="pills-5" role="tabpanel"
                                    aria-labelledby="pills-contact-tab3">
                                    <div className="flex flex-wrap w-full lg:-mt-2 md:mt-5">
                                        <h6>hello5</h6>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default MyCourseDetails;