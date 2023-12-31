import React, { Fragment, useState, useEffect } from "react";
import HomeBanner from "../../../asset/images/banner/home-banner.png";
import MostVisited from "../MostVisited/MostVisited";
import TopCategories from "../TopCategories/TopCategories";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import noPath from '../../../asset/images/shaharia/NoPath - Copy (18).png'

function HomeAdvertisedment() {
    const [isLoading, setIsLoading] = useState(false);
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/banner/`).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                setBannerData(response.data.data)
            }
        });
    }, []);

    if (isLoading === true) {
        return (
            <Fragment>
                 <div className="container">
                    <div className="flex flex-wrap">
                        <div className="xl:w-2/3">
                            <MostVisited />
                            <TopCategories />
                        </div>
                        <div className="xl:w-1/3 ">
                            <div className="w-96 xl:ml-20 xl:mt-20 rounded-md  dark:bg-dark-scleton2 home-ad-banner"><img src={noPath}></img></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                            <MostVisited />
                            <TopCategories />
                        </div>
                        <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                            <img className="2xl:w-96 xl:w-64 lg:w-56 md:w-auto w-full xl:ml-20 lg:ml-16 md:-ml-6 2xl:mt-20 xl:mt-16 lg:mt-0 -mt-6 xl:p-0 rounded p-6 home-ad-banner" src={ApiUrl.ImageBaseUrl+bannerData.banner_image} alt="" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeAdvertisedment;