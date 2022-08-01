import React, { Fragment, useState, useRef } from "react";
import "../../asset/css/login.css";
import ReactFlagsSelect from "react-flags-select";
import { FaArrowRight } from "react-icons/fa";
import Payoneer from '../../asset/images/payment/payoneer.svg';
import PayPal from '../../asset/images/payment/paypal.svg';
import Visa from '../../asset/images/payment/visa.svg';
import MasterCard from '../../asset/images/payment/master-card.svg';
import IPay from '../../asset/images/payment/i-pay.svg';
import BitCoin from '../../asset/images/payment/bit-coin.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MobileCheckout() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    const [nav13, setNav13] = useState();
    const slider13 = useRef();

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

    var settings = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };



    return (
        <Fragment>
            <div className="container pl-4 pr-4 pt-6">
                <div className="flex justify-center items-center flex-wrap text-gray-800">
                    <div className="w-full">
                        <div className="block bg-white rounded-lg shadow-lg">
                            <div className="flex flex-wrap g-0">

                                <div className="w-full rounded-lg bg-gray-100 flex items-center">
                                    <div className="mt-12 w-full">

                                        <div className="flex justify-center">
                                            <ul className="nav bg-gray-100 w-80 justify-center rounded-md shadow-lg pl-2 nav-pills flex md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
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

                                        <button className=" bg-price text-xs text-white rounded-xl h-6 w-20 pt-1 -mt-10px pl-3 pr-2 flex ml-56 -mt-24">SAVE 10%</button>

                                        <div className="tab-content" id="pills-tabContent3">
                                            <div className="tab-pane fade show active mt-20" id="pills-home3" role="tabpanel" aria-labelledby="pills-home-tab3">


                                                <Slider
                                                    {...settings}
                                                    ref={(slider13) => setNav13(slider13)}
                                                    slidesToShow={1}
                                                    dots={true}
                                                    adaptiveHeight={true}
                                                    infinite={true}
                                                    slidesToScroll={1}
                                                    loop={true}
                                                    speed={1000}
                                                    height={600}
                                                    autoplay={true}
                                                    autoplaySpeed={1500}
                                                    swipeToSlide={true}
                                                    arrows={false}
                                                >


                                                    <div className="flex flex-wrap mt-4 mb-6 px-3">
                                                        <div className="w-full bg-white hover:bg-price border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Free</h6>
                                                            <h6 className="text-xs  text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$0</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap mt-4 mb-6 px-3">
                                                        <div className="w-full bg-white border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Basic</h6>
                                                            <h6 className="text-xs text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$29</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap mt-4 mb-6 px-3">
                                                        <div className="w-full bg-white border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Pro</h6>
                                                            <h6 className="text-xs text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$99</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap mt-4 mb-6 px-3">
                                                        <div className="w-full bg-white border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Business</h6>
                                                            <h6 className="text-xs text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$249</span> /month</h6>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </div>


                                            <div className="tab-pane fade show mt-20" id="pills-profile3" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                                <Slider
                                                    {...settings}
                                                    ref={(slider13) => setNav13(slider13)}
                                                    slidesToShow={1}
                                                    dots={true}
                                                    adaptiveHeight={true}
                                                    infinite={true}
                                                    slidesToScroll={1}
                                                    loop={true}
                                                    speed={1000}
                                                    height={600}
                                                    autoplay={true}
                                                    autoplaySpeed={1500}
                                                    swipeToSlide={true}
                                                    arrows={false}
                                                >

                                                    <div className="flex flex-wrap mt-4">
                                                        <div className="w-full bg-white hover:bg-price border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Free</h6>
                                                            <h6 className="text-xs  text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$0</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap mt-4">
                                                        <div className="w-full bg-white border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Basic</h6>
                                                            <h6 className="text-xs text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$29</span> /month</h6>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-wrap mt-4">
                                                        <div className="w-full bg-white border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Pro</h6>
                                                            <h6 className="text-xs text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$99</span> /month</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap mt-4 mb-6">
                                                        <div className="w-full bg-white border-price border ml-6 mr-6 pl-5 pt-5 pb-5 rounded-xl">
                                                            <h6 className="text-2xl text-maingray font-medium">Business</h6>
                                                            <h6 className="text-xs text-maingray font-normal mt-1">Not ready to commit? Try us out with ease.</h6>
                                                            <h6 className="text-base text-maingray font-normal mt-3"><span className="text-pagination text-3xl font-medium">$249</span> /month</h6>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </div>


                                        </div>

                                    </div>
                                </div>

                                <div className="w-full mt-2 px-4">
                                    <div className="md:p-8 sm:p-5 md:mx-6">
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

                                            <div className="flex flex-wrap mb-4">
                                                <label for="my-modal-4" data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    className="flex text-center justify-center h-12 btn-block cursor-pointer bg-maincolor rounded-sm text-sm text-white mt-5">
                                                    <span className="justify-center text-center mt-4 ml-24">Proceed to Pay</span>
                                                    <FaArrowRight className="mt-5 pl-12px ml-24 " />
                                                </label>
                                            </div>
                                        </form>




                                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box max-w-md p-5 rounded-lg relative">
                                                <label for="my-modal-4" className="btn btn-xs btn-circle absolute right-2 top-2">✕</label>

                                                <h6 className="text-maingray text-2xl font-semibold">Summery</h6>

                                                <div className="flex flex-wrap justify-center mt-5">
                                                    <div className="mb-3 flex w-full border bg-gray-100 rounded-sm pt-3 pb-3 pl-3 pr-3">
                                                        <div className="w-1/2">
                                                            <h6 className="text-sm text-maingray font-normal">Plan Name</h6>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <h6 className="float-right text-sm text-maingray font-normal">Basic</h6>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 flex w-full border bg-gray-100 rounded-sm pt-3 pb-3 pl-3 pr-3">
                                                        <div className="w-1/2">
                                                            <h6 className="text-sm text-maingray font-normal">Vaildity</h6>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <h6 className="float-right text-sm text-maingray font-normal">On Month / One User</h6>
                                                        </div>
                                                    </div>


                                                    <div className="mb-3 flex w-full border bg-gray-100 rounded-sm pt-3 pb-3 pl-3 pr-3">
                                                        <div className="w-1/2">
                                                            <h6 className="text-sm text-maingray font-normal">Sub Total</h6>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <h6 className="float-right text-sm text-maingray font-normal">$29</h6>
                                                        </div>
                                                    </div>


                                                    <div className="mb-3 flex w-full border bg-gray-100 rounded-sm pt-3 pb-3 pl-3 pr-3">
                                                        <div className="w-1/2">
                                                            <h6 className="text-sm text-maingray font-normal">Coupon Code</h6>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <h6 className="float-right text-sm text-maingray font-normal">Null</h6>
                                                        </div>
                                                    </div>


                                                    <div className="mb-3 flex w-full border bg-gray-100 rounded-sm pt-3 pb-3 pl-3 pr-3">
                                                        <div className="w-1/2">
                                                            <h6 className="text-sm text-maingray font-normal">Tax</h6>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <h6 className="float-right text-sm text-maingray font-normal">$10</h6>
                                                        </div>
                                                    </div>


                                                    <div className="mb-3 flex w-full border bg-gray-100 rounded-sm pt-3 pb-3 pl-3 pr-3">
                                                        <div className="w-1/2">
                                                            <h6 className="text-sm text-maingray font-normal">Total Price</h6>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <h6 className="float-right text-sm text-maincolor font-semibold">$39</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center modal-action">
                                                    <label data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        for="my-modal-3" className="w-40 cursor-pointer text-center justify-center pt-3 pb-3 rounded-sm bg-maincolor text-white text-sm font-normal">Confirm Pay</label>
                                                    {/* <button
                                                                data-mdb-ripple="true"
                                                                data-mdb-ripple-color="light"
                                                                className="w-40 text-center justify-center pt-3 pb-2 rounded-sm bg-maincolor text-white text-sm font-normal">Confirm Pay</button> */}
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

export default MobileCheckout;