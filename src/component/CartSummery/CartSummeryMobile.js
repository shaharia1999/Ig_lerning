import React, { Fragment } from "react";
import "../../asset/css/login.css";
import { FaArrowRight } from "react-icons/fa";
import CartCheckoutImg from '../../asset/images/checkout/course-cart-img.png';
import Heart from '../../asset/images/checkout/Heart.svg';
import Delete from '../../asset/images/checkout/Delete.svg';
import StarRatings from 'react-star-ratings';
import { HiDotsVertical } from "react-icons/hi";

function CartSummeryMobile() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    return (
        <Fragment>
            <div className="container pt-1">
                <div className="flex justify-center flex-wrap text-gray-800">
                    <div className="w-full flex">


                        <div className="block w-full">
                            <div className="flex flex-wrap g-0">

                                <div className="w-full rounded-lg bg-white flex">
                                    <div className="mt-6 w-full">
                                        <h6 className="text-xl text-maingray font-semibold ml-8">Cart items</h6>
                                        <h6 className="text-xs text-maingray font-normal ml-8">Complete your purchase by providing payment details</h6>

                                        <div className="flex flex-wrap w-full mt-4 pl-3 pr-3">

                                            <div className="my-1 px-1.5 bg-white p-2 rounded-lg shadow-lg w-full">
                                                <div className="wrapper flex antialiased">
                                                    <div className="relative w-2/12">
                                                        <img className="w-12 h-12 ml-1 rounded-lg"
                                                            src={CartCheckoutImg} alt="" />
                                                    </div>

                                                    <div className="w-7/12 ml-3">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <h4 className="mt-0 -ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                    How to handle google map API with node.js
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12 pr-2">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="flex justify-end">
                                                                    <span className="text-pagination text-xl mr-2 font-semibold">$90</span>
                                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wrapper flex antialiased">
                                                    <div className="w-9/12 ml-1">
                                                        <div className="flex flex-wrap mt-1 mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="14px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12">
                                                        <div className="flex w-full flex-wrap mt-5 pr-3 justify-end">
                                                            <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                                            <img className="h-5 w-5 mx-1" src={Heart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-1 px-1.5 bg-white p-2 rounded-lg shadow-lg w-full">
                                                <div className="wrapper flex antialiased">
                                                    <div className="relative w-2/12">
                                                        <img className="w-12 h-12 ml-1 rounded-lg"
                                                            src={CartCheckoutImg} alt="" />
                                                    </div>

                                                    <div className="w-7/12 ml-3">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <h4 className="mt-0 -ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                    How to handle google map API with node.js
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12 pr-2">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="flex justify-end">
                                                                    <span className="text-pagination text-xl mr-2 font-semibold">$90</span>
                                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wrapper flex antialiased">
                                                    <div className="w-9/12 ml-1">
                                                        <div className="flex flex-wrap mt-1 mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="14px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12">
                                                        <div className="flex w-full flex-wrap mt-5 pr-3 justify-end">
                                                            <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                                            <img className="h-5 w-5 mx-1" src={Heart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-1 px-1.5 bg-white p-2 rounded-lg shadow-lg w-full">
                                                <div className="wrapper flex antialiased">
                                                    <div className="relative w-2/12">
                                                        <img className="w-12 h-12 ml-1 rounded-lg"
                                                            src={CartCheckoutImg} alt="" />
                                                    </div>

                                                    <div className="w-7/12 ml-3">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <h4 className="mt-0 -ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                    How to handle google map API with node.js
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12 pr-2">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="flex justify-end">
                                                                    <span className="text-pagination text-xl mr-2 font-semibold">$90</span>
                                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wrapper flex antialiased">
                                                    <div className="w-9/12 ml-1">
                                                        <div className="flex flex-wrap mt-1 mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="14px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12">
                                                        <div className="flex w-full flex-wrap mt-5 pr-3 justify-end">
                                                            <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                                            <img className="h-5 w-5 mx-1" src={Heart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="my-1 px-1.5 bg-white p-2 rounded-lg shadow-lg w-full">
                                                <div className="wrapper flex antialiased">
                                                    <div className="relative w-2/12">
                                                        <img className="w-12 h-12 ml-1 rounded-lg"
                                                            src={CartCheckoutImg} alt="" />
                                                    </div>

                                                    <div className="w-7/12 ml-3">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <h4 className="mt-0 -ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                    How to handle google map API with node.js
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12 pr-2">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="flex justify-end">
                                                                    <span className="text-pagination text-xl mr-2 font-semibold">$90</span>
                                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wrapper flex antialiased">
                                                    <div className="w-9/12 ml-1">
                                                        <div className="flex flex-wrap mt-1 mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="14px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12">
                                                        <div className="flex w-full flex-wrap mt-5 pr-3 justify-end">
                                                            <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                                            <img className="h-5 w-5 mx-1" src={Heart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-1 px-1.5 bg-white p-2 rounded-lg shadow-lg w-full">
                                                <div className="wrapper flex antialiased">
                                                    <div className="relative w-2/12">
                                                        <img className="w-12 h-12 ml-1 rounded-lg"
                                                            src={CartCheckoutImg} alt="" />
                                                    </div>

                                                    <div className="w-7/12 ml-3">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <h4 className="mt-0 -ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                    How to handle google map API with node.js
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12 pr-2">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="flex justify-end">
                                                                    <span className="text-pagination text-xl mr-2 font-semibold">$90</span>
                                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wrapper flex antialiased">
                                                    <div className="w-9/12 ml-1">
                                                        <div className="flex flex-wrap mt-1 mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="14px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12">
                                                        <div className="flex w-full flex-wrap mt-5 pr-3 justify-end">
                                                            <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                                            <img className="h-5 w-5 mx-1" src={Heart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-1 px-1.5 bg-white p-2 rounded-lg shadow-lg w-full">
                                                <div className="wrapper flex antialiased">
                                                    <div className="relative w-2/12">
                                                        <img className="w-12 h-12 ml-1 rounded-lg"
                                                            src={CartCheckoutImg} alt="" />
                                                    </div>

                                                    <div className="w-7/12 ml-3">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <h4 className="mt-0 -ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                    How to handle google map API with node.js
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12 pr-2">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="flex justify-end">
                                                                    <span className="text-pagination text-xl mr-2 font-semibold">$90</span>
                                                                    <HiDotsVertical className="mt-1 font-semibold text-xl text-gray-400" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wrapper flex antialiased">
                                                    <div className="w-9/12 ml-1">
                                                        <div className="flex flex-wrap mt-1 mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap mb-0">
                                                            <div className="w-full">
                                                                <div className="flex justify-start">
                                                                    <StarRatings
                                                                        rating={3.5}
                                                                        starDimension="14px"
                                                                        starSpacing="2px"
                                                                        starRatedColor="rgb(251, 191, 36)"
                                                                    />
                                                                    <span className="text-xs text-gray-300 ml-3 mt-1.5">(3.5)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-3/12">
                                                        <div className="flex w-full flex-wrap mt-5 pr-3 justify-end">
                                                            <img className="h-5 w-5 mx-1" src={Delete} alt="" />
                                                            <img className="h-5 w-5 mx-1" src={Heart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="navbar sticky bottom-0 bg-white p-8 shadow-2xl rounded-t-3xl">
                                            <label data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                for="my-modal-3"
                                                className="btn-block cursor-pointer text-center justify-center pt-2 pb-2 rounded-sm bg-maincolor text-white text-sm font-normal"><span className="ml-20">$490</span><span>-checkout</span><span className="float-right"> <FaArrowRight className="ml-16" /></span></label>
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
export default CartSummeryMobile;