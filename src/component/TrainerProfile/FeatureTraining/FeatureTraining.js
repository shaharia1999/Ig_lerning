import React, { Fragment, useState, useEffect } from "react";
import 'tw-elements';
import FeaturedTrainingImg from '../../../asset/images/team/featured-training1.png'
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";

function FeatureTraining() {
    const [featuredCourse, setFeaturedCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-featured/5/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false)
                setFeaturedCourse(response.data.data?.featured_info);
            }
        })
    }, [])

    const FeatureCourseHTML = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white shadow-sm rounded-lg xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>


                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white shadow-sm rounded-lg xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div className="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <div className="animate-pulse bg-white shadow-sm rounded-lg xl:p-4 xl:w-full">
                            <div className="rounded w-full h-52 bg-gray-100"></div>
                            <div className="flex flex-col mt-5">
                                <div className="w-full h-5 bg-gray-100 rounded"></div>
                                <div claclassNamess="mt-2 w-8/12 h-3 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        else if (isLoading === false) {
            return (
                featuredCourse.map((featured_course, index) => (
                    <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                        <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                            <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={ApiUrl.ImageBaseUrl + featured_course.image} />
                            <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">
                                {featured_course.featured_taainings}
                            </h1>
                        </article>
                    </div>
                ))
            )
        }
    })()
    return (
        <Fragment>
            <div className="">
                <div className="mt-4">
                    <div className="fade show active">
                        <h6 className="xl:text-3xl font-semibold text-sectionTitleColor float-right xl:mb-5">Featured Training</h6>
                        <div className="">
                            <hr className="w-full flex border" />
                            <hr className="w-64 flex border-4 xl:-mt-2 float-right" />
                        </div>

                        <div className="flex flex-wrap w-full -px-1 xl:-px-4">

                            {
                                FeatureCourseHTML
                            }
                            {/* <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                                <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={FeaturedTrainingImg} />
                                    <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">Love and Wellness</h1>
                                </article>
                            </div>

                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                                <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={FeaturedTrainingImg} />
                                    <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">Personal Development</h1>
                                </article>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FeatureTraining;