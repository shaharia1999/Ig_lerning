import React, { Fragment, useState, useRef, useEffect } from 'react';
import Certificate from "../../../asset/images/icon/certificate.svg";
import Globe from "../../../asset/images/icon/globe.svg";
import Teacher from "../../../asset/images/icon/teacher.svg";
import IntelloGeekSlider1 from "../../../asset/images/banner/IntelloGeek-Slider1.svg";
import IntelloGeekSlider2 from "../../../asset/images/banner/IntelloGeek-Slider2.svg";
import IntelloGeekSlider3 from "../../../asset/images/banner/IntelloGeek-Slider3.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import ApiUrl from "../../../Api/ApiUrl";
import { Link, Redirect } from 'react-router-dom';


function HomeBanner() {
    const [isLoading, setIsLoading] = useState(false);
    const [categoryInfo, setCategoryInfo] = useState([]);
    const [CategoryID, setCategoryID] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [UserRedirect, setUserRedirect] = useState(false);
    const [SearchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/v2/category-info/`).then((response) => {
        
            if (response.data.error === false) {
                setCategoryInfo(response.data.data);
                setIsLoading(false);
            }
        });
    }, []);
    console.log('categoryInfo = ', categoryInfo);

    
    
    async function searchSection() {
        const data = {
            category_id: CategoryID,
            searchValue: searchValue,
        }
        console.log('data = ', data);

        var course_filter_value =  `/course-search-filter/?category_id=${CategoryID}&searchValue=${searchValue}`;
        
        setSearchFilter(course_filter_value)
        setUserRedirect(true);
    }
    const EktaFunction=()=>{
        if (UserRedirect === true){
            return (
                <Redirect to={`/course-search-filter/?category_id=${CategoryID}&searchValue=${searchValue}`}/>
            )
        }
    }
    const [nav9, setNav9] = useState();
    const slider9 = useRef();
    var settings = {
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "100px" }}> {dots} </ul>

            </div>
        ),
    }

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container-fluid xl:w-full xl:h-screen bg-gray-100 animate-pulse">
                </div>
            </Fragment>
        );
    }
    else if (isLoading === false) {
        return (
            <Fragment>

                <div className="container-fluid 2xl:w-full overflow-hidden">
                    <Slider {...settings}
                        ref={(slider9) => setNav9(slider9)}
                        slidesToShow={1}
                        focusOnSelect={true}
                        dots={true}
                        fade={true}
                        adaptiveHeight={true}
                        infinite={true}
                        slidesToScroll={1}
                        loop={true}
                        speed={3000}
                        autoplay={true}
                        autoplaySpeed={3000}
                        arrows={false}
                    >

                        <div className="2xl:w-full xl:w-full lg:w-full home-banner">
                            <img src={IntelloGeekSlider1}
                                className="2xl:w-full xl:w-full lg:w-full flex overflow-hidden"
                                alt="Wild Landscape" />
                        </div>
                        <div className="2xl:w-full xl:w-full lg:w-full home-banner">
                            <img src={IntelloGeekSlider2}
                                className="2xl:w-full xl:w-full lg:w-full flex overflow-hidden"
                                alt="Wild Landscape" />
                        </div>
                        <div className="2xl:w-full xl:w-full lg:w-full home-banner">
                            <img src={IntelloGeekSlider3}
                                className="2xl:w-full xl:w-full lg:w-full flex overflow-hidden"
                                alt="Wild Landscape" />
                        </div>
                    </Slider>
                </div>


                <div className="container 2xl:-mt-128 xl:-mt-112 lg:-mt-96 md:-mt-96 stack flex 2xl:p-12 xl:p-12 lg:p-10 md:p-8 2xl:mb-56 xl:mb-40 lg:mb-36 md:mb-36">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <h6 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-maingray font-semibold 2xl:leading-relax">Learn what you want, <br /> Where you want!</h6> <br />
                        </div>
                        <div className="w-full">
                            <div className="mt-2 flex">
                                <div className="form">
                                    <div className="flex bg-white w-128 rounded-3xl 2xl:py-1.5 xl:py-1 lg:py-1 md:py-0.5">
                                        <i className="fa fa-search text-gray-400 ml-6 mt-3"></i>
                                        <input value ={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" className="form-control focus:border-none focus:ring-0 text-sm w-64 pr-0 bg-transparent form-input border-none ml-4" placeholder="What do you want to learn today ?" />
                                        <span className="rotate-90 -ml-3 mr-5"><hr className='w-7 border' /></span>
                                        <div className="bg-white z-50">
                                            <select value={CategoryID} onChange={e => setCategoryID(e.target.value)}
                                                id="countries" className="bg-transparent text-gray-400 text-sm rounded-lg border-none focus:border-none focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>All</option>
                                                {
                                                    categoryInfo.map((category) => (
                                                        <option value={category.category_id}>{category.category_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <Link onClick={searchSection} className="btn rounded-3xl lg:px-12 md:px-8 lg:py-2 md:py-0 ml-3 text-white text-sm bg-maincolor border-none">Search</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container 2xl:-mt-28 xl:-mt-24 lg:-mt-24 md:-mt-24 stack flex 2xl:p-12 xl:p-12 lg:p-10 md:p-8">
                    <div className="flex flex-row bg-white dark:bg-dark-color2 rounded-xl shadow-client border-none 2xl:p-16 xl:p-12 lg:p-10 md:p-7 pt-4 pb-4 w-full text-center">
                        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3">
                            <div className="image-center">
                                <img
                                    className="2xl:h-24 2xl:w-24 xl:h-16 xl:w-16 lg:h-12 lg:w-12 md:h-12 md:w-12 object-contain"
                                    src={Certificate} alt="" />
                            </div>
                            <h6
                                className="2xl:text-xl xl:text-lg lg:text-base md:text-sm text-sectionTitleColor font-medium 2xl:mt-2 xl:mt-2 lg:mt-3 md:mt-2 dark:text-white">
                                100% Certificate Obtaining
                            </h6>
                        </div>

                        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3">
                            <div className="image-center">
                                <img
                                    className="2xl:h-24 2xl:w-24 xl:h-16 xl:w-16 lg:h-12 lg:w-12 md:h-12 md:w-12 object-contain"
                                    src={Globe}
                                    alt="" />
                            </div>
                            <h6
                                className="2xl:text-xl xl:text-lg lg:text-base md:text-sm text-sectionTitleColor font-medium 2xl:mt-2 xl:mt-2 lg:mt-3 md:mt-2 dark:text-white">
                                Live every where in
                                the world
                            </h6>
                        </div>

                        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3">
                            <div className="image-center">
                                <img
                                    className="2xl:h-24 2xl:w-24 xl:h-16 xl:w-16 lg:h-12 lg:w-12 md:h-12 md:w-12 object-contain"
                                    src={Teacher} alt="" />
                            </div>
                            <h6
                                className="2xl:text-xl xl:text-lg lg:text-base md:text-sm text-sectionTitleColor font-medium 2xl:mt-2 xl:mt-2 lg:mt-3 md:mt-2 dark:text-white">
                                Learn with the best
                                teachers
                            </h6>
                        </div>
                    </div>
                </div>
                {EktaFunction()}


            </Fragment>
        );
    }


}
export default HomeBanner;