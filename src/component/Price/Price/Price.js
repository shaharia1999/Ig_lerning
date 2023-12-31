import React, { Fragment, useEffect, useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import PriceBall from "../../../asset/images/icon/price_ball.png";

function Price() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)


        setIsLoading(false)

    }, []);

    if (isLoading === true) {
        return (
            <section className="">
                <div className="container xl:pt-10 lg:pt-7">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="lg:w-full block">
                            <div className="lg:flex lg:flex-wrap g-0">

                                <div className="lg:w-full lg:rounded-lg flex items-center">
                                    <div className="lg:mt-12 w-full">

                                        <h6 className="text-about-analytics-subTitle dark:text-white text-center lg:font-semibold xl:text-4xl lg:text-3xl xl:mt-4">Meet our exciting pricing policy</h6>
                                        <h6 className="text-about-analytics-subTitle dark:text-gray-400 text-center font-medium xl:text-base lg:text-sm xl:mt-4 lg:mt-2 xl:mb-16 lg:mb-10">No contracts. No Surprise fees</h6>

                                        <div className="flex justify-center">
                                            <ul className="nav bg-gray-100 xl:w-80 justify-center rounded-md shadow-lg xl:pl-2 nav-pills flex md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
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
                                            <button className="bg-price justify-center items-center text-center flex text-xs text-white rounded-xl h-6 w-20 xl:pt-1 xl:-mt-10px xl:pl-3 xl:pr-2 xl:ml-36 lg:ml-28 xl:-mt-24 lg:-mt-24">SAVE 10%</button>
                                        </div>

                                        <div className="tab-content" id="pills-tabContent3">
                                            <div className="tab-pane fade show active xl:mt-8" id="pills-monthly" role="tabpanel" aria-labelledby="pills-home-tab3">

                                                <div className="flex flex-wrap sticky-top bg-white shadow-sm">
                                                    <div className="lg:w-3/12 xl:pt-5 lg:pt-6">
                                                        <div className="xl:p-6 lg:p-4">
                                                            <div className="flex flex-wrap bg-gray-50 dark:bg-dark-color2 rounded-md">
                                                                <div className="lg:w-4/12 w-full xl:mt-4">
                                                                    <img className="xl:w-24 xl:h-24 lg:w-20 lg:h-20" src={PriceBall} alt="" />
                                                                </div>

                                                                <div className="lg:w-8/12 w-full xl:mt-6 lg:mt-5 justify-center">
                                                                    <h6 className="text-maingray dark:text-white xl:text-2xl lg:text-xl font-semibold">Contact us!</h6>
                                                                    <h6 className="flex text-maincolor text-lg font-semibold">Get Started <FaArrowRight className="ml-2 mt-1" /></h6>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="xl:pl-6 lg:pl-4">
                                                            <div className="flex flex-wrap">
                                                                <h6 className="text-pagination dark:text-white 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold">Features</h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="lg:w-9/12 xl:mt-10 lg:mt-8 flex ">
                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Free</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$0 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Basic</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$29 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Pro</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$99 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Business</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$249 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap bg-price dark:bg-dark-color2 rounded-lg lg:mt-10 shadow-sm">
                                                    <div className="lg:w-3/12 lg:pt-5 lg:pl-8 lg:pb-5">
                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="lg:w-9/12 lg:mt-5 lg:mb-5 lg:pb-5 flex flex-wrap bg-white dark:bg-dark-color3 lg:rounded-lg lg:-ml-10">

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                <span className="lg:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                                <span className="lg:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade show xl:mt-8" id="pills-annual" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-3/12 xl:pt-5">
                                                        <div className="xl:p-6">
                                                            <div className="flex flex-wrap bg-gray-50 dark:bg-dark-color2 rounded-md">
                                                                <div className="xl:w-4/12 w-full xl:mt-4">
                                                                    <img className="w-24 h-24" src={PriceBall} alt="" />
                                                                </div>

                                                                <div className="xl:w-8/12 w-full xl:mt-6 justify-center">
                                                                    <h6 className="text-maingray dark:text-white text-2xl font-semibold">Contact us!</h6>
                                                                    <h6 className="flex text-maincolor text-lg font-semibold">Get Started
                                                                        <FaArrowRight className="ml-2 mt-1" />
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="xl:pl-6">
                                                            <div className="flex flex-wrap">
                                                                <h6 className="text-pagination dark:text-white text-4xl font-semibold">Features</h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="xl:w-9/12 xl:mt-10 flex ">
                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl font-medium">Free</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl xl:mt-3 font-bold">$0 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3">Select</button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl font-medium">Basic</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl xl:mt-3 font-bold">$29 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 font-normal text-sm rounded-md xl:mt-3 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4">Select</button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl font-medium">Pro</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl xl:mt-3 font-bold">$99 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 font-normal text-sm rounded-md xl:mt-3 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4">Select</button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="xl:1-4 xl:mb-4">
                                                                <h6 className="text-maingray dark:text-white xl:text-xl font-medium">Business</h6>
                                                                <h6 className="text-pagination dark:text-white xl:text-4xl xl:mt-3 font-bold">$249 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                <button className="bg-maincolor text-white xl:w-28 font-normal text-sm rounded-md xl:mt-3 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4">Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap bg-price dark:bg-dark-color2 rounded-lg xl:mt-10 shadow-sm">
                                                    <div className="xl:w-3/12 xl:pt-5 xl:pl-8 xl:pb-5">
                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full xl:mt-6 justify-center bg-price-deep dark:bg-dark-color5 xl:pt-3 border border-price dark:border-dark-color2 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full xl:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 xl:pt-3 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full xl:mt-6 justify-center bg-price-deep dark:bg-dark-color5 xl:pt-3 border border-price dark:border-dark-color2 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full xl:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 xl:pt-3 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full xl:mt-6 justify-center bg-price-deep dark:bg-dark-color5 xl:pt-3 border border-price dark:border-dark-color2 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full xl:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 xl:pt-3 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full xl:mt-6 justify-center bg-price-deep dark:bg-dark-color5 xl:pt-3 border border-price dark:border-dark-color2 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full xl:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 xl:pt-3 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full xl:mt-6 justify-center bg-price-deep dark:bg-dark-color5 xl:pt-3 border border-price dark:border-dark-color2 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap">
                                                            <div className="w-full xl:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 xl:pt-3 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap ">
                                                            <div className="w-full xl:mt-6 justify-center bg-price-deep dark:bg-dark-color5 xl:pt-3 border border-price dark:border-dark-color2 xl:pb-3 xl:pl-4 rounded-l-lg">
                                                                <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="xl:w-9/12 xl:mt-5 xl:mb-5 xl:pb-5 flex flex-wrap bg-white dark:bg-dark-color3 xl:rounded-lg xl:-ml-10">

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:bg-dark-color2 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:bg-dark-color2 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:bg-dark-color2 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:bg-dark-color2 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:bg-dark-color2 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap w-full">
                                                            <div className="w-full flex xl:mt-6 bg-gray-50 dark:bg-dark-color2 xl:pt-3 xl:pb-3 xl:ml-5 xl:mr-5 justify-around rounded-lg">
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                </span>
                                                                <span className="xl:-ml-16">
                                                                    <FaCheckCircle className="text-maincolor check-font-size" />
                                                                </span>
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
            </section>
        )
    }
    else if (isLoading === false) {
        return (
            <Fragment>
                <section className="">
                    <div className="container xl:pt-10 lg:pt-7">
                        <div className="flex justify-center items-center flex-wrap text-gray-800">
                            <div className="lg:w-full block">
                                <div className="lg:flex lg:flex-wrap g-0">

                                    <div className="lg:w-full lg:rounded-lg flex items-center">
                                        <div className="lg:mt-12 w-full">

                                            <h6 className="text-about-analytics-subTitle dark:text-white text-center lg:font-semibold xl:text-4xl lg:text-3xl xl:mt-4">Meet our exciting pricing policy</h6>
                                            <h6 className="text-about-analytics-subTitle dark:text-gray-400 text-center font-medium xl:text-base lg:text-sm xl:mt-4 lg:mt-2 xl:mb-16 lg:mb-10">No contracts. No Surprise fees</h6>

                                            <div className="flex justify-center">
                                                <ul className="nav bg-gray-100 xl:w-80 justify-center rounded-md shadow-lg xl:pl-2 nav-pills flex md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
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
                                                <button className="bg-price justify-center items-center text-center flex text-xs text-white rounded-xl h-6 w-20 xl:pt-1 xl:-mt-10px xl:pl-3 xl:pr-2 xl:ml-36 lg:ml-28 xl:-mt-24 lg:-mt-24">SAVE 10%</button>
                                            </div>

                                            <div className="tab-content" id="pills-tabContent3">
                                                <div className="tab-pane fade show active xl:mt-8" id="pills-monthly" role="tabpanel" aria-labelledby="pills-home-tab3">

                                                    <div className="flex flex-wrap sticky-top bg-white shadow-sm">
                                                        <div className="lg:w-3/12 xl:pt-5 lg:pt-6">
                                                            <div className="xl:p-6 lg:p-4">
                                                                <div className="flex flex-wrap bg-gray-50 dark:bg-dark-color2 rounded-md">
                                                                    <div className="lg:w-4/12 w-full xl:mt-4">
                                                                        <img className="xl:w-24 xl:h-24 lg:w-20 lg:h-20" src={PriceBall} alt="" />
                                                                    </div>

                                                                    <div className="lg:w-8/12 w-full xl:mt-6 lg:mt-5 justify-center">
                                                                        <h6 className="text-maingray dark:text-white xl:text-2xl lg:text-xl font-semibold">Contact us!</h6>
                                                                        <h6 className="flex text-maincolor text-lg font-semibold">Get Started <FaArrowRight className="ml-2 mt-1" /></h6>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="xl:pl-6 lg:pl-4">
                                                                <div className="flex flex-wrap">
                                                                    <h6 className="text-pagination dark:text-white 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold">Features</h6>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="lg:w-9/12 xl:mt-10 lg:mt-8 flex ">
                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Free</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$0 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Basic</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$29 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Pro</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$99 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Business</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$249 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap bg-price dark:bg-dark-color2 rounded-lg lg:mt-10 shadow-sm">
                                                        <div className="xl:w-3/12 lg:w-4/12 lg:pt-5 lg:pl-8 lg:pb-5">
                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="xl:w-9/12 lg:w-8/12 lg:mt-5 lg:mb-5 lg:pb-5 flex flex-wrap bg-white dark:bg-dark-color3 lg:rounded-lg lg:-ml-10">

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade show xl:mt-8" id="pills-annual" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                                    <div className="flex flex-wrap sticky-top bg-white shadow-sm">
                                                        <div className="lg:w-3/12 xl:pt-5 lg:pt-6">
                                                            <div className="xl:p-6 lg:p-4">
                                                                <div className="flex flex-wrap bg-gray-50 dark:bg-dark-color2 rounded-md">
                                                                    <div className="lg:w-4/12 w-full xl:mt-4">
                                                                        <img className="xl:w-24 xl:h-24 lg:w-20 lg:h-20" src={PriceBall} alt="" />
                                                                    </div>

                                                                    <div className="lg:w-8/12 w-full xl:mt-6 lg:mt-5 justify-center">
                                                                        <h6 className="text-maingray dark:text-white xl:text-2xl lg:text-xl font-semibold">Contact us!</h6>
                                                                        <h6 className="flex text-maincolor text-lg font-semibold">Get Started <FaArrowRight className="ml-2 mt-1" /></h6>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="xl:pl-6 lg:pl-4">
                                                                <div className="flex flex-wrap">
                                                                    <h6 className="text-pagination dark:text-white 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold">Features</h6>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="lg:w-9/12 xl:mt-10 lg:mt-8 flex ">
                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Free</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$0 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Basic</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$29 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Pro</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$99 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="xl:1-4 xl:mb-4 lg:mb-5">
                                                                    <h6 className="text-maingray dark:text-white xl:text-xl lg:text-lg font-medium">Business</h6>
                                                                    <h6 className="text-pagination dark:text-white xl:text-4xl lg:text-3xl xl:mt-3 lg:mt-2 font-bold">$249 <span className="text-maingray dark:text-gray-400 text-sm font-normal">/month</span></h6>
                                                                    <h6 className="text-maingray dark:text-gray-200 lg:text-sm xl:mt-3 lg:mt-2 font-light xl:pr-16">Not ready to commit? Try us out with ease.</h6>
                                                                    <button className="bg-maincolor text-white xl:w-28 lg:w-20 font-normal text-sm rounded-md xl:mt-3 lg:mt-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 lg:pt-1.5 lg:pb-1.5 lg:pl-3 lg:pr-3">Select</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap bg-price dark:bg-dark-color2 rounded-lg lg:mt-10 shadow-sm">
                                                        <div className="xl:w-3/12 lg:w-4/12 lg:pt-5 lg:pl-8 lg:pb-5">
                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap">
                                                                <div className="w-full lg:mt-6 justify-center bg-transparent border border-price-deep dark:border-dark-color6 lg:pt-3 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Unlimited students</h6>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full lg:mt-6 justify-center bg-price-deep dark:bg-dark-color5 lg:pt-3 border border-price dark:border-dark-color2 lg:pb-3 lg:pl-4 rounded-l-lg">
                                                                    <h6 className="text-white text-sm font-normal">Transaction fees on sales</h6>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="xl:w-9/12 lg:w-8/12 lg:mt-5 lg:mb-5 lg:pb-5 flex flex-wrap bg-white dark:bg-dark-color3 lg:rounded-lg lg:-ml-10">

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:border dark:border-dark-color2 dark:border-opacity-50 dark:bg-dark-color3 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" />
                                                                    </span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap w-full">
                                                                <div className="w-full flex lg:mt-6 bg-gray-50 dark:bg-dark-color2 lg:pt-3 lg:pb-3 lg:ml-5 lg:mr-5 justify-around rounded-lg">
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" /></span>
                                                                    <span className="lg:-ml-16">
                                                                        <BsFillXCircleFill className="text-gray-400 check-font-size" /></span>
                                                                    <span className="lg:-ml-16">
                                                                        <FaCheckCircle className="text-maincolor check-font-size" /></span>
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
                </section>
            </Fragment>
        );
    }

}
export default Price;