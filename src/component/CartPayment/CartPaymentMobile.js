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

function CartPaymentMobile() {
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
            <section className="">
                <div className="container pl-6 pr-6 pt-2">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="w-full">
                            <div className="block bg-white xl:rounded-lg shadow-lg">
                                <div className="xl:flex xl:flex-wrap g-0">

                                    <div className="lg:w-6/12 sm:w-full w-full px-4 md:px-0">
                                        <div className="md:p-8 md:mx-6">
                                            <div className=" justify-start">
                                                <h4 className="text-maingray xl:font-medium text-xl lg:mt-5 mt-5">Payment Details</h4>
                                                <h6 className="text-xs text-maingray xl:font-light">Complete your purchase by providing payment details</h6>
                                            </div>


                                            <div className="flex flex-wrap xl:mt-4 mt-4">
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

                                            <hr className="mt-4 border"/>

                                            <form className="mt-4">

                                                <div className="flex flex-wrap">
                                                    <div className="w-1/2">
                                                        <div className="flex">
                                                            <h6 className="text-maingray text-sm font-semibold xl:mt-1">Recent Payment Method</h6>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <div className="float-right flex">
                                                            <button className="text-maincolor border border-maincolor rounded-2xl text-xs pt-1 pb-1 pl-2 pr-2">+ Add New</button>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="flex flex-wrap">
                                                    <div className="px-1 bg-white pt-2 pb-2 rounded-md border-2 border-gray-300 hover:border-price my-2.5 px-1.5 w-full">
                                                        <div className="wrapper flex antialiased">
                                                            <div className="relative w-2/12">
                                                                <div className="form-group form-check mt-2.5 ml-3">
                                                                    <input type="checkbox"
                                                                        className="ring-10 h-6 w-6 rounded-full text-price bg-gray-100 border-gray-300 focus:ring-price" checked/>
                                                                </div>
                                                            </div>

                                                            <div className="w-2/12 border-gray-200 border-2 justify-center flex rounded-md m-1">
                                                                <img className="pt-0.5 pb-1 pl-2 pr-2 h-7 mt-1" src={MasterCard} alt="" />
                                                            </div>

                                                            <div className="w-6/12">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <h4 className="mt-1 ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                            Simon Lewis
                                                                        </h4>
                                                                        <h4 className="mt-0.5 ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                            **** **** **** 3279
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="w-2/12 pr-2">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <div className="flex justify-end">
                                                                            <span className="text-maingray text-sm mr-2 font-medium">Exp</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="flex w-full flex-wrap mt-0 justify-end">
                                                                   <h6 className="text-gray-500 text-xs mr-3 font-semibold">**/24</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="px-1 bg-white pt-2 pb-2 rounded-md border-2 border-gray-300 hover:border-price my-2.5 px-1.5 w-full">
                                                        <div className="wrapper flex antialiased">
                                                            <div className="relative w-2/12">
                                                                <div className="form-group form-check mt-2.5 ml-3">
                                                                    <input type="checkbox"
                                                                        className="ring-10 h-6 w-6 rounded-full text-price bg-gray-100 border-gray-300 focus:ring-price" />
                                                                </div>
                                                            </div>

                                                            <div className="w-2/12 border-gray-200 border-2 justify-center flex rounded-md m-1">
                                                                <img className="pt-0.5 pb-1 pl-2 pr-2 h-7 mt-1" src={Visa} alt="" />
                                                            </div>

                                                            <div className="w-6/12">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <h4 className="mt-1 ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                            Simon Lewis
                                                                        </h4>
                                                                        <h4 className="mt-0.5 ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                            **** **** **** 3279
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="w-2/12 pr-2">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <div className="flex justify-end">
                                                                            <span className="text-maingray text-sm mr-2 font-medium">Exp</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="flex w-full flex-wrap mt-0 justify-end">
                                                                   <h6 className="text-gray-500 text-xs mr-3 font-semibold">**/24</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="px-1 bg-white pt-2 pb-2 rounded-md border-2 border-gray-300 hover:border-price my-2.5 px-1.5 w-full">
                                                        <div className="wrapper flex antialiased">
                                                            <div className="relative w-2/12">
                                                                <div className="form-group form-check mt-2.5 ml-3">
                                                                    <input type="checkbox"
                                                                        className="ring-10 h-6 w-6 rounded-full text-price bg-gray-100 border-gray-300 focus:ring-price" />
                                                                </div>
                                                            </div>

                                                            <div className="w-2/12 border-gray-200 border-2 justify-center flex rounded-md m-1">
                                                                <img className="pt-0.5 pb-1 pl-2 pr-2 h-7 mt-1" src={PayPal} alt="" />
                                                            </div>

                                                            <div className="w-6/12">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <h4 className="mt-1 ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                            Simon Lewis
                                                                        </h4>
                                                                        <h4 className="mt-0.5 ml-2 text-sm font-medium leading-tight text-cart-item-title">
                                                                            **** **** **** 3279
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="w-2/12 pr-2">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <div className="flex justify-end">
                                                                            <span className="text-maingray text-sm mr-2 font-medium">Exp</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="flex w-full flex-wrap mt-0 justify-end">
                                                                   <h6 className="text-gray-500 text-xs mr-3 font-semibold">**/24</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <hr className="mt-4 mb-5 border"/>


                                                <div className="flex flex-wrap">
                                                <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Billing Address</label>

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

                                                <div className="flex flex-wrap">
                                                    <label data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        className="flex text-center justify-center h-12 btn-block cursor-pointer bg-maincolor rounded-sm text-sm text-white mt-5">
                                                        <span className="justify-center text-center mt-3 ml-24">Proceed to Pay</span>
                                                        <FaArrowRight className="mt-4 pl-12px ml-24 " />
                                                    </label>
                                                </div>
                                            </form>


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
export default CartPaymentMobile;