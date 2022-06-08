import React, { Fragment, useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import UpcommingImg from '../../../asset/images/team/up-comming.png';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";

function UpCommingEvents() {
    const [upCommingEvent, setUpCommingEvent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-course-seminar/5/`).then((response) => {
            if (response.data.error === false) {
                console.log('seminar_info = ', response.data.data?.seminar_info);
                setUpCommingEvent(response.data.data.seminar_info)
                setIsLoading(false)
            }
        })
    }, [])

    const UpCommingHTML_Loading = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="flex xl:mb-5">
                        <div className="flex w-full animate-pulse rounded-lg bg-white shadow-upcomming">
                            <div className="xl:w-1/3 relative">
                                <div className="w-full bg-gray-100 relative xl:h-28 rounded-lg"></div>
                            </div>
                            <div className="xl:w-2/3 xl:pl-3">
                                <div className=" flex flex-col justify-start">
                                    <div className="bg-gray-100 h-5 xl:mt-1"></div>
                                    <div className="bg-gray-100 h-3 xl:mt-2 w-4/12"></div>
                                    <div className="bg-gray-100 h-2 xl:mt-2 w-7/12"></div>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <div className="bg-gray-100 h-4 xl:mt-3 w-3/12"></div>
                                        </div>
                                        <div className="w-1/2">
                                            <div class="space-y-6 xl:pr-3">
                                                <div class="grid grid-cols-2 gap-3">
                                                    <div class="h-6 bg-white rounded xl:mt-3 col-span-1"></div>
                                                    <div class="h-6 bg-gray-100 rounded xl:mt-3 col-span-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex xl:mb-5">
                        <div className="flex w-full animate-pulse rounded-lg bg-white shadow-upcomming">
                            <div className="xl:w-1/3 relative">
                                <div className="w-full bg-gray-100 relative xl:h-28 rounded-lg"></div>
                            </div>
                            <div className="xl:w-2/3 xl:pl-3">
                                <div className=" flex flex-col justify-start">
                                    <div className="bg-gray-100 h-5 xl:mt-1"></div>
                                    <div className="bg-gray-100 h-3 xl:mt-2 w-4/12"></div>
                                    <div className="bg-gray-100 h-2 xl:mt-2 w-7/12"></div>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <div className="bg-gray-100 h-4 xl:mt-3 w-3/12"></div>
                                        </div>
                                        <div className="w-1/2">
                                            <div class="space-y-6 xl:pr-3">
                                                <div class="grid grid-cols-2 gap-3">
                                                    <div class="h-6 bg-white rounded xl:mt-3 col-span-1"></div>
                                                    <div class="h-6 bg-gray-100 rounded xl:mt-3 col-span-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex xl:mb-5">
                        <div className="flex w-full animate-pulse rounded-lg bg-white shadow-upcomming">
                            <div className="xl:w-1/3 relative">
                                <div className="w-full bg-gray-100 relative xl:h-28 rounded-lg"></div>
                            </div>
                            <div className="xl:w-2/3 xl:pl-3">
                                <div className=" flex flex-col justify-start">
                                    <div className="bg-gray-100 h-5 xl:mt-1"></div>
                                    <div className="bg-gray-100 h-3 xl:mt-2 w-4/12"></div>
                                    <div className="bg-gray-100 h-2 xl:mt-2 w-7/12"></div>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <div className="bg-gray-100 h-4 xl:mt-3 w-3/12"></div>
                                        </div>
                                        <div className="w-1/2">
                                            <div class="space-y-6 xl:pr-3">
                                                <div class="grid grid-cols-2 gap-3">
                                                    <div class="h-6 bg-white rounded xl:mt-3 col-span-1"></div>
                                                    <div class="h-6 bg-gray-100 rounded xl:mt-3 col-span-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex xl:mb-5">
                        <div className="flex w-full animate-pulse rounded-lg bg-white shadow-upcomming">
                            <div className="xl:w-1/3 relative">
                                <div className="w-full bg-gray-100 relative xl:h-28 rounded-lg"></div>
                            </div>
                            <div className="xl:w-2/3 xl:pl-3">
                                <div className=" flex flex-col justify-start">
                                    <div className="bg-gray-100 h-5 xl:mt-1"></div>
                                    <div className="bg-gray-100 h-3 xl:mt-2 w-4/12"></div>
                                    <div className="bg-gray-100 h-2 xl:mt-2 w-7/12"></div>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <div className="bg-gray-100 h-4 xl:mt-3 w-3/12"></div>
                                        </div>
                                        <div className="w-1/2">
                                            <div class="space-y-6 xl:pr-3">
                                                <div class="grid grid-cols-2 gap-3">
                                                    <div class="h-6 bg-white rounded xl:mt-3 col-span-1"></div>
                                                    <div class="h-6 bg-gray-100 rounded xl:mt-3 col-span-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )
        }
    })()

    const UpCommingHTML = (() => {
        if (isLoading === true) {
            return (
                upCommingEvent.map((up_comming_event, up_comming_event_index) => (
                    <div key={up_comming_event_index} class="flex xl:mb-5">
                        <div class="flex w-full rounded-lg bg-white shadow-upcomming">
                            <div className="xl:w-1/3 relative">
                                <img class="w-full relative xl:h-28 rounded-lg" src={UpcommingImg} alt="" />
                                <div class="absolute xl:h-14 xl:w-16 bottom-0 bg-amber-400 rounded-lg">
                                    <h6 className="flex text-white text-xl font-semibold justify-center xl:mt-1">20</h6>
                                    <h6 className="flex text-white text-xs font-normal justify-center">August</h6>
                                </div>
                            </div>
                            <div className="xl:w-2/3 xl:pl-3">
                                <div class=" flex flex-col justify-start">
                                    <h5 class="text-maingray text-base xl:font-semibold xl:mt-2">{up_comming_event.course_seminar_title}</h5>
                                    <h5 class="text-maincolor text-base xl:font-semibold">{up_comming_event.location}</h5>
                                    <h5 class="text-upcomming-green text-xs xl:font-semibold xl:mb-1">Hall gare du nord</h5>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <h5 class="text-gray-500 flex text-xs"><FaUsers className="mr-2 text-gray-500 text-base" />{up_comming_event.participant}</h5>
                                        </div>
                                        <div className="w-1/2">
                                            <button className="text-xs font-light bg-maincolor text-white xl:pt-1 xl:pb-1 xl:pl-2 xl:pr-2 rounded-sm flex float-right xl:mr-4">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )
        }
    })()


    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container">
                    <div className="flex flex-wrap bg-white rounded-2xl shadow-upcomming-big-card  border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-12 z-0">
                        <h6 className="xl:text-2xl text-maingray xl:font-bold xl:mb-4 xl:mt-2 ">Upcomming Events</h6>
                        <div className="xl:w-full">
                            {
                                UpCommingHTML_Loading
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="absolute flex justify-center">
                            <div className="bg-white opacity-50 upcomming-shadow-card-height-width -mt-36 justify-center text-center flex"> </div>
                            <button className="justify-center absolute text-center -mt-16 flex h-10 bg-btngreen text-white rounded-3xl xl:pl-7 xl:pr-7 xl:pt-2 xl:pb-2">See All Events</button>
                        </div>
                    </div>
                </div >
            </Fragment>
        );
    }
    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="container">
                    <div className="flex flex-wrap bg-white rounded-2xl shadow-upcomming-big-card  border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-12 z-0">
                        <h6 className="xl:text-2xl text-maingray xl:font-bold xl:mb-4 xl:mt-2 ">Upcomming Events</h6>
                        <div className="xl:w-full">
                            {
                                UpCommingHTML
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="absolute flex justify-center">
                            <div className="bg-white opacity-50 upcomming-shadow-card-height-width -mt-36 justify-center text-center flex"> </div>
                            <button className="justify-center absolute text-center -mt-16 flex h-10 bg-btngreen text-white rounded-3xl xl:pl-7 xl:pr-7 xl:pt-2 xl:pb-2">See All Events</button>
                        </div>
                    </div>
                </div >
            </Fragment>
        );
    }
}

export default UpCommingEvents;