import React, { Fragment, useEffect, useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import PriceBall from "../../../asset/images/icon/price_ball.png";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";


function PriceMobile() {

    return (
        <Fragment>
            <div className="container pt-2">
                <div className="flex justify-center items-center flex-wrap text-gray-800">
                    <div className="w-full block">
                        <div className="flex flex-wrap g-0">

                            <div className="w-full rounded-lg flex items-center">
                                <div className="mt-6 w-full">

                                    <h6 className="text-about-analytics-subTitle dark:text-white text-center font-semibold text-xl mt-4">Meet our exciting pricing policy</h6>
                                    <h6 className="text-about-analytics-subTitle dark:text-gray-400 text-center font-medium text-base mb-12">No contracts. No Surprise fees</h6>

                                    <div className="flex justify-center">
                                        <ul className="nav bg-gray-100 w-80 justify-center rounded-md shadow-lg pl-2 nav-pills flex md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    type="button"
                                                    className="nav-linkc block active:bg-white focus:bg-white font-medium text-sm leading-tight capitalize rounded w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
                                                    id="pills-home-tab3"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-monthly"
                                                    role="tab"
                                                    aria-controls="pills-home3"
                                                    aria-selected="true">
                                                    Monthly Plan
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    type="button"
                                                    className="nav-linkc block active:bg-white focus:bg-white font-medium text-sm leading-tight capitalize rounded w-full md:w-auto px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
                                                    id="pills-profile-tab3"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-annual"
                                                    role="tab"
                                                    aria-controls="pills-profile3" aria-selected="false">
                                                    Annual Plan
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-center">
                                        <button className="bg-price justify-center items-center text-center flex text-xs text-white rounded-xl h-6 w-20 pt-1 -mt-10px pl-3 pr-2 ml-36 -mt-24">SAVE 10%</button>
                                    </div>

                                    <div className="tab-content" id="pills-tabContent3">
                                        <div className="tab-pane fade show active mt-8" id="pills-monthly" role="tabpanel" aria-labelledby="pills-home-tab3">

                                            <div className="flex flex-wrap bg-white">
                                                <div className="w-3/12 pt-5">
                                                    <div className="p-6">
                                                        <div className="flex flex-wrap bg-gray-50 dark:bg-dark-color2 rounded-md">
                                                            <div className="w-7/12 mt-6 justify-center">
                                                                <h6 className="text-maingray dark:text-white text-2xl font-semibold">Contact us!</h6>
                                                                <h6 className="flex text-maincolor text-lg font-semibold">Get Started <FaArrowRight className="ml-2 mt-1" /></h6>
                                                            </div>
                                                            <div className="w-5/12 mt-4">
                                                                <img className="" src={PriceBall} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pl-6">
                                                        <div className="flex flex-wrap">
                                                            <h6 className="text-pagination dark:text-white text-4xl font-semibold">Features</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap bg-price dark:bg-dark-color2 rounded-lg mt-10 shadow-sm m-3">
                                                <div className="w-10/12 pt-5 pl-4 pb-5">
                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="w-2/12 mt-5 mb-5 pb-5 flex flex-wrap bg-white dark:bg-dark-color3 rounded-lg -ml-4">

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade show mt-8" id="pills-annual" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                            <div className="flex flex-wrap">
                                                <div className="w-3/12 pt-5">
                                                    <div className="p-6">
                                                        <div className="flex flex-wrap bg-gray-50 dark:bg-dark-color2 rounded-md">
                                                            <div className="w-4/12 w-full mt-4">
                                                                <img className="w-24 h-24" src={PriceBall} alt="" />
                                                            </div>

                                                            <div className="w-8/12 w-full mt-6 justify-center">
                                                                <h6 className="text-maingray dark:text-white text-2xl font-semibold">Contact us!</h6>
                                                                <h6 className="flex text-maincolor text-lg font-semibold">Get Started <FaArrowRight className="ml-2 mt-1" /></h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pl-6">
                                                        <div className="flex flex-wrap">
                                                            <h6 className="text-pagination dark:text-white text-4xl font-semibold">Features</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-9/12 mt-10 flex ">
                                                    <div className="flex flex-wrap">
                                                        <div className="1-4 mb-4">
                                                            <h6 className="text-maingray dark:text-white text-xl font-medium">Free</h6>
                                                            <h6 className="text-pagination dark:text-white text-4xl mt-3 font-bold">$0 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                            <h6 className="text-maingray dark:text-gray-200 text-sm mt-3 font-light pr-16">Not ready to commit? Try us out with ease.</h6>
                                                            <button className="bg-maincolor text-white w-28 font-normal text-sm rounded-md mt-3 pt-2 pb-2 pl-4 pr-4">Select</button>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="1-4 mb-4">
                                                            <h6 className="text-maingray dark:text-white text-xl font-medium">Basic</h6>
                                                            <h6 className="text-pagination dark:text-white text-4xl mt-3 font-bold">$29 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                            <h6 className="text-maingray dark:text-gray-200 text-sm mt-3 font-light pr-16">Not ready to commit? Try us out with ease.</h6>
                                                            <button className="bg-maincolor text-white w-28 font-normal text-sm rounded-md mt-3 pt-2 pb-2 pl-4 pr-4">Select</button>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="1-4 mb-4">
                                                            <h6 className="text-maingray dark:text-white text-xl font-medium">Pro</h6>
                                                            <h6 className="text-pagination dark:text-white text-4xl mt-3 font-bold">$99 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                            <h6 className="text-maingray dark:text-gray-200 text-sm mt-3 font-light pr-16">Not ready to commit? Try us out with ease.</h6>
                                                            <button className="bg-maincolor text-white w-28 font-normal text-sm rounded-md mt-3 pt-2 pb-2 pl-4 pr-4">Select</button>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="1-4 mb-4">
                                                            <h6 className="text-maingray dark:text-white text-xl font-medium">Business</h6>
                                                            <h6 className="text-pagination dark:text-white text-4xl mt-3 font-bold">$249 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                            <h6 className="text-maingray dark:text-gray-200 text-sm mt-3 font-light pr-16">Not ready to commit? Try us out with ease.</h6>
                                                            <button className="bg-maincolor text-white w-28 font-normal text-sm rounded-md mt-3 pt-2 pb-2 pl-4 pr-4">Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap bg-price dark:bg-dark-color2 rounded-lg mt-10 shadow-sm">
                                                <div className="w-3/12 pt-5 pl-8 pb-5">
                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="w-full mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 pt-3 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap ">
                                                        <div className="w-full mt-6 justify-center bg-price-deep dark:bg-dark-color5 pt-3 border border-price dark:border-dark-color2 pb-3 pl-4 rounded-l-lg">
                                                            <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-9/12 mt-5 mb-5 pb-5 flex flex-wrap bg-white dark:bg-dark-color3 rounded-lg -ml-10">

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap w-full">
                                                        <div className="w-full flex mt-6 bg-gray-50 dark:bg-dark-color2 pt-3 pb-3 ml-5 mr-5 justify-around rounded-lg">
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            <span className="-ml-16"><BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                            <span className="-ml-16"><FaCheckCircle className="text-maincolor check-font-size" /></span>
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
                </div>
            </div>
        </Fragment >
    )

}
export default PriceMobile;