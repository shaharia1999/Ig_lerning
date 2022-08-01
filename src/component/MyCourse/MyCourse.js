import React, { Fragment, useEffect, useState } from "react";
import "../../asset/css/login.css";
import CartCheckoutImg from '../../asset/images/checkout/course-cart-img.png';
import Delete from '../../asset/images/checkout/Delete.svg';
import StarRatings from 'react-star-ratings';
import { HiDotsVertical } from "react-icons/hi";
import PlayIcon from '../../asset/images/icon/play-icon.png';
import IconlyLightHeart from '../../asset/images/icon/Iconly-Light-Heart.svg';
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";
import { Link } from "react-router-dom";

function MyCourse() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    var user_data = JSON.parse(localStorage.getItem('user_data'))
    console.log('user data = ', user_data);
    console.log('user data id = ', user_data['id']);

    const [isLoading, setIsLoading] = useState(false);
    const [isWhishListLoading, setIsWhishListLoading] = useState(false);
    const [isArchivedLoading, setIsArchivedLoading] = useState(false);
    const [myEnrollCourseData, setMyEnrollCourseData] = useState([]);
    const [myWhishList, setMyWhishListData] = useState([]);
    const [myArchivedCourseListData, setMyArchivedCourseListData] = useState([]);
    const [TotalWhishList, setTotalWhishList] = useState();

    const MyCourseDataLoad = () => {
        setIsLoading(true)
        setIsWhishListLoading(true)
        setIsArchivedLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/student-course-enroll-list/${user_data['id']}/`).then((response) => {
            if (response.data.error === false) {
                console.log('success');
                setMyEnrollCourseData(response.data.data)
                setIsLoading(false)
            }
        })
        axios.get(`${ApiUrl.BaseUrl}api/course/student-course-wishlist/${user_data['id']}/`).then((response) => {
            if (response.data.error === false) {
                console.log('success');
                setMyWhishListData(response.data.data)
                setTotalWhishList(response.data.total_whishlist)
                setIsWhishListLoading(false)
            }
        })
        axios.get(`${ApiUrl.BaseUrl}api/course/student-course-archive-list/${user_data['id']}/`).then((response) => {
            if (response.data.error === false) {
                console.log('success');
                setMyArchivedCourseListData(response.data.data)
                setIsArchivedLoading(false)
            }
        })
    }

    useEffect(() => {
        MyCourseDataLoad();
    }, [])

    const ArchivedCourse = (course_enroll_id) => {
        axios.get(`${ApiUrl.BaseUrl}api/course/student-course-archive-create/${course_enroll_id}`).then((response) => {
            if (response.data.error === false) {
                MyCourseDataLoad()
            }
        })
    }
    const CourseFavouriteAdded = (course_id) => {
        let favourite_data = {
            course_id: course_id,
            student_id: user_data['id']
        }
        axios.post(`${ApiUrl.BaseUrl}api/course/add-course-favourite/`, favourite_data).then((response) => {
            if (response.data.error === false) {
                MyCourseDataLoad();
            }
        })
    }

    const RemoveCourseForFavourite = (course_favourite_id) => {
        console.log(course_favourite_id);
        axios.get(`${ApiUrl.BaseUrl}api/course/remove-course-favourite/${course_favourite_id}`).then((response) => {
            if (response.data.error === false) {
                MyCourseDataLoad();
            }
        })
    }

    const LeaveRating = (course_review_id) => {
        console.log(course_review_id);
        axios.get(`${ApiUrl.BaseUrl}api/course/leave-a-rating/${course_review_id}`).then((response) => {
            if (response.data.error === false) {
                MyCourseDataLoad();
            }
        })
    }

    const RemoveCourseForWhishList = (wishlist_id) => {
        console.log(wishlist_id);
        axios.get(`${ApiUrl.BaseUrl}api/course/student-course-wishlist-remove/${wishlist_id}`).then((response) => {
            if (response.data.error === false) {
                MyCourseDataLoad();
            }
        })
    }

    const RemoveCourseForArchivedList = (course_enroll_id) => {
        axios.get(`${ApiUrl.BaseUrl}api/course/student-course-archive-remove/${course_enroll_id}`).then((response) => {
            if (response.data.error === false) {
                MyCourseDataLoad();
            }
        })
    }

    const MyCourseListHTML = (() => {
        if (isLoading === true) {
            return (
                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-24 h-24 xl:ml-1 xl:rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 xl:ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="xl:mt-0 xl:text-base xl:font-medium leading-tight text-cart-item-title">
                                        How to handle google map API with handle google map node.js
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={3.5}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">(3.5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 xl:pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex xl:justify-end">
                                        <HiDotsVertical className="mt-1 xl:font-semibold xl:text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap xl:mt-8 xl:pr-3 xl:justify-end">
                                <button className="xl:border flex border-maincolor xl:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base xl:text-maincolor xl:font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (isLoading === false) {
            return (
                myEnrollCourseData.map((my_course_list_data) => (
                    <div className="my-1 px-1 bg-white dark:bg-dark-color3 p-2 rounded-lg shadow-lg lg:my-1 lg:px-1.5 md:w-full">
                        <div className="wrapper flex antialiased">
                            <div className="relative w-2/12">
                                <img className="xl:w-24 xl:h-24 md:h-20 md:w-20 lg:ml-1 md:ml-1 lg:rounded-lg md:rounded-md"
                                    src={CartCheckoutImg} alt="" />
                            </div>

                            <div className="w-7/12 xl:ml-3">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="lg:mt-0 xl:text-base md:text-sm md:font-medium leading-tight text-cart-item-title dark:text-white">
                                            {my_course_list_data?.course_info?.course_title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-wrap md:mt-1 lg:mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center md:justify-start">
                                            <span className="text-gray-600 dark:text-gray-400 text-xs">77 Participients</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:mt-0 lg:mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center md:justify-start">
                                            <StarRatings
                                                rating={my_course_list_data?.my_review?.rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 lg:ml-3 lg:mt-1.5 md:mt-1.5 md:ml-2">({my_course_list_data?.my_review?.rating | 0})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/12 lg:pr-2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="flex md:justify-end">
                                            <div class="dropdown dropdown-end">
                                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                                    <HiDotsVertical className="xl:mt-1 lg:-mt-2 lg:font-semibold lg:text-xl text-gray-400" />
                                                </label>
                                                <ul tabindex="0" className="mt-0 dark:bg-gray-400 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <Link className="dark:text-gray-100 lg:font-medium"
                                                            onClick={() => ArchivedCourse(my_course_list_data?.course_enroll_id)}
                                                        >Archieve Course</Link></li>
                                                    <hr />
                                                    <li>
                                                        <Link className="dark:text-gray-100 lg:font-medium"
                                                            onClick={() => LeaveRating(my_course_list_data?.my_review?.course_review_id)}
                                                        >Leave a Rating</Link>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        {(() => {
                                                            if (my_course_list_data?.course_favourite?.is_favourite === true) {
                                                                return <Link className="dark:text-gray-100 lg:font-medium"
                                                                    onClick={() => RemoveCourseForFavourite(my_course_list_data?.course_favourite?.course_favourite_id)}
                                                                >
                                                                    Remove to Favourite</Link>
                                                            }
                                                            else {
                                                                return <Link className="dark:text-gray-100 lg:font-medium"
                                                                    onClick={() => CourseFavouriteAdded(my_course_list_data?.course_info?.course_id)}
                                                                >
                                                                    Add to Favourite</Link>
                                                            }
                                                        })()}
                                                    </li>
                                                    <hr />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap xl:mt-4 lg:mt-1 xl:pr-3 lg:pr-4 md:pr-5 md:justify-end">
                                    <button
                                        className="md:border flex border-maincolor md:rounded-2xl lg:pl-3 lg:pr-5 lg:pt-1.5 lg:pb-1.5 md:px-3 md:py-1 xl:text-base md:text-sm lg:text-maincolor xl:font-semibold lg:font-medium">
                                        <img className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-4 w-4 mr-2" src={PlayIcon} alt="" />
                                        Start
                                    </button>
                                </div>
                                {/* <div className="flex w-full flex-wrap xl:mt-8 xl:pr-3 xl:justify-end">
                                    <button 
                                        className="xl:border flex border-maincolor xl:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base xl:text-maincolor xl:font-semibold">
                                        <img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />
                                        Proceed
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))
            )
        }

    })()

    const myWhishListHtml = (() => {
        if (isWhishListLoading === true) {
            return (
                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-24 h-24 xl:ml-1 xl:rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 xl:ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="xl:mt-0 xl:text-base xl:font-medium leading-tight text-cart-item-title">
                                        How to handle google map API with handle google map node.js
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={3.5}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">(3.5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 xl:pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex xl:justify-end">
                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                        <HiDotsVertical className="mt-1 xl:font-semibold xl:text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap xl:mt-10 xl:pr-3 xl:justify-end">
                                <img className="xl:h-5 xl:w-5 xl:mx-1" src={Delete} alt="" />
                                <img className="xl:h-5 xl:w-5 xl:mx-1" src={IconlyLightHeart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (isWhishListLoading === false) {
            return (
                myWhishList.map((my_whishlist_data) => (
                    <div className="my-1 px-1 bg-white dark:bg-dark-color3 p-2 rounded-lg shadow-lg lg:my-1 lg:px-1.5 md:w-full">
                        <div className="wrapper flex antialiased">
                            <div className="relative w-2/12">
                                <img className="xl:w-24 xl:h-24 md:h-20 md:w-20 lg:ml-1 md:ml-1 lg:rounded-lg md:rounded-md"
                                    src={CartCheckoutImg} alt="" />
                            </div>

                            <div className="w-7/12 xl:ml-3">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="lg:mt-0 xl:text-base md:text-sm md:font-medium leading-tight text-cart-item-title dark:text-white">
                                            {my_whishlist_data?.course_info?.course_title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-wrap md:mt-1 lg:mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center md:justify-start">
                                            <span className="text-gray-600 dark:text-gray-400 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center md:justify-start">
                                            <StarRatings
                                                rating={my_whishlist_data?.course_info?.avg_rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 lg:ml-3 lg:mt-1.5 md:mt-1.5 md:ml-2">({my_whishlist_data?.course_info?.avg_rating})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/12 xl:pr-2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="flex md:justify-end">
                                            <div class="dropdown dropdown-end">
                                                <span className="text-pagination dark:text-white xl:text-2xl lg:text-xl md:text-lg xl:mr-2 md:font-semibold">${my_whishlist_data?.course_info?.course_price_info?.new_price}</span>
                                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                                    <HiDotsVertical className="mt-1 xl:font-semibold xl:text-xl text-gray-400" />
                                                </label>
                                                <ul tabindex="0" className="mt-0 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                    <li><Link>Archieve Course</Link></li>
                                                    <hr />
                                                    <li><Link>Leave a Rating</Link></li>
                                                    <hr />
                                                    <li><Link>Add to Favourite</Link></li>
                                                    <hr />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap xl:mt-10 lg:mt-5 md:mt-4 xl:pr-3 lg:pr-5 md:pr-4 md:justify-end">

                                    <img
                                        onClick={() => RemoveCourseForWhishList(my_whishlist_data.wishlist_id)}
                                        className="xl:h-5 xl:w-5 md:h-4 md:w-4 md:mx-1" src={Delete} alt="" />
                                    <img className="xl:h-5 xl:w-5 md:h-4 md:w-4 md:mx-1" src={IconlyLightHeart} alt="" />


                                </div>
                            </div>
                        </div>
                    </div>

                ))
            )
        }
    })()

    const myArchivedCourseListtHtml = (() => {
        if (isArchivedLoading === true) {
            return (
                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-24 h-24 xl:ml-1 xl:rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 xl:ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="xl:mt-0 xl:text-base xl:font-medium leading-tight text-cart-item-title">
                                        How to handle google map API with handle google map node.js
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={3.5}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">(3.5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 xl:pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex xl:justify-end">
                                        <HiDotsVertical className="mt-1 xl:font-semibold xl:text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap xl:mt-8 xl:pr-3 xl:justify-end">
                                <button className="xl:border flex border-maincolor xl:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base xl:text-maincolor xl:font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (isArchivedLoading === false) {
            return (
                myArchivedCourseListData.map((archived_data) => (
                    <div className="my-1 px-1 bg-white dark:bg-dark-color3 p-2 rounded-lg shadow-lg lg:my-1 lg:px-1.5 md:w-full">
                        <div className="wrapper flex antialiased">
                            <div className="relative w-2/12">
                                <img className="xl:w-24 xl:h-24 md:h-20 md:w-20 lg:ml-1 md:ml-1 lg:rounded-lg md:rounded-md"
                                    src={CartCheckoutImg} alt="" />
                            </div>

                            <div className="w-7/12 xl:ml-3">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="lg:mt-0 xl:text-base md:text-sm md:font-medium leading-tight text-cart-item-title dark:text-white">
                                            {archived_data?.course_info?.course_title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-wrap md:mt-1 lg:mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center md:justify-start">
                                            <span className="text-gray-600 dark:text-gray-400 text-xs">77 Participients</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center md:justify-start">
                                            <StarRatings
                                                rating={archived_data?.my_review?.rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 lg:ml-3 lg:mt-1.5 md:mt-1.5 md:ml-2">({archived_data?.my_review?.rating | 0})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/12 xl:pr-2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="flex md:justify-end">
                                            <div class="dropdown dropdown-end">
                                                <span className="text-pagination dark:text-white xl:text-2xl lg:text-xl md:text-xl xl:mr-2 md:font-semibold">${archived_data?.course_info?.course_price_info?.new_price}</span>
                                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                                    <HiDotsVertical className="mt-1 lg:font-semibold lg:text-xl text-gray-400" />
                                                </label>
                                                <ul tabindex="0" className="mt-0 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <Link
                                                            onClick={() => RemoveCourseForArchivedList(archived_data?.course_enroll_id)}
                                                        >Remove Archieve Course</Link></li>
                                                    <hr />
                                                    <li><Link>Leave a Rating</Link></li>
                                                    <hr />
                                                    <li>
                                                        {(() => {
                                                            if (archived_data?.course_favourite?.is_favourite === true) {
                                                                return <Link
                                                                    onClick={() => RemoveCourseForFavourite(archived_data?.course_favourite?.course_favourite_id)}
                                                                >
                                                                    Remove to Favourite</Link>
                                                            }
                                                            else {
                                                                return <Link
                                                                    onClick={() => CourseFavouriteAdded(archived_data?.course_info?.course_id)}
                                                                >
                                                                    Add to Favourite</Link>
                                                            }
                                                        })()}
                                                    </li>
                                                    <hr />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap xl:mt-4 lg:mt-3 xl:pr-3 lg:pr-4 md:pr-4 md:justify-end">
                                    <button
                                        // onClick={() => RemoveCourseForArchivedList(archived_data.course_enroll_id)} 
                                        className="md:border flex border-maincolor md:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base md:pl-3 md:pr-3 md:py-1 md:text-sm xl:text-maincolor xl:font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Proceed</button>
                                </div>
                                {/* <div className="flex w-full flex-wrap xl:mt-8 xl:pr-3 xl:justify-end">
                                    <button className="xl:border flex border-maincolor xl:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base xl:text-maincolor xl:font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Restart</button>
                                </div> */}
                                {/* <div className="flex w-full flex-wrap xl:mt-8 xl:pr-3 xl:justify-end">
                                    <button className="xl:border flex border-maincolor xl:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base xl:text-maincolor xl:font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Proceed</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))
            )
        }
    })()




    if (userTheme === "dark") {
        return (
            <Fragment>
                <section className="md:h-screen bg-checkout-dark">
                    <div className="container xl:pl-32 xl:pr-32 xl:pt-10">
                        <div className="flex justify-center flex-wrap text-gray-800">
                            <div className="xl:w-full flex justify-center">


                                <div className="block xl:w-7/12 bg-white xl:rounded-lg shadow-lg xl:ml-10 xl:mr-10">
                                    <div className="xl:flex xl:flex-wrap g-0">

                                        <div className="xl:w-full xl:rounded-lg bg-white dark:bg-dark-color2 flex">
                                            <div className="xl:mt-12 xl:mb-7 w-full">
                                                <h6 className="xl:text-2xl text-maingray xl:font-semibold xl:ml-8 text-center dark:text-white">My Course</h6>
                                                <h6 className="xl:text-xs text-maingray xl:font-normal xl:ml-8 text-center dark:text-gray-400">All together towards the path of success</h6>

                                                <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8 justify-center">
                                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight w-full md:w-auto px-12 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" role="tab" aria-controls="pills-home3"
                                                                aria-selected="true">
                                                                My Course
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" role="tab"
                                                                aria-controls="pills-profile3" aria-selected="false">
                                                                Whishlists <span className="bg-maincolor text-xs text-white rounded-full pl-1 pr-1">{TotalWhishList}</span>
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:ml-2 focus:outline-none focus:ring-0" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" role="tab"
                                                                aria-controls="pills-contact3" aria-selected="false">
                                                                Archived
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr className="border xl:-mt-6" />

                                                <div className="tab-content flex-wrap flex" id="pills-tabContent3">
                                                    <div className="tab-pane w-full fade show active"
                                                        id="pills-home3" role="tabpanel"
                                                        aria-labelledby="pills-home-tab3">

                                                        <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8">
                                                            {
                                                                MyCourseListHTML
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-profile3" role="tabpanel"
                                                        aria-labelledby="pills-profile-tab3">
                                                        <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8">
                                                            {
                                                                myWhishListHtml
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-contact3" role="tabpanel"
                                                        aria-labelledby="pills-contact-tab3">


                                                        <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8">
                                                            {
                                                                myArchivedCourseListtHtml
                                                            }
                                                        </div>


                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Fragment >
        );
    }
    else if (userTheme === "light") {
        return (
            <Fragment>
                <section className="md:h-screen bg-checkout">
                    <div className="container 2xl:pl-32 2xl:pr-32 xl:pl-28 xl:pr-28 lg:pl-20 lg:pr-20 md:pl-16 md:pr-16 xl:pt-10 lg:pt-10 md:pt-10">
                        <div className="flex justify-center flex-wrap text-gray-800">
                            <div className="xl:w-full flex justify-center">


                                <div className="block 2xl:w-7/12 xl:w-8/12 lg:w-10/12 bg-white dark:bg-dark-color2 md:rounded-lg shadow-lg xl:ml-10 xl:mr-10">
                                    <div className="xl:flex xl:flex-wrap g-0">

                                        <div className="xl:w-full md:rounded-lg bg-white dark:bg-dark-color2 flex">
                                            <div className="xl:mt-12 lg:mt-8 md:mt-8 xl:mb-7 w-full">
                                                <h6 className="lg:text-2xl md:text-xl text-maingray md:font-semibold xl:ml-8 text-center dark:text-white">My Course</h6>
                                                <h6 className="md:text-xs text-maingray md:font-normal xl:ml-8 text-center dark:text-gray-400">All together towards the path of success</h6>

                                                <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8 md:mt-5 justify-center">
                                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight w-full md:w-auto px-12 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" role="tab" aria-controls="pills-home3"
                                                                aria-selected="true">
                                                                My Course
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" role="tab"
                                                                aria-controls="pills-profile3" aria-selected="false">
                                                                Whishlists <span className="bg-maincolor text-xs text-white rounded-full pl-1 pr-1">{TotalWhishList}</span>
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:ml-2 focus:outline-none focus:ring-0" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" role="tab"
                                                                aria-controls="pills-contact3" aria-selected="false">
                                                                Archived
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <hr className="border xl:-mt-6 lg:-mt-6 md:-mt-6" />

                                                <div className="tab-content flex-wrap xl:mb-0 lg:mb-5 md:mb-6 flex" id="pills-tabContent3">
                                                    <div className="tab-pane w-full fade show active"
                                                        id="pills-home3" role="tabpanel"
                                                        aria-labelledby="pills-home-tab3">

                                                        <div className="flex flex-wrap w-full lg:mt-4 md:mt-5 xl:pl-8 xl:pr-8 lg:px-7 md:px-6">
                                                            {
                                                                MyCourseListHTML
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-profile3" role="tabpanel"
                                                        aria-labelledby="pills-profile-tab3">
                                                        <div className="flex flex-wrap w-full lg:mt-4 md:mt-5 xl:pl-8 xl:pr-8 lg:px-7 md:px-6">
                                                            {
                                                                myWhishListHtml
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-contact3" role="tabpanel"
                                                        aria-labelledby="pills-contact-tab3">


                                                        <div className="flex flex-wrap w-full lg:mt-4 md:mt-5 xl:pl-8 xl:pr-8 lg:px-7 md:px-6">
                                                            {
                                                                myArchivedCourseListtHtml
                                                            }
                                                        </div>


                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Fragment >
        );
    }
}
export default MyCourse;