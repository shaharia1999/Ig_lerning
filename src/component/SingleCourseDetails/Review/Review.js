import React, { Fragment, useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';
import { useParams } from "react-router-dom";

function Review() {
    let { id } = useParams();
    const [courseReview, setStudentReview] = useState([]);
    const [StudentInformation, setStudentInformation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    var [searchValue, setSearchValue] = useState('');
    var [searchRating, setSearchRating] = useState('');

    var searchRating1 = '';

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/course-student-review/${id}/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentReview(response.data.data);
                setStudentInformation(response.data.data.student_information);
            }
        });
    }, []);

    function ReviewSearch() {
        var review_search_data = {
            search_value: searchValue,
            rating: searchRating1
        }
        console.log('review data = ', review_search_data);
        axios.put(`${ApiUrl.BaseUrl}api/course/course-student-review-search/${id}/`, review_search_data).then((response) => {
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
        axios.put(`${ApiUrl.BaseUrl}api/course/course-student-review-search/${id}/`, review_search_data).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentReview(response.data.data);
                setStudentInformation(response.data.data.student_information);
            }
        });
    }

    const StudentReviewHTML = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="flex flex-wrap w-full xl:mt-5 animate-pulse">
                        <div className="xl:w-1/12">
                            <div className="xl:h-16 xl:w-16 bg-gray-100 rounded-full" ></div>
                        </div>
                        <div className="xl:w-11/12">
                            <div>
                                <div className="xl:h-5 bg-gray-100 xl:w-4/12"></div>
                                <div className="xl:h-3 bg-gray-100 xl:w-2/12 xl:mt-1"></div>
                                <div className="xl:h-3 bg-gray-100 xl:w-6/12 xl:mt-2"></div>

                                <div className="xl:h-2 bg-gray-100 xl:w-full xl:mt-5"></div>
                                <div className="xl:h-2 bg-gray-100 xl:w-full xl:mt-1"></div>
                                <div className="xl:h-2 bg-gray-100 xl:w-8/12 xl:mt-1"></div>

                                <div className="xl:h-2 bg-gray-100 xl:w-3/12 xl:mt-4"></div>

                                <div className="flex xl:mt-2">
                                    <div className="xl:h-9 xl:w-9 bg-gray-100 rounded-full" ></div>
                                    <div className="xl:h-9 xl:w-9 xl:mx-2 bg-gray-100 rounded-full" ></div>
                                    <div className="xl:h-4 bg-gray-100 xl:w-1/12 xl:mt-2"></div>
                                </div>
                                <hr className="xl:mt-5 h-0.5 bg-gray-100" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full xl:mt-5 animate-pulse">
                        <div className="xl:w-1/12">
                            <div className="xl:h-16 xl:w-16 bg-gray-100 rounded-full" ></div>
                        </div>
                        <div className="xl:w-11/12">
                            <div>
                                <div className="xl:h-5 bg-gray-100 xl:w-4/12"></div>
                                <div className="xl:h-3 bg-gray-100 xl:w-2/12 xl:mt-1"></div>
                                <div className="xl:h-3 bg-gray-100 xl:w-6/12 xl:mt-2"></div>

                                <div className="xl:h-2 bg-gray-100 xl:w-full xl:mt-5"></div>
                                <div className="xl:h-2 bg-gray-100 xl:w-full xl:mt-1"></div>
                                <div className="xl:h-2 bg-gray-100 xl:w-8/12 xl:mt-1"></div>

                                <div className="xl:h-2 bg-gray-100 xl:w-3/12 xl:mt-4"></div>

                                <div className="flex xl:mt-2">
                                    <div className="xl:h-9 xl:w-9 bg-gray-100 rounded-full" ></div>
                                    <div className="xl:h-9 xl:w-9 xl:mx-2 bg-gray-100 rounded-full" ></div>
                                    <div className="xl:h-4 bg-gray-100 xl:w-1/12 xl:mt-2"></div>
                                </div>
                                <hr className="xl:mt-5 h-0.5 bg-gray-100" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full xl:mt-5 animate-pulse">
                        <div className="xl:w-1/12">
                            <div className="xl:h-16 xl:w-16 bg-gray-100 rounded-full" ></div>
                        </div>
                        <div className="xl:w-11/12">
                            <div>
                                <div className="xl:h-5 bg-gray-100 xl:w-4/12"></div>
                                <div className="xl:h-3 bg-gray-100 xl:w-2/12 xl:mt-1"></div>
                                <div className="xl:h-3 bg-gray-100 xl:w-6/12 xl:mt-2"></div>

                                <div className="xl:h-2 bg-gray-100 xl:w-full xl:mt-5"></div>
                                <div className="xl:h-2 bg-gray-100 xl:w-full xl:mt-1"></div>
                                <div className="xl:h-2 bg-gray-100 xl:w-8/12 xl:mt-1"></div>

                                <div className="xl:h-2 bg-gray-100 xl:w-3/12 xl:mt-4"></div>

                                <div className="flex xl:mt-2">
                                    <div className="xl:h-9 xl:w-9 bg-gray-100 rounded-full" ></div>
                                    <div className="xl:h-9 xl:w-9 xl:mx-2 bg-gray-100 rounded-full" ></div>
                                    <div className="xl:h-4 bg-gray-100 xl:w-1/12 xl:mt-2"></div>
                                </div>
                                <hr className="xl:mt-5 h-0.5 bg-gray-100" />
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (isLoading === false) {
            return (
                courseReview.map((course_learn_info, index) => (
                    <div key={index} className="flex w-full xl:mt-5 mt-5">
                        <div className="xl:w-1/12 w-2/12 xl:mt-2 2xl:mt-0">
                            <img className="2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 h-12 w-12 rounded-full" src={ApiUrl.ImageBaseUrl + course_learn_info.student_information.image} alt="teacher" />
                        </div>
                        <div className="xl:w-11/12 w-10/12">
                            <div>
                                <h6 className=" text-sectionTitleColor dark:text-white text-xl font-semibold">{course_learn_info.student_information.username}</h6>
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
        }
    })()

    return (
        <Fragment>
            <div className="xl:ml-32 lg:ml-12 xl:mt-5 xl:mr-14 xl:p-0 p-4">
                <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl text-xl font-semibold">Reviews</h6>
                <div className="flex flex-wrap xl:mr-12">
                    <div className="xl:w-8/12 w-7/12 xl:mt-6 mt-4 xl:mr-0 mr-2">
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
                    <div className="xl:w-4/12 w-4/12 xl:mt-6 mt-4 xl:pl-8">
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
                    {
                        StudentReviewHTML
                    }
                </div>

            </div >
        </Fragment >
    );
}

export default Review;