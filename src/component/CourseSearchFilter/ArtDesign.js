import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import demoImg from '../../asset/images/course-thumbnail/course-thumbnail.png'
import courseLogo from '../../asset/images/logo/course-logo.svg'
import Heart from '../../asset/images/checkout/Heart.svg'
import loveIcon from '../../asset/images/icon/love-icon.png'
import levelIcon from '../../asset/images/icon/icon_level.png'
import shareIcon from '../../asset/images/icon/icon_share.png'
import certificateIcon from '../../asset/images/icon/icon_certificate.png'
// import CourseCaruosel from '../../asset/css/CourseCaruosel.css'

const ArtDesign = () => {
    const [loved, setLoved] = useState(false)
    // Caruosel settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    //   Caruosel settings end

    return (
        <div className='container'>
            <h4 className='text-xl font-semibold'>Art & Design</h4>
            <div>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-semibold'>Choose your course and getting started</p>
                    <div>
                        <button className='focus:bg-[#D76E2D] rounded-full px-8 py-2 focus:text-white'>Most popular</button>
                        <button className='focus:bg-[#D76E2D] rounded-full px-8 py-2 focus:text-white'>News</button>
                        <button className='focus:bg-[#D76E2D] rounded-full px-8 py-2 focus:text-white'>Trending</button>
                    </div>
                </div>
                <div>
                    <div className='w-full'>
                        <Slider {...settings}>
<div key="" className="2xl:my-8 xl:my-8 lg:my-3 2xl:px-3 xl: px-2 xl:w-1/4">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <img className="w-full xl:h-72 h-56 object-cover object-center rounded-lg shadow-md" src={demoImg} alt='' />

                                        <div className="flex flex-wrap lg:mt-3">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-3 lg:left-3 left-4 bg-black text-white rounded-full xl:h-12 xl:w-12 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="xl:h-12 xl:w-12 h-7 w-7" src={courseLogo} alt='' />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="2xl:font-medium xl:font-medium lg:font-normal 2xl:text-xl xl:text-lg lg:text-base text-sm -mt-2 text-white 2xl:ml-3 xl:ml-3 lg:ml-2 ml-3">ABC Learning Center</h6>
                                                        <h6 className="text-sm">45 mins</h6>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative 2xl:px-4 xl:px-3 lg:px-2 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 2xl:p-4 xl:p-3 lg:p-2 p-2 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 2xl:text-base xl:text-sm lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium 2xl:tracking-tight leading-none text-CourseTitle dark:text-white">
                                                        Financial Analyst Course Learn Online
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">77 Participants</span>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-end lg:justify-start">
                                                        <span className="text-[#D76E2D] text-lg mt-2 dark:text-gray-400 font-bold">$4.99</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <div className="flex xl:justify-start items-center">
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <span className='text-xs ml-2'>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap mt-5">
                                                <div className="xl:w-4/12 w-3/12">
                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={levelIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={shareIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={certificateIcon} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="xl:w-8/12 w-9/12 relative">
                                                    <div className="flex xl:justify-end -mt-3 absolute right-0">
                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-2 2xl:pr-2 2xl:pt-1 2xl:pb-1 2xl:mr-1 xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 xl:mr-1 pl-1 pr-1 pt-0.5 pb-0.5 mr-0.5 rounded-md" onClick={()=> setLoved(loved ? false : true)}>
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:px-1 xl:h-3 xl:w-5 h-3 w-3" src={loved ? loveIcon : Heart} alt="" /></button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-sm text-xs flex xl:font-light font-extralight leading-tight bg-apply-now text-white 2xl:pl-3 2xl:pr-3 2xl:pt-2 2xl:pb-2 xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 pl-1 pr-1 pt-0.5 pb-0.5 2xl:rounded-lg xl:rounded-md lg:rounded rounded-sm"> Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ========================================== */}
<div key="" className="2xl:my-8 xl:my-8 lg:my-3 2xl:px-3 xl: px-2 xl:w-1/4">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <img className="w-full xl:h-72 h-56 object-cover object-center rounded-lg shadow-md" src={demoImg} alt='' />

                                        <div className="flex flex-wrap lg:mt-3">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-3 lg:left-3 left-4 bg-black text-white rounded-full xl:h-12 xl:w-12 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="xl:h-12 xl:w-12 h-7 w-7" src={courseLogo} alt='' />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="2xl:font-medium xl:font-medium lg:font-normal 2xl:text-xl xl:text-lg lg:text-base text-sm -mt-2 text-white 2xl:ml-3 xl:ml-3 lg:ml-2 ml-3">ABC Learning Center</h6>
                                                        <h6 className="text-sm">45 mins</h6>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative 2xl:px-4 xl:px-3 lg:px-2 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 2xl:p-4 xl:p-3 lg:p-2 p-2 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 2xl:text-base xl:text-sm lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium 2xl:tracking-tight leading-none text-CourseTitle dark:text-white">
                                                        Financial Analyst Course Learn Online
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">77 Participants</span>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-end lg:justify-start">
                                                        <span className="text-[#D76E2D] text-lg mt-2 dark:text-gray-400 font-bold">$4.99</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <div className="flex xl:justify-start items-center">
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <span className='text-xs ml-2'>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap mt-5">
                                                <div className="xl:w-4/12 w-3/12">
                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={levelIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={shareIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={certificateIcon} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="xl:w-8/12 w-9/12 relative">
                                                    <div className="flex xl:justify-end -mt-3 absolute right-0">
                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-2 2xl:pr-2 2xl:pt-1 2xl:pb-1 2xl:mr-1 xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 xl:mr-1 pl-1 pr-1 pt-0.5 pb-0.5 mr-0.5 rounded-md" onClick={()=> setLoved(loved ? false : true)}>
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:px-1 xl:h-3 xl:w-5 h-3 w-3" src={loved ? loveIcon : Heart} alt="" /></button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-sm text-xs flex xl:font-light font-extralight leading-tight bg-apply-now text-white 2xl:pl-3 2xl:pr-3 2xl:pt-2 2xl:pb-2 xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 pl-1 pr-1 pt-0.5 pb-0.5 2xl:rounded-lg xl:rounded-md lg:rounded rounded-sm"> Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ======================================================== */}
<div key="" className="2xl:my-8 xl:my-8 lg:my-3 2xl:px-3 xl: px-2 xl:w-1/4">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <img className="w-full xl:h-72 h-56 object-cover object-center rounded-lg shadow-md" src={demoImg} alt='' />

                                        <div className="flex flex-wrap lg:mt-3">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-3 lg:left-3 left-4 bg-black text-white rounded-full xl:h-12 xl:w-12 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="xl:h-12 xl:w-12 h-7 w-7" src={courseLogo} alt='' />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="2xl:font-medium xl:font-medium lg:font-normal 2xl:text-xl xl:text-lg lg:text-base text-sm -mt-2 text-white 2xl:ml-3 xl:ml-3 lg:ml-2 ml-3">ABC Learning Center</h6>
                                                        <h6 className="text-sm">45 mins</h6>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative 2xl:px-4 xl:px-3 lg:px-2 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 2xl:p-4 xl:p-3 lg:p-2 p-2 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 2xl:text-base xl:text-sm lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium 2xl:tracking-tight leading-none text-CourseTitle dark:text-white">
                                                        Financial Analyst Course Learn Online
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">77 Participants</span>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-end lg:justify-start">
                                                        <span className="text-[#D76E2D] text-lg mt-2 dark:text-gray-400 font-bold">$4.99</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <div className="flex xl:justify-start items-center">
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <span className='text-xs ml-2'>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap mt-5">
                                                <div className="xl:w-4/12 w-3/12">
                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={levelIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={shareIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={certificateIcon} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="xl:w-8/12 w-9/12 relative">
                                                    <div className="flex xl:justify-end -mt-3 absolute right-0">
                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-2 2xl:pr-2 2xl:pt-1 2xl:pb-1 2xl:mr-1 xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 xl:mr-1 pl-1 pr-1 pt-0.5 pb-0.5 mr-0.5 rounded-md" onClick={()=> setLoved(loved ? false : true)}>
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:px-1 xl:h-3 xl:w-5 h-3 w-3" src={loved ? loveIcon : Heart} alt="" /></button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-sm text-xs flex xl:font-light font-extralight leading-tight bg-apply-now text-white 2xl:pl-3 2xl:pr-3 2xl:pt-2 2xl:pb-2 xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 pl-1 pr-1 pt-0.5 pb-0.5 2xl:rounded-lg xl:rounded-md lg:rounded rounded-sm"> Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ======================================================== */}
<div key="" className="2xl:my-8 xl:my-8 lg:my-3 2xl:px-3 xl: px-2 xl:w-1/4">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <img className="w-full xl:h-72 h-56 object-cover object-center rounded-lg shadow-md" src={demoImg} alt='' />

                                        <div className="flex flex-wrap lg:mt-3">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-3 lg:left-3 left-4 bg-black text-white rounded-full xl:h-12 xl:w-12 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="xl:h-12 xl:w-12 h-7 w-7" src={courseLogo} alt='' />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="2xl:font-medium xl:font-medium lg:font-normal 2xl:text-xl xl:text-lg lg:text-base text-sm -mt-2 text-white 2xl:ml-3 xl:ml-3 lg:ml-2 ml-3">ABC Learning Center</h6>
                                                        <h6 className="text-sm">45 mins</h6>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative 2xl:px-4 xl:px-3 lg:px-2 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 2xl:p-4 xl:p-3 lg:p-2 p-2 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 2xl:text-base xl:text-sm lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium 2xl:tracking-tight leading-none text-CourseTitle dark:text-white">
                                                        Financial Analyst Course Learn Online
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">77 Participants</span>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-end lg:justify-start">
                                                        <span className="text-[#D76E2D] text-lg mt-2 dark:text-gray-400 font-bold">$4.99</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <div className="flex xl:justify-start items-center">
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <span className='text-xs ml-2'>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap mt-5">
                                                <div className="xl:w-4/12 w-3/12">
                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={levelIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={shareIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={certificateIcon} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="xl:w-8/12 w-9/12 relative">
                                                    <div className="flex xl:justify-end -mt-3 absolute right-0">
                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-2 2xl:pr-2 2xl:pt-1 2xl:pb-1 2xl:mr-1 xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 xl:mr-1 pl-1 pr-1 pt-0.5 pb-0.5 mr-0.5 rounded-md" onClick={()=> setLoved(loved ? false : true)}>
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:px-1 xl:h-3 xl:w-5 h-3 w-3" src={loved ? loveIcon : Heart} alt="" /></button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-sm text-xs flex xl:font-light font-extralight leading-tight bg-apply-now text-white 2xl:pl-3 2xl:pr-3 2xl:pt-2 2xl:pb-2 xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 pl-1 pr-1 pt-0.5 pb-0.5 2xl:rounded-lg xl:rounded-md lg:rounded rounded-sm"> Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ========================================= */}
                            <div key="" className="2xl:my-8 xl:my-8 lg:my-3 2xl:px-3 xl: px-2 xl:w-1/4">
                                <div className="wrapper antialiased text-gray-900">
                                    <div className="relative">
                                        <img className="w-full xl:h-72 h-56 object-cover object-center rounded-lg shadow-md" src={demoImg} alt='' />

                                        <div className="flex flex-wrap lg:mt-3">
                                            <div className="w-1/5">
                                                <a href="!#">
                                                    <div
                                                        className="text-sm absolute top-0 2xl:left-4 xl:left-3 lg:left-3 left-4 bg-black text-white rounded-full xl:h-12 xl:w-12 h-6 w-6 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                        <img className="xl:h-12 xl:w-12 h-7 w-7" src={courseLogo} alt='' />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-4/5">
                                                <a href="!#">
                                                    <div className="text-lg absolute top-0 text-white mt-5">
                                                        <h6 className="2xl:font-medium xl:font-medium lg:font-normal 2xl:text-xl xl:text-lg lg:text-base text-sm -mt-2 text-white 2xl:ml-3 xl:ml-3 lg:ml-2 ml-3">ABC Learning Center</h6>
                                                        <h6 className="text-sm">45 mins</h6>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative 2xl:px-4 xl:px-3 lg:px-2 px-2 -mt-16">
                                        <div className="bg-white dark:bg-dark-color2 2xl:p-4 xl:p-3 lg:p-2 p-2 rounded-lg shadow-lg">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <h4 className="mt-1 2xl:text-base xl:text-sm lg:text-sm text-sm 2xl:font-semibold xl:font-medium lg:font-medium 2xl:tracking-tight leading-none text-CourseTitle dark:text-white">
                                                        Financial Analyst Course Learn Online
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-start lg:justify-start">
                                                        <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">77 Participants</span>
                                                    </div>
                                                </div>
                                                <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 w-full">
                                                    <div className="flex justify-start 2xl:justify-start xl:justify-end lg:justify-start">
                                                        <span className="text-[#D76E2D] text-lg mt-2 dark:text-gray-400 font-bold">$4.99</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <div className="flex xl:justify-start items-center">
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <FaStar className='text-yellow-300'/>
                                                    <span className='text-xs ml-2'>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap mt-5">
                                                <div className="xl:w-4/12 w-3/12">
                                                    <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={levelIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={shareIcon} alt="" />
                                                        </Link>
                                                        <Link to="" className="">
                                                            <img className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 h-6 w-6 rounded-md border-2 border-white"
                                                                src={certificateIcon} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="xl:w-8/12 w-9/12 relative">
                                                    <div className="flex xl:justify-end -mt-3 absolute right-0">
                                                        <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white 2xl:pl-2 2xl:pr-2 2xl:pt-1 2xl:pb-1 2xl:mr-1 xl:pl-1.5 xl:pr-1.5 xl:pt-0.5 xl:pb-0.5 xl:mr-1 pl-1 pr-1 pt-0.5 pb-0.5 mr-0.5 rounded-md" onClick={()=> setLoved(loved ? false : true)}>
                                                            <img className="2xl:px-1 2xl:h-3 2xl:w-5 xl:px-1 xl:h-3 xl:w-5 h-3 w-3" src={loved ? loveIcon : Heart} alt="" /></button>
                                                        <button
                                                            className="2xl:text-sm xl:text-sm lg:text-sm text-xs flex xl:font-light font-extralight leading-tight bg-apply-now text-white 2xl:pl-3 2xl:pr-3 2xl:pt-2 2xl:pb-2 xl:pl-2 xl:pr-2 xl:pt-1 xl:pb-1 pl-1 pr-1 pt-0.5 pb-0.5 2xl:rounded-lg xl:rounded-md lg:rounded rounded-sm"> Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ==================================== */}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDesign;