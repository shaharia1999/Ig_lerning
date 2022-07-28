import React, { Fragment, useState, useEffect } from 'react';
import Certificate from "../../../asset/images/icon/certificate.svg";
import Globe from "../../../asset/images/icon/globe.svg";
import Teacher from "../../../asset/images/icon/teacher.svg";

function HomeBannerMobile() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        setIsLoading(false);
    }, []);

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container-fluid xl:w-full xl:h-screen bg-gray-100 animate-pulse">
                </div>
            </Fragment>
        );
    }
    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="container-fluid w-full h-72 sm:h-80 bg-banner-bg">
                    <div className="w-full pl-10 pr-10 sm:pl-20 sm:pr-20">
                        <h2 className="text-sectionTitleColor font-semibold text-2xl sm:pt-12 pt-10">Course what you want,</h2>
                        <h2 className="text-sectionTitleColor font-semibold text-2xl mt-0">Where you want!</h2>
                        <div className="form sm:mt-5 mt-4">
                            <div className="flex bg-white w-full rounded-3xl sm:py-0.5 py-0.5">
                                <input type="text" className="form-control focus:border-none focus:ring-0 text-sm w-full pr-0 bg-transparent form-input border-none ml-4" placeholder="What do you want to learn today ?" />
                                <span className="rotate-90 -ml-3 mr-5">
                                    <hr className='w-7 border' />
                                </span>
                                <div className="bg-transparent flex flex-wrap z-50">
                                    <select className="bg-transparent text-gray-400 text-sm rounded-lg border-none focus:border-none focus:ring-0 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>All</option>
                                        <option value="1">Business</option>
                                        <option value="2">Programming</option>
                                        <option value="3">IA & Big Data</option>
                                        <option value="4">Art & Design</option>
                                        <option value="4">Digital Marketing</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="bg-maincolor mt-3 text-white text-sm w-full pt-2.5 pb-2.5 rounded-3xl">Search</button>
                    </div>
                </div>

                <div className="container xl:-mt-28 sm:-mt-20 -mt-16 stack flex sm:p-6">
                    <div className="flex flex-row rounded-xl border-none xl:p-20 p-5 pt-4 pb-4 w-full text-center">
                        <div className="w-1/3 bg-white dark:bg-dark-color2 shadow-md rounded-md p-2 mx-1">
                            <div className="image-center">
                                <img
                                    className="xl:h-24 xl:w-24 h-12 w-12 object-contain"
                                    src={Certificate} alt=""
                                />
                            </div>
                            <h6
                                className="xl:text-2xl text-xs text-sectionTitleColor font-medium xl:mt-1 dark:text-white">
                                100% Certificate Obtaining
                            </h6>
                        </div>

                        <div className="w-1/3 bg-white dark:bg-dark-color2 shadow-md rounded-md p-2 mx-1">
                            <div className="image-center">
                                <img
                                    className="xl:h-24 xl:w-24 h-12 w-12 object-contain"
                                    src={Globe}
                                    alt=""
                                />
                            </div>
                            <h6
                                className="xl:text-2xl text-xs text-sectionTitleColor font-medium xl:mt-1 dark:text-white">
                                Live every where in
                                the world
                            </h6>
                        </div>

                        <div className="w-1/3 bg-white dark:bg-dark-color2 shadow-md rounded-md p-2 mx-1">
                            <div className="image-center">
                                <img
                                    className="xl:h-24 xl:w-24 h-12 w-12 object-contain"
                                    src={Teacher} alt=""
                                />
                            </div>
                            <h6
                                className="xl:text-2xl text-xs text-sectionTitleColor font-medium xl:mt-1 dark:text-white">
                                Learn with the best
                                teachers
                            </h6>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }


}
export default HomeBannerMobile;