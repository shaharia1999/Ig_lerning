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

function HomeBanner() {
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        setIsLoading(false);
    }, []);


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

                {/* <div className="container">
                    <div class="flex flex-auto">
                        <div class="lg:basis-1/2">
                            <h2 className="text-sectionTitleColor lg:font-semibold lg:text-5xl lg:mt-80 ">Course what you want,</h2>
                            <h2 className="text-sectionTitleColor lg:font-semibold lg:text-5xl mt-6">Where you want!</h2>
                        </div>
    
                        <div class="lg:basis-1/2">
    
                        </div>
                    </div>
                </div> */}

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

            </Fragment>
        );
    }


}
export default HomeBanner;