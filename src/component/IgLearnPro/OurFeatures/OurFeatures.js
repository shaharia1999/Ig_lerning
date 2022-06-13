import React, { Component, Fragment } from 'react';
import Video from "../../../asset/images/iglearn-features/video.png";
import Video1 from "../../../asset/images/iglearn-features/video1.png";
import Classroom from "../../../asset/images/iglearn-features/classroom.png";
import Management from "../../../asset/images/iglearn-features/management.png";
import Meeting from "../../../asset/images/iglearn-features/meeting.png";
import Embeded from "../../../asset/images/iglearn-features/embeded.png";

class OurFeatures extends Component {
    render() {
        return (
            <Fragment>
                <div className="container lg:mt-8 lg:mb-12">
                    <h4 className="text-6xl	font-semibold text-sectionTitleColor text-center lg:mt-20 lg:mb-16 dark:text-white">Our Features</h4>
                    <div className="flex flex-wrap lg:mt-6">

                        <div className="lg:w-1/3 w-full lg:px-2 lg:py-2">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none lg:p-12 w-auto">
                                <img className="lg:h-16 lg:w-16 lg:mt-7 lg:mb-7" src={Video} alt="" />
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold dark:text-white">Online video on IGMarketplage</p>
                                <p className="text-des-gray text-lg font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full lg:px-2 lg:py-2">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none lg:p-12 w-auto">
                                <img className="lg:h-16 lg:w-16 lg:mt-7 lg:mb-7" src={Meeting} alt="" />
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold dark:text-white">Video Meeting Feature</p>
                                <p className="text-des-gray text-lg font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>


                        <div className="lg:w-1/3 w-full lg:px-2 lg:py-2">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none lg:p-12 w-auto">
                                <img className="lg:h-16 lg:w-16 lg:mt-7 lg:mb-7" src={Classroom} alt="" />
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold dark:text-white">Virtual Classroom
                                    Feature</p>
                                <p className="text-des-gray text-lg font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>


                        <div className="lg:w-1/3 w-full lg:px-2 lg:py-2">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none lg:p-12 w-auto">
                                <img className="lg:h-16 lg:w-16 lg:mt-7 lg:mb-7" src={Embeded} alt="" />
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold dark:text-white">API for Embeded
                                    Video Feature</p>
                                <p className="text-des-gray text-lg font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>


                        <div className="lg:w-1/3 w-full lg:px-2 lg:py-2">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none lg:p-12 w-auto">
                                <img className="lg:h-16 lg:w-16 lg:mt-7 lg:mb-7" src={Management} alt="" />
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold dark:text-white">Management system
                                    for your school / Org</p>
                                <p className="text-des-gray text-lg font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full lg:px-2 lg:py-2">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none lg:p-12 w-auto">
                                <img className="lg:h-16 lg:w-16 lg:mt-7 lg:mb-7" src={Video1} alt="" />
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold dark:text-white">Online video on IG
                                    Marketplage</p>
                                <p className="text-des-gray text-lg font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default OurFeatures;