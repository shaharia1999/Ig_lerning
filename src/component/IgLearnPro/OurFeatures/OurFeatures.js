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
                <div className="container xl:mt-8 xl:mb-8 lg:mb-10 md:mb-16">
                    <h4 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-sectionTitleColor text-center xl:mt-20 lg:mt-16 md:mt-12 sm:mt-10 mt-10 xl:mb-12 lg:mb-8 mb-2 dark:text-white">Our Features</h4>
                    <div className="flex flex-wrap xl:mt-6 xl:pl-0 xl:pr-0 pl-5 pr-5">

                        <div className="lg:w-1/3 md:w-1/2 w-full lg:px-2 lg:py-2 xl:mt-0 lg:mt-4 mt-4">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none xl:p-12 lg:p-7 md:p-6 sm:p-4 p-3 w-auto">
                                <img className="xl:h-16 xl:w-16 h-12 w-12 xl:mt-7 xl:mb-7 lg:mb-4 mt-4 mb-4" src={Video} alt="" />
                                <p className="text-sectionTitleColor 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-xl xl:mb-6 lg:mb-3 xl:font-semibold font-semibold dark:text-white">Online video on IG Marketplage</p>
                                <p className="text-des-gray xl:text-lg text-sm font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full xl:px-2 xl:py-2 xl:mt-0 lg:mt-4 mt-4">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none xl:p-12 lg:p-7 md:p-6 sm:p-4 p-3 w-auto">
                                <img className="xl:h-16 xl:w-16 h-12 w-12 xl:mt-7 xl:mb-7 lg:mb-4 mt-4 mb-4" src={Meeting} alt="" />
                                <p className="text-sectionTitleColor 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-xl xl:mb-6 lg:mb-3 xl:font-semibold font-semibold dark:text-white">Video Meeting Feature</p>
                                <p className="text-des-gray xl:text-lg text-sm font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full xl:px-2 xl:py-2 xl:mt-0 lg:mt-4 mt-4">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none xl:p-12 lg:p-7 md:p-6 sm:p-4 p-3 w-auto">
                                <img className="xl:h-16 xl:w-16 h-12 w-12 xl:mt-7 xl:mb-7 lg:mb-4 mt-4 mb-4" src={Classroom} alt="" />
                                <p className="text-sectionTitleColor 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-xl xl:mb-6 lg:mb-3 xl:font-semibold font-semibold dark:text-white">Virtual Classroom
                                    Feature</p>
                                <p className="text-des-gray xl:text-lg text-sm font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full xl:px-2 xl:py-2 xl:mt-0 lg:mt-4 mt-4">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none xl:p-12 lg:p-7 md:p-6 sm:p-4 p-3 w-auto">
                                <img className="xl:h-16 xl:w-16 h-12 w-12 xl:mt-7 xl:mb-7 lg:mb-4 mt-4 mb-4" src={Embeded} alt="" />
                                <p className="text-sectionTitleColor 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-xl xl:mb-6 lg:mb-3 xl:font-semibold font-semibold dark:text-white">API for Embeded
                                    Video Feature</p>
                                <p className="text-des-gray xl:text-lg text-sm font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full xl:px-2 xl:py-2 xl:mt-0 lg:mt-4 mt-4">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none xl:p-12 lg:p-7 md:p-6 sm:p-4 p-3 w-auto">
                                <img className="xl:h-16 xl:w-16 h-12 w-12 xl:mt-7 xl:mb-7 lg:mb-4 mt-4 mb-4" src={Management} alt="" />
                                <p className="text-sectionTitleColor 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-xl xl:mb-6 lg:mb-3 xl:font-semibold font-semibold dark:text-white">Management system
                                    for your school / Org</p>
                                <p className="text-des-gray xl:text-lg text-sm font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full xl:px-2 xl:py-2 xl:mt-0 lg:mt-4 mt-4">
                            <div className="bg-white dark:bg-dark-color1 hover:dark:bg-dark-color2 rounded-2xl hover:shadow-lg border-none xl:p-12 lg:p-7 md:p-6 sm:p-4 p-3 w-auto">
                                <img className="xl:h-16 xl:w-16 h-12 w-12 xl:mt-7 xl:mb-7 lg:mb-4 mt-4 mb-4" src={Video1} alt="" />
                                <p className="text-sectionTitleColor 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-xl xl:mb-6 lg:mb-3 xl:font-semibold font-semibold dark:text-white">Online video on IG
                                    Marketplage</p>
                                <p className="text-des-gray xl:text-lg text-sm font-normal mt-2 dark:text-gray-400">Make sure you spak to top quality leads. Dont waste time on busy lines.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default OurFeatures;