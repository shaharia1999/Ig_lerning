import React, { Fragment } from "react";
import FranckNicolas from '../../../asset/images/banner/Franck-Nicolas.png';
import FeatureTraining from "../FeatureTraining/FeatureTraining";
import TrainerProfileCard from "../TrainerProfileCard/TrainerProfileCard";

function TrainerBanner() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="relative flex flex-wrap">
                    <img className="TrainerBannner" src={FranckNicolas} alt="" />
                    <div class="absolute w-full py-2.5 -inset-x-24 bottom-16 text-white xl:text-4xl xl:font-semibold text-center leading-4">Franck Nicola <span><i className="fa fa-check text-white bg-maincolor font-light xl:p-1 rounded-full text-sm"></i></span></div>
                    <div class="absolute w-full py-2.5 -inset-x-4 bottom-6 text-white xl:text-xl xl:font-light text-center leading-4"><span>International Coach and Speaker</span> • <span>From USA</span></div>
                </div>

                <div className="container">
                    <div className="flex flex-wrap xl:mt-10">
                        <div className="xl:w-4/12 xl:-mt-72 z-50">
                            <TrainerProfileCard/>
                        </div>
                        <div className="xl:w-8/12 xl:pl-7 xl:pr-7">
                            <FeatureTraining/>
                        </div>
                    </div>
                </div >
            </div >
        </Fragment>
    );
}

export default TrainerBanner;