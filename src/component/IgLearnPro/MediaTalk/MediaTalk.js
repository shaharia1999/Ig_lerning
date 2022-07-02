import React, { Component, Fragment } from 'react';
import Arte from "../../../asset/images/iglearn-pro-media/arte.png";
import Forbes from "../../../asset/images/iglearn-pro-media/forbes.png";
import La from "../../../asset/images/iglearn-pro-media/la.png";
import Ted from "../../../asset/images/iglearn-pro-media/ted.png";

class MediaTalk extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid xl:mt-28 bg-BgLoveIcon dark:bg-dark-color3 xl:mb-24 mt-10 mb-10">
                    <h2 className="text-center xl:pt-20 xl:pb-16 pt-12 pb-0 font-semibold text-CourseTitle xl:text-6xl text-xl dark:text-white">The Media that talk about us</h2>
                    <div className="flex flex-row border-none xl:p-4 p-2 w-full text-center xl:pb-16 pb-8">
                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 h-20 w-auto object-contain p-2" src={Arte} alt=""/>
                            </div>
                        </div>

                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 h-20 w-auto object-contain p-2" src={Forbes} alt=""/>
                            </div>
                        </div>

                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 h-20 w-auto object-contain p-2" src={La} alt=""/>
                            </div>
                        </div>

                        <div className="xl:basis-1/4">
                            <div className="image-center">
                                <img className="xl:h-48 xl:w-56 h-20 w-auto object-contain p-2" src={Ted} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MediaTalk;