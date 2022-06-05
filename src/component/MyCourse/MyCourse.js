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

function MyCourse() {

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

    useEffect(() => {
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
    }, [])

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
                                            {my_course_list_data?.course_info?.course_title}
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
                                                rating={my_course_list_data?.course_info?.avg_rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">({my_course_list_data?.course_info?.avg_rating})</span>
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
                                    <button 
                                        className="xl:border flex border-maincolor xl:rounded-2xl xl:pl-3 xl:pr-5 xl:pt-1.5 xl:pb-1.5 xl:text-base xl:text-maincolor xl:font-semibold">
                                        <img className="h-5 w-5 mr-2" src={PlayIcon} alt="" />
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
                                            {my_whishlist_data?.course_info?.course_title}
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
                                                rating={my_whishlist_data?.course_info?.avg_rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">({my_whishlist_data?.course_info?.avg_rating})</span>
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

                ))
            )
        }
    })()

    const myArchivedCourseListtHtml = (() => {
        if (isArchivedLoading === true) {
           return(
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
                                        {archived_data?.course_info?.course_title}
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
                                                rating={archived_data?.course_info?.avg_rating}
                                                starDimension="16px"
                                                starSpacing="3px"
                                                starRatedColor="rgb(251, 191, 36)"
                                            />
                                            <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">({archived_data?.course_info?.avg_rating})</span>
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
    return (
        <Fragment>
            <section className="md:h-screen bg-checkout">
                <div className="container xl:pl-32 xl:pr-32 xl:pt-10">
                    <div className="flex justify-center flex-wrap text-gray-800">
                        <div className="xl:w-full flex justify-center">


                            <div className="block xl:w-7/12 bg-white xl:rounded-lg shadow-lg xl:ml-10 xl:mr-10">
                                <div className="xl:flex xl:flex-wrap g-0">

                                    <div className="xl:w-full xl:rounded-lg bg-white flex">
                                        <div className="xl:mt-12 xl:mb-7 w-full">
                                            <h6 className="xl:text-2xl text-maingray xl:font-semibold xl:ml-8 text-center">My Course</h6>
                                            <h6 className="xl:text-xs text-maingray xl:font-normal xl:ml-8 text-center">All together towards the path of success</h6>

                                            <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8 justify-center">
                                                <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <span
                                                            type="button"
                                                            className="nav-link-course cursor-pointer block font-medium xl:text-lg leading-tight w-full md:w-auto px-12 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-home3" role="tab" aria-controls="pills-home3"
                                                            aria-selected="true">
                                                            My Course
                                                        </span>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <span
                                                            type="button"
                                                            className="nav-link-course cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" role="tab"
                                                            aria-controls="pills-profile3" aria-selected="false">
                                                            Whishlists <span className="bg-maincolor text-xs text-white rounded-full pl-1 pr-1">{TotalWhishList}</span>
                                                        </span>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <span type="button"
                                                            className="nav-link-course cursor-pointer block font-medium xl:text-lg leading-tight rounded w-full md:w-auto px-12 py-3 my-2 md:ml-2 focus:outline-none focus:ring-0" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" role="tab"
                                                            aria-controls="pills-contact3" aria-selected="false">
                                                            Archived
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr className="border xl:-mt-6" />

                                            <div className="tab-content justify-center flex" id="pills-tabContent3">
                                                <div className="tab-pane fade show active"
                                                    id="pills-home3" role="tabpanel"
                                                    aria-labelledby="pills-home-tab3">

                                                    <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8">
                                                        {
                                                            MyCourseListHTML
                                                        }
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade"
                                                    id="pills-profile3" role="tabpanel"
                                                    aria-labelledby="pills-profile-tab3">
                                                    <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8">
                                                        {
                                                            myWhishListHtml
                                                        }
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade"
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
export default MyCourse;