import React, { Component, Fragment } from 'react';
import Arte from "../../../asset/images/iglearn-pro-media/arte.png";
import Forbes from "../../../asset/images/iglearn-pro-media/forbes.png";
import La from "../../../asset/images/iglearn-pro-media/la.png";
import Ted from "../../../asset/images/iglearn-pro-media/ted.png";

class MediaTalk extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid mt-28 bg-BgLoveIcon mb-24">
                    <h2 className="text-center lg:pt-20 lg:pb-16 font-semibold text-CourseTitle lg:text-6xl">The Media that talk about us</h2>
                    <div className="flex flex-row border-none lg:p-4 w-full text-center lg:pb-16">
                        <div className="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Arte} alt=""/>
                            </div>
                        </div>

                        <div className="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Forbes} alt=""/>
                            </div>
                        </div>

                        <div className="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={La} alt=""/>
                            </div>
                        </div>

                        <div className="lg:basis-1/4">
                            <div className="image-center">
                                <img className="h-48 w-56 object-contain" src={Ted} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MediaTalk;