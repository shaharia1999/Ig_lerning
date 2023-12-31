import React, { Fragment, useEffect, useState, useRef } from "react";
import SpeedMeter from "../../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../../asset/images/icon/icon_share.png";
import ApiUrl from "../../../../Api/ApiUrl";
import Play from "../../../../asset/images/icon/play.png";
import CourseLogo from "../../../../asset/images/logo/course-logo.svg";
import book from "../../../../asset/images/shaharia/book.png";
import book2 from "../../../../asset/images/shaharia/0.png";
import book3 from "../../../../asset/images/shaharia/2.png";
import book4 from "../../../../asset/images/shaharia/3.png";
import book5 from "../../../../asset/images/shaharia/4.png";
import book6 from "../../../../asset/images/shaharia/5.png";
import green from "../../../../asset/images/shaharia/g.png";
import white from "../../../../asset/images/shaharia/white.png";
import book7 from "../../../../asset/images/shaharia/NoPath - Copy (4).png";
import 'tw-elements';
import axios from "axios";
import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                marginTop: "-35px",
                right: "-45px",
                opacity: "1",
                display: "block",
                background: "#ffffff",

                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "20px",
                position: "absolute",
                width: "40px",
                height: "40px",
                transform: "translate(0%, 0px)",
                cursor: "pointer",
                color: "transparent",
                border: "none",
                outline: "none",
                borderRadius: "50px",
            }}
            onClick={onClick}
        >
            <span className="slide-arrow-font-next"><MdOutlineArrowForwardIos /></span>
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                marginTop: "-35px",
                left: "-45px",
                opacity: "1",
                display: "block",
                background: "#ffffff",

                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "20px",
                position: "absolute",
                width: "40px",
                height: "40px",
                transform: "translate(0%, 0px)",
                cursor: "pointer",
                color: "transparent",
                border: "none",
                outline: "none",
                borderRadius: "50px",
            }}
            onClick={onClick}
        >
            <span className="slide-arrow-font-previous"><MdOutlineArrowBackIos /></span>
        </button>
    );
}

