import React, { Fragment, useState, useEffect } from "react";
import Teacher from "../../../asset/images/course-teacher/teacher.jpg";
import Facebook from "../../../asset/images/icon/facebook.png";
import YouTube from "../../../asset/images/icon/youtube.png";
import Instagram from "../../../asset/images/icon/instagram.png";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { useParams } from "react-router-dom";

function TrainerProfileCard() {
    let {id} = useParams(); 
    const [teacherProfileAbout, setTeacherProfileAbout] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const [is_check_follow, setIsCheckFollow] = useState(false);
    var user_data = JSON.parse(localStorage.getItem("user_data"));
    console.log('user data = ', user_data)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-about/${id}/`).then((response) => {
            if (response.data.error === false) {
                console.log('teacherProfileAbout = ', response.data.data);
                setIsLoading(false);
                setTeacherProfileAbout(response.data.data);
                setAboutInfo(response.data.data?.about_info[0])
                setIsCheckFollow(true);
            }
        });
    }, []);

    if (is_check_follow === true) {
        if (user_data !== null) {
            const user_id = user_data['id']
            const teacher_id = teacherProfileAbout.id
            const check_follow_data = {
                sender: user_id,
                receiver: teacher_id
            }
            axios.post(`${ApiUrl.BaseUrl}api/course/check-user-follow-status/`, check_follow_data).then((res) => {
                setIsFollow(res.data.is_follow)
                console.log('isFollow = ', isFollow);
            })
        }
    }
    const TeacherFollow = (teacher_id) => {
        const sender = user_data['id']
        const receiver = teacher_id
        const follow_data = {
            sender: sender,
            receiver: receiver
        }
        axios.post(ApiUrl.BaseUrl + 'api/course/follow/', follow_data).then((response) => {
            if (response.data.error === true) {
                alert(response.data.message)
            }
            else {
                setIsFollow(true)
            }
        });
    }
    const TeacherUnFollow = (teacher_id) => {
        const sender = user_data['id']
        const receiver = teacher_id
        const follow_data = {
            sender: sender,
            receiver: receiver
        }
        axios.post(ApiUrl.BaseUrl + 'api/course/un-follow/', follow_data).then((response) => {
            if (response.data.error === false) {
                setIsFollow(false)
            }
        });
    }

    const TeacherProfileHtml = (() => {
        if (isLoading === true) {
            return (
                <div className="flex flex-wrap bg-white rounded-xl shadow-upcomming-big-card border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-6 xl:pb-8">
                    <div className="xl:-mt-20 flex xl:ml-24 animate-pulse">
                        <div className="xl:h-40 xl:w-40 xl:mt-4 rounded-full xl:shadow-sm bg-gray-100"></div>
                    </div>

                    <div className="xl:w-full xl:mt-7 animate-pulse">
                        <div className="space-y-6">
                            <div className="grid grid-cols-6 gap-8">
                                <div className="h-2 bg-white rounded col-span-2"></div>
                                <div className=" bg-gray-100 h-5 col-span-2 rounded"></div>
                                <div className="h-2 bg-white rounded col-span-2"></div>
                            </div>
                        </div>

                        <div className="xl:mt-5 bg-gray-100 h-2 w-11/12 rounded"></div>
                        <div className="xl:mt-2 bg-gray-100 h-2 w-12/12 rounded"></div>
                        <div className="xl:mt-2 bg-gray-100 h-2 w-9/12 rounded"></div>


                        <div className="flex xl:mt-7 justify-center">
                            <div className="bg-gray-100 xl:mx-2 xl:pt-4 xl:pb-4 xl:pl-12 xl:pr-12 xl:rounded-3xl"></div>
                            <div className="bg-gray-100 xl:mx-2 xl:pt-4 xl:pb-4 xl:pl-12 xl:pr-12 xl:rounded-3xl"></div>
                        </div>

                        <div className="space-y-6 xl:mt-9">
                            <div className="grid grid-cols-8 gap-8">
                                <div clasclassNames="h-2 bg-white rounded col-span-2"></div>
                                <div className=" bg-gray-100 h-5 col-span-4 rounded"></div>
                                <div className="h-2 bg-white rounded col-span-2"></div>
                            </div>
                        </div>

                        <div className="space-y-6 xl:mt-9">
                            <div className="grid grid-cols-5 gap-8">
                                <div className="h-2 bg-white rounded col-span-1"></div>
                                <div className="bg-gray-100 h-10 col-span-1 rounded"></div>
                                <div className="bg-gray-100 h-10 col-span-1 rounded"></div>
                                <div className="bg-gray-100 h-10 col-span-1 rounded"></div>
                                <div className="h-2 bg-white rounded col-span-1"></div>
                            </div>
                        </div>

                        <div className="space-y-6 xl:mt-4">
                            <div className="grid grid-cols-5 gap-8">
                                <div className="h-2 bg-white rounded col-span-1"></div>
                                <div className="bg-gray-100 h-2 col-span-1 rounded"></div>
                                <div className="bg-gray-100 h-2 col-span-1 rounded"></div>
                                <div className="bg-gray-100 h-2 col-span-1 rounded"></div>
                                <div className="h-2 bg-white rounded col-span-1"></div>
                            </div>
                        </div>

                        <div className="flex flex-wrap xl:mt-6">
                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <div className="xl:mt-5 bg-gray-100 h-5 w-11/12 rounded"></div>
                                    </div>
                                    <div className="xl:w-1/2 flex xl:pr-2">
                                        <div className="xl:mt-5 bg-white h-5 w-4/12 rounded"></div>
                                        <div className="xl:mt-5 bg-white h-5 w-3/12 rounded"></div>
                                        <div className="xl:mt-5 bg-gray-100 h-5 w-5/12 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <div className="xl:mt-5 bg-gray-100 h-5 w-11/12 rounded"></div>
                                    </div>
                                    <div className="xl:w-1/2 flex xl:pr-2">
                                        <div className="xl:mt-5 bg-white h-5 w-4/12 rounded"></div>
                                        <div className="xl:mt-5 bg-white h-5 w-3/12 rounded"></div>
                                        <div className="xl:mt-5 bg-gray-100 h-5 w-5/12 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:w-full">
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/2">
                                        <div className="xl:mt-5 bg-gray-100 h-5 w-11/12 rounded"></div>
                                    </div>
                                    <div className="xl:w-1/2 flex xl:pr-2">
                                        <div className="xl:mt-5 bg-white h-5 w-4/12 rounded"></div>
                                        <div className="xl:mt-5 bg-white h-5 w-3/12 rounded"></div>
                                        <div className="xl:mt-5 bg-gray-100 h-5 w-5/12 rounded"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else if (isLoading === false) {
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
                            {(() => {
                                if (isFollow === true) {
                                    return <button onClick={() => TeacherUnFollow(teacherProfileAbout.id)}
                                        className="bg-maincolor text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">
                                        Unfollow
                                    </button>
                                }
                                else {
                                    return <button onClick={() => TeacherFollow(teacherProfileAbout.id)}
                                        className="bg-maincolor text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">
                                        Follow Now +
                                    </button>
                                }

                            })()}
                            {/* <button 
                                className="bg-maincolor text-white xl:font-light xl:text-xs xl:mx-2 xl:pt-2 xl:pb-2 xl:pl-4 xl:pr-4 xl:rounded-3xl">
                                    Follow Now +
                            </button> */}
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