import React, { Fragment, useState, useEffect } from "react";
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
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";

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

    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [coupon_percentage, setCouponPercentage] = useState(0);
    const [coupon, setCoupon] = useState(0);
    const [total, setTotal] = useState(0);
    const [cartListData, setCartListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cart_id = localStorage.getItem('cart_id')
    console.log('cart id = ', cart_id);

    const [emailAddress, setEmailAddress] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [cardDetails, setCardDetails] = useState('');
    const [expiry, setExpiry] = useState('');
    const [CVC, setCVC] = useState('');
    const [selectCountry, setSelectCountry] = useState('');
    const [zip, setZip] = useState('');
    const [state, setState] = useState('');
    const [couponCode, SetCouponCode] = useState();

    const MyCartDataLoad = () => {
        
        if (cart_id != null){
            setIsLoading(true);
            axios.put(`${ApiUrl.BaseUrl}api/course/add-to-cart-checkout/${cart_id}/`).then((response) => {
                if (response.data.error === false) {
                    setSubTotal(response.data.sub_total);
                    setTax(response.data.tax);
                    setCoupon(response.data.coupon);
                    setCouponPercentage(response.data.coupon_percentage);
                    setTotal(response.data.total);
                    setCartListData(response.data.data);
                    console.log('cartListData = ', response.data.data);
                    setIsLoading(false);
                }
            });
        }
    }
    useEffect(() => {
        MyCartDataLoad();
    }, [])
    const AddToCartCheckOutDataLoading = (() => {
        return (
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
        )
    })()

    const CouponCodeSubmit = (e) => {
        e.preventDefault();
        const data = {
            coupon_code: couponCode,
        }
        axios.put(`${ApiUrl.BaseUrl}api/course/add-to-cart-checkout/${cart_id}/`, data).then((response) => {
            if (response.data.error === false) {
                setSubTotal(response.data.sub_total);
                setTax(response.data.tax);
                setCoupon(response.data.coupon);
                setCouponPercentage(response.data.coupon_percentage);
                setTotal(response.data.total);
                setCartListData(response.data.data);
                console.log('cartListData = ', response.data.data);
                setIsLoading(false);
            }
        });
    };

    const AddToCartCheckOutDataSuccess = (() => {
        return cartListData.map((cartData) => (
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
                                    {cartData['course_information'].course_title}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-3/12 xl:pr-2">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="flex xl:justify-end">
                                    <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">${cartData['course_information']['course_price_info'].new_price}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full flex-wrap xl:mt-0 xl:justify-end">
                            <strike className="text-gray-500"><em className=" text-gray-600 xl:text-xs xl:mr-3 xl:font-semibold">${cartData['course_information']['course_price_info'].main_price}</em></strike>
                        </div>
                    </div>
                </div>
            </div>
        ))
    })()
    // if (isLoading === true) {
    //     return (
    //         <Fragment>
    //             <section className="md:h-screen bg-checkout">
    //                 <div className="container xl:pl-32 xl:pr-32 xl:pt-10">
    //                     <div className="flex justify-center items-center flex-wrap text-gray-800">
    //                         <div className="xl:w-10/12">
    //                             <div className="block bg-white xl:rounded-lg shadow-lg">
    //                                 <div className="xl:flex xl:flex-wrap g-0">
    
    //                                     <div className="xl:w-6/12 xl:rounded-lg bg-gray-100 flex">
    //                                         <div className="xl:mt-12 w-full">
    //                                             <h6 className="xl:text-2xl text-maingray xl:font-semibold xl:ml-5">Cart items</h6>
    //                                             <h6 className="xl:text-xs text-maingray xl:font-normal xl:ml-5">You have 7 courses in your cart</h6>
    
    //                                             <div className="flex flex-wrap w-full xl:mt-4 xl:pl-4 xl:pr-4">
    //                                                 {
    //                                                     AddToCartCheckOutDataLoading
    //                                                 }
    //                                             </div>
    
    //                                             <div className="bg-white opacity-50 cart-checkout-shadow-card-height-width -mt-20 justify-center text-center flex"> </div>
    
    //                                             <div className="flex flex-wrap xl:mt-3">
    //                                                 <div className="xl:w-full bg-white border-price border xl:ml-5 xl:mr-5 xl:pl-5 xl:pt-5 xl:pb-5 rounded-xl">
    //                                                     <div className="flex flex-wrap">
    //                                                         <div className="xl:w-1/2 flex">
    //                                                             <h6 className="text-sm text-cart-item-title xl:font-medium">Subtotal</h6>
    //                                                         </div>
    //                                                         <div className="xl:w-1/2">
    //                                                             <div className="float-right flex">
    //                                                                 <h6 className="text-sm text-cart-item-title xl:font-medium xl:mr-5">$490</h6>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    
    //                                                     <div className="flex flex-wrap">
    //                                                         <div className="xl:w-1/2 flex">
    //                                                             <h6 className="text-sm text-cart-item-title xl:font-medium">Tax</h6>
    //                                                         </div>
    //                                                         <div className="xl:w-1/2">
    //                                                             <div className="float-right flex">
    //                                                                 <h6 className="text-sm text-cart-item-title xl:font-medium xl:mr-5">$20</h6>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    
    
    //                                                     <div className="flex flex-wrap">
    //                                                         <div className="xl:w-1/2 flex">
    //                                                             <h6 className="text-sm text-cart-item-title xl:font-medium">Cupon <span className="text-xs text-gray-500 font-light">(30% OFF)</span></h6>
    //                                                         </div>
    //                                                         <div className="xl:w-1/2">
    //                                                             <div className="float-right flex">
    //                                                                 <h6 className="text-sm text-cart-item-title xl:font-medium xl:mr-5">-$80</h6>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    
    //                                             <div className="flex flex-wrap xl:mt-3">
    //                                                 <div className="xl:w-full bg-price border-price border xl:ml-5 xl:mr-5 xl:pl-5 xl:pt-3 xl:pb-3 rounded-lg">
    //                                                     <div className="flex flex-wrap">
    //                                                         <div className="xl:w-1/2 flex">
    //                                                             <h6 className="text-base text-white xl:font-medium">Total</h6>
    //                                                         </div>
    //                                                         <div className="xl:w-1/2">
    //                                                             <div className="float-right flex">
    //                                                                 <h6 className="text-xl text-white xl:font-semibold xl:mr-5">$490</h6>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    
    //                                         </div>
    //                                     </div>
    
    //                                     <div className="lg:w-6/12 px-4 md:px-0">
    //                                         <div className="md:p-8 md:mx-6">
    //                                             <div className=" justify-start">
    //                                                 <h4 className="text-2xl text-maingray xl:font-medium lg:mt-5">Payment Details</h4>
    //                                                 <h6 className="text-xs text-maingray xl:font-light">Complete your purchase by providing payment details</h6>
    //                                             </div>
    
    
    //                                             <div className="flex flex-wrap xl:mt-4">
    //                                                 <div className="w-full flex">
    //                                                     <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
    //                                                         <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={Visa} alt="" />
    //                                                     </div>
    //                                                     <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
    //                                                         <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={MasterCard} alt="" />
    //                                                     </div>
    //                                                     <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
    //                                                         <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={PayPal} alt="" />
    //                                                     </div>
    //                                                     <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
    //                                                         <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={IPay} alt="" />
    //                                                     </div>
    //                                                     <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
    //                                                         <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={Payoneer} alt="" />
    //                                                     </div>
    //                                                     <div className="xl:w-2/12 border-gray-200 hover:border-price xl:border-2 justify-center flex rounded-md xl:m-1">
    //                                                         <img className="xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 xl:h-10" src={BitCoin} alt="" />
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    
    
    //                                             <form className="lg:mt-4">
    //                                                 <div className="flex justify-center">
    //                                                     <div className="mb-3 xl:w-full">
    //                                                         <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Email Address <sup>*</sup></label>
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="Enter Email Address"
    //                                                         />
    //                                                     </div>
    //                                                 </div>
    
    //                                                 <div className="flex justify-center">
    //                                                     <div className="mb-3 xl:w-full">
    //                                                         <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Cardholder Name <sup>*</sup></label>
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="Enter Cardholder Name"
    //                                                         />
    //                                                     </div>
    //                                                 </div>
    
    //                                                 <div className="flex justify-center">
    //                                                     <div className="mb-3 xl:w-full">
    //                                                         <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Card Details <sup>*</sup></label>
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="0000 0000 0000 0000"
    //                                                         />
    //                                                     </div>
    //                                                 </div>
    
    
    //                                                 <div className="flex">
    //                                                     <div className="mb-3 xl:w-1/2 xl:mr-4">
    //                                                         <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Expiry <sup>*</sup></label>
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="MM/YY"
    //                                                         />
    //                                                     </div>
    
    //                                                     <div className="mb-3 xl:w-1/2 xl:ml-4">
    //                                                         <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">CVC <sup>*</sup></label>
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="000"
    //                                                         />
    //                                                     </div>
    //                                                 </div>
    
    
    
    //                                                 <div className="flex flex-wrap">
    //                                                     <div className="xl:w-full">
    //                                                         <ReactFlagsSelect
    //                                                             selected={selected}
    //                                                             onSelect={onSelect}
    //                                                             showSelectedLabel={showSelectedLabel}
    //                                                             showSecondarySelectedLabel={showSecondarySelectedLabel}
    //                                                             selectedSize={selectedSize}
    //                                                             showOptionLabel={showOptionLabel}
    //                                                             showSecondaryOptionLabel={showSecondaryOptionLabel}
    //                                                             optionsSize={optionsSize}
    //                                                             placeholder={placeholder}
    //                                                             searchable={searchable}
    //                                                             searchPlaceholder={searchPlaceholder}
    //                                                             alignOptionsToRight={alignOptionsToRight}
    //                                                             fullWidth={fullWidth}
    //                                                             disabled={disabled}
    //                                                         />
    //                                                     </div>
    
    
    //                                                     <div className="mb-3 xl:w-1/2 xl:-mt-1">
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded-l block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="Zip"
    //                                                         />
    //                                                     </div>
    
    //                                                     <div className="mb-3 xl:w-1/2 xl:-mt-1">
    //                                                         <input
    //                                                             type="text"
    //                                                             className="form-control rounded-r block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             id="exampleFormControlInput1"
    //                                                             placeholder="State"
    //                                                         />
    //                                                     </div>
    //                                                 </div>
    
    
    //                                                 <div className="flex flex-wrap">
    //                                                     <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Apply Cupon</label>
    
    //                                                     <div className="relative w-full">
    //                                                         <input
    //                                                             type="search"
    //                                                             id="search-dropdown"
    //                                                             className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //                                                             placeholder="Enter Code"
    //                                                         />
    //                                                         <button type="submit"
    //                                                             className="absolute top-0 right-0 pt-2.5 pb-2.5 pl-5 pr-5 text-sm font-medium text-white bg-pagination rounded-r-lg border border-pagination hover:bg-pagination focus:ring-4 focus:outline-none focus:ring-blue-300">Apply</button>
    //                                                     </div>
    //                                                 </div>
    
    //                                                 <div className="flex flex-wrap">
    //                                                     <Link  to="/cart-checkout-payment" data-mdb-ripple="true"
    //                                                         data-mdb-ripple-color="light"
    //                                                         className="flex text-center justify-center xl:h-12 btn-block cursor-pointer bg-maincolor rounded-sm xl:text-sm text-white xl:mt-5">
    //                                                         <span className="justify-center text-center xl:mt-3 xl:ml-24">Proceed to Pay</span>
    //                                                         <FaArrowRight className="xl:mt-4 xl:pl-12px ml-24 " />
    //                                                     </Link>
    //                                                 </div>
    //                                             </form>
    
    
    //                                         </div>
    //                                     </div>
    
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //         </Fragment >
    //     );
    // }
    // else if (isLoading === false) {
        return (
            <Fragment>
                <section className="h-screen bg-checkout">
                    <div className="container 2xl:pl-32 2xl:pr-32 xl:pl-20 xl:pr-20 lg:pl-12 lg:pr-12 xl:pt-10 lg:pt-8 lg:pb-8"> 
                        <div className="flex justify-center items-center flex-wrap text-gray-800">
                            <div className="xl:w-full">
                                <div className="block bg-white xl:rounded-lg lg:rounded-md shadow-lg">
                                    <div className="lg:flex lg:flex-wrap g-0">
    
                                        <div className="lg:w-6/12 xl:rounded-lg lg:rounded-md bg-gray-100 flex xl:px-4 lg:px-7">
                                            <div className="xl:mt-12 lg:mt-10 w-full">
                                                <h6 className="xl:text-2xl lg:text-xl text-maingray font-semibold xl:ml-5">Cart items</h6>
                                                <h6 className="lg:text-xs text-maingray xl:font-normal xl:ml-5">You have 7 courses in your cart</h6>
    
                                                <div className="flex flex-wrap w-full xl:mt-4 xl:pl-4 xl:pr-4">
                                                    {
                                                        AddToCartCheckOutDataSuccess
                                                    }
                                                </div>
    
                                                {/* <div className="bg-white opacity-50 cart-checkout-shadow-card-height-width -mt-20 justify-center text-center flex"> </div> */}
    
                                                <div className="flex flex-wrap xl:mt-3 lg:mt-4">
                                                    <div className="lg:w-full bg-white border-price border xl:ml-5 xl:mr-5 xl:pl-5 xl:pt-5 xl:pb-5 lg:p-3 rounded-xl">
                                                        <div className="flex flex-wrap">
                                                            <div className="lg:w-1/2 flex">
                                                                <h6 className="text-sm text-cart-item-title lg:font-medium">Subtotal</h6>
                                                            </div>
                                                            <div className="lg:w-1/2">
                                                                <div className="float-right flex">
                                                                    <h6 className="text-sm text-cart-item-title lg:font-medium xl:mr-5">${subTotal}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        <div className="flex flex-wrap">
                                                            <div className="lg:w-1/2 flex">
                                                                <h6 className="text-sm text-cart-item-title lg:font-medium">Tax</h6>
                                                            </div>
                                                            <div className="lg:w-1/2">
                                                                <div className="float-right flex">
                                                                    <h6 className="text-sm text-cart-item-title lg:font-medium xl:mr-5">${tax}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
    
    
                                                        <div className="flex flex-wrap">
                                                            <div className="lg:w-1/2 flex">
                                                                <h6 className="text-sm text-cart-item-title lg:font-medium">Cupon <span className="text-xs text-gray-500 font-light">({coupon_percentage}% OFF)</span></h6>
                                                            </div>
                                                            <div className="lg:w-1/2">
                                                                <div className="float-right flex">
                                                                    <h6 className="text-sm text-cart-item-title lg:font-medium xl:mr-5">-${coupon}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="flex flex-wrap xl:mt-3 lg:mt-4">
                                                    <div className="lg:w-full bg-price border-price border xl:ml-5 xl:mr-5 xl:pl-5 lg:px-4 xl:pt-3 xl:pb-3 lg:py-3 rounded-lg">
                                                        <div className="flex flex-wrap">
                                                            <div className="lg:w-1/2 flex">
                                                                <h6 className="text-base text-white xl:font-medium">Total</h6>
                                                            </div>
                                                            <div className="lg:w-1/2">
                                                                <div className="float-right flex">
                                                                    <h6 className="text-xl text-white xl:font-semibold xl:mr-5">${total}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </div>
    
                                        <div className="lg:w-6/12 xl:px-4 md:px-0">
                                            <div className="md:p-8 md:mx-3">
                                                <div className="justify-start">
                                                    <h4 className="xl:text-2xl lg:text-xl text-maingray lg:font-semibold lg:mt-2">Payment Details</h4>
                                                    <h6 className="text-xs text-maingray xl:font-light">Complete your purchase by providing payment details</h6>
                                                </div>
    
    
                                                <div className="flex flex-wrap lg:mt-4">
                                                    <div className="w-full flex">
                                                        <div className="lg:w-2/12 border-gray-200 hover:border-price lg:border-2 justify-center flex rounded-md lg:m-1">
                                                            <img className="lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 lg:h-10" src={Visa} alt="" />
                                                        </div>
                                                        <div className="lg:w-2/12 border-gray-200 hover:border-price lg:border-2 justify-center flex rounded-md lg:m-1">
                                                            <img className="lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 lg:h-10" src={MasterCard} alt="" />
                                                        </div>
                                                        <div className="lg:w-2/12 border-gray-200 hover:border-price lg:border-2 justify-center flex rounded-md lg:m-1">
                                                            <img className="lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 lg:h-10" src={PayPal} alt="" />
                                                        </div>
                                                        <div className="lg:w-2/12 border-gray-200 hover:border-price lg:border-2 justify-center flex rounded-md lg:m-1">
                                                            <img className="lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 lg:h-10" src={IPay} alt="" />
                                                        </div>
                                                        <div className="lg:w-2/12 border-gray-200 hover:border-price lg:border-2 justify-center flex rounded-md lg:m-1">
                                                            <img className="lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 lg:h-10" src={Payoneer} alt="" />
                                                        </div>
                                                        <div className="lg:w-2/12 border-gray-200 hover:border-price lg:border-2 justify-center flex rounded-md lg:m-1">
                                                            <img className="lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 lg:h-10" src={BitCoin} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
    
    
                                                <form className="lg:mt-4">
                                                    <div className="flex justify-center">
                                                        <div className="mb-3 lg:w-full">
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
                                                        <div className="mb-3 lg:w-full">
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
                                                        <div className="mb-3 lg:w-full">
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
                                                        <div className="mb-3 xl:w-1/2 xl:mr-4 lg:mr-1">
                                                            <label for="exampleFormControlInput1" className="form-label text-sm inline-block mb-2 text-maingray">Expiry <sup>*</sup></label>
                                                            <input
                                                                type="text"
                                                                className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                id="exampleFormControlInput1"
                                                                placeholder="MM/YY"
                                                            />
                                                        </div>
    
                                                        <div className="mb-3 xl:w-1/2 xl:ml-4 lg:ml-1">
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
                                                        <div className="lg:w-full">
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
    
    
                                                        <div className="mb-3 lg:w-1/2 lg:-mt-1">
                                                            <input
                                                                type="text"
                                                                className="form-control rounded-l block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                id="exampleFormControlInput1"
                                                                placeholder="Zip"
                                                            />
                                                        </div>
    
                                                        <div className="mb-3 lg:w-1/2 lg:-mt-1">
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
                                                                value={couponCode}
                                                                onChange={e => SetCouponCode(e.target.value)}
                                                                className="form-control rounded block w-full px-3 py-2.5 text-sm font-normal text-maingray bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                placeholder="Enter Code"
                                                            />
                                                            <button 
                                                                onClick={CouponCodeSubmit}
                                                                className="absolute top-0 right-0 pt-2.5 pb-2.5 pl-5 pr-5 text-sm font-medium text-white bg-pagination rounded-r-lg border border-pagination hover:bg-pagination focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                                Apply
                                                            </button>
                                                        </div>
                                                    </div>
    
                                                    <div className="flex flex-wrap">
                                                        <Link  to="/cart-checkout-payment" data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                            className="flex text-center justify-center xl:h-12 btn-block cursor-pointer bg-maincolor rounded-sm xl:text-sm text-white xl:mt-5 lg:mt-5">
                                                            <span className="justify-center text-center 2xl:mt-3 lg:mt-3 xl:mb-0 lg:mb-3 2xl:ml-24 xl:ml-20 lg:ml-16">Proceed to Pay</span>
                                                            <FaArrowRight className="lg:mt-4 2xl:pl-12px 2xl:ml-24 xl:ml-24 lg:ml-16" />
                                                        </Link>
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
    
// }
export default CartCheckout;