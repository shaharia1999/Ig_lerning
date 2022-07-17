import React, { useState, Fragment, useRef } from 'react';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function OurOfficeMobile() {
    const [nav10, setNav10] = useState();
    const slider10 = useRef();

    var settings = {
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    
    return (
        <Fragment>
            <div className="container mt-8 mb-12">
                <h4 className="text-2xl	font-semibold text-sectionTitleColor text-center mt-12 mb-8 dark:text-white">Our Offices</h4>
                <div className=" mt-6 px-5">

                    <Slider
                        {...settings}
                        ref={(slider10) => setNav10(slider10)}
                        slidesToShow={2}
                        dots={true}
                        adaptiveHeight={true}
                        infinite={true}
                        slidesToScroll={1}
                        loop={true}
                        speed={1000}
                        height={600}
                        autoplay={false}
                        autoplaySpeed={1500}
                        swipeToSlide={true}
                        arrows={false}
                    >

                        <div className="w-1/2 px-1 py-2">
                            <div className="bg-white dark:bg-dark-color1 dark:border-dark-color1 rounded-2xl hover:shadow-lg hover:border-maincolor hover:dark:bg-dark-color2 hover:dark:border-maincolor border-2 border-white p-3 w-auto">
                                <p className="text-sectionTitleColor dark:text-white text-lg mb-6 font-semibold">Italy Office</p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiPhoneCall className="h-3 w-3 mr-2 text-maincolor" />
                                    +39 314 364 0429
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiMail className="h-5 w-5 mr-2 text-maincolor" />
                                    info@intellogeek.com
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <HiOutlineLocationMarker className="h-6 w-6 mr-2 text-maincolor" />
                                    Via Torricelli 19, Concei,
                                    Trento - 38060
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 px-1 py-2">
                            <div className="bg-white dark:bg-dark-color1 dark:border-dark-color1 rounded-2xl hover:shadow-lg hover:border-maincolor hover:dark:bg-dark-color2 hover:dark:border-maincolor border-2 border-white p-3 w-auto">
                                <p className="text-sectionTitleColor dark:text-white text-lg mb-6 font-semibold">France Office</p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiPhoneCall className="h-3 w-3 mr-2 text-maincolor" />
                                    +39 314 364 0429
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiMail className="h-5 w-5 mr-2 text-maincolor" />
                                    info@intellogeek.com
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <HiOutlineLocationMarker className="h-6 w-6 mr-2 text-maincolor" />
                                    Via Torricelli 19, Concei, Trento - 38060
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 px-1 py-2">
                            <div className="bg-white dark:bg-dark-color1 dark:border-dark-color1 rounded-2xl hover:shadow-lg hover:border-maincolor hover:dark:bg-dark-color2 hover:dark:border-maincolor border-2 border-white p-3 w-auto">
                                <p className="text-sectionTitleColor dark:text-white text-lg mb-6 font-semibold">USA Office</p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiPhoneCall className="h-3 w-3 mr-2 text-maincolor" />
                                    +39 314 364 0429
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiMail className="h-5 w-5 mr-2 text-maincolor" />
                                    info@intellogeek.com
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <HiOutlineLocationMarker className="h-6 w-6 mr-2 text-maincolor" />
                                    Via Torricelli 19, Concei, Trento - 38060
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 px-1 py-2">
                            <div className="bg-white dark:bg-dark-color1 dark:border-dark-color1 rounded-2xl hover:shadow-lg hover:border-maincolor hover:dark:bg-dark-color2 hover:dark:border-maincolor border-2 border-white p-3 w-auto">
                                <p className="text-sectionTitleColor dark:text-white text-lg mb-6 font-semibold">India Office</p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiPhoneCall className="h-3 w-3 mr-2 text-maincolor" />
                                    +39 314 364 0429
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiMail className="h-5 w-5 mr-2 text-maincolor" />
                                    info@intellogeek.com
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <HiOutlineLocationMarker className="h-6 w-6 mr-2 text-maincolor" />
                                    Via Torricelli 19, Concei, Trento - 38060
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 px-1 py-2">
                            <div className="bg-white dark:bg-dark-color1 dark:border-dark-color1 rounded-2xl hover:shadow-lg hover:border-maincolor hover:dark:bg-dark-color2 hover:dark:border-maincolor border-2 border-white p-3 w-auto">
                                <p className="text-sectionTitleColor dark:text-white text-lg mb-6 font-semibold">Cameroon Office</p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiPhoneCall className="h-3 w-3 mr-2 text-maincolor" />
                                    +39 314 364 0429
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiMail className="h-5 w-5 mr-2 text-maincolor" />
                                    info@intellogeek.com
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <HiOutlineLocationMarker className="h-6 w-6 mr-2 text-maincolor" />
                                    Via Torricelli 19, Concei, Trento - 38060
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 px-1 py-2">
                            <div className="bg-white dark:bg-dark-color1 dark:border-dark-color1 rounded-2xl hover:shadow-lg hover:border-maincolor hover:dark:bg-dark-color2 hover:dark:border-maincolor border-2 border-white p-3 w-auto">
                                <p className="text-sectionTitleColor dark:text-white text-lg mb-6 font-semibold">Senegal Office</p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiPhoneCall className="h-3 w-3 mr-2 text-maincolor" />
                                    +39 314 364 0429
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <FiMail className="h-5 w-5 mr-2 text-maincolor" />
                                    info@intellogeek.com
                                </p>
                                <p className="text-des-gray dark:text-white text-sm font-normal mt-2 flex">
                                    <HiOutlineLocationMarker className="h-6 w-6 mr-2 text-maincolor" />
                                    Via Torricelli 19, Concei, Trento - 38060
                                </p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </Fragment>
    );
}
export default OurOfficeMobile;