function BusinessCompany() {

    function playPause(videoID) {
        var myVideo = document.getElementById(videoID);

        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }


    const [subCategory, setSubCategory] = useState([]);
    const [recently_addedsubcategoryId, setSubcategoryID] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [course_isLoading, setCourseIsLoading] = useState(false);

    const [nav9, setNav9] = useState();
    const slider9 = useRef();

    useEffect(() => {
        setIsLoading(true);
        setCourseIsLoading(true);

        axios.get(`${ApiUrl.BaseUrl}api/course/course-subcategory-response/`).then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
                setSubcategoryID(response.data.data);
                setIsLoading(false);
                setCourseIsLoading(false);
            }
        });
    }, []);

    const fetchData = (sub_category_id) => {
        console.log('seleceted sub category id called');
        setCourseIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/course-subcategory-response/${sub_category_id}/`).then((res) => {
            if (res.data.error === false) {
                setSubcategoryID(res.data.data);
                setCourseIsLoading(false);
            }
        });
    };

    const Subcategory_Loading = (() => {
        if (isLoading === true) {
            return (
                <>
                    <li className="nav-item  mx-2">
                        <div className="bg-maincolor dark:bg-dark-scleton2 dark:text-white w-auto px-6 py-3 my-2 md:mr-2 h-8 rounded flex justify-center items-center text-white">Business</div>
                    </li>

                    <li className="nav-item  mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 dark:text-white w-auto px-6 py-3 my-2 md:mr-2 h-8 rounded flex justify-center items-center">Finance</div>
                    </li>

                    <li className="nav-item  mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 dark:text-white w-auto px-6 py-3 my-2 md:mr-2 h-8 rounded flex justify-center items-center">IA & Big Data</div>
                    </li>

                    <li className="nav-item  mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 dark:text-white w-auto px-6 py-3 my-2 md:mr-2 h-8 rounded flex justify-center items-center">Digital Marketing</div>
                    </li>

                    {/* <li className="nav-item  mx-2">
                        <div className="bg-gray-300 dark:bg-dark-scleton2 dark:text-white w-auto px-6 py-3 my-2 md:mr-2 h-8 rounded"></div>
                    </li> */}
                </>
            )
        }
    })()

    const data_of_subcategory = (() => {
        if (isLoading === false) {
            return subCategory.map((subcategory, index) => (
                <div key={index}>
                    <input id={subcategory.sub_category_id} type='hidden' name={subcategory.sub_category_id} />
                    <li className="list-none mx-2">
                        <button type="button"
                            className="inline-block w-full display md:w-auto 2xl:px-10 xl:px-10 lg:px-8 md:px-6 px-3 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 2xl:text-base xl:text-base lg:text-sm text-xs bg-maincolor 2xl:font-normal xl:font-normal lg:font-normal leading-tight text-white rounded-3xl xl:h-11 h-10"
                            onClick={() => fetchData(subcategory.sub_category_id)}
                        >
                            {subcategory.sub_category_name}
                           
                        </button>
                    </li>
                </div>
            ));
        }
    })()

    const subcategory_course_Loading = (() => {
        if (course_isLoading === true) {
            return (
                <>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3" >
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                            <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book} className=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">``
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book7}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book2}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book3}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book4}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book5}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/4 ">
                        <div className="wrapper">
                            <div className="relative">
                                <div className="w-full h-72 bg-white dark:bg-dark-scleton1 rounded-xl shadow-lg"></div>
                                <div className="flex flex-wrap">

                                    <div className="w-1/5">
                                        <div className="absolute ml-4 top-0 bg-gray-100 dark:bg-dark-scleton2 dark:text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3">
                                            <img src={CourseLogo}></img>
                                        </div>
                                    </div>
                                    <div className="w-4/5 xl:pl-3">
                                        <div className="absolute top-0 mt-5">
                                            <div className= "dark:text-white xl:w-56 h-4 rounded">ABC Learning Center</div>
                                            <div className="  dark:text-white xl:w-6/12 h-4 mt-2 rounded">45 mins</div>
                                                <div className="xl:h-32 xl:mt-6 xl:-ml-20 rounded-sm bg-gray-100  dark:text-white">
                                                <img src={book6}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 p-3 rounded-lg shadow-lg">
                                      <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <div className="mt-1.5   dark:text-white xl:w-10/12 h-4 rounded">Training English Course</div>
                                            <div className="mt-1.5   dark:text-white xl:w-6/12 h-4 rounded">Learn Online</div>
                                            <div className="mt-1.5   dark:text-white xl:w-8/12 h-4 rounded">77 Participants</div>
                                            <div className="mt-1.5   dark:text-white xl:w-7/12 h-4 rounded">rating (4.5)</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3">
                                            <div className="flex sm:justify-center xl:justify-start">
                                                <div className="mt-3 mx-1 bg-[#7CCC15] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img src={green}></img></div>
                                                <div className="mt-3 mx-1 bg-[#0ea4c5] dark:bg-dark-scleton2 dark:text-white w-7 h-7 rounded flex justify-center items-center"><img scr={white}></img></div>
                                                <div className="mt-3 mx-1 bg-[#F5A625] dark:bg-dark-scleton2 dark:text-white w-7 h-7 flex justify-center items-center rounded"><img src={green}></img></div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 relative">
                                            <div className="flex sm:justify-center xl:justify-start right-0 absolute">
                                                <div className="mt-3 mx-1 px-2 py-1 bg-gray-100 dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-master-degree-text">Heart</div>
                                                <div className="mt-3 mx-1 px-2 py-1 bg-[#D76E2D] dark:bg-dark-scleton2 dark:text-white w-auto h-7 rounded text-white">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    })()

    const data_of_subcategory_course = (() => {
        if (course_isLoading === false) {
            return recently_addedsubcategoryId.map((sub_category_course) => (
                sub_category_course.course_info.map((course, course_index) => (
                    <div key={course_index} className="my-1 px-1 w-full 2xl:my-8 xl:my-8 lg:my-8 2xl:px-5 xl:px-2 lg:px-2 2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:1/3">
                        <div className="wrapper antialiased text-gray-900">
                            <div className="relative">
                                {/* <video type="video/mp4" muted
                                    loop className="w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                    src={ApiUrl.ImageBaseUrl + course.promotional_video}></video> */}


                                <video
                                    id="my-video"
                                    // class="video-js"
                                    class="video-js vjs-theme-fantasy vjs-big-play-centered vjs-big-play-button w-full vid xl:h-72 h-56 object-cover object-center rounded-lg shadow-md"
                                    controls
                                    preload="auto"
                                    // autoPlay={true}
                                    muted
                                    // aspectRatio="4:3"
                                    // width="1020px"
                                    // height="576px"
                                    poster="https://futurevisioncomputers.com/wp-content/uploads/2021/03/computer_institute_banner_classes_in_surat-scaled-1024x576.jpg"
                                    data-setup='{}'
                                >
                                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                                    <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
                                    <p class="vjs-no-js">
                                        To view this video please enable JavaScript, and consider upgrading to a
                                        web browser that
                                        <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">supports HTML5 video</a>
                                    </p>
                                </video>



                                <div className="flex flex-wrap">
                                    <div className="w-1/5">
                                        <a href="!#">
                                            <div
                                                className="text-sm absolute top-0 2xl:left-4 xl:left-4 lg:left-3 left-4 bg-black text-white rounded-full 2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                <img className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 lg:h-8 lg:w-8 h-6 w-6" src={CourseLogo} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-4/5">
                                        <a href="!#">
                                            <div className="text-lg absolute top-0 2xl:mt-3 xl:mt-3 lg:mt-3 mt-3 ml-3">
                                                <h6 className="xl:font-medium font-normal xl:text-lg text-sm text-white dark:text-white">{course?.channel_name?.channel_name}</h6>
                                                <h6 className="font-light xl:text-sm text-xs text-white dark:text-white">{course.course_duration} min</h6>
                                                
                                                {/* <img className="2xl:h-36 xl:h-32 lg:h-24 h-24 2xl:ml-4 xl:ml-3 lg:ml-2" src={Play} alt="" /> */}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative 2xl:px-4 xl:px-4 px-2 -mt-16">
                                <div className="bg-white dark:bg-dark-color2 xl:h-36 p-3 rounded-lg shadow-lg">
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <h4 className="mt-1 xl:text-base lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium xl:leading-tight leading-none text-CourseTitle dark:text-white">
                                                {`${course.course_title.substring(0, 40)}...`}
                                            </h4>
                                        </div>
                                        {/* <div className="w-1/5 justify-end flex">
                                            <button
                                                className="text-sm font-extralight leading-tight bg-LiveBtnColor text-white h-6 xl:pl-3 xl:pr-3 xl:pt-1 xl:pb-1 rounded">Live
                                            </button>
                                        </div> */}
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-2/3">
                                            <div className="flex sm:justify-center xl:justify-start lg:justify-start">
                                                <span className="text-gray-600 xl:text-sm text-xs">77 Participients</span>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="flex relative sm:justify-center xl:justify-start">
                                                <span
                                                    className="text-maincolor xl:text-lg text-base font-medium inset-y-0 right-0 absolute">${course?.course_price[0]?.new_price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="flex sm:justify-center xl:justify-start lg:justify-start">
                                        <StarRatings
                                            rating={course.avg_rating}
                                            starDimension="15px"
                                            starSpacing="4px"
                                            starRatedColor="rgb(251, 191, 36)"
                                        />
                                        <h6 className="xl:mb-4 mb-2 mx-1 xl:text-sm text-xs font-normal text-client-section-des 2xl:mt-1 xl:mt-0.5 mt-1.5">({course.avg_rating})</h6>
                                    </ul>

                                    <div className="flex flex-wrap">
                                        <div className="2xl:w-6/12 xl:w-5/12 lg:w-5/12 w-5/12">
                                            <div className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1">
                                                <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={SpeedMeter} alt="" /></a>
                                                <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={ShareIcon} alt="" /></a>
                                                <a><img className="2xl:px-1 px-0.5 2xl:h-6 2xl:w-8 xl:h-6 xl:w-7 lg:h-5 lg:w-7 h-4 w-5" src={CertificateIcon} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="2xl:w-6/12 xl:w-7/12 lg:w-7/12 w-7/12 relative">
                                            <div
                                                className="flex sm:justify-center xl:justify-start 2xl:-mt-1.5 xl:-mt-1.5 -mt-1 right-0 absolute">
                                                <button
                                                    className="text-sm font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-0.5 2xl:pr-0.5 2xl:pt-1 2xl:pb-1 xl:pl-1 xl:pr-1 xl:mr-1 lg:pt-0.5 lg:pb-0.5 lg:pl-0.5 lg:pr-0.5 lg:mr-1 pr-0 pl-0 rounded-sm">
                                                    <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:h-3 xl:w-4 lg:h-3 lg:w-3 h-3 w-5" src={LoveIcon} alt="" />
                                                </button>
                                                <button
                                                    className="2xl:text-sm xl:text-sm lg:text-xs text-xs font-extralight leading-tight bg-maincolor text-white xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1 pr-0.5 pl-0.5 rounded-sm">Enroll
                                                    Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ));
        }
    })()

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container my-12">
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/3 w-full">
                            <div className="flex">
                                <h4 className="xl:text-4xl text-xl font-semibold text-sectionTitleColor dark:text-white ml-3">Recently Added
                                    Course</h4>
                            </div>
                        </div>
                        <div className="w-2/3 relative">
                            <div className="flex right-0 absolute">
                                <div className="mb-4">
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                        {
                                            Subcategory_Loading
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className=" fade show active">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                {
                                    subcategory_course_Loading
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    else if (isLoading === false) {


        var settings = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        rows: 1,
                        arrows: false
                    }
                }
            ]
        };


        var settings1 = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        rows: 1,
                        arrows: false,
                    }
                },
            ]
        };


        return (
            <Fragment>
                <div className="container 2xl:my-12 xl:my-12 lg:my-2 md:my-4 sm:my-2 my-12 2xl:px-16 xl:px-12 lg:px-16 md:px-8 sm:px-8">
                    <div className="flex flex-wrap">
                        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full">
                            <div className="flex">
                                <h4 className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-sectionTitleColor dark:text-white 2xl:ml-6 xl:ml-4 lg:ml-3 md:ml-2 sm:ml-4 ml-4 -mt-6">Recently Added
                                   </h4>
                            </div>
                        </div>
                        <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full relative 2xl:-mt-9 xl:-mt-9 lg:-mt-9 md:mt-3 mt-4">
                            <Slider
                                {...settings}
                                slidesToShow={4}
                                focusOnSelect={false}
                                dots={false}
                                adaptiveHeight={false}
                                infinite={true}
                                slidesToScroll={1}
                                loop={true}
                                speed={200}
                                autoplay={false}
                                autoplaySpeed={1500}
                                swipeToSlide={true}
                                arrows={false}
                                variableWidth={true}
                            >
                                {
                                    data_of_subcategory
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="2xl:mt-1 xl:-mt-16 lg:-mt-16 md:mt-4">
                        <div className="fade show active">
                            <div className="-mx-1 px-1">
                                <Slider
                                    {...settings1}
                                    ref={(slider9) => setNav9(slider9)}
                                    slidesToShow={4}
                                    focusOnSelect={false}
                                    dots={false}
                                    adaptiveHeight={false}
                                    infinite={true}
                                    slidesToScroll={1}
                                    loop={true}
                                    speed={100}
                                    autoplay={true}
                                    autoplaySpeed={3000}
                                    swipeToSlide={true}
                                    rows={1}
                                    nextArrow={<SampleNextArrow />}
                                    prevArrow={<SamplePrevArrow />}
                                >
                                    {
                                        data_of_subcategory_course
                                    }
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BusinessCompany;