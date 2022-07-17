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

function MyCourseMobile() {
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
                <div className="bg-white p-2 rounded-lg shadow-lg my-1 px-1.5 w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-24 h-24 ml-1 rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="mt-0 text-base font-medium leading-tight text-cart-item-title">
                                        How to handle google map API with handle google map node.js
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-1 mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-1 mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center justify-start">
                                        <StarRatings
                                            rating={3.5}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex justify-end">
                                        <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap mt-8 pr-3 justify-end">
                                <button className="border flex border-maincolor rounded-2xl pl-3 pr-5 pt-1.5 pb-1.5 text-base text-maincolor font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (isLoading === false) {
            return (
                myEnrollCourseData.map((my_course_list_data) => (
                    <div className="my-1 bg-white dark:bg-dark-color3 p-2 rounded-lg shadow-lg px-1.5 w-full">
                        <div className="wrapper flex antialiased">
                            <div className="relative w-2/12">
                                <img className="w-12 h-12 ml-1 rounded-lg"
                                    src={CartCheckoutImg} alt="" />
                            </div>

                            <div className="w-7/12 ml-3">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="mt-0 text-sm font-medium leading-tight text-cart-item-title dark:text-white">
                                            {my_course_list_data?.course_info?.course_title}
                                        </h4>
                                    </div>
                                </div>


                                <div className="flex flex-wrap mt-1 mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center justify-start">
                                            <span className="text-gray-600 dark:text-gray-400 text-xs">77 Participients</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap mt-0 mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center justify-start">
                                            <StarRatings
                                                rating={my_course_list_data?.my_review?.rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 ml-3 mt-1.5">({my_course_list_data?.my_review?.rating | 0})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/12 pr-2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="flex justify-end">
                                            <div class="dropdown dropdown-end">
                                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                </label>
                                                <ul tabindex="0" className="mt-0 dark:bg-gray-400 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <Link className="dark:text-gray-100 font-medium"
                                                            onClick={() => ArchivedCourse(my_course_list_data?.course_enroll_id)}
                                                        >Archieve Course</Link></li>
                                                    <hr />
                                                    <li>
                                                        <Link className="dark:text-gray-100 font-medium"
                                                            onClick={() => LeaveRating(my_course_list_data?.my_review?.course_review_id)}
                                                        >Leave a Rating</Link>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        {(() => {
                                                            if (my_course_list_data?.course_favourite?.is_favourite === true) {
                                                                return <Link className="dark:text-gray-100 font-medium"
                                                                    onClick={() => RemoveCourseForFavourite(my_course_list_data?.course_favourite?.course_favourite_id)}
                                                                >
                                                                    Remove to Favourite</Link>
                                                            }
                                                            else {
                                                                return <Link className="dark:text-gray-100 font-medium"
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

                                <div className="flex w-full flex-wrap mt-1 pr-3 justify-end">
                                    <button
                                        className="border flex border-maincolor rounded-2xl pl-4 pr-8 pt-1.5 pb-1.5 text-xs text-maincolor font-semibold">
                                        <img className="h-4 w-4 mr-1" src={PlayIcon} alt="" />
                                        Start
                                    </button>
                                </div>
                                {/* <div className="flex w-full flex-wrap mt-8 pr-3 justify-end">
                                    <button 
                                        className="border flex border-maincolor rounded-2xl pl-3 pr-5 pt-1.5 pb-1.5 text-base text-maincolor font-semibold">
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
                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-24 h-24 ml-1 rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="mt-0 text-base font-medium leading-tight text-cart-item-title">
                                        How to handle google map API with handle google map node.js
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-1 mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-1 mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center justify-start">
                                        <StarRatings
                                            rating={3.5}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex justify-end">
                                        <span className="text-pagination text-2xl mr-2 font-semibold">$90</span>
                                        <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap mt-10 pr-3 justify-end">
                                <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                <img className="h-5 w-5 mx-1" src={IconlyLightHeart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (isWhishListLoading === false) {
            return (
                myWhishList.map((my_whishlist_data) => (
                    <div className="my-1 px-1 bg-white dark:bg-dark-color3 p-2 rounded-lg shadow-lg w-full">
                        <div className="wrapper flex antialiased">
                            <div className="relative w-2/12">
                                <img className="w-12 h-12 ml-1 rounded-lg"
                                    src={CartCheckoutImg} alt="" />
                            </div>

                            <div className="w-7/12 ml-3">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="mt-0 text-base font-medium leading-tight text-cart-item-title dark:text-white">
                                            {my_whishlist_data?.course_info?.course_title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-wrap mt-1 mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center justify-start">
                                            <span className="text-gray-600 dark:text-gray-400 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap mt-1 mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center justify-start">
                                            <StarRatings
                                                rating={my_whishlist_data?.course_info?.avg_rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 ml-3 mt-1.5">({my_whishlist_data?.course_info?.avg_rating})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/12 pr-2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="flex justify-end">
                                            <div class="dropdown dropdown-end">
                                                <span className="text-pagination dark:text-white text-2xl mr-2 font-semibold">${my_whishlist_data?.course_info?.course_price_info?.new_price}</span>
                                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
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

                                <div className="flex w-full flex-wrap mt-10 pr-3 justify-end">

                                    <img
                                        onClick={() => RemoveCourseForWhishList(my_whishlist_data.wishlist_id)}
                                        className="h-5 w-5 mx-1" src={Delete} alt="" />
                                    <img className="h-5 w-5 mx-1" src={IconlyLightHeart} alt="" />


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
                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-12 h-12 ml-1 rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="mt-0 text-base font-medium leading-tight text-cart-item-title">
                                        How to handle google map API with handle google map node.js
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-1 mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-1 mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center justify-start">
                                        <StarRatings
                                            rating={3.5}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex justify-end">
                                        <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap mt-8 pr-3 justify-end">
                                <button className="border flex border-maincolor rounded-2xl pl-3 pr-5 pt-1.5 pb-1.5 text-base text-maincolor font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (isArchivedLoading === false) {
            return (
                myArchivedCourseListData.map((archived_data) => (
                    <div className="my-1 px-1 bg-white dark:bg-dark-color3 p-2 rounded-lg shadow-lg w-full">
                        <div className="wrapper flex antialiased">
                            <div className="relative w-2/12">
                                <img className="w-12 h-12 ml-1 rounded-lg"
                                    src={CartCheckoutImg} alt="" />
                            </div>

                            <div className="w-7/12 ml-3">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <h4 className="mt-0 text-base font-medium leading-tight text-cart-item-title dark:text-white">
                                            {archived_data?.course_info?.course_title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-wrap mt-1 mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center justify-start">
                                            <span className="text-gray-600 dark:text-gray-400 text-xs">77 Participients</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap mt-1 mb-0">
                                    <div className="w-full">
                                        <div className="flex sm:justify-center justify-start">
                                            <StarRatings
                                                rating={archived_data?.my_review?.rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 ml-3 mt-1.5">({archived_data?.my_review?.rating | 0})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/12 pr-2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="flex justify-end">
                                            <div class="dropdown dropdown-end">
                                                <span className="text-pagination dark:text-white text-2xl mr-2 font-semibold">${archived_data?.course_info?.course_price_info?.new_price}</span>
                                                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
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

                                <div className="flex w-full flex-wrap mt-4 pr-3 justify-end">
                                    <button
                                        // onClick={() => RemoveCourseForArchivedList(archived_data.course_enroll_id)} 
                                        className="border flex border-maincolor rounded-2xl pl-3 pr-5 pt-1.5 pb-1.5 text-base text-maincolor font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Proceed</button>
                                </div>
                                {/* <div className="flex w-full flex-wrap mt-8 pr-3 justify-end">
                                    <button className="border flex border-maincolor rounded-2xl pl-3 pr-5 pt-1.5 pb-1.5 text-base text-maincolor font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Restart</button>
                                </div> */}
                                {/* <div className="flex w-full flex-wrap mt-8 pr-3 justify-end">
                                    <button className="border flex border-maincolor rounded-2xl pl-3 pr-5 pt-1.5 pb-1.5 text-base text-maincolor font-semibold"><img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />Proceed</button>
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
                    <div className="container pl-32 pr-32 pt-10">
                        <div className="flex justify-center flex-wrap text-gray-800">
                            <div className="w-full flex justify-center">


                                <div className="block w-7/12 bg-white rounded-lg shadow-lg ml-10 mr-10">
                                    <div className="flex flex-wrap g-0">

                                        <div className="w-full rounded-lg bg-white dark:bg-dark-color2 flex">
                                            <div className="mt-12 mb-7 w-full">
                                                <h6 className="text-2xl text-maingray font-semibold ml-8 text-center dark:text-white">My Course</h6>
                                                <h6 className="text-xs text-maingray font-normal ml-8 text-center dark:text-gray-400">All together towards the path of success</h6>

                                                <div className="flex flex-wrap w-full mt-4 pl-8 pr-8 justify-center">
                                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium text-lg leading-tight w-full md:w-auto px-12 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" role="tab" aria-controls="pills-home3"
                                                                aria-selected="true">
                                                                My Course
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" role="tab"
                                                                aria-controls="pills-profile3" aria-selected="false">
                                                                Whishlists <span className="bg-maincolor text-xs text-white rounded-full pl-1 pr-1">{TotalWhishList}</span>
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:ml-2 focus:outline-none focus:ring-0" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" role="tab"
                                                                aria-controls="pills-contact3" aria-selected="false">
                                                                Archived
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr className="border -mt-6" />

                                                <div className="tab-content flex-wrap flex" id="pills-tabContent3">
                                                    <div className="tab-pane w-full fade show active"
                                                        id="pills-home3" role="tabpanel"
                                                        aria-labelledby="pills-home-tab3">

                                                        <div className="flex flex-wrap w-full mt-4 pl-8 pr-8">
                                                            {
                                                                MyCourseListHTML
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-profile3" role="tabpanel"
                                                        aria-labelledby="pills-profile-tab3">
                                                        <div className="flex flex-wrap w-full mt-4 pl-8 pr-8">
                                                            {
                                                                myWhishListHtml
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-contact3" role="tabpanel"
                                                        aria-labelledby="pills-contact-tab3">


                                                        <div className="flex flex-wrap w-full mt-4 pl-8 pr-8">
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
                    <div className="container pl-4 pr-4 pt-5">
                        <div className="flex justify-center flex-wrap text-gray-800">
                            <div className="w-full flex justify-center">


                                <div className="block w-full">
                                    <div className="flex flex-wrap g-0">

                                        <div className="w-full rounded-lg bg-white dark:bg-dark-color2 flex">
                                            <div className="mt-5 mb-7 w-full">
                                                <h6 className="text-2xl text-maingray font-medium text-center dark:text-white">My Course</h6>
                                                <h6 className="text-xs text-maingray font-normal text-center dark:text-gray-400">All together towards the path of success</h6>

                                                <div className="flex flex-wrap w-full mt-4 justify-center">
                                                    <ul className="nav nav-pills flex flex-wrap list-none mb-4" id="pills-tab3" role="tablist">
                                                        <li className="nav-item w-1/3" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium text-sm leading-tight w-full md:w-auto px-10 py-2 my-2 focus:outline-none focus:ring-0 active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" role="tab" aria-controls="pills-home3"
                                                                aria-selected="true">
                                                                Course
                                                            </span>
                                                        </li>
                                                        <li className="nav-item w-1/3" role="presentation">
                                                            <span
                                                                type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer flex font-medium text-sm leading-tight rounded w-full md:w-auto px-5 py-2 my-2 focus:outline-none focus:ring-0" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" role="tab"
                                                                aria-controls="pills-profile3" aria-selected="false">
                                                                Whishlists <span className="bg-maincolor text-xs text-white rounded-full ml-1 pl-1 pr-1">{TotalWhishList}</span>
                                                            </span>
                                                        </li>
                                                        <li className="nav-item w-1/3" role="presentation">
                                                            <span type="button"
                                                                className="nav-link-course dark:text-white cursor-pointer block font-medium text-sm leading-tight rounded w-full md:w-auto px-8 py-2 my-2 focus:outline-none focus:ring-0" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" role="tab"
                                                                aria-controls="pills-contact3" aria-selected="false">
                                                                Archived
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <hr className="border -mt-6" />

                                                <div className="tab-content flex-wrap flex" id="pills-tabContent3">
                                                    <div className="tab-pane w-full fade show active"
                                                        id="pills-home3" role="tabpanel"
                                                        aria-labelledby="pills-home-tab3">

                                                        <div className="flex flex-wrap w-full mt-4">
                                                            {
                                                                MyCourseListHTML
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-profile3" role="tabpanel"
                                                        aria-labelledby="pills-profile-tab3">
                                                        <div className="flex flex-wrap w-full mt-4">
                                                            {
                                                                myWhishListHtml
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane w-full fade"
                                                        id="pills-contact3" role="tabpanel"
                                                        aria-labelledby="pills-contact-tab3">

                                                        <div className="flex flex-wrap w-full mt-4">
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
            </Fragment >
        );
    }
}
export default MyCourseMobile;