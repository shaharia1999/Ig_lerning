import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import FranckNicolas from '../../../asset/images/banner/Franck-Nicolas.png';
import FeatureTraining from "../FeatureTraining/FeatureTraining";
import TrainerProfileCard from "../TrainerProfileCard/TrainerProfileCard";
import ApiUrl from "../../../Api/ApiUrl";


function TrainerBanner() {
    const [trainerProfileInfo, setTrainerProfileInfo] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile/5/`).then((response) => {
            if (response.data.error === false){
                setIsLoading(false)
                setTrainerProfileInfo(response.data.data)
                setAboutInfo(response.data.data?.about_info[0])
            }
        })
    }, []);
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="relative flex flex-wrap">
                    <img className="TrainerBannner" src={trainerProfileInfo.cover_image} alt="" />
                    <div class="absolute w-full py-2.5 -inset-x-24 bottom-16 text-white xl:text-4xl xl:font-semibold text-center leading-4">
                        {trainerProfileInfo.username}
                        <span>
                            <i className="fa fa-check text-white bg-maincolor font-light xl:p-1 rounded-full text-sm"></i>
                        </span>
                    </div>
                    <div class="absolute w-full py-2.5 -inset-x-4 bottom-6 text-white xl:text-xl xl:font-light text-center leading-4">
                        <span>{aboutInfo.about_title}</span>
                        
                    </div>
                </div>

                <div className="container">
                    <div className="flex flex-wrap xl:mt-10">
                        <div className="xl:w-4/12 xl:-mt-72 z-50">
                            <TrainerProfileCard />
                        </div>
                        <div className="xl:w-8/12 xl:pl-7 xl:pr-7">
                            <FeatureTraining />
                        </div>
                    </div>
                </div >
            </div >
        </Fragment>
    );
}

export default TrainerBanner;