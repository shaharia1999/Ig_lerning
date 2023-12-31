import React, { Fragment, useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import UpcommingImg from '../../../asset/images/team/up-comming.png';
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { useParams } from "react-router-dom";

function UpCommingEvents() {
    let { id } = useParams();
    const [upCommingEvent, setUpCommingEvent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-course-seminar/${id}/`).then((response) => {
            if (response.data.error === false) {
                console.log('seminar_info = ', response.data.data?.seminar_info);
                setUpCommingEvent(response.data.data.seminar_info)
                setIsLoading(false)
            }
        })
    }, [])

    const UpCommingHTML_Loading = (() => {

        return (
            <>
                <div className="flex xl:mb-5">
                    <div className="flex w-full animate-pulse rounded-lg bg-white dark:bg-transparent shadow-upcomming">
                        <div className="xl:w-1/3 relative">
                            <div className="w-full bg-gray-100 dark:bg-dark-scleton2 relative xl:h-28 rounded-lg"></div>
                        </div>
                        <div className="xl:w-2/3 xl:pl-3">
                            <div className=" flex flex-col justify-start">
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-5 xl:mt-1"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-3 xl:mt-2 w-4/12"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-2 xl:mt-2 w-7/12"></div>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="bg-gray-100 dark:bg-dark-scleton2 h-4 xl:mt-3 w-3/12"></div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="space-y-6 xl:pr-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-6 bg-white dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                                <div className="h-6 bg-gray-100 dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex xl:mb-5">
                    <div className="flex w-full animate-pulse rounded-lg bg-white dark:bg-transparent shadow-upcomming">
                        <div className="xl:w-1/3 relative">
                            <div className="w-full bg-gray-100 dark:bg-dark-scleton2 relative xl:h-28 rounded-lg"></div>
                        </div>
                        <div className="xl:w-2/3 xl:pl-3">
                            <div className=" flex flex-col justify-start">
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-5 xl:mt-1"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-3 xl:mt-2 w-4/12"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-2 xl:mt-2 w-7/12"></div>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="bg-gray-100 dark:bg-dark-scleton2 h-4 xl:mt-3 w-3/12"></div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="space-y-6 xl:pr-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-6 bg-white dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                                <div className="h-6 bg-gray-100 dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex xl:mb-5">
                    <div className="flex w-full animate-pulse rounded-lg bg-white dark:bg-transparent shadow-upcomming">
                        <div className="xl:w-1/3 relative">
                            <div className="w-full bg-gray-100 dark:bg-dark-scleton2 relative xl:h-28 rounded-lg"></div>
                        </div>
                        <div className="xl:w-2/3 xl:pl-3">
                            <div className=" flex flex-col justify-start">
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-5 xl:mt-1"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-3 xl:mt-2 w-4/12"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-2 xl:mt-2 w-7/12"></div>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="bg-gray-100 dark:bg-dark-scleton2 h-4 xl:mt-3 w-3/12"></div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="space-y-6 xl:pr-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-6 bg-white dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                                <div className="h-6 bg-gray-100 dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex xl:mb-5">
                    <div className="flex w-full animate-pulse rounded-lg bg-white dark:bg-transparent shadow-upcomming">
                        <div className="xl:w-1/3 relative">
                            <div className="w-full bg-gray-100 dark:bg-dark-scleton2 relative xl:h-28 rounded-lg"></div>
                        </div>
                        <div className="xl:w-2/3 xl:pl-3">
                            <div className=" flex flex-col justify-start">
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-5 xl:mt-1"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-3 xl:mt-2 w-4/12"></div>
                                <div className="bg-gray-100 dark:bg-dark-scleton2 h-2 xl:mt-2 w-7/12"></div>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="bg-gray-100 dark:bg-dark-scleton2 h-4 xl:mt-3 w-3/12"></div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="space-y-6 xl:pr-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-6 bg-white dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
                                                <div className="h-6 bg-gray-100 dark:bg-dark-scleton2 rounded xl:mt-3 col-span-1"></div>
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

    })()

    const UpCommingHTML = (() => {
        return (
            upCommingEvent.map((up_comming_event, up_comming_event_index) => (
                <div key={up_comming_event_index} className="flex xl:mb-5">
                    <div className="flex w-full rounded-lg bg-white dark:bg-dark-color3 shadow-upcomming">
                        <div className="xl:w-1/3 relative">
                            <img className="w-full relative xl:h-28 rounded-lg" src={UpcommingImg} alt="" />
                            <div className="absolute xl:h-14 xl:w-16 bottom-0 bg-amber-400 rounded-lg">
                                <h6 className="flex text-white text-xl font-semibold justify-center xl:mt-1">20</h6>
                                <h6 className="flex text-white text-xs font-normal justify-center">August</h6>
                            </div>
                        </div>
                        <div className="xl:w-2/3 xl:pl-3">
                            <div className=" flex flex-col justify-start">
                                <h5 className="text-maingray dark:text-gray-100 text-base xl:font-semibold xl:mt-2">{up_comming_event.course_seminar_title}</h5>
                                <h5 className="text-maincolor text-base xl:font-semibold">{up_comming_event.location}</h5>
                                <h5 className="text-upcomming-green dark:text-gray-400 text-xs xl:font-semibold xl:mb-1">Hall gare du nord</h5>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <h5 className="text-gray-500 dark:text-white flex text-xs"><FaUsers className="mr-2 text-gray-500 text-gray-100 text-base" />{up_comming_event.participant}</h5>
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
    })()


    if (isLoading === true) {
        return (
            <Fragment>
                <div className="container">
                    <div className="flex flex-wrap bg-white dark:bg-dark-scleton1 rounded-2xl shadow-upcomming-big-card  border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-12 z-0">
                        <h6 className="xl:text-2xl text-maingray xl:font-bold xl:mb-4 xl:mt-2 dark:text-gray-300">Upcomming Events</h6>
                        <div className="xl:w-full">
                            {
                                UpCommingHTML_Loading
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="absolute flex justify-center">
                            <div className="bg-white dark:opacity-0 opacity-50 upcomming-shadow-card-height-width -mt-36 justify-center text-center flex"> </div>
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
                    <div className="flex flex-wrap bg-white dark:bg-dark-color2 rounded-2xl shadow-upcomming-big-card  border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-12 z-0">
                        <h6 className="xl:text-2xl text-maingray xl:font-bold xl:mb-4 xl:mt-2 dark:text-gray-100">Upcomming Events</h6>
                        <div className="xl:w-full">
                            {
                                UpCommingHTML
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="absolute flex justify-center">
                            <div className="bg-white dark:opacity-0 dark:bg-dark-color2 opacity-50 upcomming-shadow-card-height-width -mt-36 justify-center text-center flex"> </div>
                            <button className="justify-center absolute text-center -mt-16 flex h-10 bg-btngreen text-white rounded-3xl xl:pl-7 xl:pr-7 xl:pt-2 xl:pb-2">See All Events</button>
                        </div>
                    </div>
                </div >
            </Fragment>
        );
    }
}

export default UpCommingEvents;