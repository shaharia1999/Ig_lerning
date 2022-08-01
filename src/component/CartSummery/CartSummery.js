import React, { Fragment, useState, useEffect } from "react";
import "../../asset/css/login.css";
import { FaArrowRight } from "react-icons/fa";
import CartCheckoutImg from '../../asset/images/checkout/course-cart-img.png';
import Heart from '../../asset/images/checkout/Heart.svg';
import Delete from '../../asset/images/checkout/Delete.svg';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { HiDotsVertical } from "react-icons/hi";
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";

function CartSummery() {
    const [subTotal, setSubTotal] = useState(0);
    const [Tax, setTax] = useState('0');
    const [coupon, setCoupon] = useState(0);
    const [total, setTotal] = useState(0);
    const [cartListData, setCartListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cart_id = localStorage.getItem('cart_id')
    console.log('cart id = ', cart_id);
    const MyCartDataLoad = () => {
        if (cart_id != null){
            setIsLoading(true);
            axios.get(`${ApiUrl.BaseUrl}api/course/add-to-cart-all-course-list/${cart_id}/`).then((response) => {
                if (response.data.error === false) {
                    setSubTotal(response.data.sub_total);
                    setTax(response.data.tax);
                    setCoupon(response.data.coupon);
                    setTotal(response.data.total);
                    setCartListData(response.data.data);
                    console.log('cartListData = ', response.data.data);
                    setIsLoading(false);
                }
            });
        }
    }

    useEffect(() => {
        var user_data = JSON.parse(localStorage.getItem('user_data'))
        console.log('user data = ', user_data);
        console.log('user data id = ', user_data['id']);
        var user_id = user_data['id']
        console.log('user id = ', user_id);
        if (user_id != null){
            let payload_data = {
                cart_id: cart_id,
                user_id: user_id
            }
            axios.post(`${ApiUrl.BaseUrl}api/course/cart-user-id-saved/`, payload_data).then((response) => {

            })
        }
        else{
            alert('login please')
        }
        MyCartDataLoad();
    }, [])

    const RemoveCartForList = (add_to_cart_course_id) => {
        console.log(add_to_cart_course_id);
        axios.delete(`${ApiUrl.BaseUrl}api/course/add-to-cart-course-remove/${add_to_cart_course_id}`).then((response) => {
            if (response.data.error === false) {
                MyCartDataLoad();
            }
        })
    }
    
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    const AddToCartDataLoading = (() => {
    })()

    const AddToCartDataSuccess = (() => {
        return cartListData.map((cartData, index) => (
            <div className="flex flex-wrap w-full xl:mt-4 xl:pl-8 xl:pr-8">
                <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 xl:px-1.5 w-full">
                    <div className="wrapper flex antialiased">
                        <div className="relative w-2/12">
                            <img className="w-24 h-24 xl:ml-1 xl:rounded-lg"
                                src={CartCheckoutImg} alt="" />
                        </div>

                        <div className="w-7/12 xl:ml-3">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h4 className="xl:mt-0 xl:text-base xl:font-medium leading-tight text-cart-item-title">
                                        {cartData['course_information'].course_title}
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:mt-1 xl:mb-0">
                                <div className="w-full">
                                    <div className="flex sm:justify-center xl:justify-start">
                                        <StarRatings
                                            rating={cartData['course_information'].avg_rating}
                                            starDimension="16px"
                                            starSpacing="3px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <span className="text-xs text-gray-300 xl:ml-3 xl:mt-1.5">({cartData['course_information'].avg_rating})</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 xl:pr-2">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="flex xl:justify-end">
                                        <span className="text-pagination xl:text-2xl xl:mr-2 xl:font-semibold">${cartData['course_information']['course_price_info'].new_price}</span>
                                        <HiDotsVertical className="mt-1 xl:font-semibold xl:text-xl text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap xl:mt-10 xl:pr-3 xl:justify-end">
                                <img onClick={() => RemoveCartForList(cartData.add_to_cart_course_id)}className="xl:h-5 xl:w-5 xl:mx-1" src={Delete} alt="" />
                                <img className="xl:h-5 xl:w-5 xl:mx-1" src={Heart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    })()

    if (isLoading === true) {
        return(
            <Fragment>
                <section className="md:h-screen bg-checkout">
                    <div className="container 2xl:pl-32 2xl:pr-32 xl:pl-20 xl:pr-20 lg:pl-10 lg:pr-10 md:pl-8 md:pr-8 xl:pt-10 lg:pt-10 md:pt-8">
                        <div className="flex justify-center flex-wrap text-gray-800">
                            <div className="lg:w-full md:w-full lg:flex">

                                <div className="block lg:w-7/12 md:w-full bg-white xl:rounded-lg md:rounded-md shadow-lg xl:ml-10 xl:mr-10 lg:ml-5 lg:mr-10">
                                    <div className="xl:flex xl:flex-wrap g-0">

                                        <div className="xl:w-full xl:rounded-lg md:rounded-md bg-white flex">
                                            <div className="xl:mt-12 lg:mt-8 md:mt-8 xl:mb-7 lg:mb-5 md:mb-5 w-full">
                                                <h6 className="xl:text-2xl lg:text-xl md:text-lg text-maingray font-semibold xl:ml-8 lg:ml-6 md:ml-8">Cart items</h6>
                                                <h6 className="text-xs text-maingray font-normal xl:ml-8 lg:ml-6 md:ml-8">Complete your purchase by providing payment details</h6>

                                                <div className="flex flex-wrap w-full xl:mt-4 lg:mt-3 md:mt-4 xl:pl-8 xl:pr-8 lg:pl-6 lg:pr-6 md:px-8">

                                                    <div className="my-1 px-1 bg-white p-2 rounded-lg shadow-lg xl:my-1 lg:my-1 xl:px-1.5 lg:px-1 w-full">
                                                        <div className="wrapper flex antialiased">
                                                            <div className="relative w-2/12">
                                                                <img className="2xl:w-24 2xl:h-24 xl:h-20 xl:w-20 lg:h-16 lg:w-16 md:h-20 md:w-20 xl:ml-1 lg:ml-1 md:ml-2 xl:rounded-lg md:rounded-md"
                                                                    src={CartCheckoutImg} alt="" />
                                                            </div>

                                                            <div className="w-7/12 xl:ml-3">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <h4 className="xl:mt-0 lg:-mt-0.5 2xl:text-base lg:text-sm md:text-sm md:font-medium xl:leading-tight lg:leading-none text-cart-item-title">
                                                                            How to handle google map API with handle google map node.js
                                                                        </h4>
                                                                    </div>
                                                                </div>

                                                                <div className="flex flex-wrap xl:mt-1 lg:mt-1 md:mt-1 xl:mb-0">
                                                                    <div className="w-full">
                                                                        <div className="flex sm:justify-center md:justify-start">
                                                                            <span className="text-gray-600 text-xs">77 Participients | 42 Total Hours | 32 Modules</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="flex flex-wrap 2xl:mt-1 xl:mt-0 xl:mb-0 lg:-mt-0.5 lg:mb-0">
                                                                    <div className="w-full">
                                                                        <div className="flex sm:justify-center md:justify-start">
                                                                            <StarRatings
                                                                                rating={3.5}
                                                                                starDimension="16px"
                                                                                starSpacing="3px"
                                                                                starRatedColor="rgb(251, 191, 36)"
                                                                            />
                                                                            <span className="text-xs text-gray-300 xl:ml-3 lg:ml-2 xl:mt-1.5 lg:mt-1.5">(3.5)</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="w-3/12 xl:pr-2 lg:pr-2 md:pr-3">
                                                                <div className="flex flex-wrap">
                                                                    <div className="w-full">
                                                                        <div className="flex md:justify-end">
                                                                            <span className="text-pagination xl:text-2xl lg:text-xl md:text-2xl xl:mr-2 lg:mr-2 xl:font-semibold md:font-medium">$90</span>
                                                                            <HiDotsVertical className="lg:mt-1 md:mt-1.5 xl:font-semibold xl:text-xl text-gray-400" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="flex w-full flex-wrap 2xl:mt-10 xl:mt-8 lg:mt-5 md:mt-7 xl:pr-3 lg:pr-2 md:pr-3 md:justify-end">
                                                                    <img className="xl:h-5 xl:w-5 md:h-4 md:w-4 xl:mx-1 md:mx-0.5" src={Delete} alt="" />
                                                                    <img className="xl:h-5 xl:w-5 md:h-4 md:w-4 xl:mx-1 md:mx-0.5" src={Heart} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* <div className="bg-white opacity-50 cart-checkout-shadow-card-height-width -mt-20 justify-center text-center flex"> </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="block lg:w-5/12 md:w-full cart-summery-card-height bg-white xl:rounded-lg md:rounded-md shadow-lg lg:mt-0 md:mt-5">
                                    <div className="xl:flex xl:flex-wrap">
                                        <div className="xl:w-full px-2 md:px-0">
                                            <div className="xl:mx-10 lg:mx-6 md:mx-8">
                                                <div className="justify-start">
                                                    <h4 className="xl:text-2xl lg:text-xl md:text-lg text-maingray font-semibold xl:mt-12 lg:mt-8 lg:pt-0 md:pt-8">Cart Summary</h4>
                                                    <h6 className="text-xs text-maingray xl:font-light">Click Proceed to pay button to buy the courses</h6>
                                                </div>

                                                <div className="flex flex-wrap xl:mt-8 lg:mt-5 md:mt-5">
                                                    <div className="xl:w-1/2 w-1/2 flex">
                                                        <h6 className="xl:text-base lg:text-sm md:text-base text-cart-item-title md:font-medium">Sub Total</h6>
                                                    </div>
                                                    <div className="xl:w-1/2 w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-base lg:text-sm md:text-base text-cart-item-title md:font-medium">$490</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="xl:mt-3 xl:mb-3 md:mt-2 md:mb-2"/>

                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-1/2 w-1/2 flex">
                                                        <h6 className="xl:text-base lg:text-sm md:text-base text-cart-item-title md:font-medium">Tax</h6>
                                                    </div>
                                                    <div className="xl:w-1/2 w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-base lg:text-sm md:text-base text-cart-item-title md:font-medium">$20</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="xl:mt-3 xl:mb-3 md:mt-2 md:mb-2"/>


                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-1/2 w-1/2 flex">
                                                        <h6 className="xl:text-base lg:text-sm md:text-base text-cart-item-title md:font-medium">Cupon <span className="text-xs text-gray-500 font-light">(30% OFF)</span></h6>
                                                    </div>
                                                    <div className="xl:w-1/2 w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-base lg:text-sm md:text-base text-cart-item-title md:font-medium">-$80</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                 <hr className="xl:mt-3 xl:mb-3 md:mt-2 md:mb-2 "/>

                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-1/2 w-1/2 flex">
                                                        <h6 className="xl:text-xl lg:text-base md:text-lg text-cart-item-title md:font-semibold">Total</h6>
                                                    </div>
                                                    <div className="xl:w-1/2 w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-xl lg:text-base md:text-lg text-cart-item-title md:font-semibold">$490</h6>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="flex flex-wrap xl:mt-8 lg:mt-6 md:mt-8">
                                                    <Link to="/cart-checkout" data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        className="flex text-center justify-center xl:h-12 btn-block cursor-pointer bg-maincolor rounded-sm xl:text-sm text-sm text-white xl:mt-5 lg:mt-4">
                                                        <span className="justify-center text-center xl:mt-3 lg:mt-2.5 lg:mb-2.5 md:mt-3 md:mb-3 xl:mb-auto xl:ml-24 lg:ml-24 md:ml-40">Proceed to Pay</span>
                                                        <FaArrowRight className="xl:mt-4 lg:mt-3 md:mt-4 xl:pl-12px xl:ml-24 lg:ml-20 md:ml-40" />
                                                    </Link>
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
        )
    }
    else if (isLoading === false) {
        return (
            <Fragment>
                <section className="md:h-screen bg-checkout">
                    <div className="container xl:pl-32 xl:pr-32  xl:pt-10">
                        <div className="flex justify-center flex-wrap text-gray-800">
                            <div className="xl:w-full flex">
                                <div className="block xl:w-7/12 bg-white xl:rounded-lg shadow-lg xl:ml-10 xl:mr-10">
                                    <div className="xl:flex xl:flex-wrap g-0">

                                        <div className="xl:w-full xl:rounded-lg bg-white flex">
                                            <div className="xl:mt-12 xl:mb-7 w-full">
                                                <h6 className="xl:text-2xl text-maingray xl:font-semibold xl:ml-8">Cart items</h6>
                                                <h6 className="xl:text-xs text-maingray xl:font-normal xl:ml-8">Complete your purchase by providing payment details</h6>

                                                {
                                                    AddToCartDataSuccess
                                                }

                                                <div className="bg-white opacity-50 cart-checkout-shadow-card-height-width -mt-20 justify-center text-center flex"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="block xl:w-5/12 cart-summery-card-height bg-white xl:rounded-lg shadow-lg">
                                    <div className="xl:flex xl:flex-wrap">
                                        <div className="xl:w-full px-2 md:px-0">
                                            <div className="mx-10">
                                                <div className="justify-start">
                                                    <h4 className="text-2xl text-maingray xl:font-semibold xl:mt-12">Cart Summary</h4>
                                                    <h6 className="text-xs text-maingray xl:font-light">Click Proceed to pay button to buy the courses</h6>
                                                </div>


                                                <div className="flex flex-wrap xl:mt-8">
                                                    <div className="xl:w-1/2 flex">
                                                        <h6 className="xl:text-base text-cart-item-title xl:font-medium">Sub Total</h6>
                                                    </div>
                                                    <div className="xl:w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-base text-cart-item-title xl:font-medium">${subTotal}</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="xl:mt-3 xl:mb-3"/>

                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-1/2 flex">
                                                        <h6 className="xl:text-base text-cart-item-title xl:font-medium">Tax</h6>
                                                    </div>
                                                    <div className="xl:w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-base text-cart-item-title xl:font-medium">${Tax}</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="xl:mt-3 xl:mb-3"/>


                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-1/2 flex">
                                                        <h6 className="xl:text-base text-cart-item-title xl:font-medium">Cupon <span className="text-xs text-gray-500 font-light">(30% OFF)</span></h6>
                                                    </div>
                                                    <div className="xl:w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-base text-cart-item-title xl:font-medium">-${coupon}</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="xl:mt-3 xl:mb-3"/>

                                                <div className="flex flex-wrap">
                                                    <div className="xl:w-1/2 flex">
                                                        <h6 className="xl:text-xl text-cart-item-title xl:font-semibold">Total</h6>
                                                    </div>
                                                    <div className="xl:w-1/2">
                                                        <div className="float-right flex">
                                                            <h6 className="xl:text-xl text-cart-item-title xl:font-semibold">${total}</h6>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="flex flex-wrap xl:mt-8">
                                                    <Link to="/cart-checkout" data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        className="flex text-center justify-center xl:h-12 btn-block cursor-pointer bg-maincolor rounded-sm xl:text-sm text-white xl:mt-5">
                                                        <span className="justify-center text-center xl:mt-3 xl:ml-24">Proceed to Pay</span>
                                                        <FaArrowRight className="xl:mt-4 xl:pl-12px ml-24 " />
                                                    </Link>
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
        )
    }
}
export default CartSummery;