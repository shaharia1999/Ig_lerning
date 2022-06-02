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

function CartCheckout() {
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
            <section className="md:h-screen bg-checkout">
                <div className="container xl:pl-32 xl:pr-32 xl:pt-10">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white xl:rounded-lg shadow-lg">
                                <div className="xl:flex xl:flex-wrap g-0">

                                    <div className="xl:w-6/12 xl:rounded-lg bg-gray-100 flex">
                                        <div className="xl:mt-12 w-full">
                                            <h6 className="xl:text-2xl text-maingray xl:font-semibold xl:ml-5">Cart items</h6>
                                            <h6 className="xl:text-xs text-maingray xl:font-normal xl:ml-5">You have 7 courses in your cart</h6>

                                            <div className="flex flex-wrap w-full xl:mt-4 xl:pl-4 xl:pr-4">
                                                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                                                    <div className="wrapper flex antialiased">
                                                        <div className="relative w-2/12">
                                                            <img className="w-14 h-14 xl:ml-1 xl:rounded-lg"
                                                                src={CartCheckoutImg} alt="" />
                                                        </div>

                                                        <div className="w-7/12">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="xl:mt-1 xl:ml-2 xl:text-sm xl:font-medium leading-tight text-cart-item-title">
                                                                        How to handle google map API with node.js
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-3/12 xl:pr-2">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-end">
                                                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                                                                <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">$120</em></strike>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                                                    <div className="wrapper flex antialiased">
                                                        <div className="relative w-2/12">
                                                            <img className="w-14 h-14 xl:ml-1 xl:rounded-lg"
                                                                src={CartCheckoutImg} alt="" />
                                                        </div>

                                                        <div className="w-7/12">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="xl:mt-1 xl:ml-2 xl:text-sm xl:font-medium leading-tight text-cart-item-title">
                                                                        How to handle google map API with node.js
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-3/12 xl:pr-2">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-end">
                                                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                                                                <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">$120</em></strike>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                                                    <div className="wrapper flex antialiased">
                                                        <div className="relative w-2/12">
                                                            <img className="w-14 h-14 xl:ml-1 xl:rounded-lg"
                                                                src={CartCheckoutImg} alt="" />
                                                        </div>

                                                        <div className="w-7/12">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="xl:mt-1 xl:ml-2 xl:text-sm xl:font-medium leading-tight text-cart-item-title">
                                                                        How to handle google map API with node.js
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-3/12 xl:pr-2">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-end">
                                                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                                                                <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">$120</em></strike>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                                                    <div className="wrapper flex antialiased">
                                                        <div className="relative w-2/12">
                                                            <img className="w-14 h-14 xl:ml-1 xl:rounded-lg"
                                                                src={CartCheckoutImg} alt="" />
                                                        </div>

                                                        <div className="w-7/12">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="xl:mt-1 xl:ml-2 xl:text-sm xl:font-medium leading-tight text-cart-item-title">
                                                                        How to handle google map API with node.js
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-3/12 xl:pr-2">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-end">
                                                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                                                                <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">$120</em></strike>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                                                    <div className="wrapper flex antialiased">
                                                        <div className="relative w-2/12">
                                                            <img className="w-14 h-14 xl:ml-1 xl:rounded-lg"
                                                                src={CartCheckoutImg} alt="" />
                                                        </div>

                                                        <div className="w-7/12">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="xl:mt-1 xl:ml-2 xl:text-sm xl:font-medium leading-tight text-cart-item-title">
                                                                        How to handle google map API with node.js
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-3/12 xl:pr-2">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-end">
                                                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                                                                <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">$120</em></strike>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                                                    <div className="wrapper flex antialiased">
                                                        <div className="relative w-2/12">
                                                            <img className="w-14 h-14 xl:ml-1 xl:rounded-lg"
                                                                src={CartCheckoutImg} alt="" />
                                                        </div>

                                                        <div className="w-7/12">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <h4 className="xl:mt-1 xl:ml-2 xl:text-sm xl:font-medium leading-tight text-cart-item-title">
                                                                        How to handle google map API with node.js
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-3/12 xl:pr-2">
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full">
                                                                    <div className="flex xl:justify-end">
                                                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">$90</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                                                                <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">$120</em></strike>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white opacity-50 cart-checkout-shadow-card-height-width -mt-20 justify-center text-center flex"> </div>

                                            <div className="flex flex-wrap xl:mt-3">
                                                <div className="xl:w-full bg-white border-price border xl:ml-5 xl:mr-5 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                    <div className="flex flex-wrap">
                                                        <div className="xl:w-1/2 flex">
                                                            <h6 className="text-sm text-cart-item-title xl:font-medium">Subtotal</h6>
                                                        </div>
                                                        <div className="xl:w-1/2">
                                                            <div className="float-right flex">
                                                                <h6 className="text-sm text-cart-item-title xl:font-medium xl:mr-5">$490</h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        <div className="xl:w-1/2 flex">
                                                            <h6 className="text-sm text-cart-item-title xl:font-medium">Tax</h6>
                                                        </div>
                                                        <div className="xl:w-1/2">
                                                            <div className="float-right flex">
                                                                <h6 className="text-sm text-cart-item-title xl:font-medium xl:mr-5">$20</h6>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-wrap">
                                                        <div className="xl:w-1/2 flex">
                                                            <h6 className="text-sm text-cart-item-title xl:font-medium">Cupon <span className="text-xs text-gray-500 font-light">(30% OFF)</span></h6>
                                                        </div>
                                                        <div className="xl:w-1/2">
                                                            <div className="float-right flex">
                                                                <h6 className="text-sm text-cart-item-title xl:font-medium xl:mr-5">-$80</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap xl:mt-3">
                                                <div className="xl:w-full bg-price border-price border xl:ml-5 xl:mr-5 xl:pl-5 xl:pt-3 xl:pb-3 rounded-lg">
                                                    <div className="flex flex-wrap">
                                                        <div className="xl:w-1/2 flex">
                                                            <h6 className="text-base text-white xl:font-medium">Total</h6>
                                                        </div>
                                                        <div className="xl:w-1/2">
                                                            <div className="float-right flex">
                                                                <h6 className="text-xl text-white xl:font-semibold xl:mr-5">$490</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-8 md:mx-6">
                                            <div className=" justify-start">
                                                <h4 className="text-2xl text-maingray xl:font-medium lg:mt-5">Payment Details</h4>
                                                <h6 className="text-xs text-maingray xl:font-light">Complete your purchase by providing payment details</h6>
                                            </div>


                                            <div className="flex flex-wrap xl:mt-4">
                                                <div className="w-full flex">
                                                    <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
                                                        <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={Visa} alt="" />
                                                    </div>
                                                    <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
                                                        <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={MasterCard} alt="" />
                                                    </div>
                                                    <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
                                                        <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={PayPal} alt="" />
                                                    </div>
                                                    <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
                                                        <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={IPay} alt="" />
                                                    </div>
                                                    <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
                                                        <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={Payoneer} alt="" />
                                                    </div>
                                                    <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
                                                        <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={BitCoin} alt="" />
                                                    </div>
                                                </div>
                                            </div>


                                            <form className="lg:mt-4">
                                                <div className="flex justify-center">
                                                    <div className="mb-3 xl:w-full">
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
                                                    <div className="mb-3 xl:w-full">
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
                                                    <div className="mb-3 xl:w-full">
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
                                                    <div className="mb-3 xl:w-1/2 xl:mr-4">
                                                        <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Expiry <sup>*</sup></label>
                                                        <input
                                                            type="text"
                                                            className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="MM/YY"
                                                        />
                                                    </div>

                                                    <div className="mb-3 xl:w-1/2 xl:ml-4">
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
                                                    <div className="xl:w-full">
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


                                                    <div className="mb-3 xl:w-1/2 xl:-mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control rounded-l block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Zip"
                                                        />
                                                    </div>

                                                    <div className="mb-3 xl:w-1/2 xl:-mt-1">
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
                                                        className="flex text-center justify-center xl:h-12 btn-block cursor-pointer bg-maincolor rounded-sm xl:text-sm text-white xl:mt-5">
                                                        <Link to="/cart-checkout-payment" className="justify-center text-center xl:mt-3 xl:ml-24">Proceed to Pay</Link>
                                                        <FaArrowRight className="xl:mt-4 xl:pl-12px ml-24 " />
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
export default CartCheckout;