import React, { Fragment, useState } from "react";
import "../../asset/css/login.css";
import ReactFlagsSelect from "react-flags-select";
import { FaArrowRight } from "react-icons/fa";
import Payoneer from '../../asset/images/payment/payoneer.svg';
import PayPal from '../../asset/images/payment/paypal.svg';
import Visa from '../../asset/images/payment/visa.svg';
import MasterCard from '../../asset/images/payment/master-card.svg';
import IPay from '../../asset/images/payment/i-pay.svg';
import BitCoin from '../../asset/images/payment/bit-coin.svg';
import CartCheckoutImg from '../../asset/images/checkout/course-cart-img.png';
import { Link } from "react-router-dom";

function CartCheckoutMobile() {
    const [selected, setSelected] = useState("");
    const onSelect = (code) => setSelected(code);

    const showSelectedLabel = ("Show Selected Label", true);
    const showSecondarySelectedLabel = (
        "Show Secondary Selected Label",
        true
    );
    const selectedSize = ("Selected Size", 16);
    const showOptionLabel = ("Show Option Label", true);
    const showSecondaryOptionLabel = ("Show Secondary Option Label", true);
    const optionsSize = ("Options Size", 16);
    const placeholder = ("Placeholder", "");
    const searchable = ("Searchable", false);
    const searchPlaceholder = ("Search Placeholder", "");
    const alignOptionsToRight = ("Align Options to Right", false);
    const fullWidth = ("Full Width", true);
    const disabled = ("Disabled", false);

    return (
        <Fragment>
            <div className="container pt-1">
                <div className="flex justify-center flex-wrap text-gray-800">
                    <div className="w-full flex">
                        <div className="block w-full">
                            <div className="flex flex-wrap g-0">

                                <div className="w-full pl-4 pr-4">
                                    <div className="mx-3">
                                        <div className=" justify-start">
                                            <h4 className="text-xl text-maingray font-medium mt-5">Payment Details</h4>
                                            <h6 className="text-xs text-maingray font-light">Complete your purchase by providing payment details</h6>
                                        </div>


                                        <div className="flex flex-wrap mt-4">
                                            <div className="w-full flex">
                                                <div className="w-2/12 border-gray-200 hover:border-price border-2 justify-center flex rounded-md m-1">
                                                    <img className="pt-1 pb-1 pl-2 pr-2 h-10" src={Visa} alt="" />
                                                </div>
                                                <div className="w-2/12 border-gray-200 hover:border-price border-2 justify-center flex rounded-md m-1">
                                                    <img className="pt-1 pb-1 pl-2 pr-2 h-10" src={MasterCard} alt="" />
                                                </div>
                                                <div className="w-2/12 border-gray-200 hover:border-price border-2 justify-center flex rounded-md m-1">
                                                    <img className="pt-1 pb-1 pl-2 pr-2 h-10" src={PayPal} alt="" />
                                                </div>
                                                <div className="w-2/12 border-gray-200 hover:border-price border-2 justify-center flex rounded-md m-1">
                                                    <img className="pt-1 pb-1 pl-2 pr-2 h-10" src={IPay} alt="" />
                                                </div>
                                                <div className="w-2/12 border-gray-200 hover:border-price border-2 justify-center flex rounded-md m-1">
                                                    <img className="pt-1 pb-1 pl-2 pr-2 h-10" src={Payoneer} alt="" />
                                                </div>
                                                <div className="w-2/12 border-gray-200 hover:border-price border-2 justify-center flex rounded-md m-1">
                                                    <img className="pt-1 pb-1 pl-2 pr-2 h-10" src={BitCoin} alt="" />
                                                </div>
                                            </div>
                                        </div>


                                        <form className="mt-4">
                                            <div className="flex justify-center">
                                                <div className="mb-3 w-full">
                                                    <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Email Address <sup>*</sup></label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Enter Email Address"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="mb-3 w-full">
                                                    <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Cardholder Name <sup>*</sup></label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Enter Cardholder Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="mb-3 w-full">
                                                    <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Card Details <sup>*</sup></label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="0000 0000 0000 0000"
                                                    />
                                                </div>
                                            </div>


                                            <div className="flex">
                                                <div className="mb-3 w-1/2 mr-4">
                                                    <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Expiry <sup>*</sup></label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="MM/YY"
                                                    />
                                                </div>

                                                <div className="mb-3 w-1/2 ml-4">
                                                    <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">CVC <sup>*</sup></label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="000"
                                                    />
                                                </div>
                                            </div>



                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <ReactFlagsSelect
                                                        selected={selected}
                                                        onSelect={onSelect}
                                                        showSelectedLabel={showSelectedLabel}
                                                        showSecondarySelectedLabel={showSecondarySelectedLabel}
                                                        selectedSize={selectedSize}
                                                        showOptionLabel={showOptionLabel}
                                                        showSecondaryOptionLabel={showSecondaryOptionLabel}
                                                        optionsSize={optionsSize}
                                                        placeholder={placeholder}
                                                        searchable={searchable}
                                                        searchPlaceholder={searchPlaceholder}
                                                        alignOptionsToRight={alignOptionsToRight}
                                                        fullWidth={fullWidth}
                                                        disabled={disabled}
                                                    />
                                                </div>


                                                <div className="mb-3 w-1/2 -mt-1">
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-l block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Zip"
                                                    />
                                                </div>

                                                <div className="mb-3 w-1/2 -mt-1">
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-r block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="State"
                                                    />
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap">
                                                <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Apply Cupon</label>

                                                <div className="relative w-full">
                                                    <input
                                                        type="search"
                                                        id="search-dropdown"
                                                        className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        placeholder="Enter Code"
                                                    />
                                                    <button type="submit"
                                                        className="absolute top-0 right-0 pt-2.5 pb-2.5 pl-5 pr-5 text-sm font-medium text-white bg-pagination rounded-r-lg border border-pagination hover:bg-pagination focus:ring-4 focus:outline-none focus:ring-blue-300">Apply</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div className="navbar shadow-CourseTitle justify-center sticky bottom-0 flex bg-white p-4 shadow-2xl rounded-t-3xl">
                                    <div className="flex flex-wrap ">
                                        <div className="w-80 px-2">

                                            <div className="flex mt-4">
                                                <div className="w-full flex">
                                                    <div className="w-1/2">
                                                        <h6 className="text-sm text-cart-item-title font-medium">Sub Total</h6>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="text-sm text-cart-item-title font-medium">$490</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="mt-1 mb-1" />

                                            <div className="flex flex-wrap">
                                                <div className="w-1/2">
                                                    <h6 className="text-sm text-cart-item-title font-medium">Tax</h6>
                                                </div>
                                                <div className="w-1/2">
                                                    <div className="float-right flex">
                                                        <h6 className="text-sm text-cart-item-title font-medium">$20</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="mt-1 mb-1" />


                                            <div className="flex flex-wrap">
                                                <div className="w-1/2 flex">
                                                    <h6 className="text-sm text-cart-item-title font-medium">Cupon <span className="text-xs text-gray-500 font-light">(30% OFF)</span></h6>
                                                </div>
                                                <div className="w-1/2">
                                                    <div className="float-right justify-end">
                                                        <h6 className="text-sm text-cart-item-title font-medium">-$80</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="mt-1 mb-1" />

                                            <div className="flex flex-wrap">
                                                <div className="w-1/2 flex">
                                                    <h6 className="text-base text-cart-item-title font-semibold">Total</h6>
                                                </div>
                                                <div className="w-1/2">
                                                    <div className="float-right flex">
                                                        <h6 className="text-base text-maincolor font-semibold">$490</h6>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap mt-4">
                                                <div className="w-full flex">
                                                    <label data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        className="btn-block cursor-pointer text-center justify-center pt-2 pb-2 rounded-sm bg-maincolor text-white text-sm font-normal"><span className="ml-20">Proceed to Pay</span><span className="float-right"> <FaArrowRight className="ml-12 mr-3 mt-0.5" /></span></label>
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
export default CartCheckoutMobile;