import React, { Fragment, useState, useEffect } from "react";
import Teacher from "../../../asset/images/course-teacher/teacher.jpg";
import NewsFeedStage from "../../../asset/images/banner/news-feed-stage.png";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { useParams } from "react-router-dom";

function NewsFeed() {
    let {id} = useParams();
    const [userInfo, setUserInfo] = useState([]);
    const [newsFeeds, setNewsFeed] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/teacher-public-profile-blog-post/${id}/`).then((response) => {
            if (response.data.error === false) {
                setUserInfo(response.data.data)
                console.log(response.data.data?.blog_post_info);
                setNewsFeed(response.data.data.blog_post_info)
                setIsLoading(false)
            }
        })
    }, [])

    const NewFeedHTML = (() => {
        if (isLoading === true) {
            return (
                <>
                    <div className="flex animate-pulse">
                        <div className="xl:w-3/12">
                            <div className="xl:h-14 xl:mt-4 xl:w-14 rounded-full xl:shadow-sm bg-gray-100"></div>
                        </div>
                        <div className="xl:w-9/12 xl:ml-10">
                            <div className="xl:mt-6 bg-gray-100 h-5 w-64 rounded"></div>
                            <div className="xl:mt-2 bg-gray-100 h-3 w-5/12 rounded"></div>
                        </div>
                    </div>
                    <div className="xl:w-full xl:mt-3 animate-pulse">
                        <div className="flex">
                            <div className="xl:mt-4 bg-gray-100 h-3 w-2/12 rounded"></div>
                            <div className="xl:mt-4 mx-2 bg-gray-100 h-3 w-3/12 rounded"></div>
                        </div>

                        <div className="xl:mt-2 bg-gray-100 h-3 w-12/12 rounded"></div>
                        <div className="xl:mt-1 bg-gray-100 h-3 w-8/12 rounded"></div>
                        <div className="rounded xl:mt-3 w-full h-44 bg-gray-100"></div>

                        <div className="flex flex-wrap w-full">
                            <div className="flex">
                                <div className="z-40 xl:h-9 xl:mt-4 xl:w-9 rounded-full xl:shadow-sm bg-gray-100"></div>
                                <div className="z-30 xl:h-9 xl:mt-4 xl:w-9 rounded-full xl:shadow-sm bg-gray-100"></div>
                                <div className="z-20 xl:h-9 xl:mt-4 xl:w-9 rounded-full xl:shadow-sm bg-gray-100"></div>
                            </div>
                            <div className="xl:mt-6 xl:ml-5 bg-gray-100 h-5 w-2/12 rounded"></div>
                        </div>
                    </div>
                </>
            )
        }
        else if (isLoading === false) {
            return newsFeeds.map((news_feed, news_feed_index) => (
                <div key={news_feed_index}>
                    <div className="flex">
                        <div className="xl:w-3/12">
                            <img className="xl:h-12 xl:mt-4 xl:w-12 rounded-full xl:shadow-lg" src={userInfo.image} alt="teacher" />
                        </div>
                        <div className="xl:w-9/12 xl:ml-3">
                            <h6 className=" text-sectionTitleColor text-xl font-semibold xl:mt-4">{userInfo.surname}</h6>
                            <h6 className="text-breadcrumbs-text text-sm font-normal xl:mt-0">{news_feed.when_published_blog_post}</h6>
                        </div>
                    </div>
                    <div className="xl:w-full xl:mt-3">
                        <h6 className="text-sm text-hash-tag font-normal">{news_feed.title}</h6>
                        <h6 className="text-sm text-black font-normal xl:mt-2 text-justify">
                            {news_feed.content}
                        </h6>
                        <img className="rounded-lg xl:h-40 xl:w-full xl:mt-2" src={ApiUrl.ImageBaseUrl + news_feed.image} alt="" />

                        <div className="flex">
                            <div className="flex xl:mt-3">
                                <div className="z-40 bg-white rounded-full xl:h-9 xl:w-9 border-2 border-white"><img className=" rounded-full xl:h-9 xl:w-9 border-2 border-white" src={Teacher} alt="" /></div>
                                <div className="z-30 bg-white rounded-full xl:-ml-3 xl:h-9 xl:w-9 border-2 border-white"><img className=" rounded-full xl:h-9 xl:w-9 border-2 border-white" src={Teacher} alt="" /></div>
                                <div className="z-20 bg-white rounded-full xl:-ml-3 xl:h-9 xl:w-9 border-2 border-white"><img className=" rounded-full xl:h-9 xl:w-9 border-2 border-white" src={Teacher} alt="" /></div>
                            </div>

                            <div className="flex xl:mt-3 xl:ml-3">
                                <h6 className="text-sm text-black font-normal xl:mt-2"> {news_feed.total_likes} Likes </h6>
                            </div>

                            <div className="flex xl:mt-3">
                                <h6 className="text-sm text-black font-normal xl:mt-2 xl:ml-48"> {news_feed.total_comments} Comments</h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    })()
    return (
        <Fragment>
            <div className="container">
                <h6 className="xl:text-2xl text-maingray xl:font-bold xl:mb-0 xl:mt-2 xl:pl-3">News Feed</h6>
                <div className="flex flex-wrap bg-white rounded-xl shadow-upcomming-big-card border-none xl:pl-7 xl:pr-4 h-full w-auto xl:mt-4 xl:pb-5">
                    {
                        NewFeedHTML
                    }
                </div>
            </div >
        </Fragment>
    );
}

export default NewsFeed;