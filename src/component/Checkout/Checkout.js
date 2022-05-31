import React, { Fragment, useState } from "react";
import LoginImg from "../../asset/images/banner/login.png";
import "../../asset/css/login.css";
import ReactFlagsSelect from "react-flags-select";

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
                <div className="container lg:pl-32 lg:pr-32 xl:pt-10">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white xl:rounded-lg shadow-lg">
                                <div className="lg:flex lg:flex-wrap g-0">

                                    <div className="lg:w-6/12 xl:rounded-lg bg-gray-100 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                        <div className="">

                                        </div>
                                    </div>

                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-8 md:mx-6">
                                            <div className=" justify-start">
                                                <h4 className="text-2xl text-maingray xl:font-medium lg:mt-5">Payment Details</h4>
                                                <h6 className="text-xs text-maingray xl:font-light">Complete your purchase by providing payment details</h6>
                                            </div>

                                            <form className="lg:mt-8">


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
                                                    <div className="mb-3 xl:w-1/2 xl:mr-1">
                                                        <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Expiry <sup>*</sup></label>
                                                        <input
                                                            type="text"
                                                            className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="MM/YY"
                                                        />
                                                    </div>

                                                    <div className="mb-3 xl:w-1/2 xl:ml-1">
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
                                                        <input type="search" id="search-dropdown" className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Code" required />
                                                        <button type="submit" className="absolute top-0 right-0 pt-2.5 pb-2.5 pl-5 pr-5 text-sm font-medium text-white bg-pagination rounded-r-lg border border-pagination hover:bg-pagination focus:ring-4 focus:outline-none focus:ring-blue-300">Apply</button>
                                                    </div>
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
        </Fragment>
    );
}
export default Checkout;