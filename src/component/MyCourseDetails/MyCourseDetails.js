import React, { Fragment } from "react";
import VideoImg from "../../asset/images/VideoImg/videoImg.png"
import { FiCheckCircle } from "react-icons/fi";
import StarRatings from 'react-star-ratings';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MyCourseDetails() {
    return (
        <Fragment>
            <div className="container">
                <div className="flex flex-wrap lg:mt-7">
                    <div className="lg:w-4/12">

                    </div>
                    <div className="lg:w-8/12">
                        <div className="">
                            <div className="w-full">
                                <img src={VideoImg} alt="" />
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
                                    <div className="lg:-mt-2 md:mt-5">
                                        <div className="lg:mt-0 xl:p-0 p-4">
                                            <h6 className="text-sectionTitleColor dark:text-white lg:text-xl text-xl font-semibold">Reviews</h6>
                                            <div className="w-full flex ">
                                                <div className="lg:w-8/12 xl:mt-6 mt-4 xl:mr-0 mr-2">
                                                    <div className="flex w-full">
                                                        <div className="input-group relative flex flex-wrap items-stretch w-full rounded-sm mb-4">
                                                            <input type="search"

                                                                className="form-control relative flex-auto min-w-0 block w-full xl:px-5 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" placeholder="Search Reviews" aria-label="Search" aria-describedby="button-addon2" />
                                                            <button
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
                                                <div className="flex w-full xl:mt-5 mt-5">
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

                                                <div className="flex w-full xl:mt-5 mt-5">
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


                                                <div className="flex w-full xl:mt-5 mt-5">
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