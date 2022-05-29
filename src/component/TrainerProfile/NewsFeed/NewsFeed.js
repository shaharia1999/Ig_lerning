import React, { Fragment } from "react";
import Teacher from "../../../asset/images/course-teacher/teacher.jpg";
import NewsFeedStage from "../../../asset/images/banner/news-feed-stage.png";

function NewsFeed() {
    return (
        <Fragment>
            <div className="container">
                <h6 className="xl:text-2xl text-maingray xl:font-bold xl:mb-0 xl:mt-2 xl:pl-3">News Feed</h6>
                <div className="flex flex-wrap bg-white rounded-xl shadow-upcomming-big-card border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-4 xl:pb-5">

                    <div className="flex">
                        <div className="xl:w-3/12">
                            <img className="xl:h-12 xl:mt-4 xl:w-12 rounded-full xl:shadow-lg" src={Teacher} alt="teacher" />
                        </div>
                        <div className="xl:w-9/12 xl:ml-3">
                            <h6 className=" text-sectionTitleColor text-xl font-semibold xl:mt-4">Franck Nicola</h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-0">2 hours ago</h6>
                        </div>
                    </div>

                    <div className="xl:w-full xl:mt-3">
                        <h6 className="text-sm text-hash-tag font-normal">#event, #learning</h6>
                        <h6 className="text-sm text-black font-normal xl:mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        <img className="rounded-lg xl:h-40 xl:w-full xl:mt-2" src={NewsFeedStage} alt="" />


                        <div className="flex">
                            <div className="flex xl:mt-3">
                                <div class="z-40 bg-white rounded-full xl:h-9 xl:w-9 border-2 border-white"><img className=" rounded-full xl:h-9 xl:w-9 border-2 border-white" src={Teacher} alt="" /></div>
                                <div class="z-30 bg-white rounded-full xl:-ml-3 xl:h-9 xl:w-9 border-2 border-white"><img className=" rounded-full xl:h-9 xl:w-9 border-2 border-white" src={Teacher} alt="" /></div>
                                <div class="z-20 bg-white rounded-full xl:-ml-3 xl:h-9 xl:w-9 border-2 border-white"><img className=" rounded-full xl:h-9 xl:w-9 border-2 border-white" src={Teacher} alt="" /></div>
                            </div>

                            <div className="flex xl:mt-3 xl:ml-3">
                                <h6 className="text-sm text-black font-normal xl:mt-2"> 1125 Likes </h6>
                            </div>


                            <div className="flex xl:mt-3">
                                <h6 className="text-sm text-black font-normal xl:mt-2 xl:ml-48"> 23 Comments</h6>
                            </div>


                        </div>


                    </div>




                </div>

            </div >
        </Fragment>
    );
}

export default NewsFeed;