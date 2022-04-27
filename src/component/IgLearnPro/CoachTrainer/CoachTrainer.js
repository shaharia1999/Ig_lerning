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
                <div className="container lg:mt-8 lg:mb-12">
                    <h4 className="text-6xl	font-semibold text-sectionTitleColor text-center lg:mt-20 lg:mb-16">Are you a  Coach or Trainer ?</h4>
                    <div className="flex flex-wrap lg:mt-6">

                        <div className="lg:w-2/5 w-full">
                            <div className="">
                                <img className="lg:h-full lg:w-full lg:mt-7 lg:mb-7 rounded-xl" src={Trainer} />
                            </div>
                        </div>

                        <div className="lg:w-3/5 w-full">
                            <div className="lg:p-12">
                                <p className="text-sectionTitleColor lg:text-4xl lg:mb-6 lg:font-semibold">Coach and trainer</p>
                                <p className="text-black text-lg font-normal mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p className="text-black text-lg font-normal mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                <div className="flex flex-wrap lg:mt-10">
                                    <div className="lg:w-1/12">
                                        <span><img className="lg:h-12 lg:w-12" src={Calender} /></span>
                                    </div>
                                    <div className="lg:w-11/12">
                                        <span><p className="text-black text-md font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:mt-10">
                                    <div className="lg:w-1/12">
                                        <span><img className="lg:h-12 lg:w-12" src={User} /></span>
                                    </div>
                                    <div className="lg:w-11/12">
                                        <span><p className="text-black text-md font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:mt-10">
                                    <div className="lg:w-1/12">
                                        <span><img className="lg:h-12 lg:w-12" src={Sheild} /></span>
                                    </div>
                                    <div className="lg:w-11/12">
                                        <span><p className="text-black text-md font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:mt-10">
                                    <div className="lg:w-1/12">
                                        <span><img className="lg:h-12 lg:w-12" src={File} /></span>
                                    </div>
                                    <div className="lg:w-11/12">
                                        <span><p className="text-black text-md font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p></span>
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