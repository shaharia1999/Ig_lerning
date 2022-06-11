import React, { Fragment, useState, useEffect } from "react";
import HomeBanner from "../../../asset/images/banner/home-banner.png";
import MostVisited from "../MostVisited/MostVisited";
import TopCategories from "../TopCategories/TopCategories";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";

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
                        <div className="xl:w-1/3 animate-pulse">
                            <div className="w-96 lg:ml-20 lg:mt-20 bg-gray-100 home-ad-banner"></div>
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
                        <div className="xl:w-2/3">
                            <MostVisited />
                            <TopCategories />
                        </div>
                        <div className="xl:w-1/3">
                            <img className="w-96 lg:ml-20 lg:mt-20 home-ad-banner" src={ApiUrl.ImageBaseUrl+bannerData.banner_image} alt="" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeAdvertisedment;