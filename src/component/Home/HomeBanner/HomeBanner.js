import React, { Component, Fragment } from 'react';
import GirlBannerImage from "../../../asset/images/girl-image/gir-banner-image.png";
import Certificate from "../../../asset/images/icon/certificate.png";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="Banner1">
                    <div className="container">
                        <div class="flex flex-auto">
                            <div class="lg:basis-1/2">
                                <h2 className="text-sectionTitleColor lg:font-semibold lg:text-5xl lg:mt-80 ">Course what you want,</h2>
                                <h2 className="text-sectionTitleColor lg:font-semibold lg:text-5xl mt-6">Where you want!</h2>
                            </div>

                            <div class="lg:basis-1/2">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container -mt-28">
                    <div class="flex flex-row bg-white rounded-xl shadow-client border-none lg:p-20 w-full text-center">
                        <div class="lg:basis-1/3">
                            <div className="image-center">
                                <img className="h-24 w-24 object-contain" src={Certificate} />
                            </div>
                            <h6 className="text-2xl text-sectionTitleColor font-semibold">100% Certificate Obtaining</h6>
                        </div>

                        <div class="lg:basis-1/3">
                            <div className="image-center">
                                <img className="h-24 w-24 object-contain" src={Certificate} />
                            </div>
                            <h6 className="text-2xl text-sectionTitleColor font-semibold">100% Certificate Obtaining</h6>
                        </div>

                        <div class="lg:basis-1/3">
                            <div className="image-center">
                                <img className="h-24 w-24 object-contain" src={Certificate} />
                            </div>
                            <h6 className="text-2xl text-sectionTitleColor font-semibold">100% Certificate Obtaining</h6>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default HomeBanner;