import React, { Fragment, useEffect, useState } from "react";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Teacher from "../../../asset/images/course-teacher/teacher.jpg";
import { Link } from 'react-router-dom';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import StarRatings from 'react-star-ratings';


function Review() {
    const [courseReview, setStudentReview] = useState([]);
    const [StudentInformation, setStudentInformation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchValue, setSearchValue] = useState(null);
    const [searchRating, setSearchRating] = useState(null);

    

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/course-student-review/10/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setStudentReview(response.data.data);
                setStudentInformation(response.data.data.student_information);
                console.log('course student review = ', response.data.data)
            }
        });
        
    }, []);

    const StudentReviewHTML = (() => {
        if(isLoading === true){
            return <div className="flex xl:mt-5">
                        <div className="xl:w-1/12">
                            <img className="xl:h-16 xl:w-16 rounded-full" src={Teacher} alt="teacher" />
                        </div>
                        <div className="xl:w-11/12">
                            <div>
                                <h6 className=" text-sectionTitleColor text-xl font-semibold">Abraham Pigeon</h6>
                                <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1">30 June, 2022</h6>
                                <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-2">
                                    <ul className="flex sm:justify-center xl:justify-start">
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <li className="mb-4 mx-.75"><FaStar className="text-amber-400" /></li>
                                        <h6 className="xl:ml-2 xl:-mt-.75 xl:text-xs text-black font-medium">2 month ago</h6>
                                    </ul>
                                </h6>
                                <h6 className="text-breadcrumbs-text text-sm font-normal xl:tracking-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                <h6 className="text-breadcrumbs-text text-xs font-normal xl:mt-4">Was this review helpful?</h6>
                                <div className="flex xl:mt-2">
                                    <Link className="xl:p-2 xl:mx-2 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsUp className="text-maincolor xl:text-base" /></Link>
                                    <Link className="xl:p-2 xl:mx-2 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsDown className="text-maincolor xl:text-base" /></Link>
                                    <h6 className="text-maincolor xl:mx-2 xl:mt-1.5 text-sm font-medium">Report</h6>
                                </div>
                                <hr className="xl:mt-5 border" />
                            </div>
                        </div>
                    </div>
        }
        else if(isLoading === false){
            return (
                courseReview.map((course_learn_info, index) => (
                    <div className="flex w-full xl:mt-5">
                        <div className="xl:w-1/12">
                            <img className="xl:h-16 xl:w-16 rounded-full" src={ApiUrl.ImageBaseUrl+course_learn_info.student_information.image} alt="teacher" />
                        </div>
                        <div className="xl:w-11/12">
                            <div>
                                <h6 className=" text-sectionTitleColor text-xl font-semibold">{course_learn_info.student_information.username}</h6>
                                <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-1">{course_learn_info.date}</h6>
                                <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-2">
                                    <ul className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                        rating={course_learn_info.rating}
                                        starDimension="15px"
                                        starSpacing="4px"
                                        starRatedColor="rgb(251, 191, 36)"
                                    />
                                        <h6 className="xl:ml-2 xl:-mt-.75 xl:text-xs text-black font-medium">2 month ago</h6>
                                    </ul>
                                </h6>
                                <h6 className="text-breadcrumbs-text text-sm font-normal xl:tracking-normal">
                                    {course_learn_info.review_description}
                                </h6>
                                <h6 className="text-breadcrumbs-text text-xs font-normal xl:mt-4">Was this review helpful?</h6>
                                <div className="flex xl:mt-2">
                                    <Link className="xl:p-2 xl:mx-2 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsUp className="text-maincolor xl:text-base" /></Link>
                                    <Link className="xl:p-2 xl:mx-2 bg-white border border-opacity-80 border-maincolor rounded-full"><FaRegThumbsDown className="text-maincolor xl:text-base" /></Link>
                                    <h6 className="text-maincolor xl:mx-2 xl:mt-1.5 text-sm font-medium">Report</h6>
                                </div>
                                <hr className="xl:mt-5 border" />
                            </div>
                        </div>
                    </div>
                ))
            )
        }
    })()
    const ReviewSearch = () => {
        console.log('search value = ', searchValue);
        console.log('searchRating = ', searchRating);
        if(searchValue !== null){
            const review_search_data = {
                search_value:searchValue,
                rating: searchRating
            }
            axios.put(ApiUrl.BaseUrl + 'api/course/course-student-review-search/10/', review_search_data).then((response) => {
                if (response.data.error === false) {
                    setIsLoading(false);
                    setStudentReview(response.data.data);
                    setStudentInformation(response.data.data.student_information);
                    console.log('course student review = ', response.data.data)
                }
            });
        }
    }

    return (
        <Fragment>
            <div className="xl:ml-32 xl:mt-5 xl:mr-14">
                <h6 className="text-sectionTitleColor text-3xl font-semibold">Reviews</h6>
                <div className="flex flex-wrap xl:mr-12">
                    <div className="xl:w-8/12 xl:mt-6">
                        <div className="flex w-full">
                            <div className="input-group relative flex flex-wrap items-stretch w-full rounded-sm mb-4">
                                <input type="search" onChange={(e) => setSearchValue(e.target.value)} className="form-control relative flex-auto min-w-0 block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" placeholder="Search Reviews" aria-label="Search" aria-describedby="button-addon2" />
                                <button onClick={ReviewSearch} className="btn inline-block px-6 py-2.5 bg-maincolor border-none text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-black hover:shadow-lg focus:bg-maincolor  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-maincolor active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="xl:w-4/12 xl:mt-6 xl:pl-8">
                        <select onChange={(e) => setSearchRating(e.target.value)} value={searchRating} className="form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label=".form-select-lg example">
                            <option selected  className="hover:bg-maincolor">All Ratings</option>
                            <option className="text-maincolor hover:bg-maincolor" value="5">5 Star</option>
                            <option className="text-maincolor hover:bg-maincolor" value="4">4 Star</option>
                            <option className="text-maincolor hover:bg-maincolor" value="3">3 Star</option>
                            <option className="text-maincolor hover:bg-maincolor" value="2">2 Star</option>
                            <option className="text-maincolor hover:bg-maincolor" value="1">1 Star</option>
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