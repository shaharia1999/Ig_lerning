import React, { Component, Fragment } from 'react';
import Trainer from "../../../asset/images/iglearn-pro-trainer/trainer.png";
import Calender from "../../../asset/images/iglearn-pro-trainer/calender.png";
import User from "../../../asset/images/iglearn-pro-trainer/user.png";
import Sheild from "../../../asset/images/iglearn-pro-trainer/sheild.png";
import File from "../../../asset/images/iglearn-pro-trainer/file.png";

class CoachTrainer extends Component {
    render() {
        return (
            <Fragment>
                <div className="container xl:mt-8 xl:mb-12">
                    <h4 className="xl:text-6xl text-xl font-semibold text-sectionTitleColor dark:text-white text-center xl:mt-20 xl:mb-16 mt-8 mb-8">Are you a  Coach or Trainer ?</h4>
                    <div className="flex flex-wrap xl:mt-6">

                        <div className="xl:w-2/5 w-full">
                            <div className="xl:pl-0 xl:pr-0 pl-5 pr-5">
                                <img className="xl:h-full h-96 xl:w-full w-full xl:mt-7 xl:mb-7 xl:rounded-xl rounded-2xl" src={Trainer} alt=""/>
                            </div>
                        </div>

                        <div className="xl:w-3/5 w-full xl:pl-0 xl:pr-0 pl-5 pr-5">
                            <div className="xl:p-12">
                                <p className="text-sectionTitleColor xl:text-4xl text-xl xl:mb-6 xl:mt-0 mt-4 xl:font-semibold font-semibold dark:text-white">Coach and trainer</p>
                                <p className="text-black xl:text-lg text-base text-justify font-normal mt-2 dark:text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p className="text-black xl:text-lg text-base text-justify font-normal mt-2 dark:text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                <div className="flex flex-wrap xl:mt-10 mt-4">
                                    <div className="xl:w-1/12 w-2/12">
                                        <span><img className="xl:h-12 xl:w-12 h-10 w-10" src={Calender} alt=""/></span>
                                    </div>
                                    <div className="xl:w-11/12 w-10/12">
                                        <span><p className="text-black text-justify xl:text-base text-sm font-normal dark:text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap xl:mt-10 mt-4">
                                    <div className="xl:w-1/12 w-2/12">
                                        <span><img className="xl:h-12 xl:w-12 h-10 w-10" src={User} alt=""/></span>
                                    </div>
                                    <div className="xl:w-11/12 w-10/12">
                                        <span className=""><p className="text-black text-justify xl:text-base text-sm font-normal dark:text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap xl:mt-10 mt-4">
                                    <div className="xl:w-1/12 w-2/12">
                                        <span><img className="xl:h-12 xl:w-12 h-10 w-10" src={Sheild} alt=""/></span>
                                    </div>
                                    <div className="xl:w-11/12 w-10/12">
                                        <span><p className="text-black text-justify xl:text-base text-sm font-normal dark:text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap xl:mt-10 mt-4">
                                    <div className="xl:w-1/12 w-2/12">
                                        <span><img className="xl:h-12 xl:w-12 h-10 w-10" src={File} alt=""/></span>
                                    </div>
                                    <div className="xl:w-11/12 w-10/12">
                                        <span><p className="text-black text-justify xl:text-base text-sm font-normal dark:text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CoachTrainer;