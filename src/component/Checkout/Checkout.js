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


function Checkout() {
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

                                    <div className="xl:w-6/12 xl:rounded-lg bg-gray-100 flex items-center">
                                        <div className="xl:mt-12 w-full">

                                            <div className="flex justify-center">
                                                <ul className="nav bg-gray-100 xl:w-80 justify-center rounded-md shadow-lg xl:pl-2 nav-pills flex md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            type="button"
                                                            className="nav-linkc block active:bg-white focus:bg-white font-medium text-sm leading-tight capitalize rounded w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
                                                            id="pills-home-tab3"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-home3" 
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
                                                            data-bs-target="#pills-profile3"
                                                            role="tab"
                                                            aria-controls="pills-profile3" aria-selected="false">
                                                            Annual Plan
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                            <button className=" bg-price text-xs text-white rounded-xl h-6 w-20 xl:pt-1 xl:-mt-10px xl:pl-3 xl:pr-2 flex xl:ml-80 xl:-mt-24">SAVE 10%</button>

                                            <div className="tab-content" id="pills-tabContent3">
                                                <div className="tab-pane fade show active xl:mt-20" id="pills-home3" role="tabpanel" aria-labelledby="pills-home-tab3">

                                                    <div className="flex flex-wrap xl:mt-4">
                                                        <div className="xl:w-full bg-white hover:bg-price border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Free</h6>
                                                            <h6 className="xl:text-xs  text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$0</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap xl:mt-4">
                                                        <div className="xl:w-full bg-white border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Basic</h6>
                                                            <h6 className="xl:text-xs text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$29</span> /month</h6>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-wrap xl:mt-4">
                                                        <div className="xl:w-full bg-white border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Pro</h6>
                                                            <h6 className="xl:text-xs text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$99</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap xl:mt-4 xl:mb-6">
                                                        <div className="xl:w-full bg-white border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Business</h6>
                                                            <h6 className="xl:text-xs text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$249</span> /month</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade show xl:mt-20" id="pills-profile3" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                                    <div className="flex flex-wrap xl:mt-4">
                                                        <div className="xl:w-full bg-white hover:bg-price border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Free</h6>
                                                            <h6 className="xl:text-xs  text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$0</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap xl:mt-4">
                                                        <div className="xl:w-full bg-white border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Basic</h6>
                                                            <h6 className="xl:text-xs text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$29</span> /month</h6>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-wrap xl:mt-4">
                                                        <div className="xl:w-full bg-white border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Pro</h6>
                                                            <h6 className="xl:text-xs text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$99</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap xl:mt-4 xl:mb-6">
                                                        <div className="xl:w-full bg-white border-price border xl:ml-6 xl:mr-6 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray xl:font-medium">Business</h6>
                                                            <h6 className="xl:text-xs text-maingray font-normal xl:mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="xl:text-base text-maingray xl:font-normal xl:mt-3"><span className="text-pagination xl:text-3xl xl:font-medium">$249</span> /month</h6>
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
                                                    <label for="my-modal-3" data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        className="flex text-center justify-center xl:h-12 btn-block cursor-pointer bg-maincolor rounded-sm xl:text-sm text-white xl:mt-5">
                                                        <span className="justify-center text-center xl:mt-3 xl:ml-24">Proceed to Pay</span>
                                                        <FaArrowRight className="xl:mt-4 xl:pl-12px ml-24 " />
                                                    </label>
                                                </div>
                                            </form>




                                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box max-w-md xl:p-8 rounded-lg relative">
                                                    <label for="my-modal-3" className="btn btn-xs btn-circle absolute right-2 top-2">✕</label>

                                                    <h6 className="text-maingray xl:text-2xl font-semibold">Summery</h6>

                                                    <div className="flex flex-wrap justify-center xl:mt-5">
                                                        <div className="mb-3 flex w-full border bg-gray-100 rounded-sm xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3">
                                                            <div className="w-1/2">
                                                                <h6 className="xl:text-sm text-maingray font-normal">Plan Name</h6>
                                                            </div>
                                                            <div className="w-1/2">
                                                                <h6 className="float-right xl:text-sm text-maingray font-normal">Basic</h6>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3 flex w-full border bg-gray-100 rounded-sm xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3">
                                                            <div className="w-1/2">
                                                                <h6 className="xl:text-sm text-maingray font-normal">Vaildity</h6>
                                                            </div>
                                                            <div className="w-1/2">
                                                                <h6 className="float-right xl:text-sm text-maingray font-normal">On Month / One User</h6>
                                                            </div>
                                                        </div>


                                                        <div className="mb-3 flex w-full border bg-gray-100 rounded-sm xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3">
                                                            <div className="w-1/2">
                                                                <h6 className="xl:text-sm text-maingray font-normal">Sub Total</h6>
                                                            </div>
                                                            <div className="w-1/2">
                                                                <h6 className="float-right xl:text-sm text-maingray font-normal">$29</h6>
                                                            </div>
                                                        </div>


                                                        <div className="mb-3 flex w-full border bg-gray-100 rounded-sm xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3">
                                                            <div className="w-1/2">
                                                                <h6 className="xl:text-sm text-maingray font-normal">Coupon Code</h6>
                                                            </div>
                                                            <div className="w-1/2">
                                                                <h6 className="float-right xl:text-sm text-maingray font-normal">Null</h6>
                                                            </div>
                                                        </div>


                                                        <div className="mb-3 flex w-full border bg-gray-100 rounded-sm xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3">
                                                            <div className="w-1/2">
                                                                <h6 className="xl:text-sm text-maingray font-normal">Tax</h6>
                                                            </div>
                                                            <div className="w-1/2">
                                                                <h6 className="float-right xl:text-sm text-maingray font-normal">$10</h6>
                                                            </div>
                                                        </div>


                                                        <div className="mb-3 flex w-full border bg-gray-100 rounded-sm xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3">
                                                            <div className="w-1/2">
                                                                <h6 className="xl:text-sm text-maingray font-normal">Total Price</h6>
                                                            </div>
                                                            <div className="w-1/2">
                                                                <h6 className="float-right xl:text-sm text-maincolor font-semibold">$39</h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center modal-action">
                                                        <label data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                            for="my-modal-3" className="xl:w-40 cursor-pointer text-center justify-center xl:pt-3 xl:pb-3 rounded-sm bg-maincolor text-white xl:text-sm font-normal">Confirm Pay</label>
                                                        {/* <button
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                            className="xl:w-40 text-center justify-center xl:pt-3 xl:pb-2 rounded-sm bg-maincolor text-white xl:text-sm font-normal">Confirm Pay</button> */}
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
export default Checkout;