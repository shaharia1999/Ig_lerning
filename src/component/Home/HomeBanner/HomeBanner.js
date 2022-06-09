import React, { Component, Fragment, useState, useRef } from 'react';
import Certificate from "../../../asset/images/icon/certificate.png";
import IntelloGeekSlider1 from "../../../asset/images/banner/IntelloGeek-Slider1.svg";
import IntelloGeekSlider2 from "../../../asset/images/banner/IntelloGeek-Slider2.svg";
import IntelloGeekSlider3 from "../../../asset/images/banner/IntelloGeek-Slider3.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeBanner() {
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
              <ul style={{ margin: "300px" }}> {dots} </ul>
            </div>
          ),
    }

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

            <div className="container-fluid xl:w-full overflow-hidden">
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
                    height={600}
                    autoplay={true}
                    autoplaySpeed={3000}
                >

                    <div className="xl:w-full">
                        <img src={IntelloGeekSlider1} className="xl:w-full flex overflow-hidden" alt="Wild Landscape" />
                    </div>
                    <div className="xl:w-full">
                        <img src={IntelloGeekSlider2} className="xl:w-full flex overflow-hidden" alt="Wild Landscape" />
                    </div>
                    <div className="xl:w-full">
                        <img src={IntelloGeekSlider3} className="xl:w-full flex overflow-hidden" alt="Wild Landscape" />
                    </div>
                </Slider>
            </div>


            <div className="container -mt-28 stack flex ">
                <div className="flex flex-row bg-white rounded-xl shadow-client border-none lg:p-20 w-full text-center">
                    <div className="lg:basis-1/3">
                        <div className="image-center">
                            <img className="h-24 w-24 object-contain" src={Certificate} alt="" />
                        </div>
                        <h6 className="text-2xl text-sectionTitleColor font-semibold">100% Certificate Obtaining</h6>
                    </div>

                    <div className="lg:basis-1/3">
                        <div className="image-center">
                            <img className="h-24 w-24 object-contain" src={Certificate} alt="" />
                        </div>
                        <h6 className="text-2xl text-sectionTitleColor font-semibold">100% Certificate Obtaining</h6>
                    </div>

                    <div className="lg:basis-1/3">
                        <div className="image-center">
                            <img className="h-24 w-24 object-contain" src={Certificate} alt="" />
                        </div>
                        <h6 className="text-2xl text-sectionTitleColor font-semibold">100% Certificate Obtaining</h6>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}
export default HomeBanner;