import React, { Fragment, useState, useEffect } from "react";
import Teacher from "../../../asset/images/course-teacher/teacher.jpg";
import Facebook from "../../../asset/images/icon/facebook.png";
import YouTube from "../../../asset/images/icon/youtube.png";
import Instagram from "../../../asset/images/icon/instagram.png";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";


function TrainerProfileCard() {
    const [teacherProfileAbout, setTeacherProfileAbout] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        setIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-about/5/`).then((response) =>{
            if(response.data.error === false){
                console.log('teacherProfileAbout = ', response.data.data);
                setIsLoading(false);
                setTeacherProfileAbout(response.data.data);
                setAboutInfo(response.data.data?.about_info[0])
            }
        });
    },[]);

    const TeacherProfileHtml = (() => {
        if(isLoading === true){
            return <div className="flex flex-wrap bg-white rounded-xl shadow-upcomming-big-card border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-6 xl:pb-8">
                <div className="xl:-mt-20 flex xl:ml-24">
                    <img className="xl:h-40 xl:w-40 rounded-full xl:border-8 border-white xl:shadow-lg" src={Teacher} alt="teacher" />
                </div>

                <div className="xl:w-full xl:mt-7">
                    <h6 className="text-center xl:text-2xl text-maingray xl:font-semibold">About</h6>
                    <h6 className="xl:text-xs text-black font-normal xl:mt-3 text-center">Président de quatre entreprises, Franck est considéré comme le chef de file francophone des conférenciers en stratégie du leadership & entrepreneurship dans la francophonie...</h6>

                    <div className="flex xl:mt-7 justify-center">
                        <button className="bg-breadcrumbs-text text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">Read More ...</button>
                        <button className="bg-maincolor text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">Follow Now +</button>
                    </div>

                    <h6 className="text-center xl:text-lg text-maingray xl:font-bold xl:mt-9">Community</h6>

                    <div className="flex flex-wrap xl:pl-16 xl:pr-16 xl:mt-6">
                        <div className="xl:w-1/3">
                            <img className="xl:h-8 xl:w-8" src={Facebook} alt="" />
                            <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">683k</h6>
                        </div>

                        <div className="xl:w-1/3">
                            <img className="xl:h-8 xl:w-8" src={YouTube} alt="" />
                            <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">702k</h6>
                        </div>

                        <div className="xl:w-1/3">
                            <img className="xl:h-8 xl:w-8" src={Instagram} alt="" />
                            <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">222k</h6>
                        </div>
                    </div>


                    <div className="flex flex-wrap xl:mt-6">
                        <div className="xl:w-full">
                            <div className="flex flex-wrap">
                                <div className="xl:w-1/2">
                                    <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">Followers</h6>
                                </div>
                                <div className="xl:w-1/2 xl:pr-3">
                                    <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">2.8M</span>
                                </div>
                            </div>
                        </div>

                        <div className="xl:w-full">
                            <div className="flex flex-wrap">
                                <div className="xl:w-1/2">
                                    <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">Total Students</h6>
                                </div>
                                <div className="xl:w-1/2 xl:pr-3">
                                    <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">1.7M</span>
                                </div>
                            </div>
                        </div>


                        <div className="xl:w-full">
                            <div className="flex flex-wrap">
                                <div className="xl:w-1/2">
                                    <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">All trainings</h6>
                                </div>
                                <div className="xl:w-1/2 xl:pr-3">
                                    <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">2.8M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        }
        else if(isLoading === false){
            return (
                <div className="flex flex-wrap bg-white rounded-xl shadow-upcomming-big-card border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-6 xl:pb-8">
                    <div className="xl:-mt-20 flex xl:ml-24">
                        <img className="xl:h-40 xl:w-40 rounded-full xl:border-8 border-white xl:shadow-lg" src={teacherProfileAbout.image} alt="teacher" />
                    </div>

                    <div className="xl:w-full xl:mt-7">
                        <h6 className="text-center xl:text-2xl text-maingray xl:font-semibold">About</h6>
                        <h6 className="xl:text-xs text-black font-normal xl:mt-3 text-center">
                            {aboutInfo.about}
                        </h6>

                        <div className="flex xl:mt-7 justify-center">
                            <button className="bg-breadcrumbs-text text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">Read More ...</button>
                            <button className="bg-maincolor text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">Follow Now +</button>
                        </div>

                        <h6 className="text-center xl:text-lg text-maingray xl:font-bold xl:mt-9">Community</h6>

                        <div className="flex flex-wrap xl:pl-16 xl:pr-16 xl:mt-6">
                            <div className="xl:w-1/3">
                                <img className="xl:h-8 xl:w-8" src={Facebook} alt="" />
                                <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">683k</h6>
                            </div>

                            <div className="xl:w-1/3">
                                <img className="xl:h-8 xl:w-8" src={YouTube} alt="" />
                                <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">702k</h6>
                            </div>

                            <div className="xl:w-1/3">
                                <img className="xl:h-8 xl:w-8" src={Instagram} alt="" />
                                <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">222k</h6>
                            </div>
                        </div>


                        <div className="flex flex-wrap xl:mt-6">
                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">Followers</h6>
                                    </div>
                                    <div className="xl:w-1/2 xl:pr-3">
                                        <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">2.8M</span>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">Total Students</h6>
                                    </div>
                                    <div className="xl:w-1/2 xl:pr-3">
                                        <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">1.7M</span>
                                    </div>
                                </div>
                            </div>


                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">All trainings</h6>
                                    </div>
                                    <div className="xl:w-1/2 xl:pr-3">
                                        <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">2.8M</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )
        }
    })()
    return (
        <Fragment>
            <div className="container xl:pl-16 xl:pr-16">
                {
                    TeacherProfileHtml
                }
                {/* <div className="flex flex-wrap bg-white rounded-xl shadow-upcomming-big-card border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-6 xl:pb-8">
                    <div className="xl:-mt-20 flex xl:ml-24">
                        <img className="xl:h-40 xl:w-40 rounded-full xl:border-8 border-white xl:shadow-lg" src={Teacher} alt="teacher" />
                    </div>

                    <div className="xl:w-full xl:mt-7">
                        <h6 className="text-center xl:text-2xl text-maingray xl:font-semibold">About</h6>
                        <h6 className="xl:text-xs text-black font-normal xl:mt-3 text-center">Président de quatre entreprises, Franck est considéré comme le chef de file francophone des conférenciers en stratégie du leadership & entrepreneurship dans la francophonie...</h6>

                        <div className="flex xl:mt-7 justify-center">
                            <button className="bg-breadcrumbs-text text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">Read More ...</button>
                            <button className="bg-maincolor text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">Follow Now +</button>
                        </div>

                        <h6 className="text-center xl:text-lg text-maingray xl:font-bold xl:mt-9">Community</h6>

                        <div className="flex flex-wrap xl:pl-16 xl:pr-16 xl:mt-6">
                            <div className="xl:w-1/3">
                                <img className="xl:h-8 xl:w-8" src={Facebook} alt="" />
                                <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">683k</h6>
                            </div>

                            <div className="xl:w-1/3">
                                <img className="xl:h-8 xl:w-8" src={YouTube} alt="" />
                                <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">702k</h6>
                            </div>

                            <div className="xl:w-1/3">
                                <img className="xl:h-8 xl:w-8" src={Instagram} alt="" />
                                <h6 className="xl:mt-2 xl:text-base xl:text-maingray xl:font-medium">222k</h6>
                            </div>
                        </div>


                        <div className="flex flex-wrap xl:mt-6">
                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">Followers</h6>
                                    </div>
                                    <div className="xl:w-1/2 xl:pr-3">
                                        <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">2.8M</span>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">Total Students</h6>
                                    </div>
                                    <div className="xl:w-1/2 xl:pr-3">
                                        <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">1.7M</span>
                                    </div>
                                </div>
                            </div>


                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <h6 className="xl:mt-3 xl:text-lg xl:text-maingray xl:font-semibold">All trainings</h6>
                                    </div>
                                    <div className="xl:w-1/2 xl:pr-3">
                                        <span className="float-right xl:mt-3 xl:text-sm xl:text-maingray xl:font-normal bg-gray-100 rounded-2xl xl:pl-3 xl:pr-3 border border-gray-200">2.8M</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div> */}
            </div >
        </Fragment>
    );
}

export default TrainerProfileCard